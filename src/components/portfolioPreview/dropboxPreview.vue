<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'dropbox'}">
         <div class="imagehover">
            <p>Dropbox Redesign</p>
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
         gsap.to(threeScene.fogColorRGB, {r: 0/255,g: 12.125/255, b: 31.875/255, duration: 1.5})
      },
      bgTweenMouseLeave() {
         gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})
      }
   },
}

</script>

<style>

</style>