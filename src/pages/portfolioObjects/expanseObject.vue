<template>
  <div class="landingDesign">
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Expanse
               <div id="subHeader">
                  typeface
               </div>

            </div>   
         </div>
      </div>
      
         <div class="designBodyContainer">
            <div class="designTextContainerBody">
               Expanse is a header typeface designed with tech and sci-fi aesthetics. I incorporated minimalistic and geometric aesthetics into the typeface while
               attempting to preserve readability.
            </div>
            <img src="../../assets/design/expanse/expanseland.jpg" alt="" id="img1300">
            <img src="../../assets/design/expanse/expanse_sample.png" alt="" id="img1300">
            <div id="textContainerBody">
               
            </div>
            <img src="../../assets/design/expanse/expanse_fill.png" alt="" id="img500">
            <img src="../../assets/design/expanse/expanse_stroke.png" alt="" id="img500">
            <img src="../../assets/design/expanse/space.jpg" alt="" id="img1300">
            <img src="../../assets/design/expanse/mock1.jpg" alt="" id="img1300">
            <br>
            <div id="textContainerBody">
               <div id="linkhover">
                  Sources: <a href="https://www.artstation.com/karlpoyzer"> Karl Poyzer</a> &
                  <a href="https://www.instagram.com/cosmic_background/">Andrew McCarthy</a>
               </div>
            </div>        
         </div>
      <toTop />
  </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import threeScene from '../../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   components: {
      toTop
   },
   mounted() {
      gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
      threeScene.scene.remove(threeScene.sphere, threeScene.plane)
      threeScene.scene.add(threeScene.expanseMesh)
      }})

      gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

      threeScene.cache = 'expanseScene'
   }
}
</script>

<style scoped>



</style>