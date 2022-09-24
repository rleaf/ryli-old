<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
            Dropbox Redesign
            <div class="textDesignSubHeader">
               2019
               <br><br>
               Web Design
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
   data: function() {
      return {
         landing: require("../../assets/design/dropbox/test.webm"),
         signin: require("../../assets/design/dropbox/signin.webm")
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