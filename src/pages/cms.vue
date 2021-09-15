<template>
   <div id="landing">  
      <NavBar />
      <div id="textContainerHeader">
      </div>
      <div id="curriculumBody">
         <div id="curriculumHeader">
            <i style="font-size: 18px;">---</i>
         </div>
         <p>A place for talking. Discussion encompasses math, food, music, design, ml/ai and the things in between.
         <div id="curriculumBody">
            <router-link to="knn">
               <li>Implementing K Nearest Neighbors on CIFAR-10</li>
            </router-link>
            <router-link to="blogskeleton">
               <!-- Hide Skeleton for production -->
               <!-- <li>Skeleton</li> -->
            </router-link>
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
   import NavBar from '../components/nav.vue'
   
   // import axios from 'axios'


export default {
   name: 'speak',
   components: {
      NavBar,
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