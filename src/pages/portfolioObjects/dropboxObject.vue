<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
            Dropbox Redesign
            <div class="textDesignSubHeader">
               Web Design / Development
            </div>

            </div>
         </div>
      </div>

         <div class="designBodyContainer">
            <div class="designContainerBox">
               <div class="designContainerBoxPadding">
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">About The Project</h2>
                     A redesign intended to convey a simple and cleaner aesthetic
                  </div>
                  
                  <img src="../../assets/design/dropbox/mock2.jpg" alt="" id="img1300">
                  <div class="designSpace"></div>
                  <video id="img1300" autoplay loop :src="landing"></video>
                  <div class="designImageSubText">
                     <p> Landing page </p>
                  </div>
                  <div class="designSpace"></div>
                  <img src="../../assets/design/dropbox/dropbox_compare.jpg" alt="" id="img1300">
                  <div class="designSpace"></div>
                  <video id="img1300" autoplay loop :src="signin"></video>
                  <div class="designSpace"></div>
                  <!-- <div class="designTextContainerBody">
                     toad
                  </div> -->
                  <div class="designSpace"></div>
               </div>
            </div>
         </div>
         <toTop />
      </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import backdropFade from '../../components/backdropFade.vue'
// import threeScene from '../../assets/js/threeScene'
// import gsap from 'gsap'

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade
   },
   data: function() {
      return {
         landing: require("../../assets/design/dropbox/test.webm"),
         signin: require("../../assets/design/dropbox/signin.webm")
      }
   },
   // mounted() {
   //    gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
   //    threeScene.scene.remove(threeScene.sphere, threeScene.plane)
   //    threeScene.scene.add(threeScene.dropboxMesh)
   //    }})

   //    gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

   //    gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

   //    threeScene.cache = 'dropboxScene'
   // }
}
</script>

<style scoped>
   
::selection {
  background: var(--designSelection) !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--designSelection) !important; /* Gecko Browsers */
}

</style>