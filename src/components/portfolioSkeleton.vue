<template>
   <div id="portfolioSkeletonFlex">
      <!-- <jawsposter /> -->
      <signLanguage />
      <spdmagazine />
      <valiant />
      <spotify />
      <expanse />
      <barnegatLight />
      <!-- <tubeWorld /> -->
      <dropbox />
   </div>
</template>

<script>
import expanse from './portfolioPreview/expansePreview.vue'
// import tubeWorld from './portfolioPreview/tubePreview.vue'
import barnegatLight from './portfolioPreview/barnegatPreview.vue'
import dropbox from './portfolioPreview/dropboxPreview.vue'
import valiant from './portfolioPreview/valiantPreview.vue'
import spotify from './portfolioPreview/spotifyPreview.vue'
import signLanguage from './portfolioPreview/signPreview.vue'
import spdmagazine from './portfolioPreview/spdmagazinePreview.vue'
// import jawsposter from './portfolioPreview/jawspreview.vue'

// import gsap from 'gsap'

export default {
   components: {
      expanse,
      // tubeWorld,
      barnegatLight,
      dropbox,
      valiant,
      spotify,
      signLanguage,
      spdmagazine,
      // jawsposter


   },

   methods: {
      cLog: function() {
         console.log('taods');
      }
   },

   mounted() {
      const x = document.querySelector('#imgcontainer')

      x.addEventListener('mouseover', () => {
         console.log('waffles');
      // gsap.to(colors.peak, {color: 0xfff, duration: 3})
      })

   }

}

</script>

<style>

#imgcontainer, #portfolioSkeletonFlex {
   display: inherit;
   flex-wrap: inherit;
   justify-content: inherit;
   /* z-index: 5; */
}

</style>