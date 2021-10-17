<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               ASL Illustrations
               <div class="textDesignSubHeader">
                  Illustration
               </div>         

            </div>
         </div>
      </div>

         <div class="designBodyContainer">
            <div class="designContainerBox">
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
         </div>
      <toTop />
  </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import backdropFade from '../../components/backdropFade.vue'
import threeScene from '../../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   components: {
      toTop,
      backdropFade
   },
   mounted() {
      // threeScene.loadPageScene('signGroup')
      // HELLO ALL YOU NEED TO DO IS GET GOOD IMAGES FO THE BACKGROUNDS FOR EACH DESIGN SCENE
      // IF YOU HAVE THE TIME, ALSO DO BETTER MOCKUPS - SOME CURRENT ONES SUCK (SPD, SIGN)
      // ADD A TWEEN THAT PROCS ON SCROLL TO MAKE BG DARKER FOR READING OR......
      // ADD A BOX THAT ALL OF THE TEXT & MOCKUPS BELONG IN. MAYBE ADD MULTIPLE BOXES TO MAKE IT LOOK FANCY?
      

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
      background-repeat: no-repeat;
      background-size: 100%;
      /* background-position: center; */

   }  

</style>