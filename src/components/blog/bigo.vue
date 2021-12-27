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
               <a href="https://en.wikipedia.org/wiki/Big_O_notation">"Big Oh"</a> notation provides a way to analyze an algorithm's runtime as the input for that algorithm increases.
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
               As humans (the algorithm), it is easy to scan a page (the input) and find solace in how quickly it will take you to complete a desired task. Notice though, how impractical it becomes for us as the page count
               gets larger. At some arbitrary page count, most people would not bother doing the task because it gets so ridiculous. This is exactly the discussion of "Big Oh" and <a href="https://en.wikipedia.org/wiki/Time_complexity" target="_blank">time complexity</a>.
               Once again, these concepts provide a means to understand the asymptotic growth of functions/algorithms - the behavior of a function/algorithm as the input gets larger. Similar to the derivative, when we discuss "Big Oh", we are interested in the <i>rate of change</i>.
               I say this not to dismiss questions that ask specifically about a function's value at any point in it's domain, just to provide pedagogical "direction" for understanding "Big Oh". Asking the efficiency of an algorithm when fed an arbitrarily sized input is also valuable.
               For example if there are two competing algorithms with similar efficiency, a valuable question could be "at what point does algorithm <i>x</i> become more efficient than algorithm <i>y</i>?"
            </p>
            <div id="blogSubHeader">
               The Definitions
            </div>
            <br>
            <br>
            <img id="img1000" style="box-shadow: none;" src="../../assets/blog/bigo3.png" alt="">
            <p>
               (a) <vue-mathjax :formula='bigO'></vue-mathjax> means <vue-mathjax :formula='`$c \\cdot g(n)$`'></vue-mathjax> is an <i>upper bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. Thus there exists
               some constant <i>c</i> such that <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> is always <vue-mathjax :formula='`$\\leq c \\cdot g(n)$`'></vue-mathjax>, for large enough <vue-mathjax :formula='`$n\\geq n_0$`'></vue-mathjax>.
               <!-- We say a function <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> belongs to "Big Oh" of the function g when <vue-mathjax :formula='bigO'></vue-mathjax> -->
               <br>
               <br>
               (b) <vue-mathjax :formula='bigOmega'></vue-mathjax> means <vue-mathjax :formula='`$c \\cdot g(n)$`'></vue-mathjax> is a <i>lower bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. Thus there exists
               some constant <i>c</i> such that <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> is always <vue-mathjax :formula='`$\\geq c \\cdot g(n)$`'></vue-mathjax>, for large enough <vue-mathjax :formula='`$n\\geq n_0$`'></vue-mathjax>.
               <br>
               <br>
               (c) <vue-mathjax :formula='bigTheta'></vue-mathjax> means <vue-mathjax :formula='`$c_1 \\cdot g(n)$`'></vue-mathjax> is an <i>upper bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax> and
               <vue-mathjax :formula='`$c_2 \\cdot g(n)$`'></vue-mathjax> is a <i>lower bound</i> on <vue-mathjax :formula='`$f(n)$`'></vue-mathjax>. Thus there exists constants <vue-mathjax :formula='`$c_1$`'></vue-mathjax>
               and <vue-mathjax :formula='`$c_2$`'></vue-mathjax> such that <vue-mathjax :formula='`$c_2 \\cdot g(n) \\leq f(n) \\leq c_1\\cdot g(n) $`'></vue-mathjax> for large enough <vue-mathjax :formula='`$n\\geq n_0$`'></vue-mathjax>.
               <br>
               <br>
               The picture and definitions are from <a href="https://www.algorist.com/" target="_blank">The Algorithm Design Manuel, by Steven Skiena</a> (p 35-36 of 2nd edition). Before explaining how to use these functions, a couple
               of things to note: 1) Some people consider <vue-mathjax :formula='bigO'></vue-mathjax> to be an <a href="https://en.wikipedia.org/wiki/Big_O_notation#Equals_sign" target="_blank">abuse of notation</a> because we mean to say
               "<i>f(n)</i> is a member of set <i>O(g(n))</i>" which usually is represented in set notation as <vue-mathjax :formula='`$f(x) \\in O(g(n))$`'></vue-mathjax>. 2) It doesn't seem to be stated definitively
               in Skiena's book (or maybe I missed it), but it should seem apparent that <vue-mathjax :formula="`$c > 0$`"></vue-mathjax> otherwise we're subject to some funk. This is stated in
               <a href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition" target="_blank">Introduction to Algorithms, 3rd Ed</a> on p. 50.
            </p>
            <div id="blogSubHeader">
               The Implementation
            </div>
            <p>
               The applications of these functions err on the side of theory. The RAM, <i>Random Access Machine</i>, is a very simplified hypothetical computer with which brings considerations that allow
               us to represent algorithms functionally and use "Big Oh" notation. Quoting Skiena (p. 31):
               <br>
               <br>
               <i>
                  &#8226; Each simple operation (+, *, -, =, if, call) takes exactly one time step
                  <br>
                  &#8226; Loops and subroutines are not considered simple operations. Instead, they
                  are the composition of many single-step operations. It makes no sense for
                  sort to be a single-step operation, since sorting 1,000,000 items will certainly
                  take much longer than sorting 10 items. The time it takes to run through a
                  loop or execute a subprogram depends upon the number of loop iterations or
                  the specific nature of the subprogram.
                  <br>
                  &#8226; Each memory access takes exactly one time step. Further, we have as much
                  memory as we need. The RAM model takes no notice of whether an item is
                  in cache or on the disk.
               </i> 
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
         bigOmega: '$f(n) = \\Omega(g(n))$',
         bigTheta: '$f(n) = \\Theta(g(n))$',
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