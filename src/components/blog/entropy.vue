<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Entropy in Machine Learning</p>
                  <p style="font-size: 18px; padding: 0 !important; ">6 &#8226; 11 &#8226; 2022</p>
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li>Entropy</li>
                  <ul>
                     <li><a href="#intuition">Intuition & Explanation</a></li>
                     <li><a href="#entropymath">Mathematical Formalism</a></li>
                     <li><a href="#entropyexamples">Examples</a></li>
                  </ul>
                  <li><a href="#">Cross Entropy</a></li>
                  <li><a href="#">Joint Entropy</a></li>
                  <li><a href="#">Conditional Entropy</a></li>
                  <!-- <li>KL Divergence</li>
                  <ul>
                     <li></li>
                  </ul> -->
               </ul>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               Although this read
               is catered to explaining entropy through a Machine Learning perspective, I encourage reading through some of the originating paper:
               <a href="https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf" target="_blank">A Mathematical Theory of Communication</a>. All random variables mentioned here, unless
               specifically mentioned otherwise, are discrete.
            </p>
            <div id="intuition"></div>
            <div id="blogSubHeader">
               Entropy
            </div>
            <h2>Intuition & Definition</h2>
            <p>
               Entropy, in the domain of <a href="https://en.wikipedia.org/wiki/Information_theory" target="_blank">Information Theory</a>, is the innate uncertainty of a random variable with it's associated probability
               distribution. The word "uncertainty" is synonymous to other interpretations used to define entropy such as "information", "surprisal", and "lack of predictability". The higher the entropy, the more
               uncertainty there is encoded into a random variable. By this logic a uniform distribution encodes the maximum entropy on a discrete random variable as each value is equally probable - there is total
               uncertainty as to which value will be sampled. 
               <br>
               <br>
               As an example and to briefly
               generalize outside of Machine Learning, entropy is a measurement of information. If I say to you, <i>"The rain in Spain falls mainly on the..."</i>, you might infer the next word in that statement
               to be <i>"plain"</i>. For context, this is a famous quote from the film <a href="https://en.wikipedia.org/wiki/My_Fair_Lady_(film)" target="_blank">My Fair Lady</a>. In the example the word
               is the random variable and what is inferred, "plain", is what is sampled from the distribution of possible values.
               We can say, because of the quote's fame, that there is high certainty of the random variable to be the word "plain" thus yielding low entropy. However, it may
               be too ambitious to assert that there is <i>no</i> entropy at all, indicating certainty, ie: <vue-mathjax :formula="`$p(X = \\textit{plain}) = 1$`"></vue-mathjax>, because maybe I lied about attributing 
               my partially finished quote to <i>My Fair Lady</i> and instead just wanted to say "The rain in Spain falls mainly on the ground".
            </p>
            <div id="entropymath"></div>
            <h2>Mathematical Formalism of Entropy</h2>
            <p>
               Entropy can be represented with different units depending on the base of the logarithm: nats (<vue-mathjax :formula="`$\\ln$`"></vue-mathjax>),
               bits &  shannons (<vue-mathjax :formula="`$\\log_2$`"></vue-mathjax>), or bans (<vue-mathjax :formula="`$\\log_{10}$`"></vue-mathjax>); anecdotally, I have never seen entropy defined in bans.
               Defined as <vue-mathjax :formula="`$\\mathbb{H}$`"></vue-mathjax>, we say the entropy of the random variable <vue-mathjax :formula="`$X$`"></vue-mathjax> with distribution
               <vue-mathjax :formula="`$p$`"></vue-mathjax> is: 
            </p>
               <vue-mathjax :formula='entropy.entropy'></vue-mathjax>
            <p>
               As an example we can represent the entropy of random variable <vue-mathjax :formula="`$X$`"></vue-mathjax> with the aforementioned uniform distribution,
               <vue-mathjax :formula="`$X\\sim\\mathcal{U}$`"></vue-mathjax>, as such:
            </p>
            <vue-mathjax :formula='entropy.uniform'></vue-mathjax>
            <br>
            <div id="entropyexamples"></div>
            <h2>Examples</h2>
            <p>
               Let's pretend we're rolling a fair 4 sided die where each vertex has equal probability of pointing up (you look at the vertices on a 4 sided die, not
               the face). Taking the uniform distribution where the random variable, the die, has 4 possible outcomes, <vue-mathjax :formula="`$X=\\{1, 2, 3, 4\\}$`"></vue-mathjax>, we can calculate the entropy simply with
               <vue-mathjax :formula="`$\\log_2{4} = 2\\,\\text{bits}$`"></vue-mathjax>. As mentioned previously about the uniform distribution, the answer not only represents the amount of entropy
               present in our die random variable, but it is also the upper bound for random variables with only four possible values as no distribution is more uncertain than the uniform.
            </p>
            <p>
               A couple more examples to solidify understanding:
               <br>
               <vue-mathjax :formula="`$\\mathbb{H}(X),\\; X \\sim \\mathcal{U}(1, 3)$`"></vue-mathjax>
               <br>
               <vue-mathjax :formula='entropy.uniformThree'></vue-mathjax>
               <br><br>
               <vue-mathjax :formula="`$\\mathbb{H}(X),\\; X \\sim \\mathcal{U}(1, 2)$`"></vue-mathjax>, This is equal to a fair Bernoulli distribution.
               <br>
               <vue-mathjax :formula='entropy.uniformBernoulli'></vue-mathjax>
               <br><br>
               <vue-mathjax :formula="`$\\mathbb{H}(X),\\; X \\sim p$`"></vue-mathjax> where
               <vue-mathjax :formula='`$p = \\begin{cases} 
                  0.8 & \\text{if}\\; x = 0 \\\\  
                  0.2 & \\text{if}\\; x = 1 \\\\  
                  \\end{cases} $`'></vue-mathjax>
               <br>
               <vue-mathjax :formula='entropy.unfairBernoulli'></vue-mathjax>
               <br><br>
               <vue-mathjax :formula="`$\\mathbb{H}(X),\\; X \\sim p$`"></vue-mathjax> where
               <vue-mathjax :formula='`$p = \\begin{cases} 
                  0.95 & \\text{if}\\; x = 0 \\\\  
                  0.05 & \\text{if}\\; x = 1 \\\\  
                  \\end{cases} $`'></vue-mathjax>
               <vue-mathjax :formula='entropy.extremeBernoulli'></vue-mathjax>
            </p>
            <p>
               The amount of entropy is predicated on the amount of values in a random variable and the distribution that random variable follows. You can see that as the values of random variable
               <vue-mathjax :formula="`$X$`"></vue-mathjax> decrement while following the same uniform distribution, <vue-mathjax :formula="`$\\mathcal{U}$`"></vue-mathjax>, the entropy reduces accordingly.
               You can also see that as we fix the values of random variable <vue-mathjax :formula="`$X$`"></vue-mathjax> to be the same but bias the probabilities to further promote certainty, the entropy reduces.
            </p>
            
         </div>
         <themeSwitch />
         <toTop />
   </div>
</template>

<script>
// joint distribution
// marginal distribution
// chain rule of probability
// conditional probability
// log rules
import entropyjs from './assets/entropy'
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
      title: 'Entropy',
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
         entropy: entropyjs
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