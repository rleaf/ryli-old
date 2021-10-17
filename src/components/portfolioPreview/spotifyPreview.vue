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
         <div id="spotifyTween"  v-on:mouseover="bgTweenMouseOver()" v-on:mouseleave="bgTweenMouseLeave()" class="imagePreviewHover">
            <img src="../../assets/design/spotify/spotify_cover.jpg" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
import threeScene from '../../assets/js/threeScene.js'
import { gsap } from 'gsap'

export default {
   data() {
      return {

      }
   },

   methods: {
      bgTweenMouseOver() {
         // Divide rgb by factor of 8
         gsap.to(threeScene.fogColorRGB, {r: 3.75/255,g: 26.875/255, b: 12/255, a: 0.1, duration: 1.5})
      },
      bgTweenMouseLeave() {
         gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})
      }
   },

   mounted() {
      const x = document.querySelector('#spotifyTween')

      x.addEventListener('mouseover', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: 132/255,g: 215/255, b: 161/255})
      })

      x.addEventListener('mouseout', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: threeScene.uColors.uPeakColorBase.r, g: threeScene.uColors.uPeakColorBase.g, b: threeScene.uColors.uPeakColorBase.b})
         gsap.to(threeScene.fogColorRGB, .5, {r: 14/255,g: 14/255, b: 14/255, overwrite: true})
      })

   }
}

</script>

<style>

</style>