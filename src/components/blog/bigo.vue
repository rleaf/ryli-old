<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Big "Oh" Notation</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">12 &#8226; 20 &#8226; 2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <p>
               A main benefit of <a href="https://en.wikipedia.org/wiki/Big_O_notation">"Big Oh"</a> notation is that it provides a way to analyze an algorithm's runtime as the input for that algorithm increases.
               I refer to this relationship, an algorithm's runtime and the input size of said algorithm, when I talk about the <i>efficiency</i> of the algorithm. Fueled on pure intuition, it is natural to presume an algorithm
               to take increasingly longer to complete as the input gets progressively larger.
               <br>
               <br>
               Imagine a coworker walks up to you and says "Wanna bet lunch on whether you can find Waldo?" while waving around a single page. For the uninitiated, I'm referring to a popular
               children's book, which I just now discovered is called <a href="https://en.wikipedia.org/wiki/Where%27s_Wally%3F#:~:text=Where's%20Wally%3F%20(called%20Where's%20Waldo,things%20at%20a%20given%20location.">Where's Wally?</a>.
               Not a bad deal right? Happily obliging, your coworker then hands you the single page for you find Waldo. It only takes you a couple seconds to a couple minutes to locate, and in-line with expectations your coworker now owes you a lunch.
               Your coworker then repeats themself, but this time waving no paper and upping the pot to a weeks' worth of lunch. Knowing you are about to get hustled but too curious to see your coworker's antics,
               you once again accept only to find them leaving the room and soon returning with a book on par to the size of <a href="https://en.wikipedia.org/wiki/List_of_longest_novels#List" target="_blank">Venmurasu</a> (a measly 22,000+ pages).
               Immediately resiging because of how long it would take to locate Waldo, the only feeling you are left with is how perturbed you are knowing your coworker owns a 22,000+ page <i>Where's Waldo</i> children's book.
               <br>
               <br>
               As humans (the algorithm), it is easy to scan a page (the input) and find resolution in how quickly it will take you to complete a desired task. Notice though, how impractical it becomes for us as the page count
               gets larger. At some arbitrary page count, most people would not bother doing the task. This is exactly the discussion of "Big Oh" and <a href="https://en.wikipedia.org/wiki/Time_complexity" target="_blank">time complexity</a>.
               Once again, these concepts provide a means to understand the asymptotic growth - the behavior of a function as the input gets larger.
               Having the ability to quantify an algorithm's efficiency provides extended benefits. Not only can we learn more about that algorithm itself, but we can compare two algorithms to each other to see which one is more
               efficient.
            </p>
            <div id="blogSubHeader">
               The Definitions
            </div>
            <p>
               <vue-mathjax :formula='bigO'></vue-mathjax> means <vue-mathjax :formula='`$c \\cdot g(n)$`'></vue-mathjax> is an <i>upper bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. Thus there exists
               some constant <i>c</i> such that <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> is always <vue-mathjax :formula='`$\\leq c \\cdot g(n)$`'></vue-mathjax>, for large enough <i>n</i>.
               <!-- We say a function <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> belongs to "Big Oh" of the function g when <vue-mathjax :formula='bigO'></vue-mathjax> -->
               <br>
               <br>
               <vue-mathjax :formula='bigTheta'></vue-mathjax> means <vue-mathjax :formula='`$c \\cdot g(n)$`'></vue-mathjax> is an <i>upper bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. Thus there exists
               some constant <i>c</i> such that <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> is always <vue-mathjax :formula='`$\\leq c \\cdot g(n)$`'></vue-mathjax>, for large enough <i>n</i>.
            </p>
         </div>
         <toTop />
   </div>
</template>

<script>
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import { VueMathjax } from 'vue-mathjax'
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      'vue-mathjax': VueMathjax
      // MathJax
   },
   data() {
      return {
         blogs: [],
         error: null,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
         bigO: '$f(n) = O(g(n))$',
         bigTheta: '$f(n) = O(g(n))$',
         bigOmega: '$f(n) = O(g(n))$',
      }
   },

   beforeMount() {
      window.MathJax.Hub.Config({
      tex2jax: {
         inlineMath: [['$','$']],
         displayMath: [['$$', '$$'], ['[', ']']],
         processEscapes: true,
         processEnvironments: true
      }
      });
   },

   mounted () {

      if(threeScene.cache == 'noScene') {
         return
      } else {
         
         gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete:() => {
         threeScene.destroyMesh()
         threeScene.scene.add(threeScene.sphere,threeScene.plane)
         }})
         setTimeout(() => {
            threeScene.destroyHero()
         }, 1500)
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
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}

#blogHeader {
   padding-bottom: 20px;
   font-size: 22px;
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
   font-family: 'Lora', sans-serif;
   font-size: 19px;
   padding-top: 50px;
}
</style>