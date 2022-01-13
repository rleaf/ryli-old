<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Forward & Backward of a CNN <i>**In the works (1/12/22)**</i></p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">1 &#8226; 12 &#8226; 2022</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <p>
               <i>Hello, everything here is likely to change. I like pushing these, even thought they're incomplete, for the curious to see workflow.</i>
            </p>
            <!-- <p>
               On the journey to learn about neural networks, Convolutional neural networks (henceforth shortened to CNNs), serve as a very solid transition from Multilayered
               perceptrons to other network architectures. I believe this because the CNN architecture captures the generalizing capabilities and overall flexibility present
               when working with neural networks, yet provides 
            </p> -->
            <p>
               Convolutional neural networks are an architecture of neural nets designed to process grid-like data such as images. They're a nice architecture to move onto
               in the journey of learning neural nets because they help show the innate generalizing capabilites of networks, but not, in my opinion, too much such that it easily
               confuses.
            </p>
            <p>
               Before going into CNNs, understanding "grid-like" data is just as easy as it is important. Images are probably the most popular examples, so throughout this post I will default to them.
               Below is an image I took at <a href="https://ryli.design/barnegat" target="_blank">Barnegat Light</a> and is also a simple illustration clarifying how
               images classify as a grid-like input. <b>Colored RGB</b> images have their 3 respsective channels populated with pixel integer values (0-255 inclusive) that tell how much of either red, green, or blue
               belongs at that location. Because of this, colored images can be represented as a 3 dimensional tensor and used as input for CNNs. It may help as well to think of the pixels as 1x3 vectors that extend
               through the depth/channels and are organized accordingly to the image.
            </p>
            <img id="img1000" style="box-shadow: none;" src="../../assets/blog/cnn_Image.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i>On the left shows the image isolated to the 3 color channels. When layered and blended properly, shown on the right, we get a properly colored image.</i></span>
            <p>
               Toads
            </p>
            <p>
               - Code and breakdown of forwards pass
               <br>
               - Code and breakdown of backward pass
               <br>
               - Any tricks? (batch norm / l2 reg / kaiming / ...) w/ code + breakdown too 
               <br>

            </p>
            <vue-mathjax :formula='formula'></vue-mathjax>
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
      title: 'Forward & Backward of a CNN',
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'Forward & Backward of a CNN. I talk about the forward and backward pass of a Convolutional neural network with illustrations and codeblocks as examples.'
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
   padding: 25px 6vw;
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

@media (max-width: 1255px) {
   p {
      padding: 2vw;
   }
}

@media (max-width: 735px) {
   p {
      padding: 0;
   }
}

</style>