<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Valiant
               <div class="textDesignSubHeader">
                  2020
                  <br><br>
                  Branding / Logo & Web Design / Development
               </div>
            </div>
         </div>
      </div>
      
         <div class="designBodyContainer">
            <div class="designContainerBox">
               <div class="designContainerBoxPadding">
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">About The Project</h2>
                     Valiant is a custom furniture design business that combines the functionality and aesthetics of both metalwork and carpentry.
                     The client requested a brand identity, logo design, and a simple website to convey his business.
                  </div>
                  <img src="../../assets/design/valiant/mock1.jpg" class="designImg1300">
                  <div class="designImageSubText">
                     <p>
                        Valiant logo
                     </p>
                  </div>
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">Creative Process</h2>
                     The goal for the website was to promote the desired aesthetic by showing the bright reds and subtle off white on landing.
                     Modal images, smooth scrolling, and dynamic changing for different resolutions were all incorporated to provide the viewer with a greater experience.
                  </div>
                  <img src="../../assets/design/valiant/mock2.jpg" class="designImg1300">
                  <video class="designImg1300" autoplay loop :src="landing"></video>
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">Creative Process</h2>
                     For the logo design process, I focused on integrating an I-beam into the design. The idea actually came from the client himself as he used an I-beam design to join two pieces of wood together,
                     having the top and bottom flanges act as a "clamp". With this in mind, I focused on a couple of different styles. 
                     <br>
                     <br>
                     For color, the initial main swatches were shades of red, blue, and a cream white. After talks with the client, the colors changed to a bright red and a matching cream white to promote excitement.
                     The designed glyphs for the text also changed from a similar design as the I-beam to a retro Americana design.
                     Nearing the end, the final draft of the logo was encapsulated within a hexagon to add structure.
                  </div>
                  <img src="../../assets/design/valiant/work1.jpg" class="designImg1300">
                  <div class="designImageSubText">
                     <p>
                        Design process. The red box contains a prior design of the glyphs to be used in the final logo. The green box contains the used glyphs.
                     </p>
                  </div>
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">Thoughts</h2>
                     The alloted time frame that this project was to be completed in made everything a challenge. I worked with a couple other members on this project and initially we had not planned to create a
                     website - the original assets were a business card, a logo, and some other stationary supplies. After proposing the idea however, the client was definitely interested in the website over the
                     originally suggested stationary. All assets shown here were designed by me.
                  </div>
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

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade
   },
   data() {
      return {
         landing: require("../../assets/design/valiant/valiant.webm") 
      }
   },
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