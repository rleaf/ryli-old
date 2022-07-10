<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Tractability and Optimization of the Variational Autoencoder</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">7 &#8226; 8 &#8226; 2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#elbo">Lower Variational Bound (or ELBO)</a></li>
                  <ul>
                     <li><a href="#logpx">Starting with: log p(x)</a></li>
                     <li><a href="#bayes">Starting with: Bayes Rule</a></li>
                     <li><a href="#kldivergence">Starting with: KL divergence</a></li>
                  </ul>
                  <li><a href="#">Gradient Flow</a></li>
                  <li><a href="#thoughts">Thoughts</a></li>
               </ul>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               Tractibility concerns become evident when considering likelihood estimation for a Variational Autoencoder. Unable to maximize the marginal distribution
               <vue-mathjax :formula='`$p_\\theta(x) = \\int{p_\\theta(x|z)p_\\theta(z)dz}$`'></vue-mathjax> due to complexity of integrating over the high dimensional latent space <vue-mathjax :formula='`$z$`'></vue-mathjax>,
               it is also prohibitive to maximize the bayesian representation <vue-mathjax :formula='`$p_\\theta(x) = p_\\theta(x|z)p_\\theta(z)/p_\\theta(z|x)$`'></vue-mathjax>
               because of the posterior <vue-mathjax :formula='`$p_\\theta(z|x)$`'></vue-mathjax>. To circumvent this tractibility concern an auxiliary network,
               <vue-mathjax :formula='`$q_\\phi(z|x)$`'></vue-mathjax>, is introduced to approximate the posterior: <vue-mathjax :formula='`$q_\\phi(z|x) \\approx p_\\theta(z|x)$`'></vue-mathjax>.
               <br><br>
               The relationship between the auxiliary network, popularly referred to as the <i>encoder</i>, and the posterior distribution will provide a tractible means for likelihood estimation
               and is what will become known as the <i>lower variational bound</i> or the <i> evidence lower bound (ELBO)</i>. Then by jointly updating parameters 
               <vue-mathjax :formula='`$\\phi$`'></vue-mathjax> and <vue-mathjax :formula='`$\\theta$`'></vue-mathjax> via some gradient optimization (maximizing likelihood), the Variational
               Autoencoder increases in efficacy.
               <br><br>
               The goal here is to "homogenize" the information I've found on VAEs. Different sources on the network begin explanation differently, so some people (me) are prone to confusion.
               By sewing together these sources, the different philosophies are packaged together and presented, hopefully, with a bow on top.
               <!-- <br><br>
               An important consideration about this read is that I only delve into a portion of what VAEs are. I focus particularly on what is explained above: both their tractibility and their gradient flow.
               I do not talk about overarching concepts typically associated with VAEs like discriminative vs. generative models or Deep Latent Variable Models (DLVMs).
               <a href="https://arxiv.org/abs/1906.02691" target="_blank">Here</a> is a link that does talk about these concepts.  -->
               
            </p>
            <div id="elbo"></div>
            <div id="blogSubHeader">
               Lower Variational Bound (or ELBO)
            </div>
            <p>
               The lower variational bound, <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>,
               is a value that is always less than or equal to the proposed density <vue-mathjax :formula='`$\\log{p_\\theta(x)}$`'></vue-mathjax>. By maximizing the tractible
               <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>, the intractible marginal likelihood, <vue-mathjax :formula='`$p_\\theta(x)$`'></vue-mathjax>, is also maximized. Note that
               applying the monotonic transformation <vue-mathjax :formula='`$\\log{f(x)}$`'></vue-mathjax> to some function <vue-mathjax :formula='`$f(x)$`'></vue-mathjax> preserves local extrema which does
               not conflict with maximum likelihood estimation. Below I cover three different ways to arrive at <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>.
            </p>
            <div id="logpx"></div>
            <h2>Starting with: log p(x)</h2>
            <br><br>
            <vue-mathjax :formula='logpx'></vue-mathjax>
            <p>
               This is, from what I've seen, the most popular way to formulate <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>. Equation 1.4 defines the relationship between the marginal likelihood,
               <vue-mathjax :formula='`$\\log{p_\\theta(x)}$`'></vue-mathjax>, and <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax> where the difference between the two values is the KL divergence
               from the encoder, <vue-mathjax :formula='`$q_\\phi(z|x)$`'></vue-mathjax>, to the posterior, <vue-mathjax :formula='`$p_\\theta(z|x)$`'></vue-mathjax>. Because the KL divergence is non negative,
               by subtracting it from the RHS we ensure <vue-mathjax :formula='`$\\log{p_\\theta(x) \\geq \\mathcal{L}}$`'></vue-mathjax>.
            </p>
            <div id="bayes"></div>
            <h2>Starting with: Bayes Rule</h2>
            <br><br>
            <vue-mathjax :formula='bayes'></vue-mathjax>
            <p>
               toads
            </p>
         </div>
         <themeSwitch />
         <toTop />
   </div>
</template>

<script>
// import axios from 'axios'
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import { VueMathjax } from 'vue-mathjax'
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      themeSwitch, 
      'vue-mathjax': VueMathjax
      // MathJax
   },
   metaInfo: {
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'Toads'
         },
         {
            name: 'keywords',
            content: 'toads, are, green, sometimes'
         },
         {
            property: 'og:description',
            content: 'Toads'
         }
      ]
   },
   data() {
      return {
         logpx: `$$\\begin{align}
         \\log{p_\\theta(x)} & = \\mathbb{E}_{q_{\\phi}(z|x)}[\\log{p_\\theta(x)}] && \\mathbb{E}_p[C] = C, \\text{where C is constant to distribution p} \\tag{1.0} \\\\[2ex] 
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x, z)}{p_\\theta(z|x)}}\\biggr] && \\text{probability chain rule}\\tag{1.1} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x, z)q_\\phi(z|x)}{q_\\phi(z|x)p_\\theta(z|x)}}\\biggr] && \\text{multiply by "1"}\\tag{1.2} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x, z)}{q_\\phi(z|x)}\\biggr] + \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_\\phi(z|x)}{p_\\theta(z|x)}}}\\biggr] && \\text{segregate}\\tag{1.3} \\\\[2ex]
            & = \\mathcal{L} + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) \\tag{1.4} \\\\[2ex]
         \\log{p_\\theta(x)} & \\geq \\mathcal{L} \\tag{1.5}
         \\end{align}$$`,
         bayes: `$$\\begin{align}
         \\log{\\frac{p_\\theta(x|z)p_\\theta(z)}{p_\\theta(z|x)}} & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x|z)p_\\theta(z)}{p_\\theta(z|x)}}\\biggr] && \\text{Reasoning from (1.0)} \\tag{2.0} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x|z)q_\\phi(z|x)p_\\theta(z)}{p_\\theta(z|x)q_\\phi(z|x)}}\\biggr] && \\text{multiply by "1"} \\tag{2.1} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{p_\\theta(x|z)} - \\log{\\frac{q_\\phi(z|x)}{p_\\theta(z)}} + \\log{\\frac{q_\\phi(z|x)}{p_\\theta(z|x)}}\\biggr] && \\text{segregate via log rules}\\tag{2.2} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x|z)} \\bigr] - \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_\\phi(z|x)}{p_\\theta(z)}} \\biggr] +
                \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_\\phi(z|x)}{p_\\theta(z|x)}} \\biggr] \\tag{2.3} && \\text{distibute expectation via linear property} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x|z)} \\bigr] - D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z)) + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) && \\text{*check below}\\tag{2.31} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x|z)} \\bigr] + \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(z)}{q_\\phi(z|x)}} \\biggr] +
               D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) && \\text{log reciprocal & definition of KL divergence} \\tag{2.4} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x|z)p_\\theta(z)}{q_\\phi(z|x)}} \\biggr] + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) && \\text{log product rule} \\tag{2.5} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x, z)}{q_\\phi(z|x)}} \\biggr] + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) && \\text{probability chain rule} \\tag{2.6} \\\\[2ex]
            & = \\mathcal{L} + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) \\tag{2.7} \\\\[2ex]
         \\end{align}$$`
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

<style scoped src='./css/blog.css'>
</style>