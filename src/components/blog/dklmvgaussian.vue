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
                     <li><a href="#introduction">Introduction</a></li>
                     <li>1</li>
                  </ul>
               </div>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Introduction
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
            <vue-mathjax :formula='ohboy'></vue-mathjax>
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
      title: 'Toads',
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
         blogs: [],
         error: null,
         dkl: '$$D_{\\mathbb{KL}}(p\\,||\\,q)\\triangleq\\int_x{p(x)\\log\\frac{{p(x)}}{q(x)}}dx$$',
         mvnormal: '$$p(x;\\,\\mu,\\Sigma)=\\frac{1}{(2\\pi)^{n/2}\\det{(\\Sigma)}^{1/2}}\\exp{\\biggl(-\\frac{1}{2}(x-\\mu)^\\top\\Sigma^{-1}(x-\\mu)\\biggr)}$$',
         ohboy: `$$\\begin{align}
         D_{\\mathbb{KL}}(p\\,||\\,q) & = \\int_x{p(x)\\log\\frac{{p(x)}}{q(x)}}dx \\tag{1} \\\\[2ex] 
            & = \\mathbb{E}_p[\\log\\frac{p(x)}{q(x)}] \\tag{2}\\\\[2ex]
            & = \\mathbb{E}_p[\\log{p(x)} - \\log{q(x)}] \\tag{3}\\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[\\log\\Biggl(\\frac{1}{(2\\pi)^{n/2}\\det{(\\Sigma_1)}^{1/2}}\\exp{\\biggl(-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma_1^{-1}(x-\\mu_1)\\biggr)}\\Biggr) - 
                \\log\\Biggl(\\frac{1}{(2\\pi)^{n/2}\\det{(\\Sigma_2)}^{1/2}}\\exp{\\biggl(-\\frac{1}{2}(x-\\mu_2)^\\top\\Sigma_2^{-1}(x-\\mu_2)\\biggr)}\\Biggr)\\Biggr] \\tag{4}\\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[-\\log\\Bigl((2\\pi)^{n/2}\\det{(\\Sigma_1)}^{1/2}\\Bigr)-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}(x-\\mu_1) +
                \\log\\Bigl((2\\pi)^{n/2}\\det{(\\Sigma_2)}^{1/2}\\Bigr)+\\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}(x-\\mu_2)\\Biggr] \\tag{5} \\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[-\\log\\Bigl((2\\pi)^{n/2}\\Bigr)-\\log\\Bigl(\\det{(\\Sigma_1)}^{1/2}\\Bigr)-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}(x-\\mu_1) +
                \\log\\Bigl((2\\pi)^{n/2}\\Bigr)+\\log\\Bigl(\\det{(\\Sigma_2)}^{1/2}\\Bigr)+\\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}(x-\\mu_2)\\Biggr] \\tag{5} \\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[-\\frac{1}{2}\\log\\Bigl(\\det{(\\Sigma_1)}\\Bigr)-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}(x-\\mu_1) +
                \\frac{1}{2}\\log\\Bigl(\\det{(\\Sigma_2)}\\Bigr)+\\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}(x-\\mu_2)\\Biggr] \\tag{5} \\\\[2ex]
            & = \\mathbb{E}_p\\Bigg[\\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}(x-\\mu_1) +
                \\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}(x-\\mu_2)\\Biggr] \\tag{5} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)+ \\mathbb{E}_p\\Bigg[-\\frac{1}{2}(x-\\mu_1)^\\top\\Sigma^{-1}(x-\\mu_1) +
                \\frac{1}{2}(x-\\mu_2)^\\top\\Sigma^{-1}(x-\\mu_2)\\Biggr] \\tag{5} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)+ \\frac{1}{2}\\mathbb{E}_p\\Bigg[-\\text{tr}\\Bigl((x-\\mu_1)^\\top\\Sigma^{-1}(x-\\mu_1)\\Bigr) +
                \\text{tr}\\Bigl((x-\\mu_2)^\\top\\Sigma^{-1}(x-\\mu_2)\\Bigr)\\Biggr] \\tag{5} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)+ \\frac{1}{2}\\mathbb{E}_p\\Bigg[-\\text{tr}\\Bigl((x-\\mu_1)(x-\\mu_1)^\\top\\Sigma^{-1}\\Bigr) +
                \\text{tr}\\Bigl((x-\\mu_2)(x-\\mu_2)^\\top\\Sigma^{-1}\\Bigr)\\Biggr] \\tag{5} \\\\[2ex]
            & = \\frac{1}{2}\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr)+ \\frac{1}{2}\\mathbb{E}_p\\Bigg[-\\text{tr}\\Bigl(\\Sigma_1\\Sigma^{-1}\\Bigr) +
                \\text{tr}\\Bigl((x-\\mu_2)(x-\\mu_2)^\\top\\Sigma^{-1}\\Bigr)\\Biggr] \\tag{5} \\\\[2ex]
            
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