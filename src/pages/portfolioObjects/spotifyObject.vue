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
         <div class="designBodyContainer" style="padding-bottom: 100px;">
            <div class="designTextContainerBody">
               The purpose of this redesign is to maintain the aesthetic already established and compliment it with increased functionality.
               The goals included: better organization on the landing page,
               a "stats" section of your listening activity, and control of generating your own playlist.
               Various cosmetic changes were also introduced. This project was desiged at the time of the 2019 Spotify UX.
            </div>

            <div id="textContainerBody">
            </div>
            <img src="../../assets/design/spotify/mock1.jpg" alt="">
            <img src="../../assets/design/spotify/mock2.jpg" alt="">
            <img src="../../assets/design/spotify/spotifymap.jpg" alt="" id="img1300">
            <br>
            <img src="../../assets/design/spotify/mainLanding.png" alt="" id="img350">
            <img src="../../assets/design/spotify/landing.png" alt="" id="img350">
            <img src="../../assets/design/spotify/playlist.png" alt="" id="img350">
            <img src="../../assets/design/spotify/profile.png" alt="" id="img350">
            <img src="../../assets/design/spotify/song.png" alt="" id="img350">
            <img src="../../assets/design/spotify/stats.png" alt="" id="img350">
            <img src="../../assets/design/spotify/statsGenre.png" alt="" id="img350">
            <img src="../../assets/design/spotify/search.png" alt="" id="img350">
            <img src="../../assets/design/spotify/generate.png" alt="" id="img350">
            <img src="../../assets/design/spotify/carView.png" alt="" id="img350">
            <div id="textContainerBody">
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

<style>

</style>z