<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Skeleton</p>
                  <p style="font-size: 18px; padding: 0 !important; ">8 &#8226; 26 &#8226; 2021</p>
               </div>
            </div>
            <vm :formula='formula'></vm>
            <vm :formula='jacobian'></vm>
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
         </div>
         <themeSwitch />
         <toTop />
   </div>
</template>

<script>
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import { VueMathjax } from 'vue-mathjax'

export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      themeSwitch,
      'vm': VueMathjax
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
         underbrace: `$$\\underbrace{f(x)=b}_{\\text{text here}}$$`,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
         jacobian: '$$\\begin{bmatrix}a & b\\\\ c & d\\end{bmatrix}$$'
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
   } 
}
</script>

<style scoped src='./css/blog.css'>
</style>