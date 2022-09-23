<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Learning to Find the Derivative of the Quadratic Form</p>
                  <p style="font-size: 18px; padding: 0 !important; ">8 &#8226; 26 &#8226; 2021</p>
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li>Ways to go about it:</li>
                  <ul>
                     <li><a href="#scalarsums">Rewriting to scalar sums</a></li>
                     <li><a href="#frechet">The Fréchet</a></li>
                     <li><a href="#gateaux">The Gateaux (incomplete)</a></li>
                     <li><a href="#chainrule">Chain Rule</a></li>
                  </ul>
                  <li><a href="#thoughts">Thoughts</a></li>
               </ul>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               One of the many problems I've come across and spent 
               an unhealthy amount of time on is figuring out how to find the derivative of a quadratic form. By definition they are any polynomial
               with degree 2, however the problem introduced one to me that looks something like this:
            </p>
               <vm :formula='quadformAssets.quadraticFormulaWithSpace'></vm>
            <p>
               I figured since this was in the domain of Calculus and Linear Algebra that any book I had on either of the topics
               would discuss the process. Now I don't own a lot of books on the topics (2 Calc books, 2 LA books), however I was a little surprised
               when there was no discussion in any of them that explicitly went through the process of finding the derivative of a map in vector space.
               In retrospect, it's more apparent to me that even though none of the books explained the process, they <i>did</i> provide all the pieces
               for me to put together - just putting it together became quickly overwhelming. Segue into the <i>first</i> strategy for solving this problem:
               explicitly writing out the inner product.
            </p>
            <div id="scalarsums"></div>
            <div id="blogSubHeader">
               1) Rewriting to scalar sums
            </div>
            <p>
               <!-- I heavily referenced <a href="https://math.stackexchange.com/questions/189434/derivative-of-quadratic-form" target="_blank">this</a> post on Stackexchange. 
               <vm :formula='quadformAssets.quadraticFormula' id="quadraticformula"></vm> -->
               Rewritting the quadratic form into sigma notation provides, at least for me, a more clear <i>step one</i> where you can make use of the product rule:
               <vm :formula='quadformAssets.productrule'></vm>
            </p>
            <vm :formula='quadformAssets.formula2'></vm>
            <p>It is still easily overwhelming thinking about the <i>inner machinations</i> and the many ways to "multiply" vectors and matrices. It helps when I only consider two terms in a function,
            compute them, and then move onto the third...fourth...etc. I had to take a pause here on differentiating <vm :formula='quadformAssets.quadraticFormula'></vm> to
            go back and fortify my understanding of basic linear algebra. Once I better understood the inner product (and numerous others),
            I moved onto representing the right hand side of the equality with the product rule:
            </p>
            <vm :formula='quadformAssets.formula3'></vm>
            <p>To understand what's going on here and make it more comprehensible, clarifying that everything will be taken with respect to
               <vm :formula='quadformAssets.xsubk'></vm> when going through the product rule (middle term) is important. The purpose of introducing the "x sub k" notation
               is to give us an index to rewrite the function later on when we recompose it into vector notation. It also helps to reinforce the notion that we are
               <i>not explicitly differentiating anything</i>. Looking at <vm :formula='quadformAssets.isolatedDerivative'></vm>, it is easily misleading to think of attempting
               to "figure out" <vm :formula='quadformAssets.dx_jdx_k'></vm> like I have (many times), however it is nonsensical.
               Instead, it is better to look at the relationship of <vm :formula='quadformAssets.xsubj'></vm> to <vm :formula='quadformAssets.Asubji'></vm> - it is simply summing
               the product of each element in <vm :formula='quadformAssets.xsubj'></vm> with each column element in <vm :formula='quadformAssets.Asubji'></vm>. Then, looking
               at the corresponding <vm :formula='quadformAssets.function4'></vm> (first term of the right hand of the equality), the "sub k" notation takes precedence as it is what's
               being differentiated to. Rinse and repeat for the second term in the middle equation of the equality and you have a finalized derivative of <vm :formula='quadformAssets.quadraticFormula'></vm>
               represented in sigma notation/scalar sums.
            </p>
            <p>
               A lot of concepts in linear algebra still throw me off because there are ubiquitous idiosyncrasies within it's domain. I have spent hours looking at the same equation answered
               in different posts online because one answer is represented with <a href="https://en.wikipedia.org/wiki/Matrix_calculus#Layout_conventions" target="_blank">
               numerator layout notation and the other denominator layout notation</a> (and then there's the infrequent Einstein notation). How I currently view it is that as long as you
               remain consistent with your notation, you're free to use any one you see fit. Anecdotally, most Jacobians I see in the domain of machine learning are represented via
               numerator layout notation, so I am partial to that style. 
            </p>
            <p>
               Moving on, we now have to rewrite our differentiated formula back to vector notation. It is very simple if you remember the purpose we introduced the "sub k" notation earlier on.
               Our answer looks something like <vm :formula='quadformAssets.sigmaNotationDerivative'></vm>. All we have to do is populate a vector with each element <i>k</i>. Now the information
               from last paragraph becomes more apparent. This isn't necessarily a distinction between numerator and denominator style, but just an example
               that shows the flexibility of linear algebra. Both of the right hand sides of the equalities below are our final answers in vector notation - note that one is the transpose of the other
               and <i>if</i> <vm :formula='quadformAssets.Abold'></vm> is symmetric, they simplify further to <vm :formula='quadformAssets.twoAx'></vm>.
            </p>
               <h2>Column Vector Format:</h2>
               <vm :formula='quadformAssets.columnVector'></vm>
               <br>
               <h2>Row Vector Format:</h2>
               <vm :formula='quadformAssets.rowVector'></vm>
               <br>
               <br>
            <div id="frechet"></div>
            <div id="blogSubHeader">
               2) The Fréchet
            </div>
            <!-- <p>Other strategies I went about to learn how to differentiate <vm :formula='quadformAssets.quadraticFormula'></vm> have been ridiculously eclectic. I'm grouping them
               together because some paths went too deep into a different domain of math and others are incomplete - I don't yet understand them. It may seem like I'm typing as
               if there are half a dozen other methods to differentiate <vm :formula='quadformAssets.quadraticFormula'></vm> (there probably are),
               but realistically I only took the time to attempt to learn about <i>roughly</i> three other methods.
            </p>
            <h2><u>The Fréchet Derivative</u></h2> -->
            <p>There's a reason why this one is first - it's my favorite. The prior explanation with decomposing <vm :formula='quadformAssets.quadraticFormula'></vm> into scalar sums
               is great as well, but this one is pretty cool because it is much simpler. To be more specific I'm a fan of
               the <a href="https://en.wikipedia.org/wiki/Fr%C3%A9chet_derivative#Definition" target="_blank">Fréchet derivative using Landau notation</a>. From Wikipedia (the link):
               <i>"If there exists such an operator <i>A</i>, it is unique, so we write <vm :formula='quadformAssets.Dfrechet'></vm> and call it the Fréchet derivative of <i>f</i> at <i>x</i>"</i>.
               The goal is now find <i>A</i> for <vm :formula='quadformAssets.quadraticFormula'></vm> when instantiated into <vm :formula='quadformAssets.frechet'></vm> <i>(note: <i>A</i>
               is not referring to <vm :formula='quadformAssets.Abold'></vm> in the quadratic form but the variable A in the Fréchet)</i>.
            </p>
            <vm :formula='quadformAssets.quadFormFrechet'></vm>
            <p>
               Above is simple algebra because matrix multiplication is associative and distributive so we're just distributing the transpose and <vm :formula='quadformAssets.Abold'></vm>.
               Distributing the transpose over a product has the nuance of reversing the order of that product: <vm :formula='quadformAssets.transpose'></vm>. This is how to two middle terms,
               <vm :formula='quadformAssets.middlefoil'></vm>, come together to <vm :formula='quadformAssets.middlefoilcombined'></vm> (one is the transpose of the other, matrix <i>A</i> is symmetric,
               and they evaluate to scalar values). Although all three of the points in the parenthesis are important, it is especially important make note of the potential symmetry in <i>A</i>.
               The formula in the last line now fits into the template of the Fréchet. Which when we isolate <vm :formula='quadformAssets.Abold'></vm>,
               we get the derivative of <vm :formula='quadformAssets.quadraticFormula'></vm>
            </p>
               <h2><b>A</b> is symmetric</h2>
               <vm :formula='quadformAssets.frechetComparison'></vm>
               <vm :formula='quadformAssets.frechetDerivSym'></vm>
               <h2><b>A</b> is not symmetric</h2>
               <vm :formula='quadformAssets.frechetComparisonNotSym'></vm>
               <vm :formula='quadformAssets.frechetDerivSymNotSym'></vm>
            <p>
               Do these <i>A</i>'s look familiar? They're syntactically identical to when we solved the problem using sigma notation, just the first <i>A</i> assumes <vm :formula='quadformAssets.Abold'></vm>
               to be symmetric. This is nice and all, but what happened to the last summand in our expanded form <vm :formula='quadformAssets.htAh'></vm>? We saw that it is equal to the
               "<a href="https://en.wikipedia.org/wiki/Big_O_notation#Little-o_notation" target="_blank">little o-notation</a>" but what does that mean? We say that a function <i>f(h)</i> is
               <i>o(h)</i> if as h → 0 if <vm :formula='quadformAssets.littleo'></vm>
               This is nice, but why does <vm :formula='quadformAssets.htAh'></vm> evaluate to 0? Using the
               <a href="https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality" target="_blank">Cauchy Schwarz</a> and <a href="https://en.wikipedia.org/wiki/Matrix_norm" target="_blank">Matrix norm</a>
               inequalities we can figure out why. We write <vm :formula='quadformAssets.gOfhtAh'></vm> which gets the ball rolling.
            </p>
               <vm :formula='quadformAssets.htAhLittleO'></vm>
            <p>
               There's a pretty neat proof that exists for the Cauchy Schwarz inequality that uses the quadratic formula, I think it's worth a watch. Writing out the inequality for <vm :formula='quadformAssets.htAh'></vm>
               this way provides a clear reason why it evaluates to 0. We can now finally say <vm :formula='quadformAssets.htAhelementOf'></vm>.
            </p>
            <div id="gateaux"></div>
            <div id="blogSubHeader">
               3) The Gateaux
            </div>
            <p>
               I don't actually have a way to solve for <vm :formula='quadformAssets.quadraticFormula'></vm> using the Gateaux, however I thought it was worth metioning because similarly to the Fréchet,
               my introduction to the Gateaux was due to random answers while I was searching how to differentiate <vm :formula='quadformAssets.quadraticFormula'></vm>. Before I knew it, I was on a week long
               journey watching Youtube videos, reading pdfs and tearing through my books.
               The Gateaux in concept, however, seems to tackle the problem very similarly to the Fréchet. Both derivatives are operable on vector spaces and just as the Fréchet generalizes the idea of the univariate derivative,
               the Gateaux generalizes the directional derivative.
            </p>
            <div id="chainrule"></div>
            <div id="blogSubHeader">
               4) Chain Rule
            </div>
            <p>
               The last method I want to talk about is using the <a href="https://en.wikipedia.org/wiki/Total_derivative#The_chain_rule_for_total_derivatives" target="_blank">chain rule of the total derivative</a>. The only notion
               (exluding the chain rule I just linked) that you need to accept is <vm :formula='quadformAssets.partialxty'></vm>. By now this is not a particularly difficult equality to accept but it is further illustrated with:
            </p>
            <vm :formula='quadformAssets.expandedxty'></vm>
            <p>
               Because <vm :formula='quadformAssets.xty'></vm> evaluates to a scalar, this is an example of a derivative of a <a href="https://en.wikipedia.org/wiki/Matrix_calculus#Scalar-by-vector" target="_blank">scalar by vector</a>,
               also known as the gradient, which is denoted with the "nabla" (upside down triangle) on the right hand. I also somewhat sneakily tossed it in there, but it is very helpful noting that the partial of <vm :formula='quadformAssets.xty'></vm>
               and <vm :formula='quadformAssets.ytx'></vm> both with respect to x are the same column vector <b>y</b>. Moving on, what was new for me is the chain rule for the total derivative that I linked in the previous paragraph. It looks like:
            </p>
            <vm :formula='quadformAssets.chainRule'></vm>
            <p>
               The transposes enable cohesion for the vector dot product, they are omitted for scalar values. Ironically, it took some time for me to wrap my head around the idea of the total derivative, because it's very similar to
               the regular partial derivative. The main difference I found is the partial automatically assumes there to be no intermediate variables. The total derivative rigidly defines the derivative of every variable in the chance
               that some are intermediate variables.
            </p>
            <p>
               Substitute <vm :formula='quadformAssets.gEqualsAx'></vm> inside <vm :formula='quadformAssets.quadraticFormula'></vm>. This gives you <vm :formula='quadformAssets.xtg'></vm>. Now it's
               obvious that g is an intermediate variable which is a function of x, so to differentiate the problem we need to use the total derivative chain rule. This is important. Again, if we were to use regular partial derivative
               we would not account for any change in <i>g(x)</i> for any rate of change in x, which is a no go. This is something I got stuck on.
            </p>
               <vm :formula='quadformAssets.xtyChainRule'></vm>
            <p>
               I purposefully switch between notations <i><b>Ax</b></i> and <i>g</i> (first line, right hand side) to reinforce that <vm :formula='quadformAssets.gEqualsAx'></vm>. This procedure is also pretty short (I think it was the shortest)
               , but the trick of substituting and understanding the derivative of <vm :formula='quadformAssets.ytx'></vm> and <vm :formula='quadformAssets.xty'></vm> w.r.t the same variable evaulate to the same answer
               took some time for me to get down.
            </p>
            <div id="thoughts"></div>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <p>
               The rigmaroles I went through to learn what was discussed here were pretty annoying. What I just typed on a single page took months for me to understand and get down pat.
               But it was worth it and I'd probably (hopefully) do it again. I've always wanted to "type" or create a document and this accomplishes that. I tried to differentiate vectors and matrices from scalars clearly by bolding the former,
               however I want to acknowledge the possibility that I may have forgotton to do so on some variables. Feel free to get in touch with me if you have noticed any inconsistencies, typos/errors or want to talk about food/math/ml/design.
               Overall, I'd give <i>"learning how to differentiate the quadratic form"</i>
               a solid 7.3/10 on the fun scale. 
            </p>
            <p>
               - Ryan Lin
            </p>

               <!-- I isolate and then open up one of the derivatives.
               Lets look at: <vm :formula='quadformAssets.isolatedDerivative'></vm>. -->
         </div>
         <themeSwitch />
         <toTop />
   </div>
</template>

<script>
// import axios from 'axios'
import backdrop from '../../components/backdrop.vue'
import { VueMathjax } from 'vue-mathjax'
import toTop from '../../components/toTop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import quadformjs from './assets/quadform'

export default {
   name: 'blogQuadraticForm',
   components: {
      backdrop,
      toTop,
      themeSwitch,
      'vm': VueMathjax 
   },
   head: {
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: `I explain 3.5 different procedures, along with my own experiences, on learning how to derive the quadratic form x^tAx.`,
         },
         {
            name: 'keywords',
            content: 'math, derivative, differentiation, quadratic form, linear algebra, calculus, vector calculus, matrix calculus, jacobian, frechet derivative, chain rule, total derivative, pain'
         },
         {
            property: 'og:description',
            content: `I explain 3.5 different procedures, along with my own experiences, on learning how to derive the quadratic form x^tAx.`,
         }
      ],
      link: [
         {
            rel: 'canonical',
            href: 'https://ryli.design/blog/quadraticform'
         }
      ]
   },

   data() {
      return {
         quadformAssets: quadformjs
      }
   },

   methods: {
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
   },
}
</script>

<style scoped src='./css/blog.css'>
</style>