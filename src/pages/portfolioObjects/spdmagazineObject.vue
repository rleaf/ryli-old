<template>
  <div class="landingDesign">
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Magazine Spread
               <div id="subHeader">
                  Design / Illustration / Print
               </div>
            </div>
         </div>
      </div>
         <div class="designBodyContainer">
            <div class="designTextContainerBody">
               My entry to the SPD design competition composed of a four page magazine spread. I decided to go with a spread layout that had a science fiction and computer-esque aesthetic.
               I focused on illustrating "bundles" of threads together to resemble the connectionism that is frequently associated with AI while keeping them spread out enough to appear organic.
            </div>

         <img src="../../assets/design/spdmagazine/mock11.jpg" alt="" id="img1300">
         <img src="../../assets/design/spdmagazine/mock12.jpg" alt="" id="img1300">
         <img src="../../assets/design/spdmagazine/mock21.jpg" alt="" id="img1300">
         <img src="../../assets/design/spdmagazine/mock22.jpg" alt="" id="img1300">
         </div>
      <toTop />
  </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import threeScene from '../../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   name: 'portfolioObject',
   components: {
      toTop
   },
   mounted() {
      gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
      threeScene.scene.remove(threeScene.sphere, threeScene.plane)
      threeScene.scene.add(threeScene.spdMesh)
      }})
      gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

      threeScene.cache = 'spdScene'
   }
}
</script>

<style>

</style>