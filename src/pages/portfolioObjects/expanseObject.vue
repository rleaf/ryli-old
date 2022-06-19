<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Expanse
               <div class="textDesignSubHeader">
                  Typeface
               </div>

            </div>   
         </div>
      </div>
      
         <div class="designBodyContainer">
            <div class="designContainerBox">
               <div class="designContainerBoxPadding">
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">About The Project</h2>
                     Expanse is a header typeface designed with tech and sci-fi aesthetics. I incorporated minimalistic and geometric aesthetics into the typeface while
                     attempting to preserve readability.
                  </div>
                  <img src="../../assets/design/expanse/expanseland.jpg" class="designImg1300">
                  <div class="designSpace"></div>
                  <img src="../../assets/design/expanse/quickbrownfox.png" class="designImg1300" style="box-shadow: none;">
                  <!-- <div class="designSpace"></div> -->
                  <div class="designOffsetImageLeft">
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/expanse/expanse_fill2.png" class="offsetImg800" style="box-shadow: none;">
                        </div>
                     </div>
                     <!-- <div class="designOffsetContainer">
                        <div class="offsetImgText">
                           toadsare so poweroful toadsare so poweroful toadsare so poweroful toadsare so poweroful
                        </div>
                     </div> -->
                  </div>
                  <img src="../../assets/design/expanse/space.jpg" class="designImg1300">
                  <img src="../../assets/design/expanse/mock1.jpg" class="designImg1300">
                  <div class="designSpace"></div>
                  <div id="textContainerBody">
                     <div id="linkhover" style="color: #000;">
                        Sources: <a href="https://www.artstation.com/karlpoyzer" style="color: #000;"> Karl Poyzer</a> &
                        <a href="https://www.instagram.com/cosmic_background/" style="color: #000;">Andrew McCarthy</a>
                     </div>
                  </div>        
                  <div class="designSpace"></div>
               </div>
            </div>
         </div>
      <toTop />
  </div>
</template>

<script>
import toTop from '../../components/toTop.vue'
import backdropFade from '../../components/backdropFade.vue'
import threeScene from '../../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   components: {
      toTop,
      backdropFade
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

::selection {
  background: var(--designSelection) !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--designSelection) !important; /* Gecko Browsers */
}

</style>