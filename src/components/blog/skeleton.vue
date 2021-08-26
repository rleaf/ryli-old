<template>
   <div id="landing">
      <NavBar />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogheader">
                  <p v-for="blog in blogs" :key="blog.id">
                     {{ blog.name }}</p>
               </div>
            </div>
            <p>asdf</p>
         </div>
   </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../nav.vue'

export default {
   name: 'blogskeleton',
   components: {
      NavBar
   },
   async mounted () {
      try {
         const response = await axios.get('http://localhost:1337/blogs')
         this.blogs = response.data
      } catch (error) {
         this.error = error;
      }
   } 

}
</script>
<style scoped>

#blogskeleton {
   padding-top: 200px;
   color: var(--white);
}

#blogheader {
   
   font-size: 28px;
}
</style>