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
         gsap.to(threeScene.uColors.uValleyColor, 1.5, {r: 15/255,g: 13/255, b: 5/255})
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