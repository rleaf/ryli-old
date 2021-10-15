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
import threeScene from '../assets/js/threeScene.js'
import expanse from './portfolioPreview/expansePreview.vue'
// import tubeWorld from './portfolioPreview/tubePreview.vue'
import barnegatLight from './portfolioPreview/barnegatPreview.vue'
import dropbox from './portfolioPreview/dropboxPreview.vue'
import valiant from './portfolioPreview/valiantPreview.vue'
import spotify from './portfolioPreview/spotifyPreview.vue'
import signLanguage from './portfolioPreview/signPreview.vue'
import spdmagazine from './portfolioPreview/spdmagazinePreview.vue'
// import jawsposter from './portfolioPreview/jawspreview.vue'
import gsap from 'gsap'

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

   mounted() {
      threeScene.loadScene(threeScene.scene1)
      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})

      // Create x + 1 Mesh's, where x = num of portfolio objects and the +1 are the main meshs
      // Transition by tweening opacity between mesh's
      // 
      // portfolioSkeleton --> threeScene.vue --> threeScene.js
      // instantiate class of the desired scene
      // 

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