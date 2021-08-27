<template>
   <div id="landing">
      <NavBar />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p>Skeleton</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 20px;">8&#8226;26&#8226;2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <vue-mathjax :formula='formula'></vue-mathjax>
            <!-- <math-jax :latex="formula" />
            <math-jax :latex="formula" :block="true" /> -->
            <p>The quick brown fox jumps over the lazy dog.</p>
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
   name: 'blogskeleton',
   components: {
      NavBar,
      'vue-mathjax': VueMathjax
      // MathJax
   },
   data() {
      return {
         blogs: [],
         error: null,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$'
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

#curriculumBody, p {
   width: auto !important;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

#blogHeader {
   padding-bottom: 20px;
   font-size: 28px;
}
</style>