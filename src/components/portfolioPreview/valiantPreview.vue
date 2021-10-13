<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/valiant">
         <div class="imagehover">
            <p>Valiant</p>
            <div id="subtext">
               <p>Branding / Logo & Web Design / Dev</p>
            </div>
            <div id="covertext">
               <!-- <p>12/8/2019</p> -->
            </div>
         </div>
         <div id="valiantTween" class="imagePreviewHover">
            <img src="../../assets/design/valiant/valiant_cover.jpg" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
import threeScene from '../../assets/js/threeScene.js'
import { gsap } from 'gsap'

export default {
   

   mounted() {
      const x = document.querySelector('#valiantTween')

      x.addEventListener('mouseover', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: 132/255,g: 215/255, b: 161/255})
         gsap.to(threeScene.fogColorRGB, 1.5, {r: 28.125/255,g: 4.375/255, b: 8.375/255})
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