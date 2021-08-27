<template>
   <div id="landing">
      <NavBar />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Learning to find the derivative of the quadratic form</p>
                  <p style="font-size: 20px; padding: 0 !important; ">8&#8226;26&#8226;2021</p>
               </div>
            </div>
            <p>
               One of the many problems I've come across and spent 
               an unhealthy amount of time on is figuring out how to find the derivative of a quadratic form. By definition they are any polynomial
               with degree 2, however the problem introduced one to me that looks something like this:
            </p>
               <vue-mathjax :formula='quadraticFormulaWithSpace'></vue-mathjax>
            <p>
               I figured since this was in the domain of Calculus and Linear Algebra that any book I had on either of the topics
               would discuss the process. Now I don't own a lot of books on the topics (2 Calc books, 2 LA books), however I was a little surprised
               when there was no discussion in any of them that explicitly went through the process of finding the derivative of a map in vector space.
               In retrospect, it's more apparent to me that even though none of the books explained the process, they <i>did</i> provide all the pieces
               for me to put together - just putting it together became quickly overwhelming. Segue into my <b>first</b> strategy for solving this problem:
               <i>explicitly writing out the inner product</i>.
            </p>
            <div id="blogSubHeader">
               1) Rewriting to scalar sums
            </div>
            <p>
               <!-- I heavily referenced <a href="https://math.stackexchange.com/questions/189434/derivative-of-quadratic-form" target="_blank">this</a> post on Stackexchange. 
               <vue-mathjax :formula='quadraticFormula' id="quadraticformula"></vue-mathjax> -->
               Rewritting the quadratic form into sigma notation provides, at least for me, a more clear <i>step one</i> where you can make use of the product rule:
               <vue-mathjax :formula='productrule'></vue-mathjax>
            </p>
            <vue-mathjax :formula='formula2'></vue-mathjax>
            <p>It is still easily overwhelming thinking about the <i>inner machinations</i> and the many ways to "multiply" vectors and matrices. It helps when I only consider two terms in a function,
            compute them, and then move onto the third...fourth...etc. I had to take a pause here on differentiating <vue-mathjax :formula='quadraticFormula'></vue-mathjax> to
            go back and fortify my understanding of basic linear algebra. Once I better understood the inner product (and numerous others),
            I moved onto representing the right hand side of the equality with the product rule:
            </p>
            <vue-mathjax :formula='formula3'></vue-mathjax>
            <p>To understand what's going on here and make it more comprehensible, clarifying that everything will be taken with respect to
               <vue-mathjax :formula='xsubk'></vue-mathjax> when going through the product rule (middle term) is important. The purpose of introducing the "x sub k" notation
               is to give us an index to rewrite the function later on when we recompose it into vector notation. It also helps to reinforce the notion that we are
               <i>not explicitly differentiating anything</i>. Looking at <vue-mathjax :formula='isolatedDerivative'></vue-mathjax>, it is easily misleading to think of attempting
               to "figure out" <vue-mathjax :formula='dx_jdx_k'></vue-mathjax> like I have (many times), however it is nonsensical.
               Instead, it is better to look at the relationship of <vue-mathjax :formula='xsubj'></vue-mathjax> to <vue-mathjax :formula='Asubji'></vue-mathjax> - it is simply summing
               the product of each element in <vue-mathjax :formula='xsubj'></vue-mathjax> with each column element in <vue-mathjax :formula='Asubji'></vue-mathjax>. Then, looking
               at the corresponding <vue-mathjax :formula='function4'></vue-mathjax> (first term of the right hand of the equality), the "sub k" notation takes precedence as it is what's
               being differentiated to. Rinse and repeat for the second term in the middle equation of the equality and you have a finalized derivative of <vue-mathjax :formula='quadraticFormula'></vue-mathjax>
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
               Our answer looks something like <vue-mathjax :formula='sigmaNotationDerivative'></vue-mathjax>. All we have to do is populate a vector with each element <i>k</i>. Now the information
               from last paragraph becomes more apparent. This isn't necessarily a distinction between numerator and denominator style, but just an example
               that shows the flexibility of linear algebra. Both of the right hand sides of the equalities below are our final answers.
            </p>
               <b>Column</b>
               <vue-mathjax :formula='columnVector'></vue-mathjax>
               <br>
               <b>Row</b>
               <vue-mathjax :formula='rowVector'></vue-mathjax>
               <br>
            <div id="blogSubHeader">
               2) The Frechet, Gateaux, and everything else.
            </div>
               <p>asd</p>
               <!-- I isolate and then open up one of the derivatives.
               Lets look at: <vue-mathjax :formula='isolatedDerivative'></vue-mathjax>. -->
         </div>
   </div>
</template>

<script>
// import axios from 'axios'
import NavBar from '../nav.vue'
import { VueMathjax } from 'vue-mathjax'
// import { MathJax } from 'mathjax-vue'



export default {
   name: 'blogQuadraticForm',
   components: {
      NavBar,
      'vue-mathjax': VueMathjax
      // MathJax
   },
   data() {
      return {
         blogs: [],
         error: null,
         Asubji: `$A_{ji}$`,
         xsubk: `$x_k$`,
         xsubj: `$x_j$`,
         dx_jdx_k: `$\\frac {dx_j}{dx_k}$`,
         rowVector: `$$\\begin{equation}
                       \\begin{aligned}
                       \\begin{bmatrix}
                       \\sum\\limits_{i=1}^{n}x_iA_{1i} + \\sum\\limits_{j=1}^{n}x_jA_{j1} &
                       \\sum\\limits_{i=1}^{n}x_iA_{2i} + \\sum\\limits_{j=1}^{n}x_jA_{j2} &
                       \\dots &
                       \\sum\\limits_{i=1}^{n}x_iA_{ni} + \\sum\\limits_{j=1}^{n}x_jA_{jn} 
                       \\end{bmatrix} = ({\\bf Ax} + ({\\bf x}^T{\\bf A})^T)^T = (({\\bf A} + {\\bf A}^T){\\bf x})^T = {\\bf x}^T({\\bf A} + {\\bf A}^T)
                       \\end{aligned}
                       \\end{equation}$$`,
         columnVector: `$$\\begin{equation}
                         \\begin{aligned}
                         \\begin{bmatrix}
                         \\sum\\limits_{i=1}^{n}x_iA_{1i} + \\sum\\limits_{j=1}^{n}x_jA_{j1} \\\\
                         \\sum\\limits_{i=1}^{n}x_iA_{2i} + \\sum\\limits_{j=1}^{n}x_jA_{j2} \\\\
                         \\vdots \\\\ 
                         \\sum\\limits_{i=1}^{n}x_iA_{ni} + \\sum\\limits_{j=1}^{n}x_jA_{jn} \\\\
                         \\end{bmatrix} = {\\bf Ax} + ({\\bf x}^T{\\bf A})^T = ({\\bf A} + {\\bf A}^T){\\bf x}
                         \\end{aligned}
                         \\end{equation}$$`,
         sigmaNotationDerivative: `$\\sum\\limits_{i=1}^{n}x_iA_{ki} + \\sum\\limits_{j=1}^{n}x_jA_{jk}$`,
         function4: `$\\sum\\limits_{i=1}^{n}x_iA_{ki}$`,
         isolatedDerivative: `$\\begin{equation}
                               \\begin{aligned}
                               \\sum\\limits_{j=1}^{n}\\frac{dx_j}{dx_k}
                               \\sum\\limits_{i=1}^{n}x_iA_{ji}
                               \\end{aligned}
                               \\end{equation}$`,
         productrule: `$\\begin{equation}
                        \\begin{aligned}
                        \\frac{d(uv)}{dx} = u\\frac{dv}{dx}+v\\frac{du}{dx}
                        \\end{aligned}
                        \\end{equation}$`,
         quadraticFormula: `$\\bf x^\\top Ax$`,
         quadraticFormulaWithSpace: `$\\bf x^\\top Ax$ ; $x∈R^n , A∈R^{nxn}$`,
         formula2: `$\\begin{equation}
                     \\begin{aligned}
                     {\\bf x^\\top Ax} = \\sum\\limits_{j=1}^{n}\\sum\\limits_{i=1}^{n}x_jx_iA_{ji} = \\sum\\limits_{j=1}^{n}x_j\\sum\\limits_{i=1}^{n}x_iA_{ji}
                     \\end{aligned}
                     \\end{equation}$`,
         formula3: `$\\begin{equation}
                     \\begin{aligned}
                     \\frac{d {\\bf  x^\\top Ax}}{d x_k} & = \\sum\\limits_{j=1}^{n}\\frac{dx_j}{dx_k}
                     \\sum\\limits_{i=1}^{n}x_iA_{ji} + \\sum\\limits_{j=1}^{n}x_j\\sum\\limits_{i=1}^{n} 
                     \\frac{dx_i}{dx_k}A_{ji} \\ = \\sum\\limits_{i=1}^{n}x_iA_{ki} + \\sum\\limits_{j=1}^{n}x_jA_{jk}
                     \\end{aligned}
                     \\end{equation}$`,
         jacobian: '$$\\begin{bmatrix}a & b\\\\ c & d\\end{bmatrix}$$'
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

p {
   padding: 25px 7vw !important;
   line-height: 2;
}

a {
   color: var(--white);
   text-decoration: underline;
   font-style: oblique;
}

#blogHeader {
   padding-bottom: 20px;
   font-size: 28px;
}

#blogSubHeader {
   font-family: 'Inconsolata', sans-serif;
   font-size: 20px;
   padding-top: 20px;
}

</style>