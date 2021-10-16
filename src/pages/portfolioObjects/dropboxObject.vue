<template>
  <div class="landingDesign">
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
            DropBox Redesign
            <div id="subHeader">
               Web Design & Development
            </div>

            </div>
         </div>
      </div>

         <div class="designBodyContainer">
            <div class="designTextContainerBody">
               A redesign intended to convey a simple and cleaner aesthetic
            </div>
            
            <img src="../../assets/design/dropbox/mock1.jpg" alt="" id="img1300">
            <!-- <video id="img1300" autoplay loop src="../../assets/dropbox/test.webm"></video> -->
            <video id="img1300" autoplay loop :src="landing"></video>
            <img src="../../assets/design/dropbox/dropbox_compare.jpg" alt="" id="img1300">
            <video id="img1300" autoplay loop :src="signin"></video>
         </div>
         <toTop />
      </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'

export default {
   name: 'portfolioObject',
   components: {
      toTop
   },
   data: function() {
      return {
         landing: require("../../assets/design/dropbox/test.webm"),
         signin: require("../../assets/design/dropbox/signin.webm")
      }
   },
   mounted() {
      gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
      threeScene.scene.remove(threeScene.sphere, threeScene.plane)
      threeScene.scene.add(threeScene.dropboxMesh)
      }})

      gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

      threeScene.cache = 'dropboxScene'
   }
}
</script>

<style>

</style>