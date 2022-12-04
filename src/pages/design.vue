<template>
  <div id="landing">
      <div id="textContainerHeader">
      </div>
      <div id="curriculumBody">
         <div id="curriculumHeader">
            <p>Case Studies</p>
         </div>

      </div>
      <caseSkeleton />
      <!-- <p>
         <router-link :to="{ name: 'steamCase'}">toad</router-link>
      </p> -->



      <div id="curriculumBody">
         <div id="curriculumHeader">
            <p>Designs</p>
         </div>
      </div>
      <portfolioSkeleton />
  </div>
</template>

<script>
// import NavBar from '../components/nav.vue'
import portfolioSkeleton from '../components/portfolioSkeleton.vue'
import caseSkeleton from '../components/caseSkeleton.vue'

export default {
   name: 'design',
   components: {
      // NavBar,
      portfolioSkeleton,
      caseSkeleton
   },
   head: {
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         {
            name: 'description',
            content: 'Behold...my stuff.'
         },
      ]
   },
}

</script>

<style scoped>

</style>