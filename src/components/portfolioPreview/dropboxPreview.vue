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
         <div id="dropboxTween"  v-on:mouseover="bgTweenMouseOver()" v-on:mouseleave="bgTweenMouseLeave()" class="imagePreviewHover">
            <img src="../../assets/design/dropbox/dropbox_cover.jpg" class="portimg">
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
         gsap.to(threeScene.fogColorRGB, 1.5, {r: 0/255,g: 12.125/255, b: 31.875/255})
      },
      bgTweenMouseLeave() {
         gsap.to(threeScene.fogColorRGB, 1.5, {r: 14/255,g: 14/255, b: 14/255})
      }
   },
}

</script>

<style>

</style>