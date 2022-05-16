<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'sign'}">
         <div class="imagehover">
            <p>Hand Gestures</p>
            <div id="subtext">
               <p>Illustration</p>
            </div>
            <div id="covertext">
               <!-- <p>4/2/2020</p> -->
            </div>
         </div>
         <div id="signTween" v-on:mouseover="bgTweenMouseOver()" v-on:mouseleave="bgTweenMouseLeave()" class="imagePreviewHover">
            <img src="../../assets/design/signlanguage/sign_cover.webp" class="portimg">
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
         gsap.to(threeScene.fogColorRGB, {r: 40/255,g: 40/255, b: 40/255, duration: 1.5})
         // console.log(threeScene.scene2);
         // threeScene.mounted(threeScene.scene2)
      },
      bgTweenMouseLeave() {
         gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})
      }
   }
}

</script>

<style>

</style>