<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'barnegat'}">
         <div class="imagehover">
            <p>barnegat light</p>
            <div id="subtext">
               <p>photography</p>
            </div>
            <div id="covertext">
               <!-- <p>01/20/19</p> -->
            </div>
         </div>
         <div id="barnegatTween" v-on:mouseover="bgTweenMouseOver()" v-on:mouseleave="bgTweenMouseLeave()" class="imagePreviewHover">
            <img src="../../assets/design/barnegat/barnegat_cover.jpg" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script scoped>
import threeScene from '../../assets/js/threeScene.js'
import { gsap } from 'gsap'

export default {
   
   data() {
      return {

      }
   },

   mounted() {
      // const x = document.querySelector('#barnegatTween')
      // x.addEventListener('mouseover', () => {
      //    // gsap.to(threeScene.uColors.uPeakColor, 1, {r: 75/255,g: 81/255, b: 182/255})
         
      // })

      // x.addEventListener('mouseout', () => {
      //    // gsap.to(threeScene.uColors.uPeakColor, 1, {r: threeScene.uColors.uPeakColorBase.r, g: threeScene.uColors.uPeakColorBase.g, b: threeScene.uColors.uPeakColorBase.b})
      // })
   },

   methods: {
      bgTweenMouseOver() {
         gsap.to(threeScene.fogColorRGB, 1.5, {r: 10/255,g: 13.5/255, b: 27.5/255})
      },
      bgTweenMouseLeave() {

         gsap.to(threeScene.fogColorRGB, 1.5, {r: 14/255,g: 14/255, b: 14/255})
      }
   },
}
</script>

<style scoped>

</style>