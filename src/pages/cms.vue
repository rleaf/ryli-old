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
         <div id="curriculumBody">
            <router-link to="rnn">
            <!-- <router-link :to="{ path: '/rnn'}" append> -->
               <li>A Closer Look at the RNN</li>
            </router-link>

            
            <router-link to="bnbackpass">
               <li>The Shortcut in Differentiating the Backwards Pass in Batch Normalization</li>
            </router-link>
            <router-link to="knn">
               <li>Implementing K Nearest Neighbors on CIFAR-10</li>
            </router-link>
            <!-- <router-link to="blogskeleton">
               Hide Skeleton for production
               <li>Skeleton</li>
            </router-link> -->
            <router-link to="quadraticform">
               <li>Learning to find the derivative of the quadratic form</li>
            </router-link>
            <!------------ Code to pull blog titles from Strapi -->
            <!-- <li v-for='(blog, index) in blogs' :key="blog.id">
               <a :href="links[index]">{{ blog.name }}</a>
            </li> -->
         </div>

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