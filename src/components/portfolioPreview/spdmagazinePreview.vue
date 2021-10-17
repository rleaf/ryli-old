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
         <div id="spdTween"  v-on:mouseover="bgTweenMouseOver()" v-on:mouseleave="bgTweenMouseLeave()" class="imagePreviewHover">
            <img src="../../assets/design/spdmagazine/magazine_cover.jpg" class="portimg">
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
         gsap.to(threeScene.fogColorRGB, {r: 27.25/255,g: 11.625/255, b: 27.25/255, a: 0.1, duration: 1.5})
      },
      bgTweenMouseLeave() {
         gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})
      }
   },
}

</script>

<style>

</style>