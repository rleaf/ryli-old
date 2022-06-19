<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Spotify Redesign
               <div class="textDesignSubHeader">
                  UI / UX
               </div>
            </div>
         </div>
      </div>

         <div class="designBodyContainer">
            <div class="designContainerBox">
               <div class="designContainerBoxPadding">
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">About The Project</h2>
                     This redesign was a challenge to maintain the aesthetic already established and compliment it with increased functionality.
                     The goals included: better organization on the landing page,
                     a "stats" section of your listening activity, and control of generating your own playlist.
                     Various cosmetic changes were also introduced. This project was desiged at the time of the 2019 Spotify UI.
                  </div>

                  <div id="textContainerBody">
                  </div>
                  <div class="designOffsetImageLeft">
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/spotify/mock2.jpg" class="offsetImg800">
                        </div>
                     </div>
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/spotify/mock1.jpg" class="offsetImg800">
                        </div>
                     </div>
                  </div>

                  <img src="../../assets/design/spotify/spotifymap.jpg" class="designImg1300">
                  <div class="designImageSubText">
                     <p> Map of redesign </p>
                  </div>
                  <div class="designSpace"></div>
                     <img src="../../assets/design/spotify/mainLanding.png" id="img350">
                     <img src="../../assets/design/spotify/landing.png" id="img350">
                     <img src="../../assets/design/spotify/playlist.png" id="img350">
                     <img src="../../assets/design/spotify/profile.png" id="img350">
                     <img src="../../assets/design/spotify/song.png" id="img350">
                     <img src="../../assets/design/spotify/stats.png" id="img350">
                     <img src="../../assets/design/spotify/statsGenre.png" id="img350">
                     <img src="../../assets/design/spotify/search.png" id="img350">
                     <img src="../../assets/design/spotify/generate.png" id="img350">
                     <img src="../../assets/design/spotify/carView.png" id="img350">
                     <div id="textContainerBody">
                  </div>
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">Thoughts</h2>
                     In total, there are 10 images - some redesigned, some created.
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
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade
   },

   mounted() {
      gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
      threeScene.scene.remove(threeScene.sphere, threeScene.plane)
      threeScene.scene.add(threeScene.spotifyMesh)
      }})
      gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})
      threeScene.cache = 'spotifyScene'
   }
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