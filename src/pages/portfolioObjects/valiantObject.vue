<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Valiant
               <div class="textDesignSubHeader">
                  Branding / Logo & Web Design / Dev
               </div>
            </div>
         </div>
      </div>
      
         <div class="designBodyContainer">
            <div class="designContainerBox">
               <div class="designContainerBoxPadding">
                  <div class="designTextContainerBody">
                     Valiant is a custom furniture design business that combines the functionality and aesthetics of both metalwork and carpentry.
                     The client requested a brand identity, logo design, and multimedia channels to convey his business.
                  </div>
                  <img src="../../assets/design/valiant/mock1.jpg" class="designImg1300">
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     The goal for the website
                     was to promote the desired aesthetic by showing the bright reds and subtle off white on landing.
                     Modal images, smooth scrolling, and dynamic changing for 
                     different resolutions were all incorporated to provide the viewer with a greater experience.
                  </div>
                  <img src="../../assets/design/valiant/mock2.jpg" class="designImg1300">
                  <video class="designImg1300" autoplay loop :src="landing"></video>
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     For the design process, I focused around the use of an I-beam. The idea actually came from the client himself as he used the design to join two pieces of wood together,
                     having the I-beam act as a "clamp". With this in mind, I focused on a couple of different styles (look at the different letter designs in the red box, then the green box).
                     <br>
                     <br>
                     For color, the initial main swatches were shades of red, blue, and a cream white. After talks with the client, the colors changed to a right red and a matching cream white to promote excitement.
                     Nearing the end, the final draft of the logo was encapsulated within a hexagon to add structure.
                  </div>
                  <img src="../../assets/design/valiant/work1.jpg" class="designImg1300">
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     The alloted time frame that this project was to be completed in made everything a challenge. I worked with a couple other members on this project and initially we had not planned to create a
                     website - the original assets were a business card, a logo, and some other stationary supplies. After proposing the idea however, the client was definitely interested in the website over the
                     originally suggested stationary. All of the assets here were created by me.
                  </div>
                  <div class="designSpace"></div>
               </div>
            </div>
         </div>
         <!-- <img src="../../assets/valiant/Artboard 2.png" id="img1300"> -->
         <!-- <div id="textContainerBody">
            Here is the final version of the website. 
         </div> -->
      <toTop />
  </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import backdropFade from '../../components/backdropFade.vue'
import threeScene from '../../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade
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

<style scoped>

::selection {
  background: #bbbbbb !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
   background: #bbbbbb !important; /* Gecko Browsers */
}

</style>