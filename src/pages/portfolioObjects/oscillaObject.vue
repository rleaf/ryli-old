<template>
  <div class="landingDesign">
     <backdropFade />
     <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Oscilla
               <div class="textDesignSubHeader">
                  Typography
               </div>
            </div>
         </div>
      </div>

      <div class="designBodyContainer">
         <div class="designContainerBox">
            <div class="designContainerBoxPadding">
               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">About The Project</h2>
                  Oscilla is a display typeface motivated by desiging glyphs that "oscilla"te between thick strokes and thin serifs. In total there are 62 glyphs.
               </div>
               <img src="../../assets/design/oscilla/1.webp" class="designImg1300">
               <img src="../../assets/design/oscilla/3.webp" class="designImg1300">
               <div class="designSpace"></div>

               <div class="designOffsetImageLeft">
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/oscilla/2.webp" alt="" class="offsetImg800">
                        </div>
                     </div>
                     <div class="designOffsetContainer">
                        <div class="offsetImgText">
                           <h2 class="designSubTitle">Simple Ligatures</h2>
                           Ligatures were added to prevent conflict between decenders.
                        </div>
                     </div>
                  </div>

               <div class="designSpace"></div>
               <img src="../../assets/design/oscilla/4.webp" class="designImg1300">
               <div class="designSpace"></div>

               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">Creative Process</h2>
               </div>
               <img src="../../assets/design/oscilla/6.webp" class="designImg1300">
               <img src="../../assets/design/oscilla/5.webp" class="designImg1300">
               <div class="designSpace"></div>

               <div class="designOffsetImageRight">
                  <div class="designOffsetContainer">
                     <div class="offsetImgText">
                        <h2 class="designSubTitle">Creative Process</h2>
                        Many glyphs have unique curves to accomodate for the transition between thick strokes and pointed serifs. 
                     </div>
                  </div>
                  <div class="designOffsetContainer">
                     <div class="designOffsetImgContainer">
                        <img src="../../assets/design/oscilla/8.webp" alt="" class="offsetImg800">
                     </div>
                  </div>
               </div>
               <div class="designSpace"></div>

               <div class="designTextContainerBody">
                  <h2 class="designSubTitle">Thoughts</h2>
                  Designing a typeface is always fun. Except for a handful of turbulent letters (looking at you M), the process has been a way I can relax. I hope, in the future, I rely on designing letters
                  as a way to continue relaxing - and because of this, I'd like to openly share these typefaces.
                  Oscilla is free to download on my Github. Link <a href="https://github.com/rleaf/Typefaces/tree/main/Oscilla" target="_blank">here</a>.
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
// import threeScene from '../../assets/js/threeScene.js'
// import experience from '../../assets/js/Experience/Experience.js'
// import gsap from 'gsap'

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade,
   },

   // head: {
   //    title: {
   //       inner: 'Introduction to Big "Oh" Notation'
   //    },
   // },
   mounted() {
   
      // gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
      //    threeScene.scene.remove(threeScene.sphere, threeScene.plane)
      //    threeScene.scene.add(threeScene.oscillaMesh)
      // }})
      // gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

      // gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

      // threeScene.cache = 'oscillaScene'


   },
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