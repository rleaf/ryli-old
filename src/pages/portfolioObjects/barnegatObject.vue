<template>
  <div class="landingDesign">
     <backdropFade />
     <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Barnegat Light
               <div class="textDesignSubHeader">
                  Photography
               </div>

            </div>
         </div>
      </div>

      <div class="designBodyContainer">
         <div class="designContainerBox">
            <div class="designContainerBoxPadding">
               <div class="designTextContainerBody">
                  I spent the weekend at Barnegat Light, NJ during the winter.
               </div>
               <img src="../../assets/design/barnegat/beach.jpg" class="designImg1300">
               <div class="designSpace"></div>
               <img src="../../assets/design/barnegat/bird.jpg" class="designImg1300">
               <div class="designSpace"></div>
               <img src="../../assets/design/barnegat/trails.jpg" class="designImg1300">
               <div class="designSpace"></div>
               <div class="designOffsetImageLeft">
                  <div class="designOffsetContainer">
                     <div class="designOffsetImgContainer">
                        <img src="../../assets/design/barnegat/seagullfront.jpg" alt="" class="offsetImg800">
                     </div>
                  </div>
                  <div class="designOffsetContainer">
                     <div class="designOffsetImgContainer">
                        <img src="../../assets/design/barnegat/seagullside.jpg" alt="" class="offsetImg800">
                     </div>
                  </div>
               </div>
               <div class="designSpace"></div>
               
               <img src="../../assets/design/barnegat/panorama.jpg" class="designImg1300">
               <div class="designSpace"></div>
               <div class="designOffsetImageLeft">
                  <div class="designOffsetContainer">
                     <div class="designOffsetImgContainer">
                        <img src="../../assets/design/barnegat/mock1.jpg" class="offsetImg800">
                     </div>
                  </div>
                  <div class="designOffsetContainer">
                     <div class="designOffsetImgContainer">
                        <img src="../../assets/design/barnegat/mock2.jpg" class="offsetImg800">
                     </div>
                  </div>
               </div>
               <div class="designSpace"></div>
               <div class="designOffsetImageLeft">
                  <div class="designOffsetContainer">
                     <div class="designOffsetImgContainer">
                        <img src="../../assets/design/barnegat/barnegat_cover.jpg" class="offsetImg800">
                     </div>
                  </div>
                  <div class="designOffsetContainer">
                     <div class="offsetImgText">
                        The picture on the left (or below depending on your screen width), was taken while I was taking shots for the first picture. If you go to the beach at 4 am in the middle
                        of January, bring a lot of jackets - I forgot how windy it gets. All of these shots were taken on my Rebel T2i.
                     </div>
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
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade,
   },
   mounted() {

   gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
      threeScene.scene.remove(threeScene.sphere, threeScene.plane)
      threeScene.scene.add(threeScene.barnegatMesh)
   }})
   gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

   gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

   threeScene.cache = 'barnegatScene'


   },
   beforeDestroy() {
      console.log('toad');
   }
}
</script>

<style scoped>
   /* .landing {
      display: inherit;
      z-index: 5;
   } */

   
::selection {
  background: var(--designSelection) !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--designSelection) !important; /* Gecko Browsers */
}

</style>