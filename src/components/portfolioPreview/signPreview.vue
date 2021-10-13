<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/sign">
         <div class="imagehover">
            <p>ASL Illustrations</p>
            <div id="subtext">
               <p>Illustration</p>
            </div>
            <div id="covertext">
               <!-- <p>4/2/2020</p> -->
            </div>
         </div>
         <div id="signTween" class="imagePreviewHover">
            <img src="../../assets/design/signlanguage/sign_cover.jpg" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
import threeScene from '../../assets/js/threeScene.js'
import { gsap } from 'gsap'

export default {
   

   mounted() {
      const x = document.querySelector('#signTween')

      x.addEventListener('mouseover', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: 200/255,g: 200/255, b: 200/255})
         gsap.to(threeScene.uColors.uValleyColor, 1.5, {r: 112/255,g: 112/255, b: 112/255})
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