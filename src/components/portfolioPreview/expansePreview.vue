<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/expanse">
         <div class="imagehover">
            <p>expanse</p>
            <div id="subtext">
               <p>typeface</p>
            </div>
            <div id="covertext">
               <!-- <p>10/9/2019</p> -->
            </div>
         </div>
         <div id="expanseTween" class="imagePreviewHover">
            <img src="../../assets/design/expanse/expansePreview.png" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
import threeScene from '../../assets/js/threeScene.js'
import { gsap } from 'gsap'

export default {
   

   mounted() {
      const x = document.querySelector('#expanseTween')

      x.addEventListener('mouseover', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: 132/255,g: 215/255, b: 161/255})
         gsap.to(threeScene.fogColorRGB, 1.5, {r: 15/255,g: 13/255, b: 5/255})
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