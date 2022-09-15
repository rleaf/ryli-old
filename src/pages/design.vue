<template>
  <div id="landing">
     <!-- <NavBar /> -->
     <div id="portfolio">
        <portfolioSkeleton />
     </div>
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