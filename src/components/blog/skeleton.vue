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
            <p>The quick brown fox jumps over the lazy dog.</p>
            <!-- <p>{{ blogs[0].description }}</p> -->
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
   data() {
      return {
         blogs: [],
         error: null
      }
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