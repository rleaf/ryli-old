export default {
   entropy: `$$\\mathbb{H}(X) \\triangleq - \\sum_{x=1}^{X}p(X=x)\\log_2{p(X=x)}= -\\mathbb{E}_{X\\sim\\,{p}}[\\log_2{p(X=x)}]$$`,
   uniform: `$$\\mathbb{H}(X) = - \\sum_{x=1}^{X}\\frac{1}{X}\\log_2{\\frac{1}{X}} = - \\log_2{\\frac{1}{X}} = \\log_2{X}$$`,
   uniformThree: `$$\\mathbb{H}(X) = -\\Bigl(\\frac{1}{3}\\log_2{\\frac{1}{3}}+\\frac{1}{3}\\log_2{\\frac{1}{3}}+\\frac{1}{3}\\log_2{\\frac{1}{3}}\\Bigr) = 1.58496... \\,\\text{bits}$$`,
   uniformBernoulli: `$$\\mathbb{H}(X) = \\Bigl(\\frac{1}{2}\\log_2{\\frac{1}{2}}+\\frac{1}{2}\\log_2{\\frac{1}{2}}\\Bigr) = 1\\,\\text{bit}$$`,
   unfairBernoulli: `$$\\mathbb{H}(X) - \\Bigl(\\frac{4}{5}\\log_2{\\frac{4}{5}}+\\frac{1}{5}\\log_2{\\frac{1}{5}}\\Bigr) = 0.72192... \\,\\text{bits}$$`,
   extremeBernoulli: `$$\\mathbb{H}(X) - \\Bigl(\\frac{19}{20}\\log_2{\\frac{19}{20}}+\\frac{1}{20}\\log_2{\\frac{1}{20}}\\Bigr) = 0.28639... \\,\\text{bits}$$`,
}