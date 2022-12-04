<template>
   <div class="caseSkel">
      <CasePreview 
         v-for="casestudy in cases"
         :key="casestudy.title"
         :title="casestudy.title"
         :year="casestudy.year"
         :route="casestudy.route"
         :img="casestudy.img"
         :description="casestudy.description"
      />
   </div>
</template>

<script>
import CasePreview from './casePreview.vue'

export default {
   components: {
      CasePreview
   },
   data() {
      return {
         cases: [
            {
               title: 'Steam',
               year: '2022',
               route: 'steam',
               img: 'cover.webp',
               description: 'A redesign of the Steam desktop app',   
            },
         ]
      }
   }
}
</script>

<style scoped>

   .caseSkel {
      margin-left: 7vw;
   }
   
</style>