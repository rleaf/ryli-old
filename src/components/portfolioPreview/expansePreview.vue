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
         <div id="expanseTween"  v-on:mouseover="bgTweenMouseOver()" v-on:mouseleave="bgTweenMouseLeave()" class="imagePreviewHover">
            <img src="../../assets/design/expanse/expansePreview.png" class="portimg">
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
         gsap.to(threeScene.fogColorRGB, {r: 15/255,g: 13/255, b: 5/255, duration: 1.5})
      },
      bgTweenMouseLeave() {
         gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})
      }
   },
}

</script>

<style>

</style>