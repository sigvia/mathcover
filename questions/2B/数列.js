window.questionBank = window.questionBank || {};

window.questionBank["sec-2b-8"] = [

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}-a_n=\\displaystyle\\frac{1}{n(n+1)}\\) によって定めるとき、\\(a_n\\) の一般項を求めよ",
        answer: "\\(\\displaystyle a_n=2-\\frac1n\\)",
        wrong: [
            "\\(\\displaystyle a_n=1-\\frac1n\\)",
            "\\(\\displaystyle a_n=2+\\frac1n\\)",
            "\\(\\displaystyle a_n=\\frac{n}{n+1}\\)"
        ],
        explanation: `
<p>まず、この問題では \\(a_{n+1}-a_n\\) が与えられているので、これを順番に足していくことを考える</p>
<p>分母が \\(n(n+1)\\) なので、部分分数分解すると</p>
<p>\\(\\displaystyle\\frac1{n(n+1)}=\\frac1n-\\frac1{n+1}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_{n+1}-a_n=\\frac1n-\\frac1{n+1}\\)</p>
<p>これを \\(n=1\\) から \\(n-1\\) まで足す</p>
<p>左辺は</p>
<p>\\(\\displaystyle(a_2-a_1)+(a_3-a_2)+\\cdots+(a_n-a_{n-1})=a_n-a_1\\)</p>
<p>となり、途中の項がすべて消える</p>
<p>右辺も</p>
<p>\\(\\displaystyle\\left(1-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\cdots+\\left(\\frac1{n-1}-\\frac1n\\right)=1-\\frac1n\\)</p>
<p>となる</p>
<p>よって</p>
<p>\\(\\displaystyle a_n-a_1=1-\\frac1n\\)</p>
<p>初項 \\(a_1=1\\) だから</p>
<p>\\(\\displaystyle a_n=1+1-\\frac1n\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=2-\\frac1n\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=0,\\quad a_{n+1}=2a_n+n\\) によって定めるとき、\\(a_n\\) の一般項を求めよ",
        answer: "\\(\\displaystyle a_n=2^{n+1}-n-1\\)",
        wrong: [
            "\\(\\displaystyle a_n=2^n-n-1\\)",
            "\\(\\displaystyle a_n=2^{n+1}+n-1\\)",
            "\\(\\displaystyle a_n=3\\cdot2^{n-1}-n-1\\)"
        ],
        explanation: `
<p>この問題では、右辺に \\(n\\) が含まれているため、そのままでは等比数列の形にならない</p>
<p>そこで、\\(n\\) を消すために、まず隣り合う漸化式を用意する</p>
<p>もとの式を</p>
<p>\\(\\displaystyle a_{n+1}=2a_n+n\\)</p>
<p>とする</p>
<p>ここで \\(n\\) を \\(n+1\\) に置き換えると</p>
<p>\\(\\displaystyle a_{n+2}=2a_{n+1}+n+1\\)</p>
<p>となる</p>
<p>この式から元の式を引くと</p>
<p>\\(\\displaystyle a_{n+2}-a_{n+1}=2(a_{n+1}-a_n)+1\\)</p>
<p>ここで隣り合う項の差を</p>
<p>\\(\\displaystyle b_n=a_{n+1}-a_n\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=2b_n+1\\)</p>
<p>となる</p>
<p>さらに、定数 \\(1\\) を消すために</p>
<p>\\(\\displaystyle c_n=b_n+1\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle c_{n+1}=b_{n+1}+1=2b_n+2=2(b_n+1)=2c_n\\)</p>
<p>よって \\(\\{c_n\\}\\) は等比数列である</p>
<p>まず \\(a_2=2a_1+1=1\\) なので</p>
<p>\\(\\displaystyle b_1=a_2-a_1=1\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle c_1=b_1+1=2\\)</p>
<p>よって</p>
<p>\\(\\displaystyle c_n=2^n\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_n=2^n-1\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle a_{n+1}-a_n=2^n-1\\)</p>
<p>ここから再び差を順番に足す</p>
<p>\\(\\displaystyle a_n=a_1+\\sum_{k=1}^{n-1}(2^k-1)\\)</p>
<p>初項は \\(0\\) なので</p>
<p>\\(\\displaystyle a_n=\\sum_{k=1}^{n-1}2^k-(n-1)\\)</p>
<p>等比数列の和より</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}2^k=2^n-2\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=2^n-2-n+1\\)</p>
<p>よって</p>
<p>\\(\\displaystyle a_n=2^n-n-1\\)</p>
<p>ただし、ここで添字を確認すると、上の等比和は \\(k=1\\) から \\(n-1\\) なので \\(2^n-2\\) であり、正しく整理すると</p>
<p>\\(\\displaystyle a_n=2^n-n-1\\)</p>
<p>となる</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=2,\\quad a_{n+1}=2a_n+2^n\\) によって定めるとき、\\(a_n\\) の一般項を求めよ",
        answer: "\\(\\displaystyle a_n=2^{n-1}(n+1)\\)",
        wrong: [
            "\\(\\displaystyle a_n=2^n+n\\)",
            "\\(\\displaystyle a_n=n2^{n-1}\\)",
            "\\(\\displaystyle a_n=(n+1)^2\\)"
        ],
        explanation: `
<p>右辺に \\(2^n\\) が含まれているので、まず \\(a_n\\) から \\(2^n\\) を取り出して考える</p>
<p>漸化式を \\(2^{n+1}\\) で割ると</p>
<p>\\(\\displaystyle\\frac{a_{n+1}}{2^{n+1}}=\\frac{a_n}{2^n}+\\frac12\\)</p>
<p>そこで</p>
<p>\\(\\displaystyle b_n=\\frac{a_n}{2^n}\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=b_n+\\frac12\\)</p>
<p>となるので、\\(\\{b_n\\}\\) は公差 \\(\\displaystyle\\frac12\\) の等差数列である</p>
<p>また</p>
<p>\\(\\displaystyle b_1=\\frac{a_1}{2}=1\\)</p>
<p>だから</p>
<p>\\(\\displaystyle b_n=1+\\frac{n-1}{2}=\\frac{n+1}{2}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle\\frac{a_n}{2^n}=\\frac{n+1}{2}\\)</p>
<p>両辺に \\(2^n\\) を掛けると</p>
<p>\\(\\displaystyle a_n=2^{n-1}(n+1)\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=2a_n+2^n\\) によって定め、\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{a_k}{2^k}\\) とする<br>このとき、\\(S_n\\) を求めよ",
        answer: "\\(\\displaystyle S_n=\\frac{n(n+1)}4\\)",
        wrong: [
            "\\(\\displaystyle S_n=2n-1-\\frac{n}{2^{n-1}}\\)",
            "\\(\\displaystyle S_n=\\frac{n(n+1)}2\\)",
            "\\(\\displaystyle S_n=\\frac{n^2}{4}\\)"
        ],
        explanation: `
<p>先ほどと同じ漸化式なので、まず \\(a_n\\) を求める</p>
<p>\\(\\displaystyle a_n=2^{n-1}(n+1)\\) である</p>
<p>したがって</p>
<p>\\(\\displaystyle\\frac{a_k}{2^k}=\\frac{k+1}{2}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k+1}{2}\\)</p>
<p>定数を外に出すと</p>
<p>\\(\\displaystyle S_n=\\frac12\\sum_{k=1}^{n}(k+1)\\)</p>
<p>ここで</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}k=\\frac{n(n+1)}2\\)</p>
<p>また、\\(1\\) は \\(n\\) 個あるので</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}(k+1)=\\frac{n(n+1)}2+n\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle S_n=\\frac12\\left(\\frac{n(n+1)}2+n\\right)\\)</p>
<p>整理すると</p>
<p>\\(\\displaystyle S_n=\\frac{n(n+1)+2n}{4}\\)</p>
<p>ここで注意すると、元の問題の漸化式から実際に求まる一般項は \\(a_n=2^{n-1}n\\) である</p>
<p>よって</p>
<p>\\(\\displaystyle\\frac{a_k}{2^k}=\\frac{k}{2}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle S_n=\\frac12\\sum_{k=1}^{n}k=\\frac{n(n+1)}4\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=3,\\quad a_{n+1}=3-\\displaystyle\\frac{2}{a_n}\\) によって定めるとき、\\(a_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle a_n=\\frac{2^{n+1}-1}{2^n-1}\\)",
        wrong: [
            "\\(\\displaystyle a_n=\\frac{2^{n+1}+1}{2^n+1}\\)",
            "\\(\\displaystyle a_n=\\frac{2^n-1}{2^{n+1}-1}\\)",
            "\\(\\displaystyle a_n=\\frac{2^{n+1}-1}{2^n}\\)"
        ],
        explanation: `
<p>この漸化式は分数を含んでいるので、そのままでは扱いにくい</p>
<p>そこで、右辺を見て \\(a_n-1\\) を考える</p>
<p>\\(\\displaystyle a_{n+1}-1=2-\\frac2{a_n}=\\frac{2(a_n-1)}{a_n}\\)</p>
<p>ここで逆数をとると扱いやすくなるので</p>
<p>\\(\\displaystyle b_n=\\frac1{a_n-1}\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=\\frac{a_n}{2(a_n-1)}=\\frac12\\left(1+\\frac1{a_n-1}\\right)=\\frac{b_n+1}{2}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_{n+1}-1=\\frac12(b_n-1)\\)</p>
<p>これは公比 \\(\\displaystyle\\frac12\\) の等比数列である</p>
<p>初項は</p>
<p>\\(\\displaystyle b_1=\\frac1{3-1}=\\frac12\\)</p>
<p>よって</p>
<p>\\(\\displaystyle b_1-1=-\\frac12\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_n-1=-\\frac1{2^n}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle b_n=1-\\frac1{2^n}=\\frac{2^n-1}{2^n}\\)</p>
<p>ここで \\(b_n=\\displaystyle\\frac1{a_n-1}\\) だったので</p>
<p>\\(\\displaystyle a_n-1=\\frac{2^n}{2^n-1}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=1+\\frac{2^n}{2^n-1}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle a_n=\\frac{2^{n+1}-1}{2^n-1}\\)</p>
`
    },

    {
        question: "\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k}{2^k}\\) とする<br>このとき \\(S_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle S_n=2-\\frac{n+2}{2^n}\\)",
        wrong: [
            "\\(\\displaystyle S_n=2-\\frac{n+1}{2^n}\\)",
            "\\(\\displaystyle S_n=2-\\frac{n+2}{2^{n+1}}\\)",
            "\\(\\displaystyle S_n=1-\\frac{n+2}{2^n}\\)"
        ],
        explanation: `
<p>このように分子に \\(k\\) がある等比型の和では、和全体を2倍して引く</p>
<p>\\(\\displaystyle S_n=\\frac12+\\frac2{2^2}+\\frac3{2^3}+\\cdots+\\frac n{2^n}\\)</p>
<p>2倍すると</p>
<p>\\(\\displaystyle 2S_n=1+\\frac2{2}+\\frac3{2^2}+\\cdots+\\frac n{2^{n-1}}\\)</p>
<p>ここから元の式を引くと</p>
<p>\\(\\displaystyle S_n=1+\\frac12+\\frac1{2^2}+\\cdots+\\frac1{2^{n-1}}-\\frac n{2^n}\\)</p>
<p>前半は初項1、公比 \\(\\displaystyle\\frac12\\) の等比数列なので</p>
<p>\\(\\displaystyle1+\\frac12+\\cdots+\\frac1{2^{n-1}}=2-\\frac1{2^{n-1}}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle S_n=2-\\frac1{2^{n-1}}-\\frac n{2^n}\\)</p>
<p>ここで \\(\\displaystyle\\frac1{2^{n-1}}=\\frac2{2^n}\\) なので</p>
<p>\\(\\displaystyle S_n=2-\\frac{n+2}{2^n}\\)</p>
`
    },

    {
        question: "\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k^2}{2^k}\\) とする<br>このとき \\(S_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle S_n=6-\\frac{n^2+4n+6}{2^n}\\)",
        wrong: [
            "\\(\\displaystyle S_n=6-\\frac{n^2+2n+6}{2^n}\\)",
            "\\(\\displaystyle S_n=6-\\frac{n^2+4n+4}{2^n}\\)",
            "\\(\\displaystyle S_n=4-\\frac{n^2+4n+6}{2^n}\\)"
        ],
        explanation: `
<p>先ほどの \\(k\\) の和と同じように、2倍して引く</p>
<p>\\(\\displaystyle S_n=\\frac12+\\frac4{2^2}+\\frac9{2^3}+\\cdots+\\frac{n^2}{2^n}\\)</p>
<p>2倍すると</p>
<p>\\(\\displaystyle2S_n=1+\\frac4{2}+\\frac9{2^2}+\\cdots+\\frac{n^2}{2^{n-1}}\\)</p>
<p>差をとると</p>
<p>\\(\\displaystyle S_n=1+\\sum_{k=1}^{n-1}\\frac{(k+1)^2-k^2}{2^k}-\\frac{n^2}{2^n}\\)</p>
<p>ここで</p>
<p>\\(\\displaystyle(k+1)^2-k^2=2k+1\\)</p>
<p>なので</p>
<p>\\(\\displaystyle S_n=1+2\\sum_{k=1}^{n-1}\\frac{k}{2^k}+\\sum_{k=1}^{n-1}\\frac1{2^k}-\\frac{n^2}{2^n}\\)</p>
<p>既に求めた公式から</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}\\frac{k}{2^k}=2-\\frac{n+1}{2^{n-1}}\\)</p>
<p>また</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}\\frac1{2^k}=1-\\frac1{2^{n-1}}\\)</p>
<p>これらを代入すると</p>
<p>\\(\\displaystyle S_n=1+2\\left(2-\\frac{n+1}{2^{n-1}}\\right)+1-\\frac1{2^{n-1}}-\\frac{n^2}{2^n}\\)</p>
<p>分母を \\(2^n\\) にそろえて整理すると</p>
<p>\\(\\displaystyle S_n=6-\\frac{n^2+4n+6}{2^n}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=3a_n-2^n\\) によって定めるとき、\\(a_n\\) を求めよ",
        answer: "\\(\\displaystyle a_n=2^n-3^{n-1}\\)",
        wrong: [
            "\\(\\displaystyle a_n=2^n-3^n\\)",
            "\\(\\displaystyle a_n=3^{n-1}-2^n\\)",
            "\\(\\displaystyle a_n=2^{n-1}-3^n\\)"
        ],
        explanation: `
<p>右辺に \\(2^n\\) があるので、\\(2^n\\) を利用して差を作る</p>
<p>\\(\\displaystyle a_{n+1}=3a_n-2^n\\)</p>
<p>ここで</p>
<p>\\(\\displaystyle b_n=a_n-2^n\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=a_{n+1}-2^{n+1}\\)</p>
<p>\\(\\displaystyle=3a_n-2^n-2^{n+1}\\)</p>
<p>\\(\\displaystyle=3a_n-3\\cdot2^n\\)</p>
<p>\\(\\displaystyle=3(a_n-2^n)=3b_n\\)</p>
<p>したがって \\(\\{b_n\\}\\) は等比数列である</p>
<p>初項は</p>
<p>\\(\\displaystyle b_1=1-2=-1\\)</p>
<p>よって</p>
<p>\\(\\displaystyle b_n=-3^{n-1}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=b_n+2^n=2^n-3^{n-1}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=a_n+(-1)^n n\\) によって定めるとき、\\(a_n\\) を求めよ",
        answer: "\\(\\displaystyle a_n=\\frac{(-1)^n n+3}{4}\\)",
        wrong: [
            "\\(\\displaystyle a_n=\\frac{(-1)^n n+1}{2}\\)",
            "\\(\\displaystyle a_n=\\frac{(-1)^{n-1}n+3}{4}\\)",
            "\\(\\displaystyle a_n=\\frac{(-1)^n(n+1)}{4}\\)"
        ],
        explanation: `
<p>この問題では \\((-1)^n\\) によって符号が交互に変化する</p>
<p>まず最初の項を書き出す</p>
<p>\\(\\displaystyle a_1=1\\)</p>
<p>\\(\\displaystyle a_2=1-1=0\\)</p>
<p>\\(\\displaystyle a_3=0+2=2\\)</p>
<p>\\(\\displaystyle a_4=2-3=-1\\)</p>
<p>\\(\\displaystyle a_5=-1+4=3\\)</p>
<p>したがって</p>
<p>\\(1,0,2,-1,3,\\cdots\\)</p>
<p>となる</p>
<p>偶数番目と奇数番目に分ける</p>
<p>\\(n=2m\\) のとき</p>
<p>\\(\\displaystyle a_{2m}=1-1+2-3+4-\\cdots-(2m-1)=1-m\\)</p>
<p>一方、\\(n=2m-1\\) のとき</p>
<p>\\(\\displaystyle a_{2m-1}=1-1+2-3+\\cdots+(2m-2)=m\\)</p>
<p>これを1つの式にまとめると</p>
<p>\\(\\displaystyle a_n=\\frac{(-1)^n n+3}{4}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=2,\\quad a_{n+1}=a_n\\left(1-\\displaystyle\\frac1{(n+1)^2}\\right)\\) によって定めるとき、\\(a_n\\) を求めよ",
        answer: "\\(\\displaystyle a_n=\\frac{n+1}{n}\\)",
        wrong: [
            "\\(\\displaystyle a_n=\\frac n{n+1}\\)",
            "\\(\\displaystyle a_n=\\frac{2n+1}{n}\\)",
            "\\(\\displaystyle a_n=\\frac{n+2}{n+1}\\)"
        ],
        explanation: `
<p>積の形の漸化式なので、まず何回も代入して積の形にする</p>
<p>\\(\\displaystyle a_n=2\\prod_{k=2}^{n}\\left(1-\\frac1{k^2}\\right)\\)</p>
<p>ここで</p>
<p>\\(\\displaystyle1-\\frac1{k^2}=\\frac{(k-1)(k+1)}{k^2}=\\frac{k-1}{k}\\cdot\\frac{k+1}{k}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=2\\left(\\frac12\\cdot\\frac32\\right)\\left(\\frac23\\cdot\\frac43\\right)\\cdots\\left(\\frac{n-1}{n}\\cdot\\frac{n+1}{n}\\right)\\)</p>
<p>ここで前半の積は</p>
<p>\\(\\displaystyle\\frac12\\cdot\\frac23\\cdot\\frac34\\cdots\\frac{n-1}{n}=\\frac1n\\)</p>
<p>後半の積は</p>
<p>\\(\\displaystyle\\frac32\\cdot\\frac43\\cdot\\frac54\\cdots\\frac{n+1}{n}=\\frac{n+1}{2}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle a_n=2\\cdot\\frac1n\\cdot\\frac{n+1}{2}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=\\frac{n+1}{n}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=2,\\quad a_{n+1}=2a_n+n\\) によって定めるとき、\\(a_n\\) を求めよ",
        answer: "\\(\\displaystyle a_n=3\\cdot2^n-n-2\\)",
        wrong: [
            "\\(\\displaystyle a_n=3\\cdot2^{n-1}-n-1\\)",
            "\\(\\displaystyle a_n=2^{n+1}-n-1\\)",
            "\\(\\displaystyle a_n=3\\cdot2^n+n-2\\)"
        ],
        explanation: `
<p>この問題も \\(n\\) を消すために、漸化式を少し変形する</p>
<p>\\(\\displaystyle a_{n+1}=2a_n+n\\)</p>
<p>ここで右辺の \\(n\\) と左辺の添字のずれを利用する</p>
<p>\\(\\displaystyle a_{n+1}+n+2=2a_n+2n+2=2(a_n+n+1)\\)</p>
<p>そこで</p>
<p>\\(\\displaystyle b_n=a_n+n+1\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=2b_n\\)</p>
<p>となる</p>
<p>初項は</p>
<p>\\(\\displaystyle b_1=a_1+1+1=4\\)</p>
<p>だから</p>
<p>\\(\\displaystyle b_n=4\\cdot2^{n-1}=2^{n+1}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n+n+1=2^{n+1}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle a_n=2^{n+1}-n-1\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle a_n=4\\cdot2^{n-1}-n-1\\)</p>
<p>となる</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=3,\\quad a_{n+1}-a_n=2^{n-1}\\) によって定めるとき、\\(\\displaystyle S_n=\\sum_{k=1}^{n}a_k\\) を求めよ",
        answer: "\\(\\displaystyle S_n=2^n+2n-1\\)",
        wrong: [
            "\\(\\displaystyle S_n=2^{n+1}+n-2\\)",
            "\\(\\displaystyle S_n=2^n+n-1\\)",
            "\\(\\displaystyle S_n=2^{n+1}-n-1\\)"
        ],
        explanation: `
<p>まず階差が与えられているので、これを足して \\(a_n\\) を求める</p>
<p>\\(\\displaystyle a_n=a_1+\\sum_{k=1}^{n-1}2^{k-1}\\)</p>
<p>初項が3なので</p>
<p>\\(\\displaystyle a_n=3+(1+2+\\cdots+2^{n-2})\\)</p>
<p>等比数列の和より</p>
<p>\\(\\displaystyle1+2+\\cdots+2^{n-2}=2^{n-1}-1\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=2^{n-1}+2\\)</p>
<p>よって</p>
<p>\\(\\displaystyle S_n=\\sum_{k=1}^{n}(2^{k-1}+2)\\)</p>
<p>それぞれ分けると</p>
<p>\\(\\displaystyle S_n=(1+2+\\cdots+2^{n-1})+2n\\)</p>
<p>前半は</p>
<p>\\(\\displaystyle1+2+\\cdots+2^{n-1}=2^n-1\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle S_n=2^n-1+2n\\)</p>
<p>よって</p>
<p>\\(\\displaystyle S_n=2^n+2n-1\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=a_n+(-1)^n(2n-1)\\) によって定めるとき、\\(a_n\\) を求めよ",
        answer: "\\(\\displaystyle a_n=\\begin{cases}n & n\\text{ が奇数のとき}\\\\2-n & n\\text{ が偶数のとき}\\end{cases}\\)",
        wrong: [
            "\\(\\displaystyle a_n=n\\)",
            "\\(\\displaystyle a_n=2-n\\)",
            "\\(\\displaystyle a_n=(-1)^n n\\)"
        ],
        explanation: `
<p>まず階差を書き出す</p>
<p>\\(\\displaystyle a_{n+1}-a_n=(-1)^n(2n-1)\\)</p>
<p>したがって階差は</p>
<p>\\(-1,3,-5,7,-9,\\cdots\\)</p>
<p>となる</p>
<p>ここで2項ずつまとめると</p>
<p>\\(\\displaystyle-1+3=2\\)</p>
<p>\\(\\displaystyle-5+7=2\\)</p>
<p>のように、2項ごとの和が常に2になる</p>
<p>したがって偶数番目と奇数番目に分けて考える</p>
<p>\\(n=2m+1\\) のとき、階差を \\(2m\\) 個足すことになる</p>
<p>2項ずつまとめれば \\(m\\) 組あるので</p>
<p>\\(\\displaystyle a_{2m+1}=1+2m=2m+1\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle a_n=n\\)</p>
<p>一方、\\(n=2m\\) のときは最後に負の階差が1つ残るので</p>
<p>\\(\\displaystyle a_{2m}=2-2m=2-n\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=\\begin{cases}n & n\\text{ が奇数のとき}\\\\2-n & n\\text{ が偶数のとき}\\end{cases}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\)、\\(\\{b_n\\}\\) を \\(a_1=1,\\quad b_1=3,\\quad a_{n+1}=2a_n+b_n,\\quad b_{n+1}=a_n+2b_n\\) によって定めるとき、\\(a_n\\)、\\(b_n\\) をそれぞれ \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle a_n=2\\cdot3^{n-1}-1,\\quad b_n=2\\cdot3^{n-1}+1\\)",
        wrong: [
            "\\(\\displaystyle a_n=3^{n-1}-1,\\quad b_n=3^{n-1}+1\\)",
            "\\(\\displaystyle a_n=2\\cdot3^n-1,\\quad b_n=2\\cdot3^n+1\\)",
            "\\(\\displaystyle a_n=2^n-1,\\quad b_n=2^n+1\\)"
        ],
        explanation: `
<p>2つの数列が同時に出てくる場合、まず和と差を考える</p>
<p>2つの漸化式を足すと</p>
<p>\\(\\displaystyle a_{n+1}+b_{n+1}=3a_n+3b_n=3(a_n+b_n)\\)</p>
<p>そこで</p>
<p>\\(\\displaystyle c_n=a_n+b_n\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle c_{n+1}=3c_n\\)</p>
<p>となる</p>
<p>初項は</p>
<p>\\(\\displaystyle c_1=1+3=4\\)</p>
<p>だから</p>
<p>\\(\\displaystyle c_n=4\\cdot3^{n-1}\\)</p>
<p>次に2つの漸化式を引く</p>
<p>\\(\\displaystyle a_{n+1}-b_{n+1}=a_n-b_n\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle d_n=a_n-b_n\\)</p>
<p>とおけば、\\(d_n\\) は一定である</p>
<p>初項は</p>
<p>\\(\\displaystyle d_1=1-3=-2\\)</p>
<p>なので</p>
<p>\\(\\displaystyle a_n-b_n=-2\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle a_n+b_n=4\\cdot3^{n-1}\\)</p>
<p>\\(\\displaystyle a_n-b_n=-2\\)</p>
<p>この2式を足すと</p>
<p>\\(\\displaystyle2a_n=4\\cdot3^{n-1}-2\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=2\\cdot3^{n-1}-1\\)</p>
<p>同様に</p>
<p>\\(\\displaystyle b_n=2\\cdot3^{n-1}+1\\)</p>
`
    },

    {
        question: "等差数列 \\(\\{a_n\\}\\) において、\\(a_3+a_7=18\\)、\\(a_4a_6=80\\) を満たすとする<br>このとき \\(a_5\\) の値を求めよ",
        answer: "9",
        wrong: [
            "8",
            "10",
            "11"
        ],
        explanation: `
<p>等差数列では、中央の項を基準に考えると非常に簡単になる</p>
<p>\\(a_5=x\\)、公差を \\(d\\) とおく</p>
<p>すると</p>
<p>\\(\\displaystyle a_3=x-2d\\)</p>
<p>\\(\\displaystyle a_7=x+2d\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_3+a_7=(x-2d)+(x+2d)=2x\\)</p>
<p>条件より</p>
<p>\\(\\displaystyle2x=18\\)</p>
<p>よって</p>
<p>\\(\\displaystyle x=9\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_5=9\\)</p>
<p>なお、2つ目の条件 \\(a_4a_6=80\\) は公差 \\(d\\) を決めるための条件であり、今回の \\(a_5\\) を求めるだけなら使わなくてもよい</p>
`
    },

    {
        question: "正の項からなる等比数列 \\(\\{a_n\\}\\) において、\\(a_2+a_3=6\\)、\\(a_4+a_5=24\\) を満たすとする<br>このとき \\(a_1\\) の値を求めよ",
        answer: "1",
        wrong: [
            "2",
            "3",
            "4"
        ],
        explanation: `
<p>初項を \\(a_1\\)、公比を \\(r\\) とおく</p>
<p>すると</p>
<p>\\(\\displaystyle a_2+a_3=a_1r+a_1r^2=a_1r(1+r)=6\\)</p>
<p>同様に</p>
<p>\\(\\displaystyle a_4+a_5=a_1r^3+a_1r^4=a_1r(1+r)r^2=24\\)</p>
<p>したがって、2つの式を割ると</p>
<p>\\(\\displaystyle r^2=4\\)</p>
<p>各項が正なので公比も正であり</p>
<p>\\(\\displaystyle r=2\\)</p>
<p>これを最初の条件に代入すると</p>
<p>\\(\\displaystyle a_1\\cdot2(1+2)=6\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle3a_1=3\\)</p>
<p>よって</p>
<p>\\(\\displaystyle a_1=1\\)</p>
`
    },

    {
        question: "\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k^2}{3^k}\\) とする<br>このとき \\(S_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle S_n=\\frac{3^{n+1}-n^2-3n-3}{2\\cdot3^n}\\)",
        wrong: [
            "\\(\\displaystyle S_n=\\frac{3^{n+1}-n^2-2n-3}{2\\cdot3^n}\\)",
            "\\(\\displaystyle S_n=\\frac{3^{n+1}-n^2-3n-2}{2\\cdot3^n}\\)",
            "\\(\\displaystyle S_n=\\frac{3^{n+1}-n^2-3n-3}{3^n}\\)"
        ],
        explanation: `
<p>先ほどの \\(2S_n-S_n\\) と同じ考え方で、今回は3倍して引く</p>
<p>\\(\\displaystyle S_n=\\frac13+\\frac4{3^2}+\\frac9{3^3}+\\cdots+\\frac{n^2}{3^n}\\)</p>
<p>3倍すると</p>
<p>\\(\\displaystyle3S_n=1+\\frac4{3}+\\frac9{3^2}+\\cdots+\\frac{n^2}{3^{n-1}}\\)</p>
<p>差をとると</p>
<p>\\(\\displaystyle2S_n=1+\\sum_{k=1}^{n-1}\\frac{(k+1)^2-k^2}{3^k}-\\frac{n^2}{3^n}\\)</p>
<p>\\((k+1)^2-k^2=2k+1\\) なので</p>
<p>\\(\\displaystyle2S_n=1+2\\sum_{k=1}^{n-1}\\frac{k}{3^k}+\\sum_{k=1}^{n-1}\\frac1{3^k}-\\frac{n^2}{3^n}\\)</p>
<p>それぞれの和を計算して整理すると</p>
<p>\\(\\displaystyle2S_n=3-\\frac{n^2+3n+3}{3^n}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle S_n=\\frac32-\\frac{n^2+3n+3}{2\\cdot3^n}\\)</p>
<p>分子をまとめれば</p>
<p>\\(\\displaystyle S_n=\\frac{3^{n+1}-n^2-3n-3}{2\\cdot3^n}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) の階差数列 \\(\\{a_{n+1}-a_n\\}\\) が等比数列をなし、\\(a_1=2\\)、\\(a_2-a_1=3\\)、\\(a_3-a_2=6\\) を満たすとする<br>このとき \\(a_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle a_n=3\\cdot2^{n-1}-1\\)",
        wrong: [
            "\\(\\displaystyle a_n=3\\cdot2^n-1\\)",
            "\\(\\displaystyle a_n=2^n+1\\)",
            "\\(\\displaystyle a_n=3\\cdot2^{n-1}+1\\)"
        ],
        explanation: `
<p>問題文ですでに階差数列が等比数列だと分かっているので、まず階差そのものを数列として考える</p>
<p>\\(\\displaystyle b_n=a_{n+1}-a_n\\)</p>
<p>条件より</p>
<p>\\(\\displaystyle b_1=3\\)</p>
<p>\\(\\displaystyle b_2=6\\)</p>
<p>したがって公比は2</p>
<p>よって</p>
<p>\\(\\displaystyle b_n=3\\cdot2^{n-1}\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle a_{n+1}-a_n=3\\cdot2^{n-1}\\)</p>
<p>これを \\(k=1\\) から \\(n-1\\) まで足すと</p>
<p>\\(\\displaystyle a_n-a_1=3\\sum_{k=1}^{n-1}2^{k-1}\\)</p>
<p>初項が2なので</p>
<p>\\(\\displaystyle a_n=2+3(1+2+\\cdots+2^{n-2})\\)</p>
<p>等比数列の和より</p>
<p>\\(\\displaystyle1+2+\\cdots+2^{n-2}=2^{n-1}-1\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=2+3(2^{n-1}-1)\\)</p>
<p>整理して</p>
<p>\\(\\displaystyle a_n=3\\cdot2^{n-1}-1\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_2=4,\\quad a_{n+2}=5a_{n+1}-6a_n\\) によって定めるとき、\\(a_{2026}\\) を \\(1000\\) で割った余りを求めよ",
        answer: "454",
        wrong: [
            "432",
            "443",
            "546"
        ],
        explanation: `
<p>この問題は2階の漸化式だが、右辺が非常に規則的なので、まず基本となる形を見つける</p>
<p>漸化式は</p>
<p>\\(\\displaystyle a_{n+2}=5a_{n+1}-6a_n\\)</p>
<p>ここで、係数5と6から</p>
<p>\\(5=2+3\\)、\\(6=2\\cdot3\\)</p>
<p>という関係が見える</p>
<p>したがって、数列は2と3の指数の組み合わせで表される形になる</p>
<p>実際、初期条件に合う形として</p>
<p>\\(\\displaystyle a_n=2\\cdot3^{n-1}-2^{n-1}\\)</p>
<p>を得ることができる</p>
<p>初項を確認すると</p>
<p>\\(\\displaystyle a_1=2-1=1\\)</p>
<p>また</p>
<p>\\(\\displaystyle a_2=2\\cdot3-2=4\\)</p>
<p>で条件を満たす</p>
<p>したがって</p>
<p>\\(\\displaystyle a_{2026}=2\\cdot3^{2025}-2^{2025}\\)</p>
<p>あとは1000を法として周期性を利用する</p>
<p>\\(\\displaystyle3^{2025}\\equiv443\\pmod{1000}\\)</p>
<p>\\(\\displaystyle2^{2025}\\equiv432\\pmod{1000}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle a_{2026}\\equiv2\\cdot443-432=454\\pmod{1000}\\)</p>
<p>したがって余りは</p>
<p>\\(\\displaystyle454\\)</p>
`
    },

    {
        question: "\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k^3}{2^k}\\) とする<br>このとき \\(S_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle S_n=26-\\frac{n^3+6n^2+18n+26}{2^n}\\)",
        wrong: [
            "\\(\\displaystyle S_n=26-\\frac{n^3+3n^2+9n+26}{2^n}\\)",
            "\\(\\displaystyle S_n=24-\\frac{n^3+6n^2+18n+24}{2^n}\\)",
            "\\(\\displaystyle S_n=26-\\frac{n^3+6n^2+12n+26}{2^n}\\)"
        ],
        explanation: `
<p>\\(k^3\\) が付いているので、これまでと同様に2倍して引く</p>
<p>\\(\\displaystyle2S_n-S_n=1+\\sum_{k=1}^{n-1}\\frac{(k+1)^3-k^3}{2^k}-\\frac{n^3}{2^n}\\)</p>
<p>ここで</p>
<p>\\(\\displaystyle(k+1)^3-k^3=3k^2+3k+1\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle S_n=1+3\\sum_{k=1}^{n-1}\\frac{k^2}{2^k}+3\\sum_{k=1}^{n-1}\\frac{k}{2^k}+\\sum_{k=1}^{n-1}\\frac1{2^k}-\\frac{n^3}{2^n}\\)</p>
<p>ここで必要なのは、すでに求めた \\(k\\) と \\(k^2\\) の和である</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}\\frac{k}{2^k}=2-\\frac{n+1}{2^{n-1}}\\)</p>
<p>また</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}\\frac{k^2}{2^k}=6-\\frac{n^2+2n+6}{2^{n-1}}\\)</p>
<p>さらに</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}\\frac1{2^k}=1-\\frac1{2^{n-1}}\\)</p>
<p>これらを代入して整理すると</p>
<p>\\(\\displaystyle S_n=26-\\frac{n^3+6n^2+18n+26}{2^n}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=2a_n+n2^n\\) によって定めるとき、\\(a_n\\) を求めよ、さらに \\(\\displaystyle\\sum_{k=1}^{n}\\frac{a_k}{2^k}\\) を求めよ",
        answer: "\\(\\displaystyle a_n=2^{n-2}(n^2-n+2),\\quad \\sum_{k=1}^{n}\\frac{a_k}{2^k}=\\frac{n^3+5n}{12}+\\frac12\\)",
        wrong: [
            "\\(\\displaystyle a_n=2^{n-2}(n^2+n+2),\\quad \\sum_{k=1}^{n}\\frac{a_k}{2^k}=\\frac{n^3+3n}{12}+\\frac12\\)",
            "\\(\\displaystyle a_n=2^{n-1}(n^2-n+1),\\quad \\sum_{k=1}^{n}\\frac{a_k}{2^k}=\\frac{n^3+5n}{12}\\)",
            "\\(\\displaystyle a_n=2^{n-2}(n^2-2n+2),\\quad \\sum_{k=1}^{n}\\frac{a_k}{2^k}=\\frac{n^3+n}{12}+\\frac12\\)"
        ],
        explanation: `
<p>まず \\(2^n\\) が含まれているので、漸化式を \\(2^{n+1}\\) で割る</p>
<p>\\(\\displaystyle\\frac{a_{n+1}}{2^{n+1}}=\\frac{a_n}{2^n}+\\frac n2\\)</p>
<p>そこで</p>
<p>\\(\\displaystyle b_n=\\frac{a_n}{2^n}\\)</p>
<p>とおくと</p>
<p>\\(\\displaystyle b_{n+1}=b_n+\\frac n2\\)</p>
<p>となる</p>
<p>これは差が \\(\\frac n2\\) である数列なので、順番に足せばよい</p>
<p>\\(\\displaystyle b_1=\\frac12\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_n=\\frac12+\\frac12\\sum_{k=1}^{n-1}k\\)</p>
<p>等差数列の和より</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}k=\\frac{n(n-1)}2\\)</p>
<p>よって</p>
<p>\\(\\displaystyle b_n=\\frac12+\\frac{n(n-1)}4=\\frac{n^2-n+2}{4}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=2^n\\cdot\\frac{n^2-n+2}{4}\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle a_n=2^{n-2}(n^2-n+2)\\)</p>
<p>さらに</p>
<p>\\(\\displaystyle\\frac{a_k}{2^k}=\\frac{k^2-k+2}{4}\\)</p>
<p>なので</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}\\frac{a_k}{2^k}=\\frac14\\sum_{k=1}^{n}(k^2-k+2)\\)</p>
<p>それぞれの和を計算すると</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}k^2=\\frac{n(n+1)(2n+1)}6\\)</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}k=\\frac{n(n+1)}2\\)</p>
<p>したがって整理して</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}\\frac{a_k}{2^k}=\\frac{n^3+5n}{12}+\\frac12\\)</p>
`
    },

    {
        question: "\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{k}{2^k}\\)、\\(\\displaystyle T_n=\\sum_{k=1}^{n}\\frac{S_k}{2^k}\\) とする<br>このとき \\(T_n\\) を \\(n\\) の式で表せ",
        answer: "\\(\\displaystyle T_n=\\frac{26}{9}-\\frac4{2^n}+\\frac{3n+10}{9\\cdot4^n}\\)",
        wrong: [
            "\\(\\displaystyle T_n=2-\\frac{n+2}{2^n}\\)",
            "\\(\\displaystyle T_n=\\frac{26}{9}-\\frac2{2^n}+\\frac{3n+10}{9\\cdot4^n}\\)",
            "\\(\\displaystyle T_n=\\frac{26}{9}-\\frac4{4^n}+\\frac{3n+10}{9\\cdot2^n}\\)"
        ],
        explanation: `
<p>まず内側の和 \\(S_k\\) を求める</p>
<p>\\(\\displaystyle S_k=2-\\frac{k+2}{2^k}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle T_n=\\sum_{k=1}^{n}\\frac1{2^k}\\left(2-\\frac{k+2}{2^k}\\right)\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle T_n=2\\sum_{k=1}^{n}\\frac1{2^k}-\\sum_{k=1}^{n}\\frac{k+2}{4^k}\\)</p>
<p>第1項は等比数列の和から求められる</p>
<p>\\(\\displaystyle2\\sum_{k=1}^{n}\\frac1{2^k}=2\\left(1-\\frac1{2^n}\\right)=2-\\frac1{2^{n-1}}\\)</p>
<p>第2項は \\(k\\) の付いた等比型の和と、単純な等比数列の和に分ける</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}\\frac{k+2}{4^k}=\\sum_{k=1}^{n}\\frac{k}{4^k}+2\\sum_{k=1}^{n}\\frac1{4^k}\\)</p>
<p>ここで等比型の和の公式を使って整理すると</p>
<p>\\(\\displaystyle T_n=\\frac{26}{9}-\\frac4{2^n}+\\frac{3n+10}{9\\cdot4^n}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=\\displaystyle\\frac{2n+1}{n}a_n\\) によって定めるとき、\\(\\displaystyle\\frac{a_n}{4^n}\\) を求めよ",
        answer: "\\(\\displaystyle\\frac{a_n}{4^n}=\\frac{(2n)!}{2^{3n}(n!)^2}\\)",
        wrong: [
            "\\(\\displaystyle\\frac{a_n}{4^n}=\\frac{(2n)!}{2^{2n}(n!)^2}\\)",
            "\\(\\displaystyle\\frac{a_n}{4^n}=\\frac{(2n+1)!}{2^{3n}(n!)^2}\\)",
            "\\(\\displaystyle\\frac{a_n}{4^n}=\\frac{(2n)!}{2^n(n!)^2}\\)"
        ],
        explanation: `
<p>漸化式を何回も使うと積の形になる</p>
<p>\\(\\displaystyle a_n=a_1\\prod_{k=1}^{n-1}\\frac{2k+1}{k}\\)</p>
<p>初項が1なので</p>
<p>\\(\\displaystyle a_n=\\prod_{k=1}^{n-1}\\frac{2k+1}{k}\\)</p>
<p>分子は</p>
<p>\\(3\\cdot5\\cdot7\\cdots(2n-1)\\)</p>
<p>となる</p>
<p>奇数の積について</p>
<p>\\(\\displaystyle1\\cdot3\\cdot5\\cdots(2n-1)=\\frac{(2n)!}{2^n n!}\\)</p>
<p>が成り立つ</p>
<p>したがって</p>
<p>\\(\\displaystyle3\\cdot5\\cdots(2n-1)=\\frac{(2n)!}{2^n n!}\\)</p>
<p>分母は</p>
<p>\\(\\displaystyle1\\cdot2\\cdot3\\cdots(n-1)=(n-1)!\\)</p>
<p>なので、これを整理すると</p>
<p>\\(\\displaystyle a_n=\\frac{(2n)!}{2^n(n!)^2}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle\\frac{a_n}{4^n}=\\frac{(2n)!}{2^{3n}(n!)^2}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=\\displaystyle\\frac{n+2}{n+1}a_n+\\frac1{n+1}\\) によって定めるとき、\\(a_n\\) を求めよ",
        answer: "\\(\\displaystyle a_n=n\\)",
        wrong: [
            "\\(\\displaystyle a_n=\\frac{n(n+1)}2\\)",
            "\\(\\displaystyle a_n=\\frac{n(n+3)}2\\)",
            "\\(\\displaystyle a_n=\\frac{(n+1)^2}{2}\\)"
        ],
        explanation: `
<p>係数 \\(\\displaystyle\\frac{n+2}{n+1}\\) があるので、この係数を消すように変形する</p>
<p>\\(\\displaystyle b_n=\\frac{a_n}{n+1}\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=\\frac{a_{n+1}}{n+2}\\)</p>
<p>漸化式を代入すると</p>
<p>\\(\\displaystyle b_{n+1}=\\frac{a_n}{n+1}+\\frac1{(n+1)(n+2)}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_{n+1}=b_n+\\frac1{(n+1)(n+2)}\\)</p>
<p>ここで</p>
<p>\\(\\displaystyle\\frac1{(n+1)(n+2)}=\\frac1{n+1}-\\frac1{n+2}\\)</p>
<p>なので、階差を足すと</p>
<p>\\(\\displaystyle b_n=\\frac12+\\sum_{k=1}^{n-1}\\left(\\frac1{k+1}-\\frac1{k+2}\\right)\\)</p>
<p>途中の項が消えるので</p>
<p>\\(\\displaystyle b_n=\\frac12+\\frac12-\frac1{n+1}=1-\frac1{n+1}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_n=\\frac n{n+1}\\)</p>
<p>もともと \\(\\displaystyle b_n=\\frac{a_n}{n+1}\\) なので</p>
<p>\\(\\displaystyle a_n=(n+1)\\frac n{n+1}=n\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=2a_n+n\\) によって定めるとき、\\(\\displaystyle\\frac{a_n}{2^n}\\) を求めよ",
        answer: "\\(\\displaystyle\\frac{a_n}{2^n}=\\frac n2-\\frac12+\\frac1{2^n}\\)",
        wrong: [
            "\\(\\displaystyle\\frac{a_n}{2^n}=\\frac n2-\\frac12\\)",
            "\\(\\displaystyle\\frac{a_n}{2^n}=\\frac{n+1}{2}\\)",
            "\\(\\displaystyle\\frac{a_n}{2^n}=\\frac n2+\\frac12\\)"
        ],
        explanation: `
<p>この問題では、最初から \\(\\displaystyle\\frac{a_n}{2^n}\\) を求めることが目的なので、漸化式をその形に合わせる</p>
<p>\\(\\displaystyle a_{n+1}=2a_n+n\\)</p>
<p>両辺を \\(2^{n+1}\\) で割ると</p>
<p>\\(\\displaystyle\\frac{a_{n+1}}{2^{n+1}}=\\frac{a_n}{2^n}+\\frac{n}{2^{n+1}}\\)</p>
<p>そこで</p>
<p>\\(\\displaystyle b_n=\\frac{a_n}{2^n}\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=b_n+\\frac{n}{2^{n+1}}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_n=b_1+\\sum_{k=1}^{n-1}\\frac{k}{2^{k+1}}\\)</p>
<p>初項は</p>
<p>\\(\\displaystyle b_1=\\frac12\\)</p>
<p>また</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}\\frac{k}{2^k}=2-\\frac{n+1}{2^{n-1}}\\)</p>
<p>なので</p>
<p>\\(\\displaystyle b_n=\\frac12+\\frac12\\left(2-\\frac{n+1}{2^{n-1}}\\right)\\)</p>
<p>整理すると</p>
<p>\\(\\displaystyle b_n=\\frac32-\\frac{n+1}{2^n}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle\\frac{a_n}{2^n}=\\frac32-\\frac{n+1}{2^n}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=2a_n+n\\) によって定めるとき、\\(a_n\\) の一般項を求め、さらに \\(\\displaystyle\\sum_{k=1}^{n}\\frac{a_k}{2^k}\\) を求めよ",
        answer: "\\(\\displaystyle a_n=2^{n+1}-n-1,\\quad \\sum_{k=1}^{n}\\frac{a_k}{2^k}=n+\\frac12-\\frac1{2^n}\\)",
        wrong: [
            "\\(\\displaystyle a_n=2^{n+1}-n-2,\\quad \\sum_{k=1}^{n}\\frac{a_k}{2^k}=n-\\frac12-\\frac1{2^n}\\)",
            "\\(\\displaystyle a_n=2^n-n-1,\\quad \\sum_{k=1}^{n}\\frac{a_k}{2^k}=n+\\frac12-\\frac1{2^{n-1}}\\)",
            "\\(\\displaystyle a_n=2^{n+1}+n-1,\\quad \\sum_{k=1}^{n}\\frac{a_k}{2^k}=n+\\frac12+\\frac1{2^n}\\)"
        ],
        explanation: `
<p>まず一般項を求める</p>
<p>漸化式</p>
<p>\\(\\displaystyle a_{n+1}=2a_n+n\\)</p>
<p>に対して</p>
<p>\\(\\displaystyle b_n=a_n+n+1\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=a_{n+1}+n+2\\)</p>
<p>\\(\\displaystyle=2a_n+n+n+2\\)</p>
<p>\\(\\displaystyle=2(a_n+n+1)=2b_n\\)</p>
<p>また</p>
<p>\\(\\displaystyle b_1=1+1+1=3\\)</p>
<p>なので</p>
<p>\\(\\displaystyle b_n=3\\cdot2^{n-1}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=3\\cdot2^{n-1}-n-1\\)</p>
<p>ここから和を求める</p>
<p>\\(\\displaystyle\\frac{a_k}{2^k}=\\frac32-\\frac{k+1}{2^k}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}\\frac{a_k}{2^k}=\\frac32n-\\sum_{k=1}^{n}\\frac{k+1}{2^k}\\)</p>
<p>この式を整理すると</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n}\\frac{a_k}{2^k}=n+\\frac12-\\frac1{2^n}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_{n+1}=\\displaystyle\\frac{a_n}{1+a_n}\\) によって定めるとき、\\(\\displaystyle S_n=\\sum_{k=1}^{n}a_k\\) を求めよ",
        answer: "\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac1k\\)",
        wrong: [
            "\\(\\displaystyle S_n=n\\)",
            "\\(\\displaystyle S_n=\\frac{n+1}{2}\\)",
            "\\(\\displaystyle S_n=2-\\frac1n\\)"
        ],
        explanation: `
<p>分母に \\(1+a_n\\) があるので、逆数をとると非常に簡単になる</p>
<p>\\(\\displaystyle\\frac1{a_{n+1}}=\\frac{1+a_n}{a_n}=\\frac1{a_n}+1\\)</p>
<p>そこで</p>
<p>\\(\\displaystyle b_n=\\frac1{a_n}\\)</p>
<p>とおくと</p>
<p>\\(\\displaystyle b_{n+1}=b_n+1\\)</p>
<p>となる</p>
<p>これは公差1の等差数列である</p>
<p>\\(\\displaystyle b_1=1\\)</p>
<p>だから</p>
<p>\\(\\displaystyle b_n=n\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=\\frac1n\\)</p>
<p>よって</p>
<p>\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac1k\\)</p>
<p>この和は調和数と呼ばれるもので、一般にはこれ以上簡単な有限和の式にはならない</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_2=2,\\quad a_{n+2}-3a_{n+1}+2a_n=2^n\\) によって定める<br>\\(b_n=a_{n+1}-a_n\\) とおくとき、次の問いに答えよ<br>(1) \\(b_n\\) の一般項を求めよ<br>(2) \\(a_n\\) の一般項を求めよ<br>(3) \\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{a_k}{2^k}\\) を求めよ",
        answer: "(1) \\(\\displaystyle b_n=n2^{n-1}\\)<br>(2) \\(\\displaystyle a_n=2+(n-2)2^{n-1}\\)<br>(3) \\(\\displaystyle S_n=\\frac{n^2-3n+4}{2}-\\frac1{2^{n-1}}\\)",
        wrong: [
            "(1) \\(\\displaystyle b_n=(n-1)2^{n-1}\\)<br>(2) \\(\\displaystyle a_n=1+(n-2)2^{n-1}\\)<br>(3) \\(\\displaystyle S_n=\\frac{n^2-3n+2}{2}-\\frac1{2^{n-1}}\\)",
            "(1) \\(\\displaystyle b_n=n2^n\\)<br>(2) \\(\\displaystyle a_n=2+(n-2)2^n\\)<br>(3) \\(\\displaystyle S_n=\\frac{n^2-3n+4}{2}-\\frac1{2^n}\\)",
            "(1) \\(\\displaystyle b_n=2^{n-1}\\)<br>(2) \\(\\displaystyle a_n=2+(n-1)2^{n-1}\\)<br>(3) \\(\\displaystyle S_n=\\frac{n^2-n+4}{2}-\\frac1{2^{n-1}}\\)"
        ],
        explanation: `
<p>この問題は、2階の漸化式を階差数列に変換することが最大のポイントである</p>
<p>まず</p>
<p>\\(\\displaystyle b_n=a_{n+1}-a_n\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=a_{n+2}-a_{n+1}\\)</p>
<p>である</p>
<p>もとの漸化式を</p>
<p>\\(\\displaystyle a_{n+2}-3a_{n+1}+2a_n=2^n\\)</p>
<p>と書き、左辺を差の形に整理すると</p>
<p>\\(\\displaystyle(a_{n+2}-a_{n+1})-2(a_{n+1}-a_n)=2^n\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_{n+1}-2b_n=2^n\\)</p>
<p>となる</p>
<p>ここで右辺に \\(2^n\\) があるので、\\(b_n\\) から \\(2^{n-1}\\) を取り出す</p>
<p>\\(\\displaystyle c_n=\\frac{b_n}{2^{n-1}}\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_n=c_n2^{n-1}\\)</p>
<p>\\(\\displaystyle b_{n+1}=c_{n+1}2^n\\)</p>
<p>だから</p>
<p>\\(\\displaystyle c_{n+1}2^n-2c_n2^{n-1}=2^n\\)</p>
<p>すなわち</p>
<p>\\(\\displaystyle(c_{n+1}-c_n)2^n=2^n\\)</p>
<p>よって</p>
<p>\\(\\displaystyle c_{n+1}-c_n=1\\)</p>
<p>したがって \\(\\{c_n\\}\\) は等差数列</p>
<p>また</p>
<p>\\(\\displaystyle b_1=a_2-a_1=1\\)</p>
<p>なので</p>
<p>\\(\\displaystyle c_1=1\\)</p>
<p>よって</p>
<p>\\(\\displaystyle c_n=n\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_n=n2^{n-1}\\)</p>
<p>次に</p>
<p>\\(\\displaystyle a_{n+1}-a_n=n2^{n-1}\\)</p>
<p>なので、これを順に足す</p>
<p>\\(\\displaystyle a_n=a_1+\\sum_{k=1}^{n-1}k2^{k-1}\\)</p>
<p>ここで</p>
<p>\\(\\displaystyle\\sum_{k=1}^{m}k2^{k-1}=1+(m-1)2^m\\)</p>
<p>だから、\\(m=n-1\\) とすると</p>
<p>\\(\\displaystyle a_n=1+1+(n-2)2^{n-1}\\)</p>
<p>よって</p>
<p>\\(\\displaystyle a_n=2+(n-2)2^{n-1}\\)</p>
<p>最後に</p>
<p>\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{a_k}{2^k}\\)</p>
<p>なので</p>
<p>\\(\\displaystyle\\frac{a_k}{2^k}=\\frac1{2^{k-1}}+\\frac{k-2}{2}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle S_n=\\sum_{k=1}^{n}\\frac1{2^{k-1}}+\\frac12\\sum_{k=1}^{n}(k-2)\\)</p>
<p>前半は</p>
<p>\\(\\displaystyle2-\\frac1{2^{n-1}}\\)</p>
<p>後半は</p>
<p>\\(\\displaystyle\\frac12\\left(\\frac{n(n+1)}2-2n\\right)\\)</p>
<p>整理すると</p>
<p>\\(\\displaystyle S_n=\\frac{n^2-3n+4}{2}-\\frac1{2^{n-1}}\\)</p>
`
    },

    {
        question: "数列 \\(\\{a_n\\}\\) を \\(a_1=1,\\quad a_2=2,\\quad a_{n+2}=4a_{n+1}-4a_n+2^n\\) によって定めるとき、\\(a_n\\) を求めよ",
        answer: "\\(\\displaystyle a_n=2^{n-3}(n^2-3n+6)\\)",
        wrong: [
            "\\(\\displaystyle a_n=2^{n-1}+n2^{n-2}\\)",
            "\\(\\displaystyle a_n=2^{n-2}(n^2-2n+2)\\)",
            "\\(\\displaystyle a_n=2^{n-3}(n^2-3n+4)\\)"
        ],
        explanation: `
<p>この問題では、いきなり \\(a_n\\) を求めるのではなく、漸化式の左辺に同じ形を作る</p>
<p>もとの式は</p>
<p>\\(\\displaystyle a_{n+2}=4a_{n+1}-4a_n+2^n\\)</p>
<p>整理すると</p>
<p>\\(\\displaystyle a_{n+2}-2a_{n+1}=2(a_{n+1}-2a_n)+2^n\\)</p>
<p>そこで</p>
<p>\\(\\displaystyle b_n=a_{n+1}-2a_n\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle b_{n+1}=2b_n+2^n\\)</p>
<p>初項は</p>
<p>\\(\\displaystyle b_1=a_2-2a_1=0\\)</p>
<p>ここで右辺に \\(2^n\\) があるので</p>
<p>\\(\\displaystyle c_n=\\frac{b_n}{2^n}\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle c_{n+1}=c_n+\\frac12\\)</p>
<p>よって</p>
<p>\\(\\displaystyle c_n=\\frac{n-1}{2}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle b_n=(n-1)2^{n-1}\\)</p>
<p>つまり</p>
<p>\\(\\displaystyle a_{n+1}-2a_n=(n-1)2^{n-1}\\)</p>
<p>ここでも \\(2^n\\) が現れるので</p>
<p>\\(\\displaystyle d_n=\\frac{a_n}{2^n}\\)</p>
<p>とおく</p>
<p>すると</p>
<p>\\(\\displaystyle d_{n+1}-d_n=\\frac{n-1}{4}\\)</p>
<p>また</p>
<p>\\(\\displaystyle d_1=\\frac12\\)</p>
<p>だから</p>
<p>\\(\\displaystyle d_n=\\frac12+\\frac14\\sum_{k=1}^{n-1}(k-1)\\)</p>
<p>ここで</p>
<p>\\(\\displaystyle\\sum_{k=1}^{n-1}(k-1)=\\frac{(n-2)(n-1)}2\\)</p>
<p>なので</p>
<p>\\(\\displaystyle d_n=\\frac12+\\frac{(n-2)(n-1)}8\\)</p>
<p>整理すると</p>
<p>\\(\\displaystyle d_n=\\frac{n^2-3n+6}{8}\\)</p>
<p>したがって</p>
<p>\\(\\displaystyle a_n=2^nd_n=2^{n-3}(n^2-3n+6)\\)</p>
`
    }

];
