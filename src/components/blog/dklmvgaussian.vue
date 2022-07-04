<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p>KL Divergence Between Multivariate Gaussians</p>
                  <p style="font-size: 18px">6 &#8226; 27 &#8226; 2022</p>
               </div>
            </div>
            <div class="tocHeader">
               <div class="blogtoc">
                     Contents
                  
                  <ul>
                     <li><a href="#introduction">The "Meat & Potatoes"</a></li>
                     <li><a href="#properties">Properties Used & Explanation</a></li>
                     <li><a href="#alternative">Alternative Method</a></li>
                  </ul>
               </div>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               The "Meat & Potatoes"
            </div>
            <p>
               The KL divergence of continuous distributions is:
            </p>
            <vue-mathjax :formula='dkl'></vue-mathjax>
            <p>
               The density function of the multivariate normal distribution is:
            </p>
            <vue-mathjax :formula='mvnormal'></vue-mathjax>
            <p>
               Let <vue-mathjax :formula='`$p(x)\\sim\\mathcal{N}(\\mu_1, \\Sigma_1)$`'></vue-mathjax> and <vue-mathjax :formula='`$q(x)\\sim\\mathcal{N}(\\mu_2, \\Sigma_2)$`'></vue-mathjax>, both
               in <vue-mathjax :formula='`$\\mathbb{R}^n$`'></vue-mathjax>.
               The KL divergence between distribution <vue-mathjax :formula='`$p(x)$`'></vue-mathjax> and <vue-mathjax :formula='`$q(x)$`'></vue-mathjax> is:
            </p>
            <div class="mathjax">
            <vue-mathjax :formula='ohboy'></vue-mathjax>

            </div>

            <div id="properties"></div>
            <div id="blogSubHeader">
               Properties Used & Explanation
            </div>
            <p>
               Eq (1): Definition of KL divergence
               <br>
               Eq (2): Represent the integral as the expectation of continuous random variable <vue-mathjax :formula='`$X$`'></vue-mathjax> generated from distribution <vue-mathjax :formula='`$p$`'></vue-mathjax>.
               In other reads I usually denote with <vue-mathjax :formula='`$\\mathbb{E}_{X\\,\\sim{\\,p}}$`'></vue-mathjax>, however not here to keep things simple.
               [<a href="https://en.wikipedia.org/wiki/Expected_value#Random_variables_with_density" target="_blank">Link</a>]
               <br>
               Eq (3): Quotient rule. [<a href="https://mathinsight.org/logarithm_basics" target="_blank">Link</a>]
               <br>
               Eq (4): Substitute in the densities.
               <br>
               Eq (5): Log of reciprocal rule and Log of e rule. [See eq. 3]
               <br>
               Eq (6): Product rule. [See eq. 3]
               <br>
               Eq (7): Cancel terms and use log of power rule. [See eq. 3]
               <br>
               Eq (8): Quotient rule. [See eq. 3]
               <br>
               Eq (9): Segregate expectations via linearity property and take the expectation of the constant, which is equal to the constant.
               [<a href="https://en.wikipedia.org/wiki/Expected_value#Properties" target="_blank">Link</a>]
               <br>
               Eq (10): <vue-mathjax :formula='`$(x-\\mu)^\\top\\Sigma(x-\\mu)$`'></vue-mathjax> is a real number, which can be interpreted as a 1x1 matrix, making it equal to its trace.
               <br>
               Eq (11): Use equation 16 of section 1.1 from the matrix cookbook. [<a href="https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf" target="_blank">Link</a>]
               <br>
               Eq (12): Distribute expectation again. For the middle term: <vue-mathjax :formula='`$\\text{tr}(\\mathbb{E}(X)) = \\mathbb{E}(\\text{tr}(X))$`'></vue-mathjax>, factor out the constant
               inverse covariance matrix, and then you are left with the definition of the covariance matrix. [<a href="https://en.wikipedia.org/wiki/Covariance_matrix#Definition" target="_blank">Link</a>].
               Right hand term: distribute.
               <br>
               Eq (13): Middle term: definition of matrix inverse. [<a href="https://en.wikipedia.org/wiki/Invertible_matrix" target="_blank">Link</a> ]. Right hand term: use trace/expectation property shown in eq 12
               and then factor out the constant inverse covariance matrix.
               <br>
               Eq (14): Middle term: the trace of the identity is equal to the dimension of the matrix. Right hand term: Use equation 377 of section 8.2 in the matrix cookbook linked in equation 11. Then take the
               expectation of <vue-mathjax :formula='`$2x\\mu_2^\\top$`'></vue-mathjax>, which is <vue-mathjax :formula='`$2\\mu_1\\mu_2^\\top$`'></vue-mathjax> since the expectation is generated from
               distribution <vue-mathjax :formula='`$p$`'></vue-mathjax>.
               <br>
               Eq (15): Distribute <vue-mathjax :formula='`$\\Sigma_2^{-1}$`'></vue-mathjax> accordingly.
               <br>
               Eq (16): Factor right hand term.
               <br>
               Eq (17): Factor out <vue-mathjax :formula='`$1/2$`'></vue-mathjax>. Reorder the right hand term via commutative properties.
               <br>
               Eq (17.1): An alternative representation. Factor out -1 from both terms on the right hand side, which nullify. 
            </p>
            <div id="alternative"></div>
            <div id="blogSubHeader">
               Alternative Method
            </div>
            <p>
               Starting from equation 11 defined above however we don't trace the right hand term in the expectation:
            </p>
            <vue-mathjax :formula='alt'></vue-mathjax>
            <p>
               Eq (12): Instead of expanding the right hand term as shown above, use equation 380 in section 8.2 of the <a href="https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf" target="_blank">matrix cookbook</a>.
               All other operations follow in suit from above.
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
import entropyjs from './assets/entropy.js'



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
      title: 'Toads',
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'An step by step on the KL divergence between two mv gaussian distributions.'
         },
         {
            name: 'keywords',
            content: 'kl divergence, multivariate gaussian, multivariate normal, distribution, entropy, information theory'
         },
         {
            property: 'og:description',
            content: 'An step by step on the KL divergence between two mv gaussian distributions.'
         }
      ]
   },
   data() {
      return {
         blogs: [],
         entropy: entropyjs,
         error: null,
         dkl: '$$D_{\\mathbb{KL}}(p\\,||\\,q)\\triangleq\\int_x{p(x)\\log\\frac{{p(x)}}{q(x)}}dx$$',
         mvnormal: '$$p(x;\\,\\mu,\\Sigma)=\\frac{1}{(2\\pi)^{n/2}\\det{(\\Sigma)}^{1/2}}\\exp{\\biggl(-\\frac{1}{2}(x-\\mu)^\\top\\Sigma^{-1}(x-\\mu)\\biggr)}$$',
         ohboy: `\\begin{align}
         D_{\\mathbb{KL}}(p\\,||\\,q) & = \\int_x{p(x)\\log\\frac{{p(x)}}{q(x)}}dx \\tag{1} \\\\[2ex] 
            & = \\mathbb{E}_p\\Biggl[\\log\\frac{p(x)}{q(x)}\\Biggr] \\tag{2}\\\\[2ex]
            & = \\mathbb{E}_p[\\log{p(x)} - \\log{q(x)}] \\tag{3}\\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[\\log\\Biggl(\\frac{1}{(2\\pi)^{n/2}\\det{(\\Sigma_1)}^{1/2}}\\exp{\\biggl(-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma_1^{-1}(x-\\mu_1)\\biggr)}\\Biggr) - 
                \\log\\Biggl(\\frac{1}{(2\\pi)^{n/2}\\det{(\\Sigma_2)}^{1/2}}\\exp{\\biggl(-\\frac{1}{2}(x-\\mu_2)^\\top\\Sigma_2^{-1}(x-\\mu_2)\\biggr)}\\Biggr)\\Biggr] \\tag{4} \\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[-\\log\\Bigl((2\\pi)^{n/2}\\det{(\\Sigma_1)}^{1/2}\\Bigr)-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}_1(x-\\mu_1) +
                \\log\\Bigl((2\\pi)^{n/2}\\det{(\\Sigma_2)}^{1/2}\\Bigr)+\\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}_2(x-\\mu_2)\\Biggr] \\tag{5} \\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[-\\log\\Bigl((2\\pi)^{n/2}\\Bigr)-\\log\\Bigl(\\det{(\\Sigma_1)}^{1/2}\\Bigr)-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}_1(x-\\mu_1) +
                \\log\\Bigl((2\\pi)^{n/2}\\Bigr)+\\log\\Bigl(\\det{(\\Sigma_2)}^{1/2}\\Bigr)+\\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}_2(x-\\mu_2)\\Biggr] \\tag{6} \\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[-\\frac{1}{2}\\log\\Bigl(\\det{(\\Sigma_1)}\\Bigr)-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}_1(x-\\mu_1) +
                \\frac{1}{2}\\log\\Bigl(\\det{(\\Sigma_2)}\\Bigr)+\\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}_2(x-\\mu_2)\\Biggr] \\tag{7} \\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[\\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}_1(x-\\mu_1) +
                \\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}_2(x-\\mu_2)\\Biggr] \\tag{8} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)+ \\mathbb{E}_p\\Bigg[-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}_1(x-\\mu_1) +
                \\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}_2(x-\\mu_2)\\Biggr] \\tag{9} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)+ \\frac{1}{2}\\mathbb{E}_p\\Bigg[-\\text{tr}\\Bigl((x-\\mu_1)^\\top\\Sigma^{-1}_1(x-\\mu_1)\\Bigr) +
                \\text{tr}\\Bigl((x-\\mu_2)^\\top\\Sigma^{-1}_2(x-\\mu_2)\\Bigr)\\Biggr] \\tag{10} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)+ \\frac{1}{2}\\mathbb{E}_p\\Bigg[-\\text{tr}\\Bigl(\\Sigma^{-1}_1(x-\\mu_1)(x-\\mu_1)^\\top\\Bigr) +
                \\text{tr}\\Bigl(\\Sigma^{-1}_2(x-\\mu_2)(x-\\mu_2)^\\top\\Bigr)\\Biggr] \\tag{11} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)- \\frac{1}{2}\\text{tr}\\Bigl(\\Sigma^{-1}_1\\Sigma_1\\Bigr) +
                \\frac{1}{2}\\mathbb{E}_p\\Bigg[\\text{tr}\\Bigl(\\Sigma^{-1}_2(xx^\\top-2x\\mu_2^\\top+\\mu_2\\mu_2^\\top)\\Bigr)\\Biggr] \\tag{12} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)- \\frac{1}{2}\\text{tr}\\bigl(\\mathit{I}_n\\bigr) +
                \\frac{1}{2}\\text{tr}\\Bigl(\\Sigma^{-1}_2\\mathbb{E}_p\\Big[(xx^\\top-2x\\mu_2^\\top+\\mu_2\\mu_2^\\top)\\Bigr]\\Bigr) \\tag{13} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)- \\frac{n}{2} +
                \\frac{1}{2}\\text{tr}\\Bigl(\\Sigma^{-1}_2(\\Sigma_1+\\mu_1\\mu_1^\\top-2\\mu_1\\mu_2^\\top+\\mu_2\\mu_2^\\top)\\Bigr) \\tag{14} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)- \\frac{n}{2} +
                \\frac{1}{2}\\text{tr}\\bigl(\\Sigma^{-1}_2\\Sigma_1\\bigr)+\\Sigma^{-1}_2\\bigl(\\mu_1\\mu_1^\\top-2\\mu_1\\mu_2^\\top+\\mu_2\\mu_2^\\top\\bigr) \\tag{15} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)- \\frac{n}{2} +
                \\frac{1}{2}\\text{tr}\\bigl(\\Sigma^{-1}_2\\Sigma_1\\bigr)+\\Sigma^{-1}_2\\bigl(\\mu_1-\\mu_2\\bigr)\\bigl(\\mu_1-\\mu_2\\bigr)^\\top \\tag{16} \\\\[2ex]
            & = \\frac{1}{2}\\Biggl(\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr) - n +
                \\text{tr}\\bigl(\\Sigma^{-1}_2\\Sigma_1\\bigr)+\\bigl(\\mu_1-\\mu_2\\bigr)^\\top\\Sigma^{-1}_2\\bigl(\\mu_1-\\mu_2\\bigr)\\Biggr) \\tag{17} \\\\[2ex]
            & = \\frac{1}{2}\\Biggl(\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr) - n +
                \\text{tr}\\bigl(\\Sigma^{-1}_2\\Sigma_1\\bigr)+\\bigl(\\mu_2-\\mu_1\\bigr)^\\top\\Sigma^{-1}_2\\bigl(\\mu_2-\\mu_1\\bigr)\\Biggr) \\tag{17.1} \\\\[2ex]
         \\end{align}`,
         
         alt: `\\begin{align}
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)+ \\frac{1}{2}\\mathbb{E}_p\\Bigg[-\\text{tr}\\Bigl(\\Sigma^{-1}_1(x-\\mu_1)(x-\\mu_1)^\\top\\Bigr) +
                \\Sigma^{-1}_2(x-\\mu_2)(x-\\mu_2)^\\top\\Biggr] \\tag{11} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)- \\frac{1}{2}\\text{tr}\\Bigl(\\Sigma^{-1}_1\\Sigma_1\\Bigr) +
                \\frac{1}{2}\\mathbb{E}_p\\Bigl[(x-\\mu_2)^\\top\\Sigma^{-1}_2(x-\\mu_2)\\Bigr] \\tag{12} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)- \\frac{n}{2} +
                \\frac{1}{2}\\Bigl((\\mu_1-\\mu_2)^\\top\\Sigma^{-1}_2(\\mu_1-\\mu_2) + \\text{tr}(\\Sigma^{-1}_2\\Sigma_1)\\Bigr) \\tag{13}\\\\[2ex]
            & = \\frac{1}{2}\\Biggl(\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)- n + \\text{tr}(\\Sigma^{-1}_2\\Sigma_1) +
                (\\mu_1-\\mu_2)^\\top \\Sigma^{-1}_2(\\mu_1-\\mu_2)\\Biggr) \\tag{14} \\\\[2ex]
         \\end{align}`
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

<style scoped src='./css/blog.css'></style>

<style scoped>

br {
      display: block;
      content: " ";
      margin-top: 2em;
   }
</style>