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
               In order to preserve training, the backward pass must also be defined. Similarly to how the gradient of the sigmoid function simplifies to <vm :formula='bnbackpassAssets.simplesigmoid'></vm>,
               the gradient for batch normalization can also undergo a similar process to promote computational efficiency (<a href="https://arxiv.org/pdf/1502.03167.pdf" target="_blank">link to paper</a>).
               <br>
            </p>
               <img id="img500" @click="imageZoom" class="noInvert" src="../../assets/blog/bn_forward.png" alt=""> 
            <p>
               During training, the chain rule is shown to backpropagate through the batch normalization transformation (page 4 of the paper). The code block was my implementation.
               <!-- Shown below is referred to as the "Staged Computation" for backpropagation.
               It is also sometimes referred to as the "flat" implementation for backprop, it uses the chain rule to derive the impact a parameter has upon an output.  -->
            </p>
               <img id="img500" @click="imageZoom" class="noInvert" src="../../assets/blog/bn_backward.png" alt="">

             <prism-editor class="codeblock" v-model="bnbackpassAssets.bnChainCode" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>

            <div id="total_derivative"></div>
            <div id="blogSubHeader">
               Total Derivative Representation
            </div>
            <p>
               <vm :formula='bnbackpassAssets.dldxFullQuote'></vm>
               <br>
               Now lets find a better way to pass backwards through batch normalization using the derivative. Above is a "full" representation of the total derivative of <vm :formula='bnbackpassAssets.dldx'></vm>.
               I wrote the "full" (as opposed to the truly full) representation first for ease of understanding. The third term in the second summand: 
               <vm :formula='bnbackpassAssets.dxhatdmu'></vm>, can be further decomposed because <vm :formula='bnbackpassAssets.mu'></vm> is an argument of <vm :formula='bnbackpassAssets.xhat'></vm> and the
               intermediate variable <vm :formula='bnbackpassAssets.sigmoid'></vm>.
               It looks like:
            </p>
            <vm :formula='bnbackpassAssets.dxhatdmufull'></vm>
            <p>
               The full represetation without quotes:
            </p>
            <vm :formula='bnbackpassAssets.dldxFull'></vm>
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
               <vm :formula='bnbackpassAssets.dldxSimple1'></vm>
               <br>
            <!-- <p>
               Factoring out <vm :formula='bnbackpassAssets.factor'></vm> as shown below is no good. Doing so destroys scalar structure. The below function is bad.
            </p>
            <vm :formula='bnbackpassAssets.dldxSimple2'></vm> -->
            <p>
               For clarity, you can rewrite redundant partials into a generalized form: <vm :formula='bnbackpassAssets.redundant'></vm>
            </p>
            <vm :formula='bnbackpassAssets.dldxSimple3'></vm>
            
            <div id="partials"></div>
            <div id="blogSubHeader">
               Solving the Partials
            </div>
            <p>
               Solve for all of the partials shown above. This is the easiest part. The upstream gradient defined immediately below is automatically provided to the function when backpropagating.
               Special consideration to <vm :formula='bnbackpassAssets.dsigdmu'></vm> and <vm :formula='bnbackpassAssets.dsigdx'></vm> as there are summations in
               their functions. The sigma notation in <vm :formula='bnbackpassAssets.dsigdx'></vm> does not carry over because we are differentiating wrt a vector.
            </p>
            <vm :formula='bnbackpassAssets.dldy'></vm>
            <br>
            <vm :formula='bnbackpassAssets.dydxhatSolve'></vm>
            <br>
            <vm :formula='bnbackpassAssets.dldxSolve'></vm>
            <br>
            <vm :formula='bnbackpassAssets.dxhatdxSolve'></vm>
            <br>
            <vm :formula='bnbackpassAssets.dxhatdmuSolve'></vm>
            <br>
            <vm :formula='bnbackpassAssets.dxhatdsigSolve'></vm>
            <br>
            <vm :formula='bnbackpassAssets.dsigdmuSolve'></vm>
            <br>
            <vm :formula='bnbackpassAssets.dmudxSolve'></vm>
            <br>
            <vm :formula='bnbackpassAssets.dsigdxSolve'></vm>
            <div id="substitute"></div>
            <div id="blogSubHeader">
               Substitute in Partials & Simplify
            </div>
            <p>
               Every partial is evaluated. <b>Substitute in everything except dout</b> to the template from step 1. Leaving it's partial provides headspace for knowing what some of the summations will be operating on.
               Note that I've changed the nested summations index to <i>k</i>. It will initially look more confusing, but simplifies well :). <i>(be careful to consider equations overflowing to the next line)</i>
            </p>
            <h2>1</h2>
            <vm :formula='bnbackpassAssets.dldxSub1'></vm>
            <p>
               I'm going to work on the middle summand first. Rewrite <vm :formula='bnbackpassAssets.rootTrick'></vm> as <vm :formula='bnbackpassAssets.rootTrick2'></vm>. I will also slowly
               be removing the dot notation where multiplication is obvious.
            </p>
            <h2>2</h2>
            <vm :formula='bnbackpassAssets.dldxSub2'></vm>
            <p>
               Further simplify the nested summation <vm :formula='bnbackpassAssets.secondSumSimplify'></vm> by distributing the sigma to it's terms.
            </p>
            <h2>3</h2>
            <vm :formula='bnbackpassAssets.dldxSub3'></vm>
            <br>
            <h2>4</h2>
            <vm :formula='bnbackpassAssets.dldxSub4'></vm>
            <br>
            <h2>5</h2>
            <vm :formula='bnbackpassAssets.dldxSub5'></vm>
            <br>
            <h2>6</h2>
            <vm :formula='bnbackpassAssets.dldxSub6'></vm>
            <p>
               On equation 4 after distributing the sums, the values both simplify to the expectation over the batch <vm :formula='bnbackpassAssets.mu'></vm>. I do not break down 
               <vm :formula='bnbackpassAssets.trickyPart1'></vm> immediately as I did for <vm :formula='bnbackpassAssets.expectation'></vm> for understanding; <vm :formula='bnbackpassAssets.mu'></vm>
               is being summed up <i>m</i> times then divided by <i>m</i>. The difference in the parenthesis evaluates to 0 and then the labor of <i>"10 steps backwards 11 steps forward"</i> is shown.
               Equation 6 drops everything multiplied by zero and cleans up some of the left hand side of the equation.
               <br>
               <br>
               Now we begin simplifying right-most summand. Before we factor out constants, we combine a couple of the terms (money step). For ease of understanding, I've also put it in equation 6, but I change
               the index of the right-most product from <i>i</i> to <i>k</i>. This is because it has to be treated as a constant to the summation.
            </p>
            <h2>7</h2>
            <vm :formula='bnbackpassAssets.dldxSub7'></vm>  
            <p>
               Factor out constants
            </p>         
            <h2>8</h2>
            <vm :formula='bnbackpassAssets.dldxSub8'></vm>
            <p>
               The reason I mentioned combining terms in equation 7 was the money step is because the term <vm :formula='bnbackpassAssets.xhatformula'></vm> is equal to the normalization step 
               <vm :formula='bnbackpassAssets.xhat'></vm> in the backward pass of batch normalization. I substitute in <vm :formula='bnbackpassAssets.xhat'></vm>, which will be a parameter passed to
               our backward pass function from the forward pass stored in the cache (shown later), I change the square root representation to make factoring later more amenable, and I clean up stray terms.
            </p>
            <h2>9</h2>
            <vm :formula='bnbackpassAssets.dldxSub9'></vm>
            <p>
               Some final cleaning by factoring our similarities from the 3 terms. 
            </p>     
            <h2>10</h2>
            <vm :formula='bnbackpassAssets.dldxSub10'></vm>
            <p>
               Below is a codeblock implemented with equation 10. With a 276 character difference, the shortcut performs a backwards pass much faster than the original implementation.
            </p>
            <prism-editor class="codeblock" v-model="bnbackpassAssets.finalAnswerCode" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
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
import bnbackpassjs from './assets/bnbackpass'

import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import { VueMathjax } from 'vue-mathjax'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-nord.css'

export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      themeSwitch,
      'vm': VueMathjax,
      PrismEditor

   },

   head: {
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: `An explanation on providing faster means to derive the gradient of the batch normalization process. A step by step walkthrough through all of the needed math with some code.`
         },
         {
            name: 'keywords',
            content: 'batch normalization, derivative, gradient, shortcut, neural networks, machine learning, artificial intelligence, ai, ml, backpropagation, backwards pass, regularization, optimization'
         },
         {
            property: 'og:description',
            content: `An explanation on providing faster means to derive the gradient of the batch normalization process. A step by step walkthrough through all of the needed math with some code.`
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
         bnbackpassAssets: bnbackpassjs
      }
   },

   methods: {
      highlighter(code) {
        return highlight(code, languages.py); // languages.<insert language> to return html with markup
      },

      imageZoom(event) {
         // https://stackoverflow.com/questions/53737648/how-get-clicked-item-in-vue
         event.target.classList.toggle('scaledUp')
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
   } 
}
</script>

<style scoped src='./css/blog.css'>
</style>