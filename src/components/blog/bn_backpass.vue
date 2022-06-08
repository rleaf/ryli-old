<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">The Shortcut in Differentiating the Backwards Pass in Batch Normalization</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">10 &#8226; 5 &#8226; 2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#total_derivative">Total Derivative Representation</a></li>
                  <li><a href="#summations">Integrate Summations</a></li>
                  <li><a href="#partials">Solving the Partials</a></li>
                  <li><a href="#substitute">Substitute in Partials & Simplify</a></li>
                  <li><a href="#thoughts">Thoughts</a></li>
               </ul>
            </div>
            <i>(5/12/22) Edit: Highlighted in green the changes when simplifying</i>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               <i>This read may be a little ridiculous because instead of substituting partials as needed when working through the math, I do everything at once in the most expanded form.
                  I link an alternative, maybe more interpretable, blog down below in the conclusion. This read is not very suitable for smaller screens. </i>
               <br>
               <br>
               The image below defines "whitening". An application to a batch of inputs with the goal to reduce the <i>internal covariate shift</i>. This procedure occurs during the forward pass.
               In order to preserve training, the backward pass must also be defined. Similarly to how the gradient of the sigmoid function simplifies to <vue-mathjax :formula='simplesigmoid'></vue-mathjax>,
               the gradient for batch normalization can also undergo a similar process to promote computational efficiency (<a href="https://arxiv.org/pdf/1502.03167.pdf" target="_blank">link to paper</a>).
               <br>
            </p>
               <img id="img500" class="noInvert" src="../../assets/blog/bn_forward.png" alt=""> 
            <p>
               During training, the chain rule is shown to backpropagate through the batch normalization transformation (page 4 of the paper). The code block was my implementation.
               <!-- Shown below is referred to as the "Staged Computation" for backpropagation.
               It is also sometimes referred to as the "flat" implementation for backprop, it uses the chain rule to derive the impact a parameter has upon an output.  -->
            </p>
               <img id="img500" class="noInvert" src="../../assets/blog/bn_backward.png" alt="">

             <prism-editor class="codeblock" v-model="bnChainCode" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>

            <div id="total_derivative"></div>
            <div id="blogSubHeader">
               Total Derivative Representation
            </div>
            <p>
               <vue-mathjax :formula='dldxFullQuote'></vue-mathjax>
               <br>
               Now lets find a better way to pass backwards through batch normalization using the derivative. Above is a "full" representation of the total derivative of <vue-mathjax :formula='dldx'></vue-mathjax>.
               I wrote the "full" (as opposed to the truly full) representation first for ease of understanding. The third term in the second summand: 
               <vue-mathjax :formula='dxhatdmu'></vue-mathjax>, can be further decomposed because <vue-mathjax :formula='mu'></vue-mathjax> is an argument of <vue-mathjax :formula='xhat'></vue-mathjax> and the
               intermediate variable <vue-mathjax :formula='sigmoid'></vue-mathjax>.
               It looks like:
            </p>
            <vue-mathjax :formula="dxhatdmufull"></vue-mathjax>
            <p>
               The full represetation without quotes:
            </p>
            <vue-mathjax :formula="dldxFull"></vue-mathjax>
            <div id="summations"></div>
            <div id="blogSubHeader">
               Integrate Summations
            </div>
            <p>
               The downstream gradient will always match the dimensionality of whatever you're differentiating with respect to.
               This means you have to sum over the elements if the upstream is of a higher rank than your downstream. For batch normalization, the metaphorical local jacobian, which you multiply by the upstream,
               will instead be a conglomeration of intermediary functions. Below I integrate summations into the total derivative to reduce dimensionality as the betas all reference a scalar value for each feature
               of the entire batch. (aka: Derivative of rank 2 tensor wrt rank 1 tensor goes through summation to produce a rank 1 tensor which matches dimensionality of what we're differentiating wrt to).
            </p>
               <vue-mathjax :formula='dldxSimple1'></vue-mathjax>
               <br>
            <!-- <p>
               Factoring out <vue-mathjax :formula='factor'></vue-mathjax> as shown below is no good. Doing so destroys scalar structure. The below function is bad.
            </p>
            <vue-mathjax :formula='dldxSimple2'></vue-mathjax> -->
            <p>
               For clarity, you can rewrite redundant partials into a generalized form: <vue-mathjax :formula='redundant'></vue-mathjax>
            </p>
            <vue-mathjax :formula='dldxSimple3'></vue-mathjax>
            
            <div id="partials"></div>
            <div id="blogSubHeader">
               Solving the Partials
            </div>
            <p>
               Solve for all of the partials shown above. This is the easiest part. The upstream gradient defined immediately below is automatically provided to the function when backpropagating.
               Special consideration to <vue-mathjax :formula='dsigdmu'></vue-mathjax> and <vue-mathjax :formula='dsigdx'></vue-mathjax> as there are summations in
               their functions. The sigma notation in <vue-mathjax :formula='dsigdx'></vue-mathjax> does not carry over because we are differentiating wrt a vector.
            </p>
            <vue-mathjax :formula='dldy'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dydxhatSolve'></vue-mathjax>
            <br>
            <vue-mathjax :formula='dldxSolve'></vue-mathjax>
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
            <div id="substitute"></div>
            <div id="blogSubHeader">
               Substitute in Partials & Simplify
            </div>
            <p>
               Every partial is evaluated. <b>Substitute in everything except dout</b> to the template from step 1. Leaving it's partial provides headspace for knowing what some of the summations will be operating on.
               Note that I've changed the nested summations index to <i>k</i>. It will initially look more confusing, but simplifies well :). <i>(be careful to consider equations overflowing to the next line)</i>
            </p>
            <h2>1</h2>
            <vue-mathjax :formula='dldxSub1'></vue-mathjax>
            <p>
               I'm going to work on the middle summand first. Rewrite <vue-mathjax :formula='rootTrick'></vue-mathjax> as <vue-mathjax :formula='rootTrick2'></vue-mathjax>. I will also slowly
               be removing the dot notation where multiplication is obvious.
            </p>
            <h2>2</h2>
            <vue-mathjax :formula='dldxSub2'></vue-mathjax>
            <p>
               Further simplify the nested summation <vue-mathjax :formula='secondSumSimplify'></vue-mathjax> by distributing the sigma to it's terms.
            </p>
            <h2>3</h2>
            <vue-mathjax :formula='dldxSub3'></vue-mathjax>
            <br>
            <h2>4</h2>
            <vue-mathjax :formula='dldxSub4'></vue-mathjax>
            <br>
            <h2>5</h2>
            <vue-mathjax :formula='dldxSub5'></vue-mathjax>
            <br>
            <h2>6</h2>
            <vue-mathjax :formula='dldxSub6'></vue-mathjax>
            <p>
               On equation 4 after distributing the sums, the values both simplify to the expectation over the batch <vue-mathjax :formula='mu'></vue-mathjax>. I do not break down 
               <vue-mathjax :formula='trickyPart1'></vue-mathjax> immediately as I did for <vue-mathjax :formula='expectation'></vue-mathjax> for understanding; <vue-mathjax :formula='mu'></vue-mathjax>
               is being summed up <i>m</i> times then divided by <i>m</i>. The difference in the parenthesis evaluates to 0 and then the labor of <i>"10 steps backwards 11 steps forward"</i> is shown.
               Equation 6 drops everything multiplied by zero and cleans up some of the left hand side of the equation.
               <br>
               <br>
               Now we begin simplifying right-most summand. Before we factor out constants, we combine a couple of the terms (money step). For ease of understanding, I've also put it in equation 6, but I change
               the index of the right-most product from <i>i</i> to <i>k</i>. This is because it has to be treated as a constant to the summation.
            </p>
            <h2>7</h2>
            <vue-mathjax :formula='dldxSub7'></vue-mathjax>  
            <p>
               Factor out constants
            </p>         
            <h2>8</h2>
            <vue-mathjax :formula='dldxSub8'></vue-mathjax>
            <p>
               The reason I mentioned combining terms in equation 7 was the money step is because the term <vue-mathjax :formula='xhatformula'></vue-mathjax> is equal to the normalization step 
               <vue-mathjax :formula='xhat'></vue-mathjax> in the backward pass of batch normalization. I substitute in <vue-mathjax :formula='xhat'></vue-mathjax>, which will be a parameter passed to
               our backward pass function from the forward pass stored in the cache (shown later), I change the square root representation to make factoring later more amenable, and I clean up stray terms.
            </p>
            <h2>9</h2>
            <vue-mathjax :formula='dldxSub9'></vue-mathjax>
            <p>
               Some final cleaning by factoring our similarities from the 3 terms. 
            </p>     
            <h2>10</h2>
            <vue-mathjax :formula='dldxSub10'></vue-mathjax>
            <p>
               Below is a codeblock implemented with equation 10. With a 276 character difference, the shortcut performs a backwards pass much faster than the original implementation.
            </p>
            <prism-editor class="codeblock" v-model="finalAnswerCode" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="thoughts"></div>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <p>
               I made a joke to it earlier by stating <i>"10 steps backwards 11 steps forward"</i>, but this exercise really embodied that expression.
               Originally I had trouble with understanding where summations belonged so there were a handful of errors by the time I got to step 3 causing me to scrap a chunk of the work.
               I found out that defining them rigidly in my current step 1 helped tremendously to save brain space. I also realized that you can "interweave" total derivatives
               with partials (prior to step 1) - doubt I'll be doing that again. If you're looking for a more readable interpretation of this exercise, check out
               <a href="https://kevinzakka.github.io/2016/09/14/batch_normalization/" target="_blank">this</a> blog post. The author substitutes in the partials as needed as opposed to doing it all at once as I did.
               The reason why I did it all at once was a combination of solidifying understanding, <b>making explanations unambiguous</b>, and having fun. Some of the simplifications in equations 1-10 are
               inefficient for the same reasons. If anybody struggles with concepts
               affiliated to total/partial derivatives wrt vectors this is a good exercise to do. Feel free to ping me if you see any errors or have any suggestions/considerations :).
            </p>
            <p>
               Ryan Lin
            </p>
         </div>
         <themeSwitch />
         <toTop />
   </div>
</template>

<script>
import backdrop from '../../components/backdrop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import toTop from '../../components/toTop.vue'
import bnBackpass from '../../assets/json/bnBackpass.json'

import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import { VueMathjax } from 'vue-mathjax'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-nord.css'

import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'

export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      themeSwitch,
      'vue-mathjax': VueMathjax,
      // CodeHighlight,
      PrismEditor

   },
   head: {
      title: {
         inner: 'The Shortcut in Differentiating the Backwards Pass in Batch Normalization',
      },
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'The Shortcut in Differentiating the Backwards Pass in Batch Normalization. Seeing how we can more optimally traverse through batch normalization during back propagation.'
         },
         {
            name: 'keywords',
            content: 'batch normalization, derivative, gradient, shortcut, neural networks, machine learning, artificial intelligence, ai, ml, backpropagation, backwards pass, regularization, optimization'
         },
         {
            property: 'og:description',
            content: 'The Shortcut in Differentiating the Backwards Pass in Batch Normalization. Seeing how we can more optimally traverse through batch normalization during back propagation.'
         }
      ],
      link: [
         {
            rel: 'canonical',
            href: 'https://ryli.design/blog/bnbackpass'
         }
      ]
   },
   data() {
      return {
         blogs: [],
         error: null,
         factor: `$\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}}$`,
         dldx: `$\\frac{\\partial{\\ell}}{\\partial{x_i}}$`,
         dldy: `$$\\frac{\\partial{\\ell}}{\\partial{y_i}} = \\mathrm{upstream}\\; \\mathrm{gradient} = \\mathrm{dout}$$`,
         dldxSolve: `$$\\frac{\\partial{\\ell}}{\\partial{\\hat{x_i}}} = \\mathrm{dout} \\cdot \\gamma$$`,
         dsigdmu: `$\\frac{\\partial{\\sigma^2_\\beta}}{\\partial{\\mu_\\beta}}$`,
         dsigdx: `$\\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}$`,
         dxdsig: `$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}$`,
         dydxhatSolve: `$$\\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} = \\gamma$$`, 
         dxhatdxSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} = \\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}$$`,
         dxhatdmuSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}} = \\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}$$`,
         dxhatdsigSolve: `$$\\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} = \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-3/2}(x_i-\\mu_\\beta)$$`,
         dsigdmuSolve: `$$\\frac{\\partial{\\sigma^2_\\beta}}{\\partial{\\mu_\\beta}} = \\frac{-2}{m}\\sum_{i=1}^{m}(x_i-\\mu_\\beta)$$`,
         dmudxSolve: `$$\\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} = \\frac{1}{m}$$`,
         dsigdxSolve: `$$\\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}} = \\frac{2}{m}(x_i-\\mu_\\beta)$$`,
         simplesigmoid: `$(1 - \\sigma(x))(\\sigma(x))$`,
         sigmoid: `$\\sigma^2_\\beta$`,
         xhat: `$\\hat{x_i}$`,
         xhatformula: `$\\frac{x_i-\\mu_\\beta}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}$`,
         mu: `$\\mu_\\beta$`,
         trickyPart1: `$\\frac{m\\mu_\\beta}{m}$`,
         expectation: `$\\frac{1}{m}\\sum_{i=1}^{m}x_i$`,
         secondSumSimplify: `$\\frac{-2}{m}\\sum_{i=1}^{m}(x_i-\\mu_\\beta)$`,
         rootTrick: `$(\\sigma^2_\\beta+\\epsilon)^{-3/2}$`,
         rootTrick2: `$(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}$`,
         dxhatdmu: `$\\frac{\\mathrm{d}{\\hat{x_i}}}{\\mathrm{d}{\\mu_\\beta}}$`,
         dxhatdmufull: `$$\\frac{\\mathrm{d}{\\hat{x_i}}}{\\mathrm{d}{\\mu_\\beta}} = \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}} +
                        \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}} \\cdot
                        \\frac{\\partial{\\sigma^2}}{\\partial{\\mu_\\beta}}$$`,
         redundant: `$\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} = \\frac{\\partial{\\ell}}{\\partial{\\hat{x_i}}}$`,

         // The big boys
         dldxSub1: bnBackpass.dldxSub1,
         dldxSub2: bnBackpass.dldxSub2,
         dldxSub3: bnBackpass.dldxSub3,
         dldxSub4: bnBackpass.dldxSub4,
         dldxSub5: bnBackpass.dldxSub5,
         dldxSub6: bnBackpass.dldxSub6,
         dldxSub7: bnBackpass.dldxSub7,
         dldxSub8: bnBackpass.dldxSub8,
         dldxSub9: bnBackpass.dldxSub9,
         dldxSub10: bnBackpass.dldxSub10,

         dldxSimple3: bnBackpass.dldxSimple3,
         dldxSimple2: bnBackpass.dldxSimple2,
         dldxSimple1: bnBackpass.dldxSimple1,

         dldxFull: bnBackpass.dldxFull,
         dldxFullQuote: bnBackpass.dldxFullQuote,
         bnChainCode: 
`   @staticmethod
   def backward(dout, cache):

      # dout: upstream gradient
      # cache: cache of intermediate variables to construct local gradient

      dx, dgamma, dbeta = None, None, None
      x, xhat, bMean, bVar, eps, gamma, beta = cache
      N, D = dout.shape

      dxhat = dout * gamma
      dbVar1 = torch.sum(dxhat * (x - bMean), 0)
      dbVar2 = ((-1/2)*((bVar + eps))**(-3/2))
      dbVar =  dbVar1 * dbVar2
      dMean = torch.sum(dxhat * -1/torch.sqrt(bVar + eps), 0) + dbVar * (torch.sum(-2*(x - bMean), 0))/ N
      x1 = dxhat * (1/torch.sqrt(bVar + eps)) 
      x2 = dbVar * (2 * (x - bMean)/ N)
      x3 = dMean * (1 / N)
      # Standard dl/dx composed of 373 characters
      dx = x1 + x2 + x3

      dgamma = torch.sum(dout * xhat, 0)
      dbeta = torch.sum(dout, 0)

      return dx, dgamma, dbeta`,
         finalAnswerCode:
`   @staticmethod
   def backward_alt(dout, cache):

      # dout: upstream gradient
      # cache: cache of intermediate variables to construct local gradient

      dx, dgamma, dbeta = None, None, None
      x, xhat, bMean, bVar, eps, gamma, beta = cache
      N, D = dout.shape

      dbeta = torch.sum(dout, 0)
      dgamma = torch.sum(dout * xhat, 0)
      # Optimized dl/dx composed of 97 characters
      dx = gamma/torch.sqrt(bVar + eps) * (dout - torch.sum(dout, 0)/N - xhat/N * torch.sum(dout * xhat, 0))

      return dx, dgamma, dbeta
   # >>> ~3-10x faster than backward()`
      }
   },
   methods: {
      highlighter(code) {
        return highlight(code, languages.py); // languages.<insert language> to return html with markup
      }
   },
   
   mounted () {

      window.MathJax.Hub.Config({
         tex2jax: {
            inlineMath: [['$','$']],
            displayMath: [['$$', '$$']],
            skipStartupTypeset: true,
            processEscapes: true,
            processEnvironments: true
         }
      });

      if(threeScene.cache == 'noScene') {
         return
      } else {
         gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0, designSceneOpacity: 0.4}, {sphere: 0.0, plane: 0.0, designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete: () => {
            threeScene.destroyHero()
            threeScene.destroyMesh()
            // From glossary.vue
         }})
         // gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete:() => {
         // threeScene.destroyMesh()
         // threeScene.scene.add(threeScene.sphere,threeScene.plane)
         // }})
         // setTimeout(() => {
         //    threeScene.destroyHero()
         // }, 1500)
         // Easier to just use the backdrop component, which I made earlier, instead of tweening.
         // gsap.fromTo(threeScene.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})
         
         threeScene.cache = 'noScene'
      }
   } 
}
</script>

<style scoped>

#curriculumBody {
   width: auto !important;
   display: flex;
   font-family: var(--type);
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}

#blogHeader {
   padding-bottom: 8vh;
   font-size: 22px;
}

p {
   padding: 25px 6vw;
   line-height: 2;
}

a { 
   text-decoration: underline;
   font-style: oblique;
}

a:not(.blogtoc a) {
   color: var(--shadeWhite1);
}

#blogSubHeader {
   color: var(--shadeWhite1);
   font-family: var(--type);
   font-size: 19px;
   padding-top: 50px;
}

@media (max-width: 1255px) {
   p {
      padding: 2vw;
   }
}

@media (max-width: 735px) {
   p {
      padding: 0;
   }
}

h2 {
   color: var(--shadeWhite1);
   font-size: 16px;
   font-style: italic;
   padding-top: 10px;
   margin: 0;
   font-weight: 200;
}
</style>