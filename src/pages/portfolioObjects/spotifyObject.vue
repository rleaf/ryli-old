<template>
  <div id="landing">
     <backdrop />
      <div id="centerContainer">
         <div id="textContainerHeader">
            Spotify iOS Redesign
            <div id="subHeader">
               UI / UX
            </div>
         </div>
         <div id="textContainerBody" style="padding-bottom: 100px;">
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
import backdrop from '../../components/backdrop.vue'
import toTop from '../../components/toTop.vue'

export default {
   name: 'portfolioObject',
   components: {
      backdrop,
      toTop
   },
   data: function() {
      return {
         valiantOpen: ''
      }
   }
}
</script>

<style>

</style>z