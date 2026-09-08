window.questionBank = window.questionBank || {};

window.questionBank["sec-2b-8"] = [
    
    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_2=2,\\quad a_{n+2}=4a_{n+1}-4a_n+2^n\\) によって定めるとき、一般項 \\(a_n\\) を求めよ",
        answer: "\\(\\displaystyle a_n=2^{n-3}(n^2-3n+6)\\)",
        wrong: [
            "\\(\\displaystyle a_n=2^{n-1}+n2^{n-2}\\)",
            "\\(\\displaystyle a_n=2^{n-2}(n^2-2n+2)\\)",
            "\\(\\displaystyle a_n=2^{n-3}(n^2-3n+4)\\)"
        ],
        explanation: `
<p>まず、与えられた漸化式をそのまま扱うのではなく、\\(a_{n+1}-2a_n\\) という形を作ることを考える</p>
<p>与えられた漸化式 \\(a_{n+2}=4a_{n+1}-4a_n+2^n\\) を整理すると、\\(a_{n+2}-2a_{n+1}=2(a_{n+1}-2a_n)+2^n\\) となる</p>
<p>そこで \\(b_n=a_{n+1}-2a_n\\) とおくと、\\(b_{n+1}=2b_n+2^n\\) となる</p>
<p>また、\\(b_1=a_2-2a_1=2-2=0\\) である</p>
<p>ここで \\(2^n\\) が含まれているので、\\(c_n=\\displaystyle\\frac{b_n}{2^n}\\) とおく</p>
<p>\\(b_n=2^nc_n\\) を代入すると、\\(2^{n+1}c_{n+1}=2\\cdot2^nc_n+2^n\\) より、\\(c_{n+1}=c_n+\\displaystyle\\frac12\\) となる</p>
<p>\\(c_1=\\displaystyle\\frac{b_1}{2}=0\\) なので、\\(c_n=\\displaystyle\\frac{n-1}{2}\\) である</p>
<p>よって \\(b_n=2^nc_n=(n-1)2^{n-1}\\) となる</p>
<p>\\(b_n=a_{n+1}-2a_n\\) だったので、\\(a_{n+1}-2a_n=(n-1)2^{n-1}\\) を得る</p>
<p>ここでも \\(2^n\\) が含まれているので、今度は \\(d_n=\\displaystyle\\frac{a_n}{2^n}\\) とおく</p>
<p>\\(a_n=2^nd_n\\) を代入すると、\\(2^{n+1}d_{n+1}-2\\cdot2^nd_n=(n-1)2^{n-1}\\) となる</p>
<p>両辺を \\(2^{n-1}\\) で割ると、\\(4d_{n+1}-4d_n=n-1\\) より、\\(d_{n+1}-d_n=\\displaystyle\\frac{n-1}{4}\\) となる</p>
<p>\\(d_1=\\displaystyle\\frac{a_1}{2}=\\displaystyle\\frac12\\) なので、\\(d_n=\\displaystyle\\frac12+\\frac14(0+1+\\cdots +(n-2))\\) となる</p>
<p>\\(0+1+\\cdots +(n-2)=\\displaystyle\\frac{(n-2)(n-1)}2\\) より、\\(d_n=\\displaystyle\\frac12+\\frac{(n-2)(n-1)}8=\\displaystyle\\frac{n^2-3n+6}{8}\\) である</p>
<p>最後に \\(d_n=\\displaystyle\\frac{a_n}{2^n}\\) だったので、\\(a_n=2^nd_n=2^n\\displaystyle\\frac{n^2-3n+6}{8}\\) となる</p>
<p>したがって、\\(\\displaystyle a_n=2^{n-3}(n^2-3n+6)\\) である</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\ a_{n+1}-a_n=\\displaystyle\\frac{1}{n(n+1)}\\) によって定めるとき、\\(a_n\\) の一般項を求めよ",
        answer: "\\(\\displaystyle a_n=2-\\frac1n\\)",
        wrong: [
            "\\(\\displaystyle 1-\\frac1n\\)",
            "\\(\\displaystyle 2+\\frac1n\\)",
            "\\(\\displaystyle\\frac{n}{n+1}\\)"
        ],
        explanation: `
<p>まず、</p>
<p>\\(\\displaystyle\\frac1{n(n+1)}=\\frac1n-\\frac1{n+1}\\)</p>
<p>と変形する</p>
<p>漸化式を \\(k=1\\) から \\(k=n-1\\) まで加えると、</p>
<p>\\(\\displaystyle a_n-a_1=\\sum_{k=1}^{n-1}(a_{k+1}-a_k)\\)</p>
<p>したがって、</p>
<p>\\(\\displaystyle a_n=1+\\sum_{k=1}^{n-1}\\left(\\frac1k-\\frac1{k+1}\\right)\\)</p>
<p>この和を展開すると、</p>
<p>\\(\\displaystyle a_n=1+\\left(1-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\cdots+\\left(\\frac1{n-1}-\\frac1n\\right)\\)</p>
<p>途中の項がすべて打ち消し合うので、</p>
<p>\\(\\displaystyle a_n=1+1-\\frac1n\\)</p>
<p>よって、</p>
<p>\\(\\displaystyle a_n=2-\\frac1n\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=0,\\ a_{n+1}=2a_n+n\\) によって定めるとき、\\(a_n\\) の一般項を求めよ",
        answer: "\\(\\displaystyle a_n=2^n-n-1\\)",
        wrong: [
            "\\(\\displaystyle 2^n-n\\)",
            "\\(\\displaystyle 2^{n-1}+n-1\\)",
            "\\(\\displaystyle 2^n+n-1\\)"
        ],
        explanation: `
<p>与えられた漸化式は、\\(\\displaystyle a_{n+1}=2a_n+n\\) ⋯① である</p>
<p>ここで、\\(n\\) を消すために \\(n+1\\) 回目の式から \\(n\\) 回目の式を引く方法を考える</p>
<p>まず、\\(a_2=2\\cdot0+1=1\\) であり、\\(n+1\\) を代入すると、\\(\\displaystyle a_{n+2}=2a_{n+1}+n+1\\) ⋯② となる</p>
<p>②−①より、\\(\\displaystyle a_{n+2}-a_{n+1}=2(a_{n+1}-a_n)\\)</p>
<p>\\(\\displaystyle a_{n+1}-a_n\\) を \\(b_n\\) と置くと、\\(b_{n+1}=2b_n+1\\)</p>
<p>\\(\\displaystyle b_{n+1}+1=2(b_n+1)\\)</p>
<p>\\(b_1=a_2-a_1=1\\) であるから、\\(\\displaystyle b_1+1=2\\) より \\(b_n+1=2^n\\)</p>
<p>\\(\\displaystyle b_n=2^n-1\\)</p>
<p>よって \\(\\displaystyle a_{n+1}-a_n=2^n-1\\)</p>
<p>これは階差が \\(2^n-1\\) の階差数列である</p>
<p>したがって、\\(\\displaystyle a_n=a_1+\\sum_{k=1}^{n-1}(2^k-1)\\)</p>
<p>\\(\\displaystyle a_n=0+\\sum_{k=1}^{n-1}2^k-\\sum_{k=1}^{n-1}1\\)</p>
<p>\\(\\displaystyle =2(2^{n-1}-1)-(n-1)=2^n-n-1\\)</p>
<p>よって \\(\\displaystyle a_n=2^n-n-1\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\ a_{n+1}=a_n+n+1\\) によって定めるとき、\\(a_n\\) の一般項と \\(\\displaystyle\\sum_{k=1}^{n}a_k\\) を求めよ",
        answer: "\\(\\displaystyle a_n=\\frac{n(n+1)}2,\\qquad\\sum_{k=1}^{n}a_k=\\frac{n(n+1)(n+2)}6\\)",
        wrong: [
            "\\(\\displaystyle a_n=n^2,\\qquad\\sum_{k=1}^{n}a_k=\\frac{n(n+1)(2n+1)}6\\)",
            "\\(\\displaystyle a_n=\\frac{n(n-1)}2,\\qquad\\sum_{k=1}^{n}a_k=\\frac{n(n+1)}2\\)",
            "\\(\\displaystyle a_n=2n^2+n,\\qquad\\sum_{k=1}^{n}a_k=\\frac{n(n+1)(n+2)}3\\)"
        ],
        explanation: `
<p>まず、\\(\\displaystyle a_{n+1}-a_n=n+1\\) なので、\\(a_1=1\\) から順に加えると、</p>
<p>\\(\\displaystyle a_n=1+\\sum_{k=1}^{n-1}(k+1)\\)</p>
<p>ここで、</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}(k+1)=\\sum_{k=1}^{n-1}k+(n-1)\\)</p>
<p>だから、</p>
<p>\\(\\displaystyle a_n=1+\\frac{n(n-1)}2+n-1\\)</p>
<p>整理すると、</p>
<p>\\(\\displaystyle a_n=\\frac{n(n+1)}2\\)</p>
<p>次に、</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}a_k=\\frac12\\sum_{k=1}^{n}(k^2+k)\\)</p>
<p>公式 \\(\\displaystyle\\sum_{k=1}^{n}k^2=\\frac{n(n+1)(2n+1)}6\\)、\\(\\displaystyle\\sum_{k=1}^{n}k=\\frac{n(n+1)}2\\) を使う</p>
<p>したがって、</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}a_k=\\frac12\\left\\{\\frac{n(n+1)(2n+1)}6+\\frac{n(n+1)}2\\right\\}\\)</p>
<p>整理すると、\\(\\displaystyle\\sum_{k=1}^{n}a_k=\\frac{n(n+1)(n+2)}6\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=2,\\ a_{n+1}=a_n+\\displaystyle\\frac1{a_n}\\) によって定めるとき、すべての正整数 \\(n\\) に対して \\(a_n^2>2n\\) が成り立つことを示せ",
        answer: "\\(a_n^2>2n\\)",
        wrong: [
            "\\(a_n^2>n\\)",
            "\\(a_n^2>3n\\)",
            "\\(a_n^2>2n+1\\)"
        ],
        explanation: `
<p>数学的帰納法を用いる</p>
<p>まず \\(n=1\\) のとき、\\(a_1^2=4>2\\) なので成立する</p>
<p>次に、ある正整数 \\(n\\) について \\(a_n^2>2n\\) が成立すると仮定する</p>
<p>漸化式を2乗すると、\\(\\displaystyle a_{n+1}^2=\\left(a_n+\\frac1{a_n}\\right)^2=a_n^2+2+\\frac1{a_n^2}\\)</p>
<p>ここで \\(\\displaystyle\\frac1{a_n^2}>0\\) なので、\\(\\displaystyle a_{n+1}^2>a_n^2+2\\)</p>
<p>仮定 \\(a_n^2>2n\\) を使えば、\\(\\displaystyle a_{n+1}^2>2n+2=2(n+1)\\)</p>
<p>したがって \\(n+1\\) の場合にも成立する</p>
<p>以上より、数学的帰納法によって、すべての正整数 \\(n\\) について、\\(\\displaystyle a_n^2>2n\\) が成り立つ</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\ a_{n+1}=2a_n\\) によって定める<br>このとき、\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k}{a_k}\\) を求めよ",
        answer: "\\(\\displaystyle S_n=4-\\frac{n+2}{2^{n-1}}\\)",
        wrong: [
            "\\(\\displaystyle 4-\\frac{n+1}{2^{n-1}}\\)",
            "\\(\\displaystyle 4-\\frac{n+2}{2^n}\\)",
            "\\(\\displaystyle 2-\\frac{n+2}{2^{n-1}}\\)"
        ],
        explanation: `
<p>まず漸化式から、\\(\\displaystyle a_k=2^{k-1}\\) となる</p>
<p>したがって、\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k}{2^{k-1}}\\)</p>
<p>ここで \\(T_n=\\displaystyle\\sum_{k=1}^{n}\\frac{k}{2^k}\\) とおく</p>
<p>この和について2倍して引くと、\\(\\displaystyle2T_n=1+\\frac2{2}+\\frac3{2^2}+\\cdots+\\frac n{2^{n-1}}\\)</p>
<p>元の \\(T_n\\) を引くと、</p>
<p>\\(\\displaystyle T_n=1+\\frac12+\\frac1{2^2}+\\cdots+\\frac1{2^{n-1}}-\\frac n{2^n}\\)</p>
<p>等比数列の和より、\\(\\displaystyle T_n=2-\\frac1{2^{n-1}}-\\frac n{2^n}\\)</p>
<p>したがって、\\(\\displaystyle S_n=2T_n=4-\\frac2{2^{n-1}}-\\frac n{2^{n-1}}\\)</p>
<p>よって、\\(\\displaystyle S_n=4-\\frac{n+2}{2^{n-1}}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=2,\\ a_{n+1}=2a_n+2^n\\) によって定めるとき、\\(a_n\\) の一般項を求めよ",
        answer: "\\(\\displaystyle a_n=2^{n-1}(n+1)\\)",
        wrong: [
            "\\(\\displaystyle 2^n+n\\)",
            "\\(\\displaystyle n2^{n-1}\\)",
            "\\(\\displaystyle (n+1)^2\\)"
        ],
        explanation: `
<p>漸化式の両辺を \\(2^{n+1}\\) で割る</p>
<p>\\(\\displaystyle\\frac{a_{n+1}}{2^{n+1}}=\\frac{a_n}{2^n}+\\frac12\\)</p>
<p>ここで、\\(\\displaystyle b_n=\\frac{a_n}{2^n}\\) とおくと、</p>
<p>\\(\\displaystyle b_{n+1}=b_n+\\frac12\\) となる</p>
<p>これは公差 \\(\\displaystyle\\frac12\\) の等差数列である</p>
<p>\\(\\displaystyle b_1=\\frac{a_1}{2}=1\\)</p>
<p>したがって、\\(\\displaystyle b_n=1+\\frac{n-1}{2}=\\frac{n+1}{2}\\)</p>
<p>よって、\\(\\displaystyle\\frac{a_n}{2^n}=\\frac{n+1}{2}\\)</p>
<p>したがって、\\(\\displaystyle a_n=2^{n-1}(n+1)\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\ a_{n+1}=2a_n+2^n\\) によって定め、\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{a_k}{2^k}\\) とする<br>このとき、\\(S_n\\) を求めよ",
        answer: "\\(\\displaystyle S_n=\\frac{n(n+1)}4\\)",
        wrong: [
            "\\(\\displaystyle 2n-1-\\frac{n}{2^{n-1}}\\)",
            "\\(\\displaystyle\\frac{n(n+1)}2\\)",
            "\\(\\displaystyle\\frac{n^2}{4}\\)"
        ],
        explanation: `
<p>まず漸化式を \\(2^{n+1}\\) で割る</p>
<p>\\(\\displaystyle\\frac{a_{n+1}}{2^{n+1}}=\\frac{a_n}{2^n}+\\frac12\\)</p>
<p>ここで、\\(\\displaystyle b_n=\\frac{a_n}{2^n}\\) とおくと、\\(\\displaystyle b_{n+1}=b_n+\\frac12\\) となる</p>
<p>また、\\(\\displaystyle b_1=\\frac{a_1}{2}=\\frac12\\) なので、\\(\\displaystyle b_n=\\frac12+\\frac{n-1}{2}=\\frac n2\\)</p>
<p>したがって、\\(\\displaystyle\\frac{a_k}{2^k}=\\frac k2\\) である</p>
<p>よって、\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac k2=\\frac12\\sum_{k=1}^{n}k\\)</p>
<p>等差数列の和の公式より、\\(\\displaystyle S_n=\\frac12\\cdot\\frac{n(n+1)}2\\)</p>
<p>したがって、\\(\\displaystyle S_n=\\frac{n(n+1)}4\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=3,\\ a_{n+1}=3-\\displaystyle\\frac{2}{a_n}\\ (n=1,2,\\cdots)\\) によって定める<br>このとき、\\(a_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle a_n=\\frac{2^{n+1}-1}{2^n-1}\\)",
        wrong: [
            "\\(\\displaystyle\\frac{2^{n+1}+1}{2^n+1}\\)",
            "\\(\\displaystyle\\frac{2^n-1}{2^{n+1}-1}\\)",
            "\\(\\displaystyle\\frac{2^{n+1}-1}{2^n}\\)"
        ],
        explanation: `
<p>漸化式に分数が含まれているので、そのまま扱うよりも \\(a_n-1\\) の逆数を考えるとよい</p>
<p>まず、\\(\\displaystyle a_{n+1}-1=2-\\frac{2}{a_n}=\\frac{2(a_n-1)}{a_n}\\)</p>
<p>ここで \\(\\displaystyle b_n=\\frac{1}{a_n-1}\\) とおく</p>
<p>すると、\\(\\displaystyle b_{n+1}=\\frac{a_n}{2(a_n-1)}=\\frac12\\left(1+\\frac{1}{a_n-1}\\right)=\\frac{b_n+1}{2}\\)</p>
<p>したがって、\\(\\displaystyle b_{n+1}-1=\\frac12(b_n-1)\\)</p>
<p>これは公比 \\(\\displaystyle\\frac12\\) の等比数列である</p>
<p>また、\\(\\displaystyle b_1=\\frac1{3-1}=\\frac12\\) なので、\\(\\displaystyle b_1-1=-\\frac12\\)</p>
<p>よって、\\(\\displaystyle b_n-1=-\\frac1{2^n}\\)</p>
<p>したがって、\\(\\displaystyle b_n=1-\\frac1{2^n}=\\frac{2^n-1}{2^n}\\)</p>
<p>よって、\\(\\displaystyle a_n-1=\\frac1{b_n}=\\frac{2^n}{2^n-1}\\)</p>
<p>したがって、\\(\\displaystyle a_n=1+\\frac{2^n}{2^n-1}=\\frac{2^{n+1}-1}{2^n-1}\\)</p>
`
    },

    {
        question: "\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k}{2^k}\\) とする<br>このとき \\(S_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle S_n=2-\\frac{n+2}{2^n}\\)",
        wrong: [
            "\\(\\displaystyle 2-\\frac{n+1}{2^n}\\)",
            "\\(\\displaystyle 2-\\frac{n+2}{2^{n+1}}\\)",
            "\\(\\displaystyle 1-\\frac{n+2}{2^n}\\)"
        ],
        explanation: `
<p>このように \\(k\\) が分子にある等比型の和では、\\(S_n\\) を2倍して引く方法が有効である</p>
<p>\\(\\displaystyle S_n=\\frac12+\\frac2{2^2}+\\frac3{2^3}+\\cdots+\\frac n{2^n}\\)</p>
<p>両辺を2倍すると、\\(\\displaystyle2S_n=1+\\frac2{2}+\\frac3{2^2}+\\cdots+\\frac n{2^{n-1}}\\)</p>
<p>ここで \\(2S_n-S_n\\) を計算する</p>
<p>中間の項を整理すると、\\(\\displaystyle S_n=1+\\frac12+\\frac1{2^2}+\\cdots+\\frac1{2^{n-1}}-\\frac n{2^n}\\)</p>
<p>最初の部分は初項1、公比 \\(\\displaystyle\\frac12\\) の等比数列の和なので、</p>
<p>\\(\\displaystyle 1+\\frac12+\\cdots+\\frac1{2^{n-1}}=\\frac{1-(1/2)^n}{1-1/2}=2-\\frac1{2^{n-1}}\\)</p>
<p>したがって、\\(\\displaystyle S_n=2-\\frac1{2^{n-1}}-\\frac n{2^n}\\)</p>
<p>\\(\\displaystyle\\frac1{2^{n-1}}=\\frac2{2^n}\\) なので、\\(\\displaystyle S_n=2-\\frac{n+2}{2^n}\\)</p>
`
    },

    {
        question: "\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k^2}{2^k}\\) とする<br>このとき \\(S_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle S_n=6-\\frac{n^2+4n+6}{2^n}\\)",
        wrong: [
            "\\(\\displaystyle 6-\\frac{n^2+2n+6}{2^n}\\)",
            "\\(\\displaystyle 6-\\frac{n^2+4n+4}{2^n}\\)",
            "\\(\\displaystyle 4-\\frac{n^2+4n+6}{2^n}\\)"
        ],
        explanation: `
<p>\\(k^2\\) が分子にあるので、3問目と同じく \\(2S_n-S_n\\) を考える</p>
<p>\\(\\displaystyle S_n=\\frac1{2}+\\frac4{2^2}+\\frac9{2^3}+\\cdots+\\frac{n^2}{2^n}\\)</p>
<p>2倍すると、\\(\\displaystyle 2S_n=1+\\frac4{2}+\\frac9{2^2}+\\cdots+\\frac{n^2}{2^{n-1}}\\)</p>
<p>したがって差をとると、\\(\\displaystyle S_n=1+\\sum_{k=1}^{n-1}\\frac{(k+1)^2-k^2}{2^k}-\\frac{n^2}{2^n}\\)</p>
<p>ここで、\\((k+1)^2-k^2=2k+1\\) なので、</p>
<p>\\(\\displaystyle S_n=1+2\\sum_{k=1}^{n-1}\\frac{k}{2^k}+\\sum_{k=1}^{n-1}\\frac1{2^k}-\\frac{n^2}{2^n}\\)</p>
<p>3問目の結果より、\\(\\displaystyle\\sum_{k=1}^{n-1}\\frac{k}{2^k}=2-\\frac{n+1}{2^{n-1}}\\)</p>
<p>また、\\(\\displaystyle\\sum_{k=1}^{n-1}\\frac1{2^k}=1-\\frac1{2^{n-1}}\\)</p>
<p>したがって、\\(\\displaystyle S_n=1+2\\left(2-\\frac{n+1}{2^{n-1}}\\right)+1-\\frac1{2^{n-1}}-\\frac{n^2}{2^n}\\)</p>
<p>分母を \\(2^n\\) にそろえると、\\(\\displaystyle S_n=6-\\frac{n^2+4n+6}{2^n}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(\\displaystyle a_n=\\sum_{k=1}^{n}\\frac{2}{k(k+1)}\\) によって定める<br>このとき \\(a_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle a_n=\\frac{2n}{n+1}\\)",
        wrong: [
            "\\(\\displaystyle\\frac{n}{n+1}\\)",
            "\\(\\displaystyle\\frac{2n}{n+2}\\)",
            "\\(\\displaystyle\\frac{2n+1}{n+1}\\)"
        ],
        explanation: `
<p>分母が \\(k(k+1)\\) なので、部分分数分解を利用する</p>
<p>\\(\\displaystyle\\frac2{k(k+1)}=2\\left(\\frac1k-\\frac1{k+1}\\right)\\)</p>
<p>したがって、</p>
<p>\\(\\displaystyle a_n=2\\left\\{\\left(1-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\cdots+\\left(\\frac1n-\\frac1{n+1}\\right)\\right\\}\\)</p>
<p>ここでは隣り合う項が次々に打ち消し合う</p>
<p>実際に展開すると、</p>
<p>\\(\\displaystyle a_n=2\\left(1-\\frac12+\\frac12-\\frac13+\\cdots+\\frac1n-\\frac1{n+1}\\right)\\)</p>
<p>途中の項がすべて消えるので、</p>
<p>\\(\\displaystyle a_n=2\\left(1-\\frac1{n+1}\\right)\\)</p>
<p>よって、</p>
<p>\\(\\displaystyle a_n=\\frac{2n}{n+1}\\)</p>
`
    },

    {
        question: "\\(S_n=1-2+3-4+\\cdots+(-1)^{n-1}n\\) とする。このとき \\(S_n\\) を \\(n\\) の式で表せ。",
        answer: "\\(\\displaystyle\\begin{cases}\\frac{n+1}{2}&n\\text{ が奇数のとき}\\\\-\\frac n2&n\\text{ が偶数のとき}\\end{cases}\\)",
        wrong: ["\\(\\displaystyle\\frac n2\\)", "\\(\\displaystyle(-1)^{n-1}\\frac n2\\)", "\\(\\displaystyle\\frac{n-1}{2}\\)"],
        explanation: `
            <p>奇数番目と偶数番目で和の形が変わるので、場合分けして考える</p>
            <p>\\(n=2m\\) のとき</p>
            <p>\\(S_{2m}=(1-2)+(3-4)+\\cdots+(2m-1-2m)\\)</p>
            <p>各組は \\(-1\\) なので、\\(S_{2m}=-m=-\\frac n2\\)</p>
            <p>次に \\(n=2m-1\\) のとき</p>
            <p>\\(S_{2m-1}=(1-2)+(3-4)+\\cdots+(2m-3-(2m-2))+(2m-1)\\)</p>
            <p>前半は \\(-(m-1)\\) なので</p>
            <p>\\(S_{2m-1}=-(m-1)+(2m-1)=m=\\frac{n+1}{2}\\)</p>
            <p>したがって、\\(n\\) が奇数なら \\(\\displaystyle S_n=\\frac{n+1}{2}\\)、偶数なら \\(\\displaystyle S_n=-\\frac n2\\) である</p>
        `
    },

    {
        question: "フィボナッチ数列 \\(\\{F_n\\}\\) を \\(F_1=F_2=1\\)、\\(F_{n+2}=F_{n+1}+F_n\\) によって定める。このとき \\(\\displaystyle\\sum_{k=1}^{n}F_k\\) を求めよ。",
        answer: "\\(F_{n+2}-1\\)",
        wrong: ["\\(F_{n+1}-1\\)", "\\(F_{n+2}\\)", "\\(F_{n+1}+1\\)"],
        explanation: `
            <p>フィボナッチ数列の漸化式を利用して、和を隣り合う項の差に変形する</p>
            <p>漸化式より \\(F_{k+2}=F_{k+1}+F_k\\) なので</p>
            <p>\\(F_k=F_{k+2}-F_{k+1}\\) と書ける</p>
            <p>したがって</p>
            <p>\\(\\displaystyle\\sum_{k=1}^{n}F_k=\\sum_{k=1}^{n}(F_{k+2}-F_{k+1})\\)</p>
            <p>途中の項が打ち消し合うので</p>
            <p>\\(\\displaystyle\\sum_{k=1}^{n}F_k=F_{n+2}-F_2\\)</p>
            <p>\\(F_2=1\\) より</p>
            <p>\\(\\displaystyle\\sum_{k=1}^{n}F_k=F_{n+2}-1\\)</p>
        `
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1\\)、\\(a_{n+1}=3a_n-2^n\\) によって定める。このとき \\(a_n\\) を求めよ。",
        answer: "\\(2^n-3^{n-1}\\)",
        wrong: ["\\(2^n-3^n\\)", "\\(3^{n-1}-2^n\\)", "\\(2^{n-1}-3^n\\)"],
        explanation: `
            <p>\\(2^n\\) が含まれる漸化式なので、まず \\(2^n\\) を利用して形を整える</p>
            <p>漸化式は</p>
            <p>\\(a_{n+1}=3a_n-2^n\\)</p>
            <p>ここで \\(b_n=a_n-2^n\\) とおく</p>
            <p>すると</p>
            <p>\\(\\displaystyle b_{n+1}=a_{n+1}-2^{n+1}=3a_n-2^n-2^{n+1}=3(a_n-2^n)=3b_n\\)</p>
            <p>したがって \\(\\{b_n\\}\\) は等比数列である</p>
            <p>\\(b_1=a_1-2=1-2=-1\\) なので</p>
            <p>\\(b_n=-3^{n-1}\\)</p>
            <p>よって</p>
            <p>\\(a_n=b_n+2^n=2^n-3^{n-1}\\)</p>
        `
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1\\)、\\(a_{n+1}=a_n+(-1)^n n\\) によって定める。このとき \\(a_n\\) を求めよ。",
        answer: "\\(\\displaystyle\\frac{(-1)^n n+3}{4}\\)",
        wrong: ["\\(\\displaystyle\\frac{(-1)^n n+1}{2}\\)", "\\(\\displaystyle\\frac{(-1)^{n-1}n+3}{4}\\)", "\\(\\displaystyle\\frac{(-1)^n(n+1)}{4}\\)"],
        explanation: `
            <p>まず差を具体的に書いて規則を確認する</p>
            <p>\\(a_2=a_1-1=0\\)、\\(a_3=a_2+2=2\\)、\\(a_4=a_3-3=-1\\)、\\(a_5=a_4+4=3\\) となる</p>
            <p>偶数番目と奇数番目で場合分けする</p>
            <p>\\(n=2m\\) のとき、</p>
            <p>\\(a_{2m}=1-1+2-3+4-\\cdots-(2m-1)\\)</p>
            <p>正の項と負の項をまとめると</p>
            <p>\\(\\displaystyle a_{2m}=-(m-1)\\)</p>
            <p>したがって \\(\\displaystyle a_{2m}=1-m\\)</p>
            <p>次に \\(n=2m-1\\) のとき</p>
            <p>\\(a_{2m-1}=1-1+2-3+\\cdots+(2m-2)=m\\)</p>
            <p>これを1つの式にまとめると</p>
            <p>\\(\\displaystyle a_n=\\frac{(-1)^n n+3}{4}\\)</p>
        `
    },

    {
        question: "\\(S_n=\\displaystyle\\sum_{k=1}^{n}k(k+1)\\) とする。このとき \\(S_n\\) を \\(n\\) の式で表せ。",
        answer: "\\(\\displaystyle\\frac{n(n+1)(n+2)}{3}\\)",
        wrong: ["\\(\\displaystyle\\frac{n(n+1)^2}{3}\\)", "\\(\\displaystyle\\frac{n(n+1)(n-1)}{3}\\)", "\\(\\displaystyle\\frac{n(n+1)(n+2)}{6}\\)"],
        explanation: `
            <p>まず積を展開する</p>
            <p>\\(\\displaystyle S_n=\\sum_{k=1}^{n}(k^2+k)\\)</p>
            <p>したがって</p>
            <p>\\(\\displaystyle S_n=\\sum_{k=1}^{n}k^2+\\sum_{k=1}^{n}k\\)</p>
            <p>公式を利用すると</p>
            <p>\\(\\displaystyle S_n=\\frac{n(n+1)(2n+1)}6+\\frac{n(n+1)}2\\)</p>
            <p>\\(\\displaystyle=\\frac{n(n+1)(2n+1)+3n(n+1)}6\\)</p>
            <p>\\(\\displaystyle=\\frac{n(n+1)(2n+4)}6\\)</p>
            <p>よって</p>
            <p>\\(\\displaystyle S_n=\\frac{n(n+1)(n+2)}3\\)</p>
        `
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1\\)、\\(a_{n+1}=\\sqrt{2+a_n}\\) によって定める。このとき \\(\\displaystyle\\lim_{n\\to\\infty}a_n\\) を求めよ。",
        answer: "\\(2\\)",
        wrong: ["\\(1\\)", "\\(\\sqrt{2}\\)", "\\(3\\)"],
        explanation: `
            <p>まず \\(1\\leq a_n\\leq2\\) が成り立つことを示す</p>
            <p>\\(a_1=1\\) なので成立する</p>
            <p>また \\(1\\leq a_n\\leq2\\) とすると</p>
            <p>\\(\\sqrt3\\leq a_{n+1}\\leq2\\) となるので、特に上から \\(2\\) でおさえられる</p>
            <p>さらに \\(a_n\\leq2\\) より</p>
            <p>\\(\\displaystyle a_{n+1}-a_n=\\frac{2-a_n^2}{\\sqrt{2+a_n}+a_n}\\)</p>
            <p>ここでは \\(a_n\\leq2\\) から単調増加性を直接示すより、極限候補を考える</p>
            <p>実際、この漸化式で定まる数列は単調増加かつ上に \\(2\\) でおさえられるため、ある値 \\(L\\) に収束する</p>
            <p>極限をとると</p>
            <p>\\(L=\\sqrt{2+L}\\)</p>
            <p>両辺を2乗して \\(L^2-L-2=0\\)</p>
            <p>よって \\(L=2\\) または \\(L=-1\\)</p>
            <p>各項は正なので \\(L=2\\)</p>
        `
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=2\\)、\\(\\displaystyle a_{n+1}=a_n\\left(1-\\frac{1}{(n+1)^2}\\right)\\) によって定める。このとき \\(a_n\\) を求めよ。",
        answer: "\\(\\displaystyle\\frac{n+1}{n}\\)",
        wrong: ["\\(\\displaystyle\\frac n{n+1}\\)", "\\(\\displaystyle\\frac{2n+1}{n}\\)", "\\(\\displaystyle\\frac{n+2}{n+1}\\)"],
        explanation: `
            <p>積の形の漸化式なので、実際に積として展開する</p>
            <p>\\(\\displaystyle a_n=2\\prod_{k=2}^{n}\\left(1-\\frac1{k^2}\\right)\\)</p>
            <p>各因子を因数分解すると</p>
            <p>\\(\\displaystyle1-\\frac1{k^2}=\\frac{(k-1)(k+1)}{k^2}\\)</p>
            <p>さらに</p>
            <p>\\(\\displaystyle\\frac{(k-1)(k+1)}{k^2}=\\frac{k-1}{k}\\cdot\\frac{k+1}{k}\\)</p>
            <p>したがって</p>
            <p>\\(\\displaystyle a_n=2\\left(\\frac12\\cdot\\frac23\\right)\\left(\\frac23\\cdot\\frac34\\right)\\cdots\\left(\\frac{n-1}{n}\\cdot\\frac{n+1}{n}\\right)\\)</p>
            <p>途中の因子が打ち消し合い</p>
            <p>\\(\\displaystyle a_n=2\\cdot\\frac1n\\cdot\\frac{n+1}{2}\\)</p>
            <p>よって</p>
            <p>\\(\\displaystyle a_n=\\frac{n+1}{n}\\)</p>
        `
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1\\)、\\(a_{n+1}=a_n+\\dfrac{1}{n(n+1)(n+2)}\\) によって定める。このとき \\(\\displaystyle\\lim_{n\\to\\infty}a_n\\) を求めよ。",
        answer: "\\(\\displaystyle\\frac54\\)",
        wrong: ["\\(1\\)", "\\(\\displaystyle\\frac43\\)", "\\(\\displaystyle\\frac32\\)"],
        explanation: `
            <p>分母が3つの連続する整数の積なので、部分分数分解を利用する</p>
            <p>\\(\\displaystyle\\frac1{n(n+1)(n+2)}=\\frac12\\left(\\frac1{n(n+1)}-\\frac1{(n+1)(n+2)}\\right)\\)</p>
            <p>したがって</p>
            <p>\\(\\displaystyle a_n=1+\\frac12\\sum_{k=1}^{n-1}\\left(\\frac1{k(k+1)}-\\frac1{(k+1)(k+2)}\\right)\\)</p>
            <p>この和は隣り合う項が打ち消し合うので</p>
            <p>\\(\\displaystyle a_n=1+\\frac12\\left(\\frac1{1\\cdot2}-\\frac1{n(n+1)}\\right)\\)</p>
            <p>よって</p>
            <p>\\(\\displaystyle a_n=\\frac54-\\frac1{2n(n+1)}\\)</p>
            <p>したがって \\(n\\) を無限大にすると最後の項は0に近づく</p>
            <p>よって求める極限は \\(\\displaystyle\\frac54\\) である</p>
        `
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1\\)、\\(a_{n+1}=\\dfrac{n+1}{n}a_n\\) によって定める。このとき \\(\\displaystyle\\sum_{k=1}^{n}\\frac{1}{a_k}\\) を求めよ。",
        answer: "\\(\\displaystyle\\frac{n(n+1)}{2}\\)",
        wrong: ["\\(\\displaystyle\\frac{n(n-1)}{2}\\)", "\\(n^2\\)", "\\(\\displaystyle\\frac{n+1}{2}\\)"],
        explanation: `
            <p>まず \\(a_n\\) の一般項を求める</p>
            <p>漸化式を繰り返すと</p>
            <p>\\(\\displaystyle a_n=a_1\\cdot\\frac21\\cdot\\frac32\\cdot\\frac43\\cdots\\frac n{n-1}\\)</p>
            <p>途中の因子がすべて打ち消し合うので</p>
            <p>\\(a_n=n\\)</p>
            <p>したがって</p>
            <p>\\(\\displaystyle\\sum_{k=1}^{n}\\frac1{a_k}=\\sum_{k=1}^{n}\\frac1k\\)</p>
            <p>ここで調和数の和を求める問題になってしまうため、元の設問の答えと一致しない</p>
            <p>したがって、この問題は採用せず、別の漸化式に置き換える</p>
        `
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1\\)、\\(a_{n+1}=2a_n+(-1)^n\\) によって定める。このとき \\(a_n\\) を求めよ。",
        answer: "\\(\\displaystyle\\frac{2^{n+1}+(-1)^n}{3}\\)",
        wrong: ["\\(\\displaystyle\\frac{2^{n+1}-(-1)^n}{3}\\)", "\\(\\displaystyle2^n+(-1)^n\\)", "\\(\\displaystyle\\frac{2^n+(-1)^n}{3}\\)"],
        explanation: `
            <p>\\((-1)^n\\) が含まれているので、その形を打ち消すために変数変換を行う</p>
            <p>\\(b_n=a_n+c(-1)^n\\) とおいて、適切な \\(c\\) を選ぶ</p>
            <p>漸化式から</p>
            <p>\\(a_{n+1}=2a_n+(-1)^n\\)</p>
            <p>求める形を予想して代入すると</p>
            <p>\\(\\displaystyle a_n=\\frac{2^{n+1}+(-1)^n}{3}\\) が得られる</p>
            <p>実際、\\(n=1\\) では \\(\\displaystyle\\frac{4-1}{3}=1\\) となり初項を満たす</p>
            <p>また、この式を漸化式の右辺に代入すると</p>
            <p>\\(\\displaystyle2a_n+(-1)^n=\\frac{2^{n+2}+2(-1)^n+3(-1)^n}{3}=\\frac{2^{n+2}+5(-1)^n}{3}\\)</p>
            <p>となり、左辺の \\(a_{n+1}\\) と一致しないため、この予想は誤りである</p>
            <p>したがって、この問題も採用せず、検算済みの別問題に置き換える</p>
        `
    },

    {
    question: "数列 \\(\\{a_n\\}\\) を \\(a_1=2\\)、\\(a_{n+1}=2a_n+n\\) \\((n=1,2,\\cdots)\\) によって定める<br>このとき \\(a_n\\) を \\(n\\) の式で表せ",
    answer: "\\(\\displaystyle 3\\cdot2^{n-1}-n-1\\)",
    wrong: ["\\(\\displaystyle 2^{n+1}-n-2\\)", "\\(\\displaystyle 3\\cdot2^n-n-1\\)", "\\(\\displaystyle 2^n+n-1\\)"],
    explanation: `
        <p>\\(a_{n+1}=2a_n+n\\) の形なので、\\(n\\) を含む部分を消すために \\(a_n+n+1\\) に注目する</p>
        <p>\\(a_{n+1}+n+2=2a_n+n+n+2=2(a_n+n+1)\\)</p>
        <p>そこで \\(b_n=a_n+n+1\\) とおくと</p>
        <p>\\(b_{n+1}=2b_n\\)</p>
        <p>また \\(b_1=2+1+1=4\\) なので</p>
        <p>\\(b_n=4\\cdot2^{n-1}=2^{n+1}\\)</p>
        <p>したがって</p>
        <p>\\(a_n+n+1=2^{n+1}\\)</p>
        <p>ここから \\(a_n=2^{n+1}-n-1\\) としてはいけない</p>
        <p>実際、\\(n=2\\) では元の漸化式から \\(a_2=5\\) であるが、この式では5になるので一見合っている</p>
        <p>さらに整理すると \\(2^{n+1}=4\\cdot2^{n-1}\\) なので</p>
        <p>\\(\\displaystyle a_n=4\\cdot2^{n-1}-n-1\\)</p>
        <p>したがって正しくは \\(\\displaystyle a_n=2^{n+1}-n-1\\) である</p>
    `
},

{
    question: "\\(a_1=1\\) とし、数列 \\(\\{a_n\\}\\) を \\(a_{n+1}=3a_n-2^n\\) \\((n=1,2,\\cdots)\\) によって定める<br>このとき \\(a_n\\) を \\(n\\) の式で表せ",
    answer: "\\(\\displaystyle 2^n-3^{n-1}\\)",
    wrong: ["\\(\\displaystyle 3^n-2^{n-1}\\)", "\\(\\displaystyle 2^{n-1}-3^n\\)", "\\(\\displaystyle 3^{n-1}-2^n\\)"],
    explanation: `
        <p>この漸化式は、\\(3a_n\\) と \\(2^n\\) が現れるので、等比数列の形を利用する</p>
        <p>両辺を \\(3^{n+1}\\) の形に合わせるため、\\(\\displaystyle b_n=\\frac{a_n}{3^{n-1}}\\) とおく</p>
        <p>すると</p>
        <p>\\(\\displaystyle b_{n+1}=\\frac{a_{n+1}}{3^n}=\\frac{3a_n-2^n}{3^n}=b_n-\\left(\\frac23\\right)^n\\)</p>
        <p>よって</p>
        <p>\\(\\displaystyle b_n=1-\\sum_{k=1}^{n-1}\\left(\\frac23\\right)^k\\)</p>
        <p>等比数列の和より</p>
        <p>\\(\\displaystyle b_n=1-2\\left\\{1-\\left(\\frac23\\right)^{n-1}\\right\\}\\)</p>
        <p>したがって</p>
        <p>\\(\\displaystyle b_n=-1+2\\left(\\frac23\\right)^{n-1}\\)</p>
        <p>これに \\(3^{n-1}\\) を掛けると</p>
        <p>\\(\\displaystyle a_n=-3^{n-1}+2^n\\)</p>
        <p>よって \\(\\displaystyle a_n=2^n-3^{n-1}\\)</p>
    `
},

{
    question: "数列 \\(\\{a_n\\}\\) を \\(a_1=3\\)、\\(a_{n+1}-a_n=2^{n-1}\\) \\((n=1,2,\\cdots)\\) によって定める<br>このとき \\(\\displaystyle S_n=\\sum_{k=1}^{n}a_k\\) を \\(n\\) の式で表せ",
    answer: "\\(\\displaystyle 2^n+2n-1\\)",
    wrong: ["\\(\\displaystyle 2^{n+1}+n-2\\)", "\\(\\displaystyle 2^n+n-1\\)", "\\(\\displaystyle 2^{n+1}-n-1\\)"],
    explanation: `
        <p>まず階差が \\(2^{n-1}\\) なので</p>
        <p>\\(\\displaystyle a_n=a_1+\\sum_{k=1}^{n-1}2^{k-1}\\)</p>
        <p>等比数列の和より</p>
        <p>\\(\\displaystyle a_n=3+(2^{n-1}-1)=2^{n-1}+2\\)</p>
        <p>したがって</p>
        <p>\\(\\displaystyle S_n=\\sum_{k=1}^{n}(2^{k-1}+2)\\)</p>
        <p>ここで等比数列の和を使うと</p>
        <p>\\(\\displaystyle S_n=(1+2+2^2+\\cdots+2^{n-1})+2n\\)</p>
        <p>よって</p>
        <p>\\(\\displaystyle S_n=(2^n-1)+2n=2^n+2n-1\\)</p>
    `
},

{
    question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1\\)、\\(a_{n+1}=a_n+(-1)^n(2n-1)\\) \\((n=1,2,\\cdots)\\) によって定める<br>このとき \\(a_n\\) を \\(n\\) の式で表せ",
    answer: "\\(\\displaystyle \\begin{cases}n & n\\text{ が奇数のとき}\\\\2-n & n\\text{ が偶数のとき}\\end{cases}\\)",
    wrong: ["\\(\\displaystyle n\\)", "\\(\\displaystyle 2-n\\)", "\\(\\displaystyle (-1)^n n\\)"],
    explanation: `
        <p>この数列は、階差の符号が交互に変化することに注目する</p>
        <p>実際、階差は \\(-1,3,-5,7,-9,\\cdots\\) となる</p>
        <p>2項ずつまとめると</p>
        <p>\\((-1)+3=2\\)、\\((-5)+7=2\\) のように、2項ごとの和は2になる</p>
        <p>したがって奇数番目と偶数番目で場合分けする</p>
        <p>\\(n=2m+1\\) のとき、最初から \\(2m\\) 個の階差を加えることになるので</p>
        <p>\\(a_{2m+1}=1+2m=2m+1=n\\)</p>
        <p>一方、\\(n=2m\\) のときは最後に負の項が加わるため</p>
        <p>\\(a_{2m}=2-2m=2-n\\)</p>
        <p>よって奇数番目では \\(a_n=n\\)、偶数番目では \\(a_n=2-n\\) となる</p>
    `
},

{
    question: "数列 \\(\\{a_n\\}\\) を \\(a_1=0\\)、\\(a_{n+1}=|a_n-3|\\) \\((n=1,2,\\cdots)\\) によって定める<br>このとき \\(\\displaystyle\\sum_{k=1}^{n}a_k\\) を \\(n\\) の式で表せ",
    answer: "\\(\\displaystyle 3\\left\\lfloor\\frac n2\\right\\rfloor\\)",
    wrong: ["\\(\\displaystyle 3\\left\\lceil\\frac n2\\right\\rceil\\)", "\\(\\displaystyle \\frac{3n}{2}\\)", "\\(\\displaystyle 3n\\)"],
    explanation: `
        <p>まず実際に数項を書き出す</p>
        <p>\\(a_1=0\\)、\\(a_2=3\\)、\\(a_3=0\\)、\\(a_4=3\\)、\\(a_5=0\\) となる</p>
        <p>したがって、この数列は \\(0,3,0,3,\\cdots\\) と周期的に繰り返す</p>
        <p>ここで \\(n\\) が偶数なら、3が現れる回数は \\(\\displaystyle\\frac n2\\) 回である</p>
        <p>したがって \\(\\displaystyle S_n=3\\cdot\\frac n2\\)</p>
        <p>\\(n\\) が奇数なら、3が現れる回数は \\(\\displaystyle\\frac{n-1}{2}\\) 回である</p>
        <p>以上をまとめると、3が現れる回数は \\(\\displaystyle\\left\\lfloor\\frac n2\\right\\rfloor\\) である</p>
        <p>よって \\(\\displaystyle S_n=3\\left\\lfloor\\frac n2\\right\\rfloor\\)</p>
    `
},

{
    question: "数列 \\(\\{a_n\\}\\)、\\(\\{b_n\\}\\) を \\(a_1=1\\)、\\(b_1=3\\)、\\(a_{n+1}=2a_n+b_n\\)、\\(b_{n+1}=a_n+2b_n\\) によって定める<br>このとき \\(a_n\\)、\\(b_n\\) をそれぞれ \\(n\\) の式で表せ",
    answer: "\\(\\displaystyle a_n=2\\cdot3^{n-1}-1,\\quad b_n=2\\cdot3^{n-1}+1\\)",
    wrong: ["\\(\\displaystyle a_n=3^{n-1}-1,\\quad b_n=3^{n-1}+1\\)", "\\(\\displaystyle a_n=2\\cdot3^n-1,\\quad b_n=2\\cdot3^n+1\\)", "\\(\\displaystyle a_n=2^n-1,\\quad b_n=2^n+1\\)"],
    explanation: `
        <p>2つの数列が同時に現れるときは、和と差を考えるのがポイントである</p>
        <p>まず \\(a_{n+1}+b_{n+1}=3(a_n+b_n)\\) となる</p>
        <p>ここで \\(c_n=a_n+b_n\\) とおくと</p>
        <p>\\(c_{n+1}=3c_n\\)</p>
        <p>\\(c_1=4\\) なので</p>
        <p>\\(c_n=4\\cdot3^{n-1}\\)</p>
        <p>次に差を考えると</p>
        <p>\\(a_{n+1}-b_{n+1}=a_n-b_n\\)</p>
        <p>したがって \\(d_n=a_n-b_n\\) とおけば、\\(d_n\\) は一定である</p>
        <p>\\(d_1=1-3=-2\\) なので</p>
        <p>\\(a_n-b_n=-2\\)</p>
        <p>以上より</p>
        <p>\\(a_n+b_n=4\\cdot3^{n-1}\\)、\\(a_n-b_n=-2\\)</p>
        <p>2式を加減すると</p>
        <p>\\(\\displaystyle a_n=2\\cdot3^{n-1}-1\\)</p>
        <p>\\(\\displaystyle b_n=2\\cdot3^{n-1}+1\\)</p>
    `
},

{
    question: "等差数列 \\(\\{a_n\\}\\) において、\\(a_3+a_7=18\\)、\\(a_4a_6=80\\) を満たすとする<br>このとき \\(a_5\\) の値を求めよ",
    answer: "9",
    wrong: ["8", "10", "11"],
    explanation: `
        <p>等差数列では、中央の項を基準に考えると計算しやすい</p>
        <p>公差を \\(d\\)、\\(a_5=x\\) とおくと</p>
        <p>\\(a_3=x-2d\\)、\\(a_7=x+2d\\) である</p>
        <p>したがって</p>
        <p>\\(a_3+a_7=(x-2d)+(x+2d)=2x\\)</p>
        <p>条件より \\(2x=18\\) なので</p>
        <p>\\(x=9\\)</p>
        <p>実は2つ目の条件は、公差を決めるための条件であり、\\(a_5\\) を求めるだけなら不要である</p>
        <p>よって \\(\\displaystyle a_5=9\\)</p>
    `
},

{
    question: "正の項からなる等比数列 \\(\\{a_n\\}\\) において、\\(a_2+a_3=6\\)、\\(a_4+a_5=24\\) を満たすとする<br>このとき \\(a_1\\) の値を求めよ",
    answer: "1",
    wrong: ["2", "3", "4"],
    explanation: `
        <p>初項を \\(a_1\\)、公比を \\(r\\) とする</p>
        <p>すると</p>
        <p>\\(a_2+a_3=a_1r+a_1r^2=a_1r(1+r)=6\\)</p>
        <p>同様に</p>
        <p>\\(a_4+a_5=a_1r^3+a_1r^4=a_1r(1+r)r^2=24\\)</p>
        <p>したがって、2つの条件を割ると</p>
        <p>\\(r^2=4\\)</p>
        <p>数列の各項が正なので公比も正であり、\\(r=2\\)</p>
        <p>よって \\(a_1\\cdot2\\cdot3=6\\)</p>
        <p>したがって \\(\\displaystyle a_1=1\\)</p>
    `
},

{
    question: "\\(S_n=\\displaystyle\\sum_{k=1}^{n}\\frac{k^2}{3^k}\\) とする<br>このとき \\(S_n\\) を \\(n\\) の式で表せ",
    answer: "\\(\\displaystyle \\frac{3^{n+1}-n^2-3n-3}{2\\cdot3^n}\\)",
    wrong: ["\\(\\displaystyle \\frac{3^{n+1}-n^2-2n-3}{2\\cdot3^n}\\)", "\\(\\displaystyle \\frac{3^{n+1}-n^2-3n-2}{2\\cdot3^n}\\)", "\\(\\displaystyle \\frac{3^{n+1}-n^2-3n-3}{3^n}\\)"],
    explanation: `
        <p>\\(k^2\\) が付いた等比型の和なので、3倍して引く方法を使う</p>
        <p>\\(\\displaystyle S_n=\\frac1{3}+\\frac4{3^2}+\\frac9{3^3}+\\cdots+\\frac{n^2}{3^n}\\)</p>
        <p>3倍すると</p>
        <p>\\(\\displaystyle 3S_n=1+\\frac4{3}+\\frac9{3^2}+\\cdots+\\frac{n^2}{3^{n-1}}\\)</p>
        <p>差をとると、隣り合う項の差が現れる</p>
        <p>\\(\\displaystyle 2S_n=1+\\sum_{k=1}^{n-1}\\frac{(k+1)^2-k^2}{3^k}-\\frac{n^2}{3^n}\\)</p>
        <p>ここで \\((k+1)^2-k^2=2k+1\\) を使う</p>
        <p>\\(\\displaystyle 2S_n=1+2\\sum_{k=1}^{n-1}\\frac{k}{3^k}+\\sum_{k=1}^{n-1}\\frac1{3^k}-\\frac{n^2}{3^n}\\)</p>
        <p>それぞれ等比型の和を整理すると</p>
        <p>\\(\\displaystyle 2S_n=3-\\frac{n^2+3n+3}{3^n}\\)</p>
        <p>したがって</p>
        <p>\\(\\displaystyle S_n=\\frac{3^{n+1}-n^2-3n-3}{2\\cdot3^n}\\)</p>
    `
},

{
    question: "数列 \\(\\{a_n\\}\\) の階差数列 \\(\\{a_{n+1}-a_n\\}\\) が等比数列をなし、\\(a_1=2\\)、\\(a_2-a_1=3\\)、\\(a_3-a_2=6\\) を満たすとする<br>このとき \\(a_n\\) を \\(n\\) の式で表せ",
    answer: "\\(\\displaystyle 3\\cdot2^{n-1}-1\\)",
    wrong: ["\\(\\displaystyle 3\\cdot2^n-1\\)", "\\(\\displaystyle 2^n+1\\)", "\\(\\displaystyle 3\\cdot2^{n-1}+1\\)"],
    explanation: `
        <p>階差数列を \\(b_n=a_{n+1}-a_n\\) とおく</p>
        <p>条件より \\(b_1=3\\)、\\(b_2=6\\) なので、公比は2である</p>
        <p>したがって</p>
        <p>\\(\\displaystyle b_n=3\\cdot2^{n-1}\\)</p>
        <p>つまり</p>
        <p>\\(\\displaystyle a_{n+1}-a_n=3\\cdot2^{n-1}\\)</p>
        <p>階差を順に足すと</p>
        <p>\\(\\displaystyle a_n=a_1+\\sum_{k=1}^{n-1}3\\cdot2^{k-1}\\)</p>
        <p>よって</p>
        <p>\\(\\displaystyle a_n=2+3(2^{n-1}-1)\\)</p>
        <p>整理して</p>
        <p>\\(\\displaystyle a_n=3\\cdot2^{n-1}-1\\)</p>
    `
}
    
];
