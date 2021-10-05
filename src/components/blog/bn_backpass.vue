<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Differentiating the backwards pass in Batch Normalization</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 20px; padding: 0 !important; ">10&#8226;5&#8226;2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <p>
               <i>This read is to serve mainly as a reference to some concepts of the backward pass in batch normalization - it is not written or designed to be as explanatory as other posts.</i>
               <br>
               <br>
               The image below defines "whitening". An application to a batch of inputs with the goal to reduce the <i>internal covariate shift</i>. This procedure occurs during the forward pass.
               In order to preserve training, the backward pass must also be defined. Similarly to how the local gradient of the sigmoid function simplifies to <vue-mathjax :formula='simplesigmoid'></vue-mathjax>,
               the local gradient for batch normalization can also undergo a similar process, which promotes computational efficiency (<a href="https://arxiv.org/pdf/1502.03167.pdf" target="_blank">link to paper</a>).
               <br>
            </p>
               <img id="img500" src="../../assets/blog/bn_forward.png" alt=""> 
            <p>
               During training, the chain rule is shown to backpropogate through the batch normalization transformation (page 4 of the paper). Shown below is referred to as the "Staged Computation" for backpropogation.
               It is also sometimes referred to as the "flat" implementation for backprop, it uses the chain rule to derive the impact a parameter has upon an output. The code block was my implementation
            </p>
               <img id="img500" src="../../assets/blog/bn_backward.png" alt=""> 
            <code-highlight language="python">
               {{ bnChainCode }}
            </code-highlight>
            <div id="blogSubHeader">
               The Shortcut
            </div>
            <p>
               <vue-mathjax :formula='dldxFullQuote'></vue-mathjax>
               <br>
               Above is a "full" representation of the total derivative of <vue-mathjax :formula='dldx'></vue-mathjax>. Each summand represented corresponds to the respective locations of x inside of x hat <i>(in normalizing step prior to scaling & shifting)</i>.
               I wrote the "full" (as opposed to the truly full) representation first for ease of understanding. The third term in the second summand: 
               <vue-mathjax :formula='dxhatdmu'></vue-mathjax>, can be further decomposed because <vue-mathjax :formula='mu'></vue-mathjax> is an argument of <vue-mathjax :formula='xhat'></vue-mathjax> and <vue-mathjax :formula='sigmoid'></vue-mathjax>.
               It looks something like:
            </p>
            <vue-mathjax :formula="dxhatdmufull"></vue-mathjax>
            <p>
               Now for the full represetation without quotes:
            </p>
            <vue-mathjax :formula="dldxFull"></vue-mathjax>
            <div id="blogSubHeader">
               Step 1
            </div>
            <p>
               Notice the redundancy of <vue-mathjax :formula='redundant'></vue-mathjax> in every summand. Factor this out and solve for the partials.
            </p>
               <vue-mathjax :formula='dldxSimple1'></vue-mathjax>
               <br>
               <vue-mathjax :formula='dldy'></vue-mathjax>
               <br>
               <vue-mathjax :formula='dydxhatSolve'></vue-mathjax>
            <p>
               The formula now looks like:
            </p>
            <vue-mathjax :formula='dldxSimple2'></vue-mathjax>
            <div id="blogSubHeader">
               Step 2
            </div>
            <p>
               Solve for the remaining partials. Notice <vue-mathjax :formula='dxdsig'></vue-mathjax> is shown twice. This is because we're accessing variables within <vue-mathjax :formula='sigmoid'></vue-mathjax> twice.
            </p>
            <vue-mathjax :formula='dxhatdxSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dxhatdmuSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dxhatdsigSolve'></vue-mathjax>
         </div>
         <toTop />
   </div>
</template>

<script>
// import axios from 'axios'
import backdrop from '../../components/backdrop.vue'
import toTop from '../../components/toTop.vue'
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'
import "vue-code-highlight/themes/prism-nord.css"
import { VueMathjax } from 'vue-mathjax'
// import { MathJax } from 'mathjax-vue'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      'vue-mathjax': VueMathjax,
      CodeHighlight
      // MathJax
   },
   data() {
      return {
         blogs: [],
         error: null,
         dldx: `$\\frac{\\partial{\\ell}}{\\partial{x_i}}$`,
         dldy: `$$\\frac{\\partial{\\ell}}{\\partial{y_i}} = \\mathrm{dout}$$`,
         dxdsig: `$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}$`,
         dydxhatSolve: `$$\\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} = \\gamma$$`, 
         dxhatdxSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} = \\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}$$`,
         dxhatdmuSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu}} = \\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}$$`,
         dxhatdsigSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} = \\frac{-1}{2}\\sum_i=1^m(x_i-\\mu)(\\sigma^2_\\beta+\\epsilon)^{-3/2}$$`,
         simplesigmoid: `$(1 - \\sigma(x))(\\sigma(x))$`,
         sigmoid: `$\\sigma^2_\\beta$`,
         xhat: `$\\hat{x_i}$`,
         mu: `$\\mu$`,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
         jacobian: '$$\\begin{bmatrix}a & b\\\\ c & d\\end{bmatrix}$$',
         dxhatdmu: `$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu}}$`,
         dxhatdmufull: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu}} = \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu}} +
                        \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                        \\frac{\\partial{\\sigma^2}}{\\partial{\\mu}}$$`,
         redundant: `$\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}}$`,
         dldxSimple2: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\mathrm{dout} \\cdot
                   \\gamma
                   \\biggl(\\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   
                   \\biggl(\\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu}} +
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2}}{\\partial{\\mu}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu}}{\\partial{x_i}} +
                   
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}\\biggr)
                   $$`,
         dldxSimple1: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}}
                   \\biggl(\\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   
                   \\biggl(\\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu}} +
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2}}{\\partial{\\mu}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu}}{\\partial{x_i}} +
                   
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}\\biggr)
                   $$`,
         dldxFull: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\biggl(\\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu}} +
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2}}{\\partial{\\mu}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu}}{\\partial{x_i}} +
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}
                   $$`,
         dldxFullQuote: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu}} \\cdot
                   \\frac{\\partial{\\mu}}{\\partial{x_i}} +
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}
                   $$`,
         bnChainCode: 
         `
   @staticmethod
   def backward(dout, cache):

      # dout: upstream gradient
      # cache: cache of intermediate variables to construct local gradient

      dx, dgamma, dbeta = None, None, None
      x, xhat, sMean, sVar, eps, gamma, beta = cache
      N, D = dout.shape

      dxhat = dout * gamma
      dsVar1 = torch.sum(dxhat * (x - sMean), 0)
      dsVar2 = ((-1/2)*((sVar + eps))**(-3/2))
      dsVar =  dsVar1 * dsVar2
      dMean = torch.sum(dxhat * -1/torch.sqrt(sVar + eps), 0) + dsVar * (torch.sum(-2*(x - sMean), 0))/ N
      x1 = dxhat * (1/torch.sqrt(sVar + eps)) 
      x2 = dsVar * (2 * (x - sMean)/ N)
      x3 = dMean * (1 / N)
      dx = x1 + x2 + x3

      dgamma = torch.sum(dout * xhat, 0)
      dbeta = torch.sum(dout, 0)
         `,
      }
   },
   async mounted () {

      let mathjaxScript = document.createElement('script')
      // mathjaxScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/startup.js')
      mathjaxScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML')
      document.head.appendChild(mathjaxScript)

      // try {
      //    const response = await axios.get('http://localhost:1337/blogs')
      //    this.blogs = response.data
      // } catch (error) {
      //    this.error = error;
      // }


   } 

}
</script>
<style scoped>

#curriculumBody {
   width: auto !important;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}

#blogHeader {
   padding-bottom: 20px;
   font-size: 28px;
}

p {
   padding: 25px 7vw !important;
   line-height: 2;
}

a {
   color: var(--white);
   text-decoration: underline;
   font-style: oblique;
}

h2 {
   font-size: 16px;
   padding-top: 10px;
   margin: 0;
   font-weight: 200;
}

#blogSubHeader {
   font-family: 'Inconsolata', sans-serif;
   font-size: 22px;
   padding-top: 50px;
}

</style>