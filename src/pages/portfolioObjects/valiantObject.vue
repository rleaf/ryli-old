<template>
  <div class="landingDesign">
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Valiant
               <div id="subHeader">
                  Branding / Logo & Web Design / Dev
               </div>
            </div>
         </div>
      </div>
         <div class="designBodyContainer" style="padding-bottom: 100px;">
            <div class="designTextContainerBody">
               Valiant is a custom furniture design business that compounds the functionality and aesthetics of both metal and carpentry.
               The client requested a brand identity, logo design, and multimedia channels to convey his business.
            </div>
            <img src="../../assets/design/valiant/mock1.jpg" alt="" id="img1300">
            <br>
            <br>
               <div class="designTextContainerBody">
                  The goal for the website
                  was to maintain the desired aesthetic by heavily promoting the bright reds and subtle off white,
                  the philosophy was to create a simple but effective landing page. Modal images, smooth scrolling, and dynamic changing for 
                  different resolutions were all incorporated to provide the viewer with a greater experience.
               </div>
            <img src="../../assets/design/valiant/mock2.jpg" alt="" id="img1300">
            <video id="img1300" autoplay loop :src="landing"></video>
         </div>
         <!-- <img src="../../assets/valiant/Artboard 2.png" alt="" id="img1300"> -->
         <!-- <div id="textContainerBody">
            Here is the final version of the website. 
         </div> -->
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
      toTop,
   },
   data() {
      return {
         // valiantOpen:
         landing: require("../../assets/design/valiant/valiant.webm") 
      }
   },
   mounted() {
      gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
      threeScene.scene.remove(threeScene.sphere, threeScene.plane)
      threeScene.scene.add(threeScene.valiantMesh)
      }})

      gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

      threeScene.cache = 'valiantScene'
   }
}
</script>

<style>

</style>