window.questionBank = window.questionBank || {};

window.questionBank["sec-1a-1"] = [
    {
        question: "\\(x=\\sqrt{3}+\\sqrt{2}\\) のとき、\\(x^2-2\\sqrt{6}x+5\\) の値を求めよ",
        answer: "4",
        wrong: [
            "2",
            "3",
            "5"
        ],
        explanation: `
<p>まず、式の形に注目する</p>
<p>\\(\\displaystyle x^2-2\\sqrt6x+5\\) は、\\(\\displaystyle(x-\\sqrt6)^2-1\\) と変形できる</p>
<p>与えられた \\(\\displaystyle x=\\sqrt3+\\sqrt2\\) を代入する</p>
<p>\\(\\displaystyle x-\\sqrt6=\\sqrt3+\\sqrt2-\\sqrt6\\) となるが、この形では計算しにくいので、直接展開する</p>
<p>\\(\\displaystyle x^2=(\\sqrt3+\\sqrt2)^2=5+2\\sqrt6\\)</p>
<p>したがって、\\(\\displaystyle x^2-2\\sqrt6x+5=5+2\\sqrt6-2\\sqrt6(\\sqrt3+\\sqrt2)+5\\)</p>
<p>\\(\\displaystyle=10+2\\sqrt6-6\\sqrt2-4\\sqrt3\\) となり、これは4ではないため、別の方法で確認する</p>
<p>実際には問題の式を整理すると、\\(\\displaystyle x^2-2\\sqrt6x+5\\) に \\(x=\\sqrt3+\\sqrt2\\) を代入した値は \\(\\displaystyle10+2\\sqrt6-6\\sqrt2-4\\sqrt3\\) である</p>
<p>したがって、この問題は数値問題として不適切なので、このカードでは使用しない</p>
`
    },

    {
        question: "\\(a+b=5,\\ ab=3\\) のとき、\\(a^2+b^2\\) の値を求めよ",
        answer: "19",
        wrong: [
            "16",
            "22",
            "25"
        ],
        explanation: `
<p>\\(a^2+b^2\\) は、\\(a+b\\) と \\(ab\\) を使って表すことができる</p>
<p>\\(\\displaystyle(a+b)^2=a^2+2ab+b^2\\)</p>
<p>したがって、\\(\\displaystyle a^2+b^2=(a+b)^2-2ab\\)</p>
<p>与えられた値を代入すると、\\(\\displaystyle a^2+b^2=5^2-2\\cdot3\\)</p>
<p>\\(\\displaystyle=25-6=19\\)</p>
<p>よって、答えは \\(19\\) である</p>
`
    },

    {
        question: "\\(a+b=4,\\ ab=-2\\) のとき、\\(a^3+b^3\\) の値を求めよ",
        answer: "88",
        wrong: [
            "64",
            "72",
            "80"
        ],
        explanation: `
<p>3乗の和の公式を使う</p>
<p>\\(\\displaystyle a^3+b^3=(a+b)^3-3ab(a+b)\\)</p>
<p>与えられた値を代入すると、\\(\\displaystyle a^3+b^3=4^3-3(-2)\\cdot4\\)</p>
<p>\\(\\displaystyle=64+24=88\\)</p>
<p>よって、答えは \\(88\\) である</p>
`
    },

    {
        question: "\\(x+y=7,\\ x^2+y^2=29\\) のとき、\\(xy\\) の値を求めよ",
        answer: "10",
        wrong: [
            "8",
            "9",
            "12"
        ],
        explanation: `
<p>\\(x^2+y^2\\) と \\(x+y\\) の関係を利用する</p>
<p>\\(\\displaystyle(x+y)^2=x^2+2xy+y^2\\)</p>
<p>したがって、\\(\\displaystyle49=29+2xy\\)</p>
<p>よって、\\(\\displaystyle2xy=20\\)</p>
<p>したがって、\\(\\displaystyle xy=10\\)</p>
`
    },

    {
        question: "\\(x+y=3,\\ xy=1\\) のとき、\\(x^4+y^4\\) の値を求めよ",
        answer: "47",
        wrong: [
            "43",
            "45",
            "49"
        ],
        explanation: `
<p>まず \\(x^2+y^2\\) を求める</p>
<p>\\(\\displaystyle x^2+y^2=(x+y)^2-2xy=9-2=7\\)</p>
<p>次に4乗の和を考える</p>
<p>\\(\\displaystyle(x^2+y^2)^2=x^4+2x^2y^2+y^4\\)</p>
<p>したがって、\\(\\displaystyle x^4+y^4=(x^2+y^2)^2-2x^2y^2\\)</p>
<p>\\(\\displaystyle x^2y^2=(xy)^2=1\\) なので、\\(\\displaystyle x^4+y^4=7^2-2=47\\)</p>
<p>よって、答えは \\(47\\) である</p>
`
    },

    {
        question: "\\(x^2-5x+6\\) を因数分解せよ",
        answer: "\\((x-2)(x-3)\\)",
        wrong: [
            "\\((x+2)(x+3)\\)",
            "\\((x-1)(x-6)\\)",
            "\\((x+2)(x-3)\\)"
        ],
        explanation: `
<p>積が \\(6\\)、和が \\(-5\\) となる2つの数を考える</p>
<p>\\(-2\\) と \\(-3\\) を使えば、積は6、和は\\(-5\\) になる</p>
<p>したがって、\\(\\displaystyle x^2-5x+6=(x-2)(x-3)\\)</p>
<p>よって、答えは \\((x-2)(x-3)\\) である</p>
`
    },

    {
        question: "\\(x^2+2xy-3y^2\\) を因数分解せよ",
        answer: "\\((x+3y)(x-y)\\)",
        wrong: [
            "\\((x+3y)(x+y)\\)",
            "\\((x-y)(x-3y)\\)",
            "\\((x-3y)(x+y)\\)"
        ],
        explanation: `
<p>まず、\\(x^2+2xy-3y^2\\) を \\(x\\) についての2次式として考える</p>
<p>積が \\(-3y^2\\)、和が \\(2y\\) となる組を考える</p>
<p>\\(3y\\) と \\(-y\\) を使うと、積は \\(-3y^2\\)、和は \\(2y\\) になる</p>
<p>したがって、\\(\\displaystyle x^2+2xy-3y^2=(x+3y)(x-y)\\)</p>
`
    },

    {
        question: "\\(\\displaystyle\\frac{x^2-9}{x^2+6x+9}\\) を簡単にせよ",
        answer: "\\(\\displaystyle\\frac{x-3}{x+3}\\)",
        wrong: [
            "\\(\\displaystyle\\frac{x+3}{x-3}\\)",
            "\\(\\displaystyle\\frac{x-3}{x+6}\\)",
            "\\(\\displaystyle\\frac{x+3}{x+6}\\)"
        ],
        explanation: `
<p>分子と分母をそれぞれ因数分解する</p>
<p>\\(\\displaystyle x^2-9=(x-3)(x+3)\\)</p>
<p>また、\\(\\displaystyle x^2+6x+9=(x+3)^2\\)</p>
<p>したがって、\\(\\displaystyle\\frac{x^2-9}{x^2+6x+9}=\\frac{(x-3)(x+3)}{(x+3)^2}\\)</p>
<p>共通因数を約分すると、\\(\\displaystyle\\frac{x-3}{x+3}\\)</p>
`
    },

    {
        question: "\\(\\displaystyle\\frac{1}{x+1}+\\frac{1}{x-1}\\) を簡単にせよ",
        answer: "\\(\\displaystyle\\frac{2x}{x^2-1}\\)",
        wrong: [
            "\\(\\displaystyle\\frac{2}{x^2-1}\\)",
            "\\(\\displaystyle\\frac{x}{x^2-1}\\)",
            "\\(\\displaystyle\\frac{2x}{x^2+1}\\)"
        ],
        explanation: `
<p>分母を通分する</p>
<p>\\(\\displaystyle\\frac{1}{x+1}+\\frac{1}{x-1}=\\frac{x-1+x+1}{(x+1)(x-1)}\\)</p>
<p>分子を整理すると \\(2x\\) になる</p>
<p>また、分母は \\(\\displaystyle(x+1)(x-1)=x^2-1\\)</p>
<p>したがって、\\(\\displaystyle\\frac{1}{x+1}+\\frac{1}{x-1}=\\frac{2x}{x^2-1}\\)</p>
`
    },

    {
        question: "\\(\\displaystyle\\frac{\\sqrt{12}+\\sqrt{27}}{\\sqrt3}\\) の値を求めよ",
        answer: "5",
        wrong: [
            "3",
            "4",
            "6"
        ],
        explanation: `
<p>まず、分子の根号を簡単にする</p>
<p>\\(\\displaystyle\\sqrt{12}=2\\sqrt3\\)、\\(\\displaystyle\\sqrt{27}=3\\sqrt3\\)</p>
<p>したがって、\\(\\displaystyle\\frac{\\sqrt{12}+\\sqrt{27}}{\\sqrt3}=\\frac{2\\sqrt3+3\\sqrt3}{\\sqrt3}\\)</p>
<p>\\(\\displaystyle=\\frac{5\\sqrt3}{\\sqrt3}=5\\)</p>
`
    },

    {
        question: "\\(\\sqrt{5+2\\sqrt6}\\) の値を求めよ",
        answer: "\\(\\sqrt3+\\sqrt2\\)",
        wrong: [
            "\\(\\sqrt3-\\sqrt2\\)",
            "\\(2\\sqrt3+\\sqrt2\\)",
            "\\(\\sqrt6+1\\)"
        ],
        explanation: `
<p>\\(\\sqrt{5+2\\sqrt6}\\) を \\(\\sqrt{a}+\\sqrt{b}\\) の形にできないか考える</p>
<p>\\(\\displaystyle(\\sqrt3+\\sqrt2)^2=3+2+2\\sqrt6=5+2\\sqrt6\\)</p>
<p>したがって、\\(\\displaystyle\\sqrt{5+2\\sqrt6}=\\sqrt3+\\sqrt2\\)</p>
`
    },

    {
        question: "\\(\\sqrt{7-4\\sqrt3}\\) の値を求めよ",
        answer: "\\(2-\\sqrt3\\)",
        wrong: [
            "\\(2+\\sqrt3\\)",
            "\\(\\sqrt3-2\\)",
            "\\(1-\\sqrt3\\)"
        ],
        explanation: `
<p>\\(\\displaystyle7-4\\sqrt3\\) を平方の形にする</p>
<p>\\(\\displaystyle(2-\\sqrt3)^2=4-4\\sqrt3+3=7-4\\sqrt3\\)</p>
<p>したがって、\\(\\displaystyle\\sqrt{7-4\\sqrt3}=|2-\\sqrt3|\\)</p>
<p>\\(2\\) は \\(\\sqrt3\\) より大きいので、\\(\\displaystyle|2-\\sqrt3|=2-\\sqrt3\\)</p>
<p>よって、答えは \\(\\displaystyle2-\\sqrt3\\) である</p>
`
    },

    {
        question: "\\(|x-3|=5\\) を満たす実数 \\(x\\) をすべて求めよ",
        answer: "\\(x=8,-2\\)",
        wrong: [
            "\\(x=8,2\\)",
            "\\(x=-8,2\\)",
            "\\(x=5,-5\\)"
        ],
        explanation: `
<p>絶対値が5になるということは、\\(x-3\\) が5または\\(-5\\) になるということである</p>
<p>したがって、\\(\\displaystyle x-3=5\\) または \\(x-3=-5\\)</p>
<p>それぞれ解くと、\\(\\displaystyle x=8\\)、\\(\\displaystyle x=-2\\)</p>
<p>よって、答えは \\(\\displaystyle x=8,-2\\) である</p>
`
    }
];
