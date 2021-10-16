<template>
  <div class="landingDesign">
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               ASL Illustrations
               <div id="subHeader">
                  Illustration
               </div>         

            </div>
         </div>
      </div>

      <div class="designBodyContainer">
         <img src="../../assets/design/signlanguage/mock.jpg" alt="" id="img1300">
         <div class="designTextContainerBody">
            I designed and illustrated 50 various signs for <i>"Advanced Public Speaking: Theory and Technique"</i>. The book discusses
            incorporating hand gestures with public speaking to increase efficacy of communication. Many signs have been redesigned specifically for a presentation environment
            to participate conveying the speakers message.
         </div>
         <img src="../../assets/design/signlanguage/mock2.jpg" alt="" id="img1300">
         <div id="textContainerBody">
            
         </div>
         <br>
      </div>
      <toTop />
  </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import threeScene from '../../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   components: {
      toTop
   },
   mounted() {
      // threeScene.loadPageScene('signGroup')

      gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
         threeScene.scene.remove(threeScene.sphere, threeScene.plane)
         threeScene.scene.add(threeScene.signMesh)
      }})
      gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

      threeScene.cache = 'signScene'
   }
}
</script>

<style scoped>

   .backdrop {
      background-image: url('../../assets/design/signlanguage/background_sign3.jpg');
      background-repeat: no-repeat;
      background-size: 100%;
      /* background-position: center; */

   }  

</style>