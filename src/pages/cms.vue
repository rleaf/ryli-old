<template>
  <div id="landing">
     <NavBar />
     <div id="textContainerHeader">
     </div>
     <div id="curriculumBody">
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        {{ restaurant.name }}
        {{ restaurant.description }}
        <br>
        
      </li>
      

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
         restaurants: [],
         error: null
      }
   },
   async mounted () {
      try {
         const response = await axios.get('http://localhost:1337/restaurants')
         this.restaurants = response.data
         console.log(response);
      } catch (error) {
         this.error = error;
      }
   }
}
</script>

<style>

</style>