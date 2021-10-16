<template>
  <div class="landingDesign">
     <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Barnegat Light
               <div id="subHeader">
                  Photography
               </div>

            </div>
         </div>
      </div>

      <div class="designBodyContainer">
         <div class="designTextContainerBody">
            I spent the weekend at Barnegat Light, NJ during the winter.

         </div>
         <img src="../../assets/design/barnegat/beach.jpg" alt="" id="img1300">
         <img src="../../assets/design/barnegat/bird.jpg" alt="" id="img1300">
         <img src="../../assets/design/barnegat/trails.jpg" alt="" id="img1300">
         <img src="../../assets/design/barnegat/seagullfront.jpg" alt="">
         <img src="../../assets/design/barnegat/seagullside.jpg" alt="">
         <img src="../../assets/design/barnegat/panorama.jpg" alt="" id="img1600">
         <img src="../../assets/design/barnegat/mock1.jpg" alt="" id="img800">
         <img src="../../assets/design/barnegat/mock2.jpg" alt="" id="img800">
      </div>
         <div id="textContainerBody">
         </div>        
      
      <toTop />
  </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import threeScene from '../../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   name: 'portfolioObject',
   components: {
      toTop
   },
   mounted() {
      
   gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
      threeScene.scene.remove(threeScene.sphere, threeScene.plane)
      threeScene.scene.add(threeScene.barnegatMesh)
   }})
   gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

   gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

   threeScene.cache = 'barnegatScene'


   }
}
</script>

<style>
   .landing {
      display: inherit;
      z-index: 5;
   }
</style>