<template>
   <div id="landing">
      <NavBar />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Learning to find the derivative of the quadratic form</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 20px; padding: 0 !important; ">8&#8226;26&#8226;2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <p>
               One of the many problems I've come across and spent 
               an unhealthy amount of time on is figuring out how to find the derivative of a quadratic form. They look something like this:
            </p>
               <vue-mathjax :formula='quadraticformula' id="quadraticformula"></vue-mathjax>
               <!-- <vue-mathjax :formula='quadraticformula2' id="quadraticformula"></vue-mathjax>
               <vue-mathjax :formula='quadraticformula3' id="quadraticformula" style="padding-bottom: 15px;"></vue-mathjax> -->
            <p>
               I figured since this was in the domain of Calculus and Linear Algebra that any book I had on either of the topics
               would discuss the process. Now I don't own a lot of books on the topics (2 Calc books, 2 LA books), however I was a little surprised
               when there was no discussion in any of them that explicitly went through the process of finding the derivative of a map in vector space.
               In retrospect, it's more apparent to me that even though none of the books explained the process, they <i>did</i> provide all the pieces
               for me to put together - just putting it together became quickly overwhelming. Segue into my first strategy for solving this problem:
               <i>explicitly writing out the inner product</i>.
            </p>
            <p>
               I heavily referenced <a href="https://math.stackexchange.com/questions/189434/derivative-of-quadratic-form" target="_blank">this</a> post on Stackexchange. 
               <vue-mathjax :formula='quadraticformula' id="quadraticformula"></vue-mathjax>
            </p>
            <vue-mathjax :formula='formula2' id="quadraticformula"></vue-mathjax>
            <p>Once represented</p>
            <vue-mathjax :formula='formula3' id="quadraticformula"></vue-mathjax>
            <!-- <p>{{ blogs[0].description }}</p> -->
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
         quadraticformula: `$x^\\top Ax$`,
         formula2: `$\\begin{equation}
                     \\begin{aligned}
                     {\\bf x^\\top Ax} = \\sum\\limits_{j=1}^{n}x_j\\sum\\limits_{i=1}^{n}x_iA_{ji}
                     \\end{aligned}
                     \\end{equation}$`,
         formula3: `$\\begin{equation}
                     \\begin{aligned}
                     \\frac{d {\\bf  x^\\top Ax}}{d x_k} & = \\sum\\limits_{j=1}^{n}\\frac{dx_j}{dx_k}
                     \\sum\\limits_{i=1}^{n}x_iA_{ji} + \\sum\\limits_{j=1}^{n}x_k\\sum\\limits_{i=1}^{n} 
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

#quadraticformula {
   /* padding-top: 15px;
   padding-bottom: 15px; */
}
</style>