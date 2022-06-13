<template>
   <div id="landing">  
      <!-- <backdrop /> -->
      <div id="textContainerHeader">
      </div>
      <div id="curriculumBody">
         <div id="curriculumHeader">
            <i style="font-size: 18px;">---</i>
         </div>
         <p>A place for talking. Usually about math, food, music, design, ml/ai, dev, and the things in between.
         <!-- <div id="curriculumBody"> -->
           
               <li><router-link :to="{ name: 'entropy'}">Entropy in Machine Learning <i>(wip)</i> </router-link></li>
               <li><router-link :to="{ name: 'transformer'}">Transformers Deconstructed and Explained</router-link></li>
               <li><router-link :to="{ name: 'cnn'}">The Forward & Backward of a CNN</router-link></li>
               <li><router-link :to="{ name: 'bigo'}">Introduction to Big "Oh" Notation</router-link></li>
               <li><router-link :to="{ name: 'rnn'}">The Forward & Backward of a RNN</router-link></li>
               <li><router-link :to="{ name: 'bnbackpass'}">The Shortcut in Differentiating the Backwards Pass in Batch Normalization</router-link></li>
               <li><router-link :to="{ name: 'knn'}">Implementing K Nearest Neighbors on CIFAR-10</router-link></li>
               <li><router-link :to="{ name: 'quadraticform'}">Learning to find the derivative of the quadratic form</router-link></li>
               <!------------ Code to pull blog titles from Strapi -->
               <!-- <li v-for='(blog, index) in blogs' :key="blog.id">
                  <a :href="links[index]">{{ blog.name }}</a>
               </li> -->
         <!-- </div> -->
     </div>
  </div> 
</template>

<script>
   // // import backdrop from '../components/backdrop.vue'
   import threeScene from '../assets/js/threeScene.js'
   import gsap from 'gsap'
   
   // import axios from 'axios'


export default {
   name: 'speak',
   components: {
      // backdrop
   },

   watch: {
      $route(to) {
         console.log('cms', to);
      }
   },
   /* Code for Strapi if I decide to use it */
   // data () {
   //    return {
   //       links: ['blogskeleton', 'https://www.microsoft.com'],
   //       blogs: [],
   //       error: null
   //    }
   // },
   // async mounted () {
   //    try {
   //       const response = await axios.get('http://localhost:1337/blogs')
   //       this.blogs = response.data
   //    } catch (error) {
   //       this.error = error;
   //    }
   // }
   mounted() {
      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, delay: 1.5, duration: 1.5})

      if(threeScene.cache == 'mainScene') {
         return
      } else {
         
         gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: "auto", onComplete:() => {
         threeScene.destroyMesh()
         threeScene.scene.add(threeScene.sphere,threeScene.plane)
         }})

         gsap.fromTo(threeScene.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})
         
         threeScene.cache = 'mainScene'
      }
   }
}
</script>

<style scoped>

#curriculumBody {
   width: 700px;
}

#curriculumBody > a, li {
   padding: 10px 0 10px 0;
   list-style-type: none;
   text-decoration: underline;
}

</style>