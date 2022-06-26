<template>
   <div id="portfolioSkeletonFlex">
      <!-- <jawsposter /> -->
      <!-- <oscilla /> -->
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
// // import oscilla from './portfolioPreview/oscillaPreview.vue'
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
      // oscilla,
      // jawsposter


   },

   mounted() {
      // threeScene.loadPageScene()
      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})

      if(threeScene.cache == 'mainScene') {
         return
      } else {
         gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete:() => {
            threeScene.destroyMesh()
            threeScene.scene.add(threeScene.sphere,threeScene.plane)
         }})
         
         gsap.fromTo(threeScene.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})

         threeScene.cache = 'mainScene'
      }
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