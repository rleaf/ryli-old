<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Skeleton</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">8 &#8226; 26 &#8226; 2021</p>
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
   metaInfo: {
      title: 'Toads',
      meta: [
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
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
         jacobian: '$$\\begin{bmatrix}a & b\\\\ c & d\\end{bmatrix}$$'
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

      window.MathJax.Hub.Config({
         tex2jax: {
            inlineMath: [['$','$']],
            displayMath: [['$$', '$$'], ['[', ']']],
            skipStartupTypeset: true,
            processEscapes: true,
            processEnvironments: true
         }
      });

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

@media (max-width: 735px) {
   #curriculumBody {
      width: 100vw;
   }

   p {
      padding: 0;
   }
}

@media (max-width: 1255px) {
   p {
      padding: 2vw;
   }
}
</style>