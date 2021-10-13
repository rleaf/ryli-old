<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/spotify">
         <div class="imagehover">
            <p>Spotify</p>
            <div id="subtext">
               <p>UI / UX</p>
            </div>
            <div id="covertext">
               <!-- <p>11/12/2019</p> -->
            </div>
         </div>
         <div id="spotifyTween" class="imagePreviewHover">
            <img src="../../assets/design/spotify/spotify_cover.jpg" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
import threeScene from '../../assets/js/threeScene.js'
import { gsap } from 'gsap'

export default {
   

   mounted() {
      const x = document.querySelector('#spotifyTween')

      x.addEventListener('mouseover', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: 132/255,g: 215/255, b: 161/255})
         gsap.to(threeScene.uColors.uValleyColor, 1.5, {r: 30/255,g: 215/255, b: 96/255})
      })

      x.addEventListener('mouseout', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: threeScene.uColors.uPeakColorBase.r, g: threeScene.uColors.uPeakColorBase.g, b: threeScene.uColors.uPeakColorBase.b})
         gsap.to(threeScene.uColors.uValleyColor, 1.5, {r: threeScene.uColors.uValleyColorBase.r, g: threeScene.uColors.uValleyColorBase.g, b: threeScene.uColors.uValleyColorBase.b})
      })

   }
}

</script>

<style>

</style>