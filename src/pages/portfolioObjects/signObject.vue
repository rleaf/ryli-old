<template>
  <div class="landingDesign">
     <!-- <backdrop /> -->
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
// // import backdrop from '../../components/backdrop.vue'
import toTop from '../../components/toTop.vue'
import threeScene from '../../assets/js/threeScene.js'

export default {
   components: {
      // backdrop ,
      toTop
   },
   mounted() {
      threeScene.loadScene(threeScene.scene2)

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