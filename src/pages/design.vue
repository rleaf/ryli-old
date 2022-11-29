<template>
  <div id="landing">
      <div id="textContainerHeader">
      </div>
      <div id="curriculumBody">
         <div id="curriculumHeader">
            <p>Case Studies</p>
         </div>
         <p>
            Toads
         </p>
      </div>


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

export default {
   name: 'design',
   components: {
      // NavBar,
      portfolioSkeleton
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