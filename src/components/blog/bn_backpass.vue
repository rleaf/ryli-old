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
               Above is a "full" representation of the total derivative of <vue-mathjax :formula='dldx'></vue-mathjax>.
               I wrote the "full" (as opposed to the truly full) representation first for ease of understanding. The third term in the second summand: 
               <vue-mathjax :formula='dxhatdmu'></vue-mathjax>, can be further decomposed because <vue-mathjax :formula='mu'></vue-mathjax> is an argument of <vue-mathjax :formula='xhat'></vue-mathjax> and <vue-mathjax :formula='sigmoid'></vue-mathjax>.
               It looks like:
            </p>
            <vue-mathjax :formula="dxhatdmufull"></vue-mathjax>
            <p>
               Now for the full represetation without quotes:
            </p>
            <vue-mathjax :formula="dldxFull"></vue-mathjax>
            <div id="blogSubHeader">
               Step 1
            </div>
            <!-- <p>
               Notice the redundancy of <vue-mathjax :formula='redundant'></vue-mathjax> in every summand. Factor this out and solve for the partials.
            </p> -->
            <p>
               A gradient will match the dimensionality of what you're differentiating with respect to. This means when differentiating wrt a scalar, you sum over the elements of the batch.
            </p>
               <vue-mathjax :formula='dldxSimple1'></vue-mathjax>
               <br>
            <p>
               Factoring out <vue-mathjax :formula='factor'></vue-mathjax> as shown below is no good. Doing so destroys scalar structure. The below function is bad.
            </p>
            <vue-mathjax :formula='dldxSimple2'></vue-mathjax>
            <p>
               For clarity and soon screen space, you can rewrite redundant partials into a generalized form: <vue-mathjax :formula='redundant'></vue-mathjax>
            </p>
            <vue-mathjax :formula='dldxSimple3'></vue-mathjax>
            
            <div id="blogSubHeader">
               Step 2
            </div>
            <p>
               Solve for all of the partials shown above. This is the easiest part. If I hadn't earlier defined my summations earlier then I would need to write them below where I'm differentating wrt a scalar.
            </p>
            <vue-mathjax :formula='dldy'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dydxhatSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dxhatdxSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dxhatdmuSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dxhatdsigSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dsigdmuSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dmudxSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dsigdxSolve'></vue-mathjax>
            <div id="blogSubHeader">
               Step 3
            </div>
            <p>
               Every partial is evaluated. Substitute.
            </p>
            <vue-mathjax :formula='dldxSub1'></vue-mathjax>
            <p>
               Rewrite <vue-mathjax :formula='rootTrick'></vue-mathjax> as <vue-mathjax :formula='rootTrick2'></vue-mathjax>. It will initially look more confusing, but simplifies well. Simplify :). <i>(If you have a 
               smaller screen, be careful to consider the equations overflowing to the next line)</i>
            </p>
            <vue-mathjax :formula='dldxSub2'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dldxSub3'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dldxSub4'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dldxSub5'></vue-mathjax>
            <p>
            <vue-mathjax :formula='dldxSub6'></vue-mathjax>
            <p>
               Simp
            </p>
            <!-- <vue-mathjax :formula='dldxSubb3'></vue-mathjax> -->

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
         factor: `$\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}}$`,
         dldx: `$\\frac{\\partial{\\ell}}{\\partial{x_i}}$`,
         dldy: `$$\\frac{\\partial{\\ell}}{\\partial{y_i}} = \\mathrm{dout}$$`,
         dxdsig: `$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}$`,
         dydxhatSolve: `$$\\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} = \\gamma$$`, 
         dxhatdxSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} = \\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}$$`,
         dxhatdmuSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}} = \\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}$$`,
         dxhatdsigSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} = \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-3/2}(x_i-\\mu_\\beta)$$`,
         dsigdmuSolve: `$$\\frac{\\partial{\\sigma^2_\\beta}}{\\partial{\\mu_\\beta}} = \\frac{-2}{m}(x_i-\\mu_\\beta)$$`,
         dmudxSolve: `$$\\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} = \\frac{1}{m}$$`,
         dsigdxSolve: `$$\\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}} = \\frac{2}{m}(x_i-\\mu_\\beta)$$`,
         simplesigmoid: `$(1 - \\sigma(x))(\\sigma(x))$`,
         sigmoid: `$\\sigma^2_\\beta$`,
         xhat: `$\\hat{x_i}$`,
         mu: `$\\mu_\\beta$`,
         rootTrick: `$(\\sigma^2_\\beta+\\epsilon)^{-3/2}$`,
         rootTrick2: `$(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}$`,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
         jacobian: '$$\\begin{bmatrix}a & b\\\\ c & d\\end{bmatrix}$$',
         dxhatdmu: `$\\frac{\\mathrm{d}{\\hat{x_i}}}{\\mathrm{d}{\\mu_\\beta}}$`,
         dxhatdmufull: `$$\\frac{\\mathrm{d}{\\hat{x_i}}}{\\mathrm{d}{\\mu_\\beta}} = \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}} +
                        \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                        \\frac{\\partial{\\sigma^2}}{\\partial{\\mu_\\beta}}$$`,
         redundant: `$\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} = \\frac{\\partial{\\ell}}{\\partial{\\hat{x_i}}}$`,
         dldxSub1: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\mathrm{dout} \\cdot \\gamma
                  
                   \\biggl(\\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +

                   \\sum_{i=1}^{m}\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma\\biggl(\\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-3/2}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{-2}{m}\\sum_{k=1}^{m}(x_k-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{1}{m} +

                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-3/2}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)\\biggr)
                   $$`,
         dldxSub2: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\mathrm{dout} \\cdot \\gamma

                   \\biggl(\\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   
                   \\sum_{i=1}^{m}\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma\\biggl(\\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{-2}{m}\\sum_{k=1}^{m}(x_k-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{1}{m} +
                   
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)\\biggr)
                   $$`,
         dldxSub3: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\mathrm{dout} \\cdot \\gamma

                   \\biggl(\\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   
                   \\sum_{i=1}^{m}\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma\\biggl(\\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   (\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{1}{m}\\sum_{k=1}^{m}(x_k-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{1}{m} +
                   
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)\\biggr)
                   $$`,
         dldxSub4: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\mathrm{dout} \\cdot \\gamma

                   \\biggl(\\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   
                   \\sum_{i=1}^{m}\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma\\biggl(\\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   (\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\biggl(\\frac{1}{m}\\sum_{k=1}^{m}x_k-\\frac{1}{m}\\sum_{k=1}^{m}\\mu_\\beta\\bigr)\\biggr) \\cdot
                   \\frac{1}{m} +
                   
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)\\biggr)
                   $$`,
         dldxSub5: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\mathrm{dout} \\cdot \\gamma

                   \\biggl(\\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   
                   \\sum_{i=1}^{m}\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma\\biggl(\\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   (\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\biggl(\\mu_\\beta-\\frac{m\\mu_\\beta}{m}\\biggr)\\biggr) \\cdot
                   \\frac{1}{m} +
                   
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)\\biggr)
                   $$`,
         dldxSub6: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\mathrm{dout} \\cdot \\gamma

                   \\biggl(\\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} -
                   
                   \\frac{\\sum_{i=1}^{m}\\gamma\\frac{\\partial{\\ell}}{\\partial{y_i}}}{m\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)\\biggr)
                   $$`,
         dldxSubb3: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\mathrm{dout} \\cdot \\gamma

                   \\biggl(\\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   
                   \\biggl(\\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{-2}{m}\\sum_{k=1}^{m}(x_k-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{1}{m} +
                   
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\sum_{k=1}^{m}(x_k-\\mu_\\beta) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)\\biggr)
                   $$`,
         dldxSimple3: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\frac{\\partial{\\ell}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   \\biggl(\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}}\\biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}
                   $$`,
         dldxSimple2: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\Biggl(\\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   \\Biggl(\\sum_{i=1}^{m}\\biggl(
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} +
                   \\sum_{i=1}^{m}\\biggl(
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}}\\Biggr) +
                   \\sum_{i=1}^{m}\\biggl(
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}\\Biggr)
                   $$`,
         dldxSimple1: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   \\biggl(\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}}\\biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}
                   $$`,
         dldxFull: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   \\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}} \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} +
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                   \\frac{\\partial{\\sigma^2}}{\\partial{\\mu_\\beta}} \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}}\\biggr) +
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
                   \\frac{\\mathrm{d}{\\hat{x_i}}}{\\mathrm{d}{\\mu_\\beta}} \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} +
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