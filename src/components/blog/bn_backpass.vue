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
                  <p style="font-size: 20px; padding: 0 !important; ">10&#8226;5&#8226;2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <p>
               <i>This read is to serve more-so as a reference, as opposed to being more explanatory, to concepts about the shortcut of the backward pass in batch normalization. It is a little impractical because
                  instead of substituting partials as needed when working through the math, I do everything at once in the most expanded form.
                  I link an alternative, maybe more interpretable, blog down below in the conclusion.</i>
               <br>
               <br>
               The image below defines "whitening". An application to a batch of inputs with the goal to reduce the <i>internal covariate shift</i>. This procedure occurs during the forward pass.
               In order to preserve training, the backward pass must also be defined. Similarly to how the gradient of the sigmoid function simplifies to <vue-mathjax :formula='simplesigmoid'></vue-mathjax>,
               the gradient for batch normalization can also undergo a similar process to promote computational efficiency (<a href="https://arxiv.org/pdf/1502.03167.pdf" target="_blank">link to paper</a>).
               <br>
            </p>
               <img id="img500" src="../../assets/blog/bn_forward.png" alt=""> 
            <p>
               During training, the chain rule is shown to backpropagate through the batch normalization transformation (page 4 of the paper). The code block was my implementation.
               <!-- Shown below is referred to as the "Staged Computation" for backpropagation.
               It is also sometimes referred to as the "flat" implementation for backprop, it uses the chain rule to derive the impact a parameter has upon an output.  -->
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
               <vue-mathjax :formula='dxhatdmu'></vue-mathjax>, can be further decomposed because <vue-mathjax :formula='mu'></vue-mathjax> is an argument of <vue-mathjax :formula='xhat'></vue-mathjax> and the
               intermediate variable <vue-mathjax :formula='sigmoid'></vue-mathjax>.
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
            
            <div id="blogSubHeader">
               Step 2
            </div>
            <p>
               Solve for all of the partials shown above. This is the easiest part. The upstream gradient defined immediately below is automatically provided to the function when backpropagating.
               Special consideration to <vue-mathjax :formula='dsigdmu'></vue-mathjax>, <vue-mathjax :formula='dxdsig'></vue-mathjax>, and <vue-mathjax :formula='dsigdx'></vue-mathjax> as there are summations in
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
            <div id="blogSubHeader">
               Step 3
            </div>
            <p>
               Every partial is evaluated. <b>Substitute in everything except dout</b> to the template. Leaving it's partial provides headspace for knowing what some of the summations will be operating on.
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
            <code-highlight language="python">
               {{ finalAnswerCode }}
            </code-highlight>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <p>
               I made a joke to it earlier by stating <i>"10 steps backwards 11 steps forward"</i>, but this exercise really embodied that expression.
               Originally I had trouble with understanding where summations belonged so there were a handful of errors by the time I got to step 3 causing me to scrap a chunk of the work.
               I found out that defining them rigidly in my current step 1 helped tremendously to save brain space. I also realized that you can "interweave" total derivatives
               with partials (prior to step 1) - doubt I'll be doing that again. If you're looking for a more readable interpretation of this exercise, check out
               <a href="https://kevinzakka.github.io/2016/09/14/batch_normalization/" target="_blank">this</a> blog post. The author substitutes in the partials as needed as opposed to doing it all at once as I did.
               The reason why I did it all at once was a combination of solidifying understanding, <b>making explanations unambiguous</b>, and having fun. If anybody struggles with concepts
               affiliated to total/partial derivatives wrt vectors this is a good exercise to do. Feel free to ping me if you see any errors or have any suggestions/considerations. Lastly, sorry to my
               2nd grade teacher, Mrs. Swain, for using "we" and "I" interchangeably.
            </p>
            <p>
               Ryan Lin
            </p>
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
         dldxSub1: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   \\Biggl(\\sum_{i=1}^{m}\\biggl( \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}\\biggr) \\cdot
                   \\frac{1}{m} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot\\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-3/2}
                   (x_i -\\mu_\\beta)\\cdot
                   \\frac{-2}{m}\\sum_{k=1}^{m}(x_k -\\mu_\\beta)
                   \\biggr)\\frac{1}{m}\\Biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-3/2}
                   (x_i -\\mu_\\beta)\\biggr) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)
                   $$`,
         dldxSub2: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   \\Biggl(\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot
                   \\gamma \\cdot \\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}
                   \\biggr) \\frac{1}{m} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot\\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta) \\cdot
                   \\frac{-2}{m}\\sum_{k=1}^{m}(x_k-\\mu_\\beta)\\biggr)
                   \\frac{1}{m}\\Biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)
                   $$`,
         dldxSub3: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   \\Biggl(\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot
                   \\gamma \\cdot \\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}
                   \\biggr) \\frac{1}{m} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot\\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta) \\cdot
                   -2\\biggl(\\frac{1}{m}\\sum_{k=1}^{m}x_k-\\frac{1}{m}\\sum_{k=1}^{m}\\mu_\\beta\\biggr)\\biggr)
                   \\frac{1}{m}\\Biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)
                   $$`,
         dldxSub4: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   \\Biggl(\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot
                   \\gamma \\cdot \\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}
                   \\biggr) \\frac{1}{m} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot\\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta) \\cdot
                   -2\\Bigl(\\mu_\\beta-\\frac{m\\mu_\\beta}{m}\\Bigr)\\biggr)
                   \\frac{1}{m}\\Biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)
                   $$`,
         dldxSub5: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} +
                   \\Biggl(\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot
                   \\gamma \\cdot \\frac{-1}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}
                   \\biggr) \\frac{1}{m} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}\\cdot\\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta) \\cdot
                   -2\\Bigl(0\\Bigr)\\biggr)
                   \\frac{1}{m}\\Biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{2}{m}(x_i-\\mu_\\beta)
                   $$`,
         dldxSub6: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\gamma}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} -
                   \\frac{\\gamma}{m\\sqrt{\\sigma^2_\\beta + \\epsilon}}\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}
                   \\biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   \\frac{-1}{2}(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{1}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}(x_i-\\mu_\\beta)\\biggr) \\cdot
                   \\frac{2}{m}(x_k-\\mu_\\beta)
                   $$`,
                   
         dldxSub7: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\gamma}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} -
                   \\frac{\\gamma}{m\\sqrt{\\sigma^2_\\beta + \\epsilon}}\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}
                   \\biggr) +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\gamma \\cdot
                   -(\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{x_k-\\mu_\\beta}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\frac{x_i-\\mu_\\beta}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\biggr)
                   $$`,
         dldxSub8: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\gamma}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} -
                   \\frac{\\gamma}{m\\sqrt{\\sigma^2_\\beta + \\epsilon}}\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}
                   \\biggr) -
                   \\gamma \\cdot
                   (\\sigma^2_\\beta+\\epsilon)^{-1/2}\\frac{x_k-\\mu_\\beta}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\frac{x_i-\\mu_\\beta}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\biggr)
                   $$`,
         dldxSub9: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\gamma}{\\sqrt{\\sigma^2_\\beta + \\epsilon}} -
                   \\frac{\\gamma}{m\\sqrt{\\sigma^2_\\beta + \\epsilon}}\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}
                   \\biggr) -
                   \\frac{\\gamma}{\\sqrt{\\sigma^2_\\beta+\\epsilon}}\\cdot\\hat{x_k}
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\hat{x_i}\\biggr)
                   $$`,
         dldxSub10: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} =
                   \\frac{\\gamma}{\\sqrt{\\sigma^2_\\beta + \\epsilon}}\\Biggr(\\frac{\\partial{\\ell}}{\\partial{y_i}} -
                   \\frac{1}{m}
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}}
                   \\biggr) -
                   \\frac{\\hat{x_k}}{m}
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot \\hat{x_i}\\biggr)\\Biggl)
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
                   \\Biggl(\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}\\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}}\\Biggr) +
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
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}}\\Biggr) +
                   \\sum_{i=1}^{m}\\biggl(
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{x_i}}\\Biggr)
                   $$`,
         dldxSimple1: `$$\\frac{\\partial{\\ell}}{\\partial{x_i}} = \\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{x_i}} +
                   \\Biggl(\\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}} +
                   \\sum_{i=1}^{m}\\biggl(\\frac{\\partial{\\ell}}{\\partial{y_i}} \\cdot
                   \\frac{\\partial{y_i}}{\\partial{\\hat{x_i}}} \\cdot
                   \\frac{\\partial{\\hat{x_i}}}{\\partial{\\sigma^2_\\beta}}\\cdot
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{\\mu_\\beta}}\\biggr) \\cdot
                   \\frac{\\partial{\\mu_\\beta}}{\\partial{x_i}}\\Biggr) +
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
                   \\frac{\\partial{\\sigma^2_\\beta}}{\\partial{\\mu_\\beta}} \\cdot
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

      return dx, dgamma, dbeta
         `,
         finalAnswerCode:
         `
   @staticmethod
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
   # >>> ~3-10x faster than backward()
         `
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
   color: #81A1C1;
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