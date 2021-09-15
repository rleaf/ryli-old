<template>
   <div id="landing">
      <NavBar />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Skeleton</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 20px; padding: 0 !important; ">8&#8226;26&#8226;2021</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <vue-mathjax :formula='formula'></vue-mathjax>
            <vue-mathjax :formula='jacobian'></vue-mathjax>
            <!-- <math-jax :latex="formula" />
            <math-jax :latex="formula" :block="true" /> -->
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Mauris scelerisque convallis dolor, at aliquet nibh. Proin quis orci turpis. 
               Aliquam dapibus enim sit amet rhoncus fringilla. Quisque congue maximus augue,
               ut porttitor enim cursus id. Mauris ullamcorper mauris vel velit faucibus, 
               eu pretium ex volutpat. Mauris elementum lacus ut ipsum pretium venenatis. 
               Etiam fringilla metus sed justo cursus, vitae hendrerit nunc placerat. 
               Ut rutrum nisl et dapibus condimentum. Vivamus convallis maximus rutrum. 
               Mauris quis magna eget sapien malesuada feugiat. Pellentesque viverra ornare erat, 
               ut dignissim justo volutpat id. Fusce ac urna suscipit, interdum magna id, 
               pharetra metus. Vivamus a elementum metus.
               Cras enim magna, vehicula quis tellus eu, blandit lobortis leo. Cras consectetur lobortis tortor. 
               Morbi ac diam sed enim faucibus tristique. Maecenas mollis sodales lectus, in interdum leo iaculis eget. Vestibulum malesuada pellentesque lacus, ac sodales velit tincidunt in. Mauris dignissim at nibh in tempus. Quisque at lorem ut mi accumsan tincidunt feugiat sit amet arcu. Maecenas in sagittis turpis. In ac laoreet sapien. Proin sodales nibh sit amet felis luctus dignissim. Phasellus non massa in arcu condimentum eleifend eu nec purus. Phasellus non tincidunt tortor, laoreet facilisis est. Mauris ornare eget turpis eget eleifend. Aenean et volutpat lectus. Nam nisl augue, suscipit et laoreet ac, lobortis sed magna. Pellentesque non sodales felis.

               Vivamus in risus interdum, euismod eros sed, bibendum arcu. Pellentesque volutpat sapien lectus, 
               eget rutrum velit sagittis quis. Donec sed velit eget nunc tincidunt auctor. Fusce nec tellus id 
               lectus consectetur cursus molestie a dolor. Vestibulum dignissim massa ut sem feugiat aliquet. 
               Donec pretium, massa non commodo tincidunt, orci enim lobortis lacus, vel consectetur sapien metus 
               eget felis. Nullam iaculis egestas lorem, et sodales nulla. Curabitur fermentum vehicula 
               pellentesque. Duis ornare neque nec nunc finibus lobortis. Donec tincidunt justo ex, vitae vulputate 
               dolor imperdiet vel. Suspendisse potenti. Etiam enim nisi, condimentum ornare molestie eu, finibus 
               in purus. Cras suscipit tellus sagittis sapien molestie accumsan.
            </p>
            <!-- <p>{{ blogs[0].description }}</p> -->
         </div>
         <toTop />
   </div>
</template>

<script>
// import axios from 'axios'
import NavBar from '../nav.vue'
import toTop from '../../components/toTop.vue'
import { VueMathjax } from 'vue-mathjax'
// import { MathJax } from 'mathjax-vue'



export default {
   name: 'blogskeleton',
   components: {
      NavBar,
      toTop,
      'vue-mathjax': VueMathjax
      // MathJax
   },
   data() {
      return {
         blogs: [],
         error: null,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
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

#curriculumBody, p {
   padding: 25px 7vw !important;
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