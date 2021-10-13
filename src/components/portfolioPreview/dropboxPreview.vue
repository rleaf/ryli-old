<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/dropbox">
         <div class="imagehover">
            <p>Drop Box Redesign</p>
            <div id="subtext">
               <p>Web Design / Dev</p>
            </div>
            <div id="covertext">
               <!-- <p>10/5/2018</p> -->
            </div>
         </div>
         <div id="dropboxTween" class="imagePreviewHover">
            <img src="../../assets/design/dropbox/dropbox_cover.jpg" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
import threeScene from '../../assets/js/threeScene.js'
import { gsap } from 'gsap'

export default {
   

   mounted() {
      const x = document.querySelector('#dropboxTween')

      x.addEventListener('mouseover', () => {
         // gsap.to(threeScene.uColors.uPeakColor, 1, {r: 132/255,g: 215/255, b: 161/255})
         gsap.to(threeScene.uColors.uValleyColor, 1.5, {r: 0/255,g: 97/255, b: 255/255})
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