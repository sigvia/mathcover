// 基本状態
let _activeSec = null;
let _activeSubject = null;
let testPool = [];
let testIdx = 0;
let userAnswers = {};
let testTimerInterval = null;
let testSeconds = 0;

const _domCache = new Map();
const _mjxProcessing = new WeakSet();

function $$(sel, root) {
    if (root) {
        return Array.from(root.querySelectorAll(sel));
    }

    if (_domCache.has(sel)) {
        return _domCache.get(sel);
    }

    const r = Array.from(document.querySelectorAll(sel));
    _domCache.set(sel, r);
    return r;
}

function $$id(id) {
    return document.getElementById(id);
}


// MathJax
function typesetOnce(el) {
    if (!el) return;

    const typeset = () => {
        if (!window.MathJax || !window.MathJax.typesetPromise) {
            return;
        }

        delete el.dataset.mjxDone;

        try {
            window.MathJax.typesetClear?.([el]);

            window.MathJax.typesetPromise([el])
                .then(() => {
                    el.dataset.mjxDone = '1';
                })
                .catch(() => {});
        } catch (error) {}
    };

    if (window.MathJax && window.MathJax.typesetPromise) {
        typeset();
    } else {
        window.addEventListener('load', typeset, { once: true });
    }
}

function waitForMathJax(callback) {
    if (
        window.MathJax &&
        window.MathJax.startup &&
        window.MathJax.startup.promise
    ) {
        window.MathJax.startup.promise
            .then(callback)
            .catch(() => {});
    } else if (
        window.MathJax &&
        window.MathJax.typesetPromise
    ) {
        callback();
    } else {
        setTimeout(() => waitForMathJax(callback), 30);
    }
}

function typesetAfterPaint(el) {
    if (!el) return;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            typesetOnce(el);
        });
    });
}


// 表示制御
function hideAllSubjectFields() {
    document.querySelectorAll('.field-container').forEach(el => {
        el.style.display = 'none';
    });
}

function hideAllSections() {
    document.querySelectorAll('[id^="sec-"]').forEach(el => {
        el.style.display = 'none';
    });
}

function hideActiveSection() {
    if (_activeSec) {
        _activeSec.style.display = 'none';
    }

    _activeSec = null;
}

function clearSubjectState() {
    document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.field-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    _activeSubject = null;
    _activeSec = null;

    hideAllSubjectFields();
    hideAllSections();
}


// 問題データ
window.questionBank =
    window.questionBank || {};

function hasQuestionData(secId) {
    return Array.isArray(window.questionBank[secId]);
}

function normalizeQuestion(question) {
    if (!question) return null;

    if (question.nodeType === 1) {
        return {
            _legacyCard: question,
            id: question.dataset.questionId || '',
            question: question.querySelector('.question-text')?.innerHTML || '',
            answer: (question.dataset.ans || '').trim(),
            wrong: (question.dataset.wrong || '')
                .split('|')
                .map(s => s.trim())
                .filter(Boolean),
            explanation: question.querySelector('.answer-box')?.innerHTML || ''
        };
    }

    return {
        ...question,
        wrong: Array.isArray(question.wrong)
            ? question.wrong
            : String(question.wrong || '')
                .split('|')
                .map(s => s.trim())
                .filter(Boolean)
    };
}

function getQuestionField(question, field) {
    const q = normalizeQuestion(question);
    return q ? q[field] : '';
}

function createQuestionCard(question, index) {
    const q = normalizeQuestion(question);
    if (!q) return null;

    const card = document.createElement('div');
    card.className = 'question-card';
    card.dataset.questionId =
        q.id ||
        `${_activeSec?.id || 'question'}-${index + 1}`;

    card.dataset.ans = q.answer || '';

    card.dataset.wrong =
        Array.isArray(q.wrong)
            ? q.wrong.join('|')
            : String(q.wrong || '');

    card.innerHTML = `
    <div class="question-header"></div>
    <div class="question-text">${q.question || ''}</div>
    <button class="toggle-button" onclick="toggleAnswer(this)">答えと解説を見る</button>
    <div class="answer-box" style="display:none;">
        <div class="answer-title">【解答】</div>
        <div class="ans-highlight">${q.answer || ''}</div>
        <div class="commentary-title">【解説】</div>
        ${q.explanation || ''}
    </div>
`;

    card._questionData = q;

    return card;
}

function renderQuestionSection(sec) {
    if (!sec || !hasQuestionData(sec.id)) return;

    if (sec.dataset.rendered === 'true') {
        return;
    }

    const data = window.questionBank[sec.id];

    const frag = document.createDocumentFragment();

    data.forEach(item => {
        frag.appendChild(createQuestionCard(item));
    });

    sec.replaceChildren(frag);

    sec.dataset.rendered = 'true';
}


// 科目選択
function selectSubject(code) {
    const btn =
        $$id('sub-' + code);

    const launchBtn =
        $$id('dynamic-start-btn');

    if (!btn) return;

    if (
        btn.classList.contains('active') &&
        _activeSubject === code
    ) {
        clearSubjectState();

        if (launchBtn) {
            launchBtn.textContent =
                '🌍 全分野から総合問題テストを開始';
        }

        refreshMaxCount();

        return;
    }

    document
        .querySelectorAll('.subject-btn')
        .forEach(b => {
            b.classList.remove('active');
        });

    document
        .querySelectorAll('.field-btn')
        .forEach(b => {
            b.classList.remove('active');
        });

    hideAllSubjectFields();
    hideAllSections();

    _activeSec = null;
    _activeSubject = code;

    btn.classList.add('active');

    if (launchBtn) {
        launchBtn.textContent =
            `⚔️ ${btn.textContent.trim()} でテストを開始`;
    }

    if (code === 'all') {
        refreshMaxCount();
        return;
    }

    const grid =
        $$id('fields-' + code);

    if (grid) {
        grid.style.display = 'grid';
    }

    refreshMaxCount();
}


// 分野選択
function selectField(secId, btnId, fieldName) {
    const btn = $$id(btnId);
    const launchBtn = $$id('dynamic-start-btn');

    if (!btn) return;

    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        hideActiveSection();

        const activeSub =
            document.querySelector('.subject-btn.active');

        if (launchBtn) {
            launchBtn.textContent =
                activeSub
                    ? `⚔️ ${activeSub.textContent.trim()} でテストを開始`
                    : '🌍 全分野から総合問題テストを開始';
        }

        refreshMaxCount();
        return;
    }

    document.querySelectorAll('.field-btn').forEach(b => {
        b.classList.remove('active');
    });

    hideAllSections();

    /* ここまでをクリック直後に実行 */
    btn.classList.add('active');

    const activeSub =
        document.querySelector('.subject-btn.active');

    if (launchBtn) {
        launchBtn.textContent =
            `⚔️ ${btn.textContent.trim()} でテストを開始`;
    }

    if (!activeSub) {
        _activeSubject =
            secId.match(/^sec-([^-]+)-/)?.[1] || null;
    }

    /* ここから後回し */
    setTimeout(() => {
        const sec = $$id(secId);

        if (!sec) {
            _activeSec = null;
            return;
        }

        _activeSec = sec;

        if (hasQuestionData(secId)) {
            renderQuestionSection(sec);
        }

        sec.style.display = 'block';

        refreshMaxCount();

        /*
         * MathJaxは問題生成・表示が終わってから
         * 1回だけ実行
         */
        requestAnimationFrame(() => {
            if (!sec.dataset.mjxDone) {
                typesetAfterPaint(sec);
            }
        });

    }, 0);
}


// 答え・解説
function toggleAnswer(btn) {
    const box =
        btn.nextElementSibling;

    if (!box) return;

    if (box.style.display === 'block') {
        box.style.display = 'none';

        btn.textContent =
            '答えと解説を見る';
    } else {
        box.style.display = 'block';

        btn.textContent =
            '答えと解説を隠す';

        typesetAfterPaint(box);
    }
}


// 問題取得
function getQuestionPool() {
    if (_activeSec) {
        if (hasQuestionData(_activeSec.id)) {
            return window.questionBank[_activeSec.id]
                .map(normalizeQuestion)
                .filter(Boolean);
        }

        return Array.from(
            _activeSec.querySelectorAll('.question-card')
        )
            .map(normalizeQuestion)
            .filter(Boolean);
    }

    if (_activeSubject === 'all') {
        const dataQuestions =
            Object.values(window.questionBank)
                .flatMap(list =>
                    Array.isArray(list)
                        ? list
                        : []
                )
                .map(normalizeQuestion)
                .filter(Boolean);

        const dataSectionIds =
            new Set(
                Object.keys(window.questionBank)
            );

        const legacyQuestions =
            Array.from(
                document.querySelectorAll(
                    '.content-section .question-card'
                )
            )
                .filter(card =>
                    !dataSectionIds.has(
                        card.closest('.content-section')?.id
                    )
                )
                .map(normalizeQuestion)
                .filter(Boolean);

        return [
            ...dataQuestions,
            ...legacyQuestions
        ];
    }

    if (_activeSubject) {
        const dataQuestions =
            Object.entries(window.questionBank)
                .filter(([secId]) =>
                    secId.startsWith(
                        `sec-${_activeSubject}-`
                    )
                )
                .flatMap(([, list]) =>
                    Array.isArray(list)
                        ? list
                        : []
                )
                .map(normalizeQuestion)
                .filter(Boolean);

        const legacyQuestions =
            Array.from(
                document.querySelectorAll(
                    `[id^="sec-${_activeSubject}-"].content-section .question-card`
                )
            )
                .filter(card =>
                    !hasQuestionData(
                        card.closest('.content-section')?.id
                    )
                )
                .map(normalizeQuestion)
                .filter(Boolean);

        return [
            ...dataQuestions,
            ...legacyQuestions
        ];
    }

    const dataQuestions =
        Object.values(window.questionBank)
            .flatMap(list =>
                Array.isArray(list)
                    ? list
                    : []
            )
            .map(normalizeQuestion)
            .filter(Boolean);

    const dataSectionIds =
        new Set(
            Object.keys(window.questionBank)
        );

    const legacyQuestions =
        Array.from(
            document.querySelectorAll('.question-card')
        )
            .filter(card =>
                !dataSectionIds.has(
                    card.closest('.content-section')?.id
                )
            )
            .map(normalizeQuestion)
            .filter(Boolean);

    return [
        ...dataQuestions,
        ...legacyQuestions
    ];
}

function refreshMaxCount() {
    const span =
        $$id('max-q-count');

    if (!span) return;

    span.textContent =
        getQuestionPool().length;
}


// シャッフル
function shuffleArray(array) {
    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {
        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }

    return array;
}


// テスト開始
function triggerEngineByContext() {
    let pool =
        getQuestionPool();

    if (!pool.length) {
        alert(
            '選択範囲に有効な問題がありません。'
        );

        return;
    }

    const input =
        $$id('test-question-count');

    let n =
    input
        ? parseInt(input.value, 10)
        : 5;

if (!Number.isFinite(n) || n < 1 || n > 30) {
    alert('問題数は1〜30問で入力してください');
    return;
}

n = Math.min(n, pool.length);

if (input) {
    input.value = n;
}

    shuffleArray(pool);

    testPool =
        pool.slice(0, n);

    userAnswers = {};
    testIdx = 0;

    startTestTimer();

    const mainNav =
        $$id('main-navigation-menu');

    const config =
        $$id('test-config-panel');

    const launcher =
        $$id('launcher-wrapper');

    const desc =
        $$id('test-description-text');

    const hud =
        $$id('test-hud-panel');

    const workspace =
        $$id('test-workspace-area');

    const finalArea =
        $$id('final-score-area');

    if (mainNav) {
        mainNav.style.display = 'none';
    }

    if (config) {
        config.style.display = 'none';
    }

    if (launcher) {
        launcher.style.display = 'none';
    }

    if (desc) {
        desc.style.display = 'none';
    }

    hideAllSubjectFields();
    hideAllSections();

    if (hud) {
        hud.style.display = 'flex';
    }

    if (workspace) {
        workspace.style.display = 'block';
    }

    if (finalArea) {
        finalArea.style.display = 'none';
    }

    createQuestionSlots();
    showTestQuestion();
}


// タイマー
function startTestTimer() {
    testSeconds = 0;

    const timer =
        $$id('test-timer');

    if (timer) {
        timer.textContent =
            '⏱️ 00:00';
    }

    if (testTimerInterval) {
        clearInterval(
            testTimerInterval
        );
    }

    testTimerInterval =
        setInterval(() => {
            testSeconds++;

            const m =
                String(
                    Math.floor(
                        testSeconds / 60
                    )
                ).padStart(2, '0');

            const s =
                String(
                    testSeconds % 60
                ).padStart(2, '0');

            const el =
                $$id('test-timer');

            if (el) {
                el.textContent =
                    `⏱️ ${m}:${s}`;
            }
        }, 1000);
}

function stopTestTimer() {
    if (testTimerInterval) {
        clearInterval(
            testTimerInterval
        );

        testTimerInterval = null;
    }
}


// 問題番号
function createQuestionSlots() {
    const slotsEl =
        $$id('dynamic-slots-container');

    if (!slotsEl) return;

    const frag =
        document.createDocumentFragment();

    testPool.forEach((_, i) => {
        const s =
            document.createElement('div');

        s.className =
            'q-slot';

        s.id =
            `tslot-${i}`;

        s.textContent =
            i + 1;

        s.addEventListener(
            'click',
            () => {
                testIdx = i;
                showTestQuestion();
            }
        );

        frag.appendChild(s);
    });

    slotsEl.replaceChildren(frag);
}

function updateQuestionSlots() {
    document
        .querySelectorAll('.q-slot')
        .forEach(s => {
            s.classList.remove('active');
        });

    const cur =
        $$id(`tslot-${testIdx}`);

    if (cur) {
        cur.classList.add('active');
    }

    Object.keys(userAnswers).forEach(i => {
        const slot =
            $$id(`tslot-${i}`);

        if (slot) {
            slot.classList.add('filled');
        }
    });
}


// 選択肢
function getChoicesForCard(card) {
    if (card._choices) {
        return card._choices;
    }

    const q =
        normalizeQuestion(card);

    if (!q) {
        return ['わからない'];
    }

    const ans =
        String(
            q.answer || ''
        ).trim();

    const wrong =
        Array.isArray(q.wrong)
            ? q.wrong
                .map(s => String(s).trim())
                .filter(Boolean)
            : [];

    let list =
        [...wrong];

    if (ans) {
        list.push(ans);
    }

    list =
        [...new Set(list)];

    shuffleArray(list);

    list.push(
        'わからない'
    );

    card._choices =
        list;

    return list;
}


// テスト問題表示
function showTestQuestion() {
    if (!testPool.length) {
        return;
    }

    if (testIdx < 0) {
        testIdx = 0;
    }

    if (testIdx >= testPool.length) {
        testIdx =
            testPool.length - 1;
    }

    const card =
        testPool[testIdx];

    const qIndex =
        $$id('test-q-index');

    const qText =
        $$id('test-q-text');

    if (qIndex) {
        qIndex.textContent =
            `第 ${testIdx + 1} 問 / 全 ${testPool.length} 問`;
    }

    if (qText) {
        const questionHTML =
            getQuestionField(
                card,
                'question'
            );

        qText.innerHTML =
            questionHTML || '';

        delete qText.dataset.mjxDone;

        typesetAfterPaint(qText);
    }

    renderChoices(card);
    updateQuestionSlots();
    updateNavigationButtons();
}


// 選択肢描画
function renderChoices(card) {
    const zone =
        $$id('test-choices-zone');

    if (!zone) return;

    const current =
        userAnswers[testIdx];

    const choices =
        getChoicesForCard(card);

    const frag =
        document.createDocumentFragment();

    choices.forEach(text => {
        const label =
            document.createElement('label');

        label.className =
            'choice-label' +
            (
                current === text
                    ? ' selected-choice'
                    : ''
            );

        const radio =
            document.createElement('input');

        radio.type =
            'radio';

        radio.name =
            'tcr';

        radio.value =
            text;

        radio.checked =
            current === text;

        radio.addEventListener(
            'change',
            () => {
                userAnswers[testIdx] =
                    text;

                zone
                    .querySelectorAll(
                        '.choice-label'
                    )
                    .forEach(l => {
                        l.classList.remove(
                            'selected-choice'
                        );
                    });

                label.classList.add(
                    'selected-choice'
                );

                const slot =
                    $$id(
                        `tslot-${testIdx}`
                    );

                if (slot) {
                    slot.classList.add(
                        'filled'
                    );
                }
            }
        );

        const span =
            document.createElement('span');

        span.innerHTML =
            text;

        label.appendChild(
            radio
        );

        label.appendChild(
            span
        );

        frag.appendChild(
            label
        );
    });

    zone.replaceChildren(
        frag
    );

    delete zone.dataset.mjxDone;

    typesetAfterPaint(
        zone
    );
}


// ナビゲーション
function updateNavigationButtons() {
    const prev =
        $$id('nav-prev-btn');

    const next =
        $$id('nav-next-btn');

    const submit =
        $$id('nav-submit-btn');

    if (prev) {
        prev.style.visibility =
            testIdx === 0
                ? 'hidden'
                : 'visible';

        prev.disabled =
            testIdx === 0;
    }

    const last =
        testIdx ===
        testPool.length - 1;

    if (next) {
        next.style.display =
            last
                ? 'none'
                : 'block';
    }

    if (submit) {
        submit.style.display =
            last
                ? 'block'
                : 'none';
    }
}

function moveTestQuestion(dir) {
    if (!testPool.length) {
        return;
    }

    const nextIndex =
        testIdx + dir;

    if (
        nextIndex < 0 ||
        nextIndex >= testPool.length
    ) {
        return;
    }

    testIdx =
        nextIndex;

    showTestQuestion();
}


// 採点
function finishAndGradeTest() {
    if (!testPool.length) {
        return;
    }

    stopTestTimer();

    const workspace =
        $$id('test-workspace-area');

    const hud =
        $$id('test-hud-panel');

    const finalArea =
        $$id('final-score-area');

    if (workspace) {
        workspace.style.display =
            'none';
    }

    if (hud) {
        hud.style.display =
            'none';
    }

    if (finalArea) {
        finalArea.style.display =
            'block';
    }

    const zone =
        $$id('review-list-zone');

    if (!zone) {
        return;
    }

    const frag =
        document.createDocumentFragment();

    let correct = 0;

    testPool.forEach(
        (card, i) => {
            const ans =
                String(
                    getQuestionField(
                        card,
                        'answer'
                    ) || ''
                ).trim();

            const user =
                (
                    userAnswers[i] ||
                    ''
                ).trim();

            const ok =
                ans === user;

            if (ok) {
                correct++;
            }

            const item =
                document.createElement(
                    'div'
                );

            item.className =
                'review-item';

            item.style.borderLeftColor =
                ok
                    ? '#10b981'
                    : '#ef4444';

            const questionHTML =
                getQuestionField(
                    card,
                    'question'
                ) || '';

            const answerHTML =
                getQuestionField(
                    card,
                    'explanation'
                ) || '';

            item.innerHTML = `
                <div style="display:flex;justify-content:space-between;font-weight:bold;margin-bottom:10px;">
                    <span style="color:#818cf8;">
                        第 ${i + 1} 問
                    </span>

                    <span style="color:${ok ? '#10b981' : '#ef4444'}">
                        ${ok ? '◯ 正解' : '❌ 不正解'}
                    </span>
                </div>

                <div style="margin-bottom:14px;font-size:.95rem;">
                    ${questionHTML}
                </div>

                <div style="background:#0f172a;padding:11px;border-radius:6px;font-size:.9rem;margin-bottom:10px;border:1px solid #1e293b;">
                    <div style="margin-bottom:4px;">
                        あなたの解答:
                        <span style="color:${ok ? '#10b981' : '#f43f5e'};font-weight:bold;">
                            ${user || '未解答'}
                        </span>
                    </div>

                    <div>
                        正解の選択肢:
                        <span style="color:#38bdf8;font-weight:bold;">
                            ${ans}
                        </span>
                    </div>
                </div>

                <div style="background:#1e293b;padding:14px;border-radius:6px;font-size:.9rem;">
                    ${answerHTML}
                </div>
            `;

            frag.appendChild(
                item
            );
        }
    );

    zone.replaceChildren(
        frag
    );

    delete zone.dataset.mjxDone;

    typesetAfterPaint(
        zone
    );

    const pct =
        Math.round(
            correct /
            testPool.length *
            100
        ) || 0;

    const fm =
        String(
            Math.floor(
                testSeconds / 60
            )
        ).padStart(2, '0');

    const fs =
        String(
            testSeconds % 60
        ).padStart(2, '0');

    const headline =
        $$id(
            'score-headline-text'
        );

    if (headline) {
        headline.innerHTML = `
            🎉 採点結果: ${correct} / ${testPool.length} 問正解 (${pct}%)<br>
            <span style="font-size:.92rem;color:#a5b4fc;font-weight:normal;">
                ⏱️ 総合演習時間: ${fm}分${fs}秒
            </span>
        `;
    }
}


// リセット
function resetTestSystem() {
    stopTestTimer();

    testPool.forEach(card => {
        delete card._choices;
    });

    testPool = [];
    userAnswers = {};
    testIdx = 0;

    const mainNav =
        $$id('main-navigation-menu');

    const config =
        $$id('test-config-panel');

    const launcher =
        $$id('launcher-wrapper');

    const desc =
        $$id('test-description-text');

    const hud =
        $$id('test-hud-panel');

    const workspace =
        $$id('test-workspace-area');

    const finalArea =
        $$id('final-score-area');

    if (mainNav) {
        mainNav.style.display =
            'block';
    }

    if (config) {
        config.style.display =
            'flex';
    }

    if (launcher) {
        launcher.style.display =
            'block';
    }

    if (desc) {
        desc.style.display =
            'block';
    }

    if (hud) {
        hud.style.display =
            'none';
    }

    if (workspace) {
        workspace.style.display =
            'none';
    }

    if (finalArea) {
        finalArea.style.display =
            'none';
    }

    hideAllSections();
    hideAllSubjectFields();

    const activeSub =
        document.querySelector(
            '.subject-btn.active'
        );

    if (activeSub) {
        const code =
            activeSub.id.replace(
                'sub-',
                ''
            );

        _activeSubject =
            code;

        if (code === 'all') {
            refreshMaxCount();
            return;
        }

        const grid =
            $$id(
                'fields-' + code
            );

        if (grid) {
            grid.style.display =
                'grid';
        }

        const activeField =
            document.querySelector(
                '.field-btn.active'
            );

        if (activeField) {
            const onclick =
                activeField.getAttribute(
                    'onclick'
                ) || '';

            const match =
                onclick.match(
                    /'([^']+)'/
                );

            const secId =
                match
                    ? match[1]
                    : null;

            const sec =
                secId
                    ? $$id(secId)
                    : null;

            if (sec) {
                renderQuestionSection(
                    sec
                );

                sec.style.display =
                    'block';

                _activeSec =
                    sec;

                typesetAfterPaint(
                    sec
                );
            }
        }
    } else {
        _activeSubject = null;
        _activeSec = null;
    }

    refreshMaxCount();
}


// 問題集のデータをDOMへ反映
function renderAllQuestionSections() {
    Object.keys(
        window.questionBank
    ).forEach(secId => {
        const sec =
            $$id(secId);

        if (!sec) return;

        renderQuestionSection(
            sec
        );
    });
}


// 初期化
function initializeApp() {
    waitForMathJax(() => {
        const initial =
            $$id(
                'test-master-panel'
            );

        if (initial) {
            typesetOnce(
                initial
            );
        }
    });

    renderAllQuestionSections();

    hideAllSections();
    hideAllSubjectFields();

    refreshMaxCount();
}

window.addEventListener(
    'DOMContentLoaded',
    initializeApp
);
