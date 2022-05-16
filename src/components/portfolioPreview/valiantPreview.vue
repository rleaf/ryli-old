<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'valiant'}">
         <div class="imagehover">
            <p>Valiant</p>
            <div id="subtext">
               <p>Branding / Logo & Web Design / Dev</p>
            </div>
            <div id="covertext">
               <!-- <p>12/8/2019</p> -->
            </div>
         </div>
         <div id="valiantTween"  v-on:mouseover="bgTweenMouseOver()" v-on:mouseleave="bgTweenMouseLeave()" class="imagePreviewHover">
            <img src="../../assets/design/valiant/valiant_cover.webp" class="portimg">
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
         gsap.to(threeScene.fogColorRGB, {r: 28.125/255,g: 4.375/255, b: 8.375/255, duration: 1.5})
      },
      bgTweenMouseLeave() {
         gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})
      }
   },
}

</script>

<style>

</style>