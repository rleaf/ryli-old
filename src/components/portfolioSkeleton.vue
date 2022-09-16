<template>
   <div id="portfolioSkeletonFlex">
      <!-- <jawsposter /> -->
      <spotifyDesk />
      <oscilla />
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
import barnegatLight from './portfolioPreview/barnegatPreview.vue'
import dropbox from './portfolioPreview/dropboxPreview.vue'
import valiant from './portfolioPreview/valiantPreview.vue'
import spotify from './portfolioPreview/spotifyPreview.vue'
import signLanguage from './portfolioPreview/signPreview.vue'
import spdmagazine from './portfolioPreview/spdmagazinePreview.vue'
import oscilla from './portfolioPreview/oscillaPreview.vue'
import spotifyDesk from './portfolioPreview/spotifyDeskPreview.vue'
// import jawsposter from './portfolioPreview/jawspreview.vue'

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
      oscilla,
      spotifyDesk,
      // jawsposter


   },
}

</script>

<style>

#imgcontainer, #portfolioSkeletonFlex {
   display: inherit;
   flex-wrap: inherit;
   justify-content: inherit;
   /* z-index: 5; */
   /* width: 100vw; */
}

</style>