<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/spdmagazine">
         <div class="imagehover">
            <p>Magazine Spread</p>
            <div id="subtext">
               <p>Illustration / Print / Layout</p>
            </div>
            <div id="covertext">
               <!-- <p>2/24/2020</p> -->
            </div>
         </div>
         <div id="spdTween" class="imagePreviewHover">
            <img src="../../assets/design/spdmagazine/magazine_cover.jpg" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
import threeScene from '../../assets/js/threeScene.js'
import { gsap } from 'gsap'

export default {
   

   mounted() {
      const x = document.querySelector('#spdTween')

      x.addEventListener('mouseover', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: 132/255,g: 215/255, b: 161/255})
         gsap.to(threeScene.fogColorRGB, 1.5, {r: 27.25/255,g: 11.625/255, b: 27.25/255, a: 0.1})
      })

      x.addEventListener('mouseout', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: threeScene.uColors.uPeakColorBase.r, g: threeScene.uColors.uPeakColorBase.g, b: threeScene.uColors.uPeakColorBase.b})
         gsap.to(threeScene.fogColorRGB, 1.5, {r: 14/255,g: 14/255, b: 14/255})
      })

   }
}

</script>

<style>

</style>