window.questionBank = window.questionBank || {};

window.questionBank["sec-3c-4"] = [
    {
        question: "三角形 \\(ABC\\) において、\\(\\overrightarrow{AB}=\\overrightarrow{a},\\ \\overrightarrow{AC}=\\overrightarrow{b}\\) とする　\\(|\\overrightarrow{a}|=5,\\ |\\overrightarrow{b}|=7,\\ \\overrightarrow{a}\\cdot\\overrightarrow{b}=14\\) であるとき、三角形 \\(ABC\\) の面積を求めよ",
        answer: "\\(\\displaystyle\\frac{7\\sqrt{21}}{2}\\)",
        wrong: [
            "\\(\\displaystyle\\frac{7\\sqrt{3}}{2}\\)",
            "\\(7\\sqrt{21}\\)",
            "\\(\\displaystyle\\frac{\\sqrt{21}}{2}\\)"
        ],
        explanation: `
<p>三角形の面積を求めるには、2辺の長さとその間の角を使うことができる</p>
<p>\\(\\angle BAC=\\theta\\) とおくと、\\(\\overrightarrow{a}\\) と \\(\\overrightarrow{b}\\) のなす角が \\(\\theta\\) である</p>
<p>内積の公式より、\\(\\displaystyle\\overrightarrow{a}\\cdot\\overrightarrow{b}=|\\overrightarrow{a}||\\overrightarrow{b}|\\cos\\theta\\) だから、\\(\\displaystyle14=5\\cdot7\\cos\\theta\\)</p>
<p>したがって、\\(\\displaystyle\\cos\\theta=\\frac25\\)</p>
<p>ここで \\(\\sin^2\\theta+\\cos^2\\theta=1\\) より、\\(\\displaystyle\\sin\\theta=\\sqrt{1-\\left(\\frac25\\right)^2}=\\frac{\\sqrt{21}}5\\)</p>
<p>三角形の面積は \\(\\displaystyle\\frac12|\\overrightarrow{a}||\\overrightarrow{b}|\\sin\\theta\\) なので、\\(\\displaystyle\\frac12\\cdot5\\cdot7\\cdot\\frac{\\sqrt{21}}5=\\frac{7\\sqrt{21}}2\\)</p>
<p>よって、求める面積は \\(\\displaystyle\\frac{7\\sqrt{21}}2\\) である</p>
`
    },

    {
        question: "三角形 \\(ABC\\) において、\\(\\overrightarrow{AB}=\\overrightarrow{a},\\ \\overrightarrow{AC}=\\overrightarrow{b}\\) とする　\\(|\\overrightarrow{a}|=4,\\ |\\overrightarrow{b}|=5,\\ \\overrightarrow{a}\\cdot\\overrightarrow{b}=10\\) である　点 \\(P\\) は辺 \\(BC\\) 上にあり、\\(\\overrightarrow{AP}=x\\overrightarrow{a}+y\\overrightarrow{b}\\) と表される　さらに \\(AP\\perp BC\\) を満たすとき、\\(x,y\\) の値を求めよ",
        answer: "\\(\\displaystyle x=\\frac57,\\quad y=\\frac27\\)",
        wrong: [
            "\\(\\displaystyle x=\\frac27,\\quad y=\\frac57\\)",
            "\\(\\displaystyle x=\\frac37,\\quad y=\\frac47\\)",
            "\\(\\displaystyle x=\\frac47,\\quad y=\\frac37\\)"
        ],
        explanation: `
<p>まず、\\(P\\) が \\(BC\\) 上にあるという条件から考える</p>
<p>\\(\\overrightarrow{AP}=x\\overrightarrow{a}+y\\overrightarrow{b}\\) であり、\\(P\\) が \\(BC\\) 上にあるため、係数の和は1になる</p>
<p>したがって、\\(\\displaystyle x+y=1\\) である</p>
<p>次に、\\(AP\\perp BC\\) を使う</p>
<p>\\(\\overrightarrow{BC}=\\overrightarrow{b}-\\overrightarrow{a}\\) なので、垂直条件より、\\(\\displaystyle\\overrightarrow{AP}\\cdot\\overrightarrow{BC}=0\\)</p>
<p>つまり、\\(\\displaystyle(x\\overrightarrow{a}+y\\overrightarrow{b})\\cdot(\\overrightarrow{b}-\\overrightarrow{a})=0\\)</p>
<p>分配法則を使うと、\\(\\displaystyle x(\\overrightarrow{a}\\cdot\\overrightarrow{b}-|\\overrightarrow{a}|^2)+y(|\\overrightarrow{b}|^2-\\overrightarrow{a}\\cdot\\overrightarrow{b})=0\\)</p>
<p>与えられた値を代入すると、\\(\\displaystyle x(10-16)+y(25-10)=0\\)</p>
<p>したがって、\\(\\displaystyle-6x+15y=0\\)、つまり \\(\\displaystyle2x=5y\\) である</p>
<p>ここで \\(x+y=1\\) と連立する</p>
<p>\\(\\displaystyle x=\\frac52y\\) なので、\\(\\displaystyle\\frac52y+y=1\\)</p>
<p>\\(\\displaystyle\\frac72y=1\\) より、\\(\\displaystyle y=\\frac27\\)</p>
<p>したがって、\\(\\displaystyle x=1-\\frac27=\\frac57\\)</p>
`
    },

    {
        question: "三角形 \\(ABC\\) において、\\(\\overrightarrow{AB}=\\overrightarrow{a},\\ \\overrightarrow{AC}=\\overrightarrow{b}\\) とする　\\(|\\overrightarrow{a}|=|\\overrightarrow{b}|=6,\\ \\overrightarrow{a}\\cdot\\overrightarrow{b}=18\\) である　点 \\(P\\) は辺 \\(BC\\) を \\(BP:PC=2:1\\) に内分する点であるとき、\\(\\displaystyle\\frac{AP}{AB}\\) を求めよ",
        answer: "\\(\\displaystyle\\frac{\\sqrt7}{3}\\)",
        wrong: [
            "\\(\\displaystyle\\frac{\\sqrt7}{2}\\)",
            "\\(\\displaystyle\\frac{\\sqrt7}{6}\\)",
            "\\(\\displaystyle\\frac73\\)"
        ],
        explanation: `
<p>点 \\(P\\) は \\(BC\\) を2:1に内分するので、内分点の公式から、\\(\\displaystyle\\overrightarrow{AP}=\\frac{\\overrightarrow{a}+2\\overrightarrow{b}}3\\) となる</p>
<p>したがって、長さを求めるために両辺の2乗を考える</p>
<p>\\(\\displaystyle AP^2=\\frac19|\\overrightarrow{a}+2\\overrightarrow{b}|^2\\)</p>
<p>ここで、\\(\\displaystyle|\\overrightarrow{u}+\\overrightarrow{v}|^2=|\\overrightarrow{u}|^2+2\\overrightarrow{u}\\cdot\\overrightarrow{v}+|\\overrightarrow{v}|^2\\) を使う</p>
<p>よって、\\(\\displaystyle|\\overrightarrow{a}+2\\overrightarrow{b}|^2=|\\overrightarrow{a}|^2+4\\overrightarrow{a}\\cdot\\overrightarrow{b}+4|\\overrightarrow{b}|^2\\)</p>
<p>与えられた値を代入すると、\\(\\displaystyle36+4\\cdot18+4\\cdot36=252\\)</p>
<p>したがって、\\(\\displaystyle AP^2=\\frac{252}{9}=28\\)</p>
<p>よって、\\(\\displaystyle AP=2\\sqrt7\\)</p>
<p>また \\(AB=|\\overrightarrow{a}|=6\\) なので、\\(\\displaystyle\\frac{AP}{AB}=\\frac{2\\sqrt7}{6}=\\frac{\\sqrt7}{3}\\)</p>
`
    },

    {
        question: "2つのベクトル \\(\\overrightarrow{a},\\overrightarrow{b}\\) が \\(|\\overrightarrow{a}|=2,\\ |\\overrightarrow{b}|=3,\\ \\overrightarrow{a}\\cdot\\overrightarrow{b}=3\\) を満たしている　点 \\(P\\) が \\(\\overrightarrow{OP}=t\\overrightarrow{a}+(1-t)\\overrightarrow{b}\\)、\\(0\\leq t\\leq1\\) によって定められるとき、\\(OP\\) の最小値を求めよ",
        answer: "\\(\\displaystyle\\frac{3\\sqrt{21}}7\\)",
        wrong: [
            "\\(\\displaystyle\\frac{3\\sqrt7}{7}\\)",
            "\\(\\displaystyle\\frac{\\sqrt{21}}3\\)",
            "\\(\\displaystyle\\frac{3\\sqrt3}{7}\\)"
        ],
        explanation: `
<p>長さ \\(OP\\) を直接扱うと平方根が出てきて計算しにくいので、まず \\(OP^2\\) を求める</p>
<p>\\(\\displaystyle OP^2=|t\\overrightarrow{a}+(1-t)\\overrightarrow{b}|^2\\)</p>
<p>ベクトルの2乗を展開すると、\\(\\displaystyle OP^2=t^2|\\overrightarrow{a}|^2+2t(1-t)\\overrightarrow{a}\\cdot\\overrightarrow{b}+(1-t)^2|\\overrightarrow{b}|^2\\)</p>
<p>与えられた値を代入して、\\(\\displaystyle OP^2=4t^2+6t(1-t)+9(1-t)^2\\)</p>
<p>展開すると、\\(\\displaystyle OP^2=7t^2-12t+9\\)</p>
<p>平方完成すると、\\(\\displaystyle OP^2=7\\left(t-\\frac67\\right)^2+\\frac{27}{7}\\)</p>
<p>\\(0\\leq t\\leq1\\) の範囲には \\(\\displaystyle t=\\frac67\\) が含まれているので、最小値は平方の部分が0になるときにとる</p>
<p>したがって、\\(\\displaystyle OP^2_{\\min}=\\frac{27}{7}\\)</p>
<p>よって、\\(\\displaystyle OP_{\\min}=\\sqrt{\\frac{27}{7}}=\\frac{3\\sqrt{21}}7\\)</p>
`
    },

    {
        question: "三角形 \\(ABC\\) の重心を \\(G\\) とする　点 \\(O\\) を原点とし、\\(\\overrightarrow{OA}=\\overrightarrow{a},\\ \\overrightarrow{OB}=\\overrightarrow{b},\\ \\overrightarrow{OC}=\\overrightarrow{c}\\) とする　\\(|\\overrightarrow{a}|=|\\overrightarrow{b}|=|\\overrightarrow{c}|=3\\) かつ \\(G=O\\) であるとき、三角形 \\(ABC\\) の各辺の長さを求めよ",
        answer: "\\(AB=BC=CA=3\\sqrt3\\)",
        wrong: [
            "\\(3\\sqrt2\\)",
            "\\(6\\)",
            "\\(9\\)"
        ],
        explanation: `
<p>重心 \\(G\\) の位置ベクトルは、3頂点の位置ベクトルの平均なので、\\(\\displaystyle\\overrightarrow{OG}=\\frac{\\overrightarrow{a}+\\overrightarrow{b}+\\overrightarrow{c}}3\\)</p>
<p>今回は \\(G=O\\) なので、\\(\\overrightarrow{OG}=\\overrightarrow{0}\\) である</p>
<p>したがって、\\(\\displaystyle\\overrightarrow{a}+\\overrightarrow{b}+\\overrightarrow{c}=\\overrightarrow{0}\\)</p>
<p>この式から、\\(\\displaystyle\\overrightarrow{c}=-(\\overrightarrow{a}+\\overrightarrow{b})\\) と表せる</p>
<p>両辺の2乗を考えると、\\(\\displaystyle|\\overrightarrow{c}|^2=|\\overrightarrow{a}+\\overrightarrow{b}|^2\\)</p>
<p>左辺は9なので、\\(\\displaystyle9=9+9+2\\overrightarrow{a}\\cdot\\overrightarrow{b}\\)</p>
<p>したがって、\\(\\displaystyle\\overrightarrow{a}\\cdot\\overrightarrow{b}=-\\frac92\\)</p>
<p>次に、\\(\\overrightarrow{AB}=\\overrightarrow{b}-\\overrightarrow{a}\\) だから、\\(\\displaystyle AB^2=|\\overrightarrow{b}-\\overrightarrow{a}|^2\\)</p>
<p>\\(\\displaystyle=|\\overrightarrow{b}|^2+|\\overrightarrow{a}|^2-2\\overrightarrow{a}\\cdot\\overrightarrow{b}\\)</p>
<p>\\(\\displaystyle=9+9-2\\left(-\\frac92\\right)=27\\)</p>
<p>よって、\\(\\displaystyle AB=3\\sqrt3\\)</p>
<p>同様に \\(BC=CA=3\\sqrt3\\) となる</p>
`
    },

    {
        question: "三角形 \\(ABC\\) において、点 \\(P,Q\\) をそれぞれ辺 \\(AB,AC\\) 上の点とし、\\(\\displaystyle\\overrightarrow{AP}=t\\overrightarrow{AB},\\ \\overrightarrow{AQ}=s\\overrightarrow{AC}\\) とする　\\(PQ\\parallel BC\\) であるとき、\\(s,t\\) の関係式を求めよ",
        answer: "\\(s=t\\)",
        wrong: [
            "\\(s=1-t\\)",
            "\\(s=2t\\)",
            "\\(s=3t\\)"
        ],
        explanation: `
<p>まず、\\(\\overrightarrow{AB}=\\overrightarrow{b},\\ \\overrightarrow{AC}=\\overrightarrow{c}\\) とおく</p>
<p>条件より、\\(\\overrightarrow{AP}=t\\overrightarrow{b},\\ \\overrightarrow{AQ}=s\\overrightarrow{c}\\) である</p>
<p>したがって、\\(\\displaystyle\\overrightarrow{PQ}=\\overrightarrow{AQ}-\\overrightarrow{AP}=s\\overrightarrow{c}-t\\overrightarrow{b}\\)</p>
<p>一方、\\(\\overrightarrow{BC}=\\overrightarrow{c}-\\overrightarrow{b}\\) である</p>
<p>\\(PQ\\parallel BC\\) なので、ある実数 \\(k\\) を使って、\\(\\displaystyle s\\overrightarrow{c}-t\\overrightarrow{b}=k(\\overrightarrow{c}-\\overrightarrow{b})\\)</p>
<p>右辺を展開すると、\\(\\displaystyle k\\overrightarrow{c}-k\\overrightarrow{b}\\)</p>
<p>\\(\\overrightarrow{b},\\overrightarrow{c}\\) は三角形 \\(ABC\\) の2辺方向のベクトルなので一次独立である</p>
<p>したがって、それぞれの係数を比較できる</p>
<p>\\(\\displaystyle s=k,\\qquad t=k\\)</p>
<p>よって、\\(\\displaystyle s=t\\)</p>
`
    },

    {
        question: "2つのベクトル \\(\\overrightarrow{a},\\overrightarrow{b}\\) が \\(|\\overrightarrow{a}|=1,\\ |\\overrightarrow{b}|=2,\\ \\overrightarrow{a}\\cdot\\overrightarrow{b}=1\\) を満たす　実数 \\(x,y\\) が \\(0\\leq x\\leq1,\\ 0\\leq y\\leq1,\\ x+y=1\\) を満たすとき、\\(|x\\overrightarrow{a}+y\\overrightarrow{b}|^2\\) の最大値と最小値を求めよ",
        answer: "最大値 \\(4\\)、最小値 \\(1\\)",
        wrong: [
            "最大値 \\(3\\)、最小値 \\(1\\)",
            "最大値 \\(4\\)、最小値 \\(0\\)",
            "最大値 \\(5\\)、最小値 \\(1\\)"
        ],
        explanation: `
<p>条件 \\(x+y=1\\) があるので、\\(y=1-x\\) とおく</p>
<p>すると、求める式は \\(\\displaystyle|x\\overrightarrow{a}+(1-x)\\overrightarrow{b}|^2\\) となる</p>
<p>ベクトルの2乗を展開すると、\\(\\displaystyle x^2|\\overrightarrow{a}|^2+2x(1-x)\\overrightarrow{a}\\cdot\\overrightarrow{b}+(1-x)^2|\\overrightarrow{b}|^2\\)</p>
<p>与えられた値を代入すると、\\(\\displaystyle x^2+2x(1-x)+4(1-x)^2\\)</p>
<p>整理すると、\\(\\displaystyle3x^2-6x+4\\)</p>
<p>平方完成すると、\\(\\displaystyle3(x-1)^2+1\\)</p>
<p>\\(0\\leq x\\leq1\\) なので最小値は \\(x=1\\) のときの1</p>
<p>また \\(x=0\\) のとき \\(\\displaystyle3(0-1)^2+1=4\\) となり、最大値は4</p>
<p>したがって、最大値は4、最小値は1である</p>
`
    },

    {
        question: "\\(|\\overrightarrow{a}|=2,\\ |\\overrightarrow{b}|=3,\\ \\overrightarrow{a}\\cdot\\overrightarrow{b}=2\\) とする　点 \\(P\\) が \\(\\overrightarrow{OP}=x\\overrightarrow{a}+y\\overrightarrow{b}\\) と表され、\\(x+y=1\\) を満たすとする　\\(OP\\leq2\\) を満たす実数 \\(x\\) の範囲を求めよ",
        answer: "\\(\\displaystyle\\frac59\\leq x\\leq1\\)",
        wrong: [
            "\\(\\displaystyle0\\leq x\\leq\\frac59\\)",
            "\\(\\displaystyle\\frac13\\leq x\\leq1\\)",
            "\\(\\displaystyle\\frac59\\leq x\\leq\\frac23\\)"
        ],
        explanation: `
<p>条件 \\(x+y=1\\) より、\\(\\displaystyle y=1-x\\) と表せる</p>
<p>したがって、\\(\\displaystyle\\overrightarrow{OP}=x\\overrightarrow{a}+(1-x)\\overrightarrow{b}\\)</p>
<p>まず \\(OP^2\\) を求める</p>
<p>\\(\\displaystyle OP^2=4x^2+4x(1-x)+9(1-x)^2\\)</p>
<p>整理すると、\\(\\displaystyle OP^2=9x^2-14x+9\\)</p>
<p>条件 \\(OP\\leq2\\) は、両辺が0以上なので2乗して、\\(\\displaystyle OP^2\\leq4\\)</p>
<p>したがって、\\(\\displaystyle9x^2-14x+9\\leq4\\)</p>
<p>整理すると、\\(\\displaystyle9x^2-14x+5\\leq0\\)</p>
<p>因数分解すると、\\(\\displaystyle(9x-5)(x-1)\\leq0\\)</p>
<p>よって、\\(\\displaystyle\\frac59\\leq x\\leq1\\)</p>
`
    },

    {
        question: "三角形 \\(ABC\\) において、\\(\\overrightarrow{AB}=\\overrightarrow{a},\\ \\overrightarrow{AC}=\\overrightarrow{b}\\) とする　\\(|\\overrightarrow{a}|=3,\\ |\\overrightarrow{b}|=4,\\ \\overrightarrow{a}\\cdot\\overrightarrow{b}=6\\) である　点 \\(P\\) は三角形 \\(ABC\\) の内部にあり、\\(\\overrightarrow{AP}=x\\overrightarrow{a}+y\\overrightarrow{b}\\) と表される　さらに \\(PA\\perp BC\\)、\\(PB\\perp AC\\) が成り立つとき、\\(x,y,\\displaystyle\\frac{AB}{AC}\\) を求めよ",
        answer: "\\(\\displaystyle x=\\frac59,\\quad y=\\frac16,\\quad\\frac{AB}{AC}=\\frac34\\)",
        wrong: [
            "\\(\\displaystyle x=\\frac12,\\quad y=\\frac14,\\quad\\frac{AB}{AC}=\\frac34\\)",
            "\\(\\displaystyle x=\\frac59,\\quad y=\\frac13,\\quad\\frac{AB}{AC}=\\frac43\\)",
            "\\(\\displaystyle x=\\frac49,\\quad y=\\frac16,\\quad\\frac{AB}{AC}=\\frac34\\)"
        ],
        explanation: `
<p>まず、\\(PA\\perp BC\\) を使う</p>
<p>\\(\\overrightarrow{AP}=x\\overrightarrow{a}+y\\overrightarrow{b}\\)、\\(\\overrightarrow{BC}=\\overrightarrow{b}-\\overrightarrow{a}\\) なので、\\(\\displaystyle(x\\overrightarrow{a}+y\\overrightarrow{b})\\cdot(\\overrightarrow{b}-\\overrightarrow{a})=0\\)</p>
<p>展開すると、\\(\\displaystyle x(\\overrightarrow{a}\\cdot\\overrightarrow{b}-|\\overrightarrow{a}|^2)+y(|\\overrightarrow{b}|^2-\\overrightarrow{a}\\cdot\\overrightarrow{b})=0\\)</p>
<p>値を代入すると、\\(\\displaystyle x(6-9)+y(16-6)=0\\)</p>
<p>したがって、\\(\\displaystyle-3x+10y=0\\)</p>
<p>次に \\(PB\\perp AC\\) を使う</p>
<p>\\(\\displaystyle\\overrightarrow{PB}=\\overrightarrow{AB}-\\overrightarrow{AP}=\\overrightarrow{a}-x\\overrightarrow{a}-y\\overrightarrow{b}=(1-x)\\overrightarrow{a}-y\\overrightarrow{b}\\)</p>
<p>これが \\(\\overrightarrow{b}\\) と垂直なので、\\(\\displaystyle((1-x)\\overrightarrow{a}-y\\overrightarrow{b})\\cdot\\overrightarrow{b}=0\\)</p>
<p>よって、\\(\\displaystyle(1-x)(\\overrightarrow{a}\\cdot\\overrightarrow{b})-y|\\overrightarrow{b}|^2=0\\)</p>
<p>値を代入して、\\(\\displaystyle6(1-x)-16y=0\\)</p>
<p>整理すると、\\(\\displaystyle3x+8y=3\\)</p>
<p>したがって、\\(\\displaystyle-3x+10y=0\\) と \\(\\displaystyle3x+8y=3\\) を連立する</p>
<p>2式を足すと、\\(\\displaystyle18y=3\\) なので、\\(\\displaystyle y=\\frac16\\)</p>
<p>これを \\(\\displaystyle-3x+10y=0\\) に代入すると、\\(\\displaystyle3x=\\frac{10}{6}\\)</p>
<p>したがって、\\(\\displaystyle x=\\frac59\\)</p>
<p>最後に、\\(\\displaystyle\\frac{AB}{AC}=\\frac{|\\overrightarrow{a}|}{|\\overrightarrow{b}|}=\\frac34\\)</p>
`
    },

    {
        question: "三角形 \\(ABC\\) において、\\(AB=5,\\ AC=3,\\ \\angle BAC=60^\\circ\\) とする　点 \\(P\\) は辺 \\(BC\\) 上にあり、\\(AP\\perp BC\\) を満たすとき、\\(BP:PC\\) を求めよ",
        answer: "\\(\\displaystyle35:3\\)",
        wrong: [
            "\\(\\displaystyle16:3\\)",
            "\\(\\displaystyle3:35\\)",
            "\\(\\displaystyle5:3\\)"
        ],
        explanation: `
<p>\\(\\overrightarrow{AB}=\\overrightarrow{a},\\ \\overrightarrow{AC}=\\overrightarrow{b}\\) とおく</p>
<p>すると、\\(|\\overrightarrow{a}|=5,\\ |\\overrightarrow{b}|=3\\) である</p>
<p>また、\\(\\angle BAC=60^\\circ\\) なので、内積の公式より、\\(\\displaystyle\\overrightarrow{a}\\cdot\\overrightarrow{b}=5\\cdot3\\cdot\\cos60^\\circ=\\frac{15}{2}\\)</p>
<p>\\(BP:PC=m:n\\) とおく</p>
<p>内分点の公式より、\\(\\displaystyle\\overrightarrow{AP}=\\frac{n\\overrightarrow{a}+m\\overrightarrow{b}}{m+n}\\)</p>
<p>また、\\(\\overrightarrow{BC}=\\overrightarrow{b}-\\overrightarrow{a}\\) である</p>
<p>\\(AP\\perp BC\\) より、\\(\\displaystyle(n\\overrightarrow{a}+m\\overrightarrow{b})\\cdot(\\overrightarrow{b}-\\overrightarrow{a})=0\\)</p>
<p>展開すると、\\(\\displaystyle n(\\overrightarrow{a}\\cdot\\overrightarrow{b}-|\\overrightarrow{a}|^2)+m(|\\overrightarrow{b}|^2-\\overrightarrow{a}\\cdot\\overrightarrow{b})=0\\)</p>
<p>値を代入すると、\\(\\displaystyle n\\left(\\frac{15}{2}-25\\right)+m\\left(9-\\frac{15}{2}\\right)=0\\)</p>
<p>つまり、\\(\\displaystyle-\\frac{35}{2}n+\\frac32m=0\\)</p>
<p>両辺を2倍して、\\(\\displaystyle-35n+3m=0\\)</p>
<p>したがって、\\(\\displaystyle3m=35n\\)</p>
<p>よって、\\(\\displaystyle m:n=35:3\\)</p>
<p>したがって、求める比は \\(\\displaystyle BP:PC=35:3\\)</p>
`
    },

    {
        question: "平行四辺形 \\(ABCD\\) において、\\(\\overrightarrow{AB}=\\overrightarrow{a},\\ \\overrightarrow{AD}=\\overrightarrow{b}\\) とする　\\(|\\overrightarrow{a}|=2,\\ |\\overrightarrow{b}|=4,\\ \\overrightarrow{a}\\cdot\\overrightarrow{b}=4\\) である　対角線 \\(AC\\) と \\(BD\\) の交点を \\(P\\) とするとき、\\(PC\\) の長さを求めよ",
        answer: "\\(\\displaystyle\\sqrt7\\)",
        wrong: [
            "\\(2\\sqrt3\\)",
            "\\(\\sqrt3\\)",
            "\\(2\\sqrt7\\)"
        ],
        explanation: `
<p>平行四辺形の対角線は互いに中点で交わるので、\\(P\\) は \\(AC\\) の中点である</p>
<p>\\(\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{a}+\\overrightarrow{b}\\)</p>
<p>したがって、\\(\\displaystyle AC^2=|\\overrightarrow{a}+\\overrightarrow{b}|^2\\)</p>
<p>ベクトルの2乗を展開すると、\\(\\displaystyle AC^2=|\\overrightarrow{a}|^2+2\\overrightarrow{a}\\cdot\\overrightarrow{b}+|\\overrightarrow{b}|^2\\)</p>
<p>与えられた値を代入して、\\(\\displaystyle AC^2=4+8+16=28\\)</p>
<p>よって、\\(\\displaystyle AC=2\\sqrt7\\)</p>
<p>\\(P\\) は \\(AC\\) の中点なので、\\(\\displaystyle PC=\\frac12AC=\\sqrt7\\)</p>
<p>したがって、求める長さは \\(\\displaystyle\\sqrt7\\) である</p>
`
    }
];
