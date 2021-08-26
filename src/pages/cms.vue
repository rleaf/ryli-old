<template>
   <div id="landing">  
      <NavBar />
      <div id="textContainerHeader">
      </div>
      <div id="curriculumBody">
         <div id="curriculumHeader">
            <i style="font-size: 18px;">---</i>
         </div>
         <p>A place to record my thoughts.</p>
         <div id="curriculumBody">
            <li v-for='blog in blogs' :key="blog.id">
               <a href="http://www.google.com">{{ blog.name }}</a>
            </li>
            <!-- <li v-for='blog in blogs' :key="blog.id">
               <a href="http://www.google.com">{{ blog.name }}</a>
            </li> -->
         </div>
      <!-- <li v-for="restaurant in restaurants" :key="restaurant.id">
        {{ restaurant.name }}
        {{ restaurant.description }}
        <br>
        
      </li> -->
      

     </div>
  </div> 
</template>

<script>
   import NavBar from '../components/nav.vue'
   import axios from 'axios'

export default {
   name: 'speak',
   components: {
      NavBar
   },
   data () {
      return {
         blogs: [],
         error: null
      }
   },
   async mounted () {
      try {
         const response = await axios.get('http://localhost:1337/blogs')
         this.blogs = response.data
         console.log(response);
      } catch (error) {
         this.error = error;
      }
   }
}
</script>

<style scoped>

#curriculumBody > a, li {
   padding: 10px 0 10px 0;
   list-style-type: none;
   text-decoration: underline;
}

</style>