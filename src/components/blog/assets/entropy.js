export default {
   entropy: `$$\\mathbb{H}(X) \\triangleq - \\sum_{x=1}^{X}p(X=x)\\log_2{p(X=x)}= -\\mathbb{E}_{X\\sim\\,{p}}[\\log_2{p(X=x)}]$$`,
   entropySelfInformation: `$$\\mathbb{H}(X) \\triangleq \\sum_{x=1}^{X}p(X=x)I(X=x)= \\mathbb{E}_{X\\sim\\,{p}}[I(X=x)]$$`,
   uniform: `$$\\mathbb{H}(X) = - \\sum_{x=1}^{X}\\frac{1}{X}\\log_2{\\frac{1}{X}} = - \\log_2{\\frac{1}{X}} = \\log_2{X}$$`,
   uniformThree: `$$\\mathbb{H}(X) = -\\Bigl(\\frac{1}{3}\\log_2{\\frac{1}{3}}+\\frac{1}{3}\\log_2{\\frac{1}{3}}+\\frac{1}{3}\\log_2{\\frac{1}{3}}\\Bigr) = 1.58496\\dots\\text{bits}$$`,
   uniformBernoulli: `$$\\mathbb{H}(X) = \\Bigl(\\frac{1}{2}\\log_2{\\frac{1}{2}}+\\frac{1}{2}\\log_2{\\frac{1}{2}}\\Bigr) = 1\\,\\text{bit}$$`,
   unfairBernoulli: `$$\\mathbb{H}(X) - \\Bigl(\\frac{4}{5}\\log_2{\\frac{4}{5}}+\\frac{1}{5}\\log_2{\\frac{1}{5}}\\Bigr) = 0.72192\\dots\\text{bits}$$`,
   extremeBernoulli: `$$\\mathbb{H}(X) - \\Bigl(\\frac{19}{20}\\log_2{\\frac{19}{20}}+\\frac{1}{20}\\log_2{\\frac{1}{20}}\\Bigr) = 0.28639\\dots\\text{bits}$$`,
   crossEntropy: `$$\\mathbb{H}(p, q) \\triangleq - \\sum_{x=1}^{X}p(X=x)\\log_2{q(X=x)}= -\\mathbb{E}_{X\\sim\\,{p}}[\\log_2{q(X=x)}] = \\mathbb{E}_{X\\sim\\,{p}}[I_{X\\sim\\,{q}}(X = x)]$$`,
   crossEntropyExample1: `\\begin{align}
   \\mathbb{H}(p,q) & = -\\Bigl(0.15\\log_2{0.25}+0.30\\log_2{0.10}+0.20\\log_2{0.40}+0.35\\log_2{0.25}\\Bigr) \\\\
      & = 2.26096\\dots\\text{bits}
   \\end{align}`,
   crossEntropyExample2: `\\begin{align}
   \\mathbb{H}(q,p) & = -\\Bigl(0.25\\log_2{0.15}+0.10\\log_2{0.30}+0.40\\log_2{0.20}+0.25\\log_2{0.35}\\Bigr) \\\\
      & = 2.16535\\dots\\text{bits}
   \\end{align}`,
   crossEntropyExample4: `\\begin{align}
   \\mathbb{H}(p) & = -\\Bigl(0.15\\log_2{0.15}+0.30\\log_2{0.30}+0.20\\log_2{0.20}+0.35\\log_2{0.35}\\Bigr) \\\\
      & = 1.92612\\dots\\text{bits}
   \\end{align}`,
   crossEntropyExample3: `\\begin{align}
   \\mathbb{H}(p,z) & = -\\Bigl(0.15\\log_2{0.17}+0.30\\log_2{0.28}+0.20\\log_2{0.20}+0.35\\log_2{0.35}\\Bigr) \\\\
      & = 1.92889\\dots\\text{bits}
   \\end{align}`,
}