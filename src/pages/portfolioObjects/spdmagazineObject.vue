<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Magazine Spread
               <div class="textDesignSubHeader">
                  Design / Illustration / Print
               </div>
            </div>
         </div>
      </div>

         <div class="designBodyContainer">
            <div class="designContainerBox">
               <div class="designContainerBoxPadding">
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">About The Project</h2>
                     My entry to the SPD design competition composed of a four page magazine spread. I decided to go with a spread layout that had a science fiction and computer-esque aesthetic.
                     I focused on illustrating "bundles" of threads together to resemble the connectionism that is frequently associated with AI while keeping them spread out enough to appear organic.
                  </div>

                  <img src="../../assets/design/spdmagazine/mock111.jpg" alt="" class="designImg1300">
                  <img src="../../assets/design/spdmagazine/mock121.jpg" alt="" class="designImg1300">
                  <img src="../../assets/design/spdmagazine/mock13.jpg" alt="" class="designImg1300">
                  <div class="designSpace"></div>
                  <!-- <div class="designTextContainerBody">
                     At the time I was a little interested in AI so I decided to dedicate my entry to the subject. The text is from the Wikipedia page.
                  </div> -->
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">Creative Process</h2>
                     I had the idea already of incorporating threads and dots into the design and used Illustrator to create some concepts. The goal at this stage was to simply create as much of anything
                     as possible. Even if I knew that I wouldn't use a particular asset, as long as it aligned with the aesthetic I was pursuing, I wanted it on the artboard.
                  </div>
                  <img src="../../assets/design/spdmagazine/step1.jpg" alt="" class="designImg1300 ">
                  <img src="../../assets/design/spdmagazine/step2.jpg" alt="" class="designImg1300 ">
                  <div class="designImageSubText">
                     <p> Creative process </p>
                  </div>

                  <div class="designSpace"></div>
                  <img src="../../assets/design/spdmagazine/draft1.jpg" alt="" class="designImg1300">
                  <img src="../../assets/design/spdmagazine/draft2.jpg" alt="" class="designImg1300">
                  <div class="designImageSubText">
                     <p> Early concepts of title page </p>
                  </div>

                  <div class="designSpace"></div>
                  

                  <div class="designOffsetImageLeft">
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/spdmagazine/flair.jpg" alt="" class="offsetImg800">
                        </div>
                     </div>
                     <div class="designOffsetContainer">
                        <div class="offsetImgText">
                           <h2 class="designSubTitle">Creative Process</h2>
                           For lighter designs where I didn't want to detriment legibility, I added "flairs" and subtle rings of dots behind the text.
                           I also lighten the background to reduce contrast for a better reading experience as you transition to the second page on the first spread.
                        </div>
                     </div>
                  </div>

                  <div class="designSpace"></div>
                  <img src="../../assets/design/spdmagazine/decoded.jpg" alt="" class="designImg1300">
                  <img src="../../assets/design/spdmagazine/oded.jpg" alt="" class="designImg1300">
                  <div class="designOffsetImageRight">
                     <div class="designOffsetContainer">
                        <div class="offsetImgText">
                           <h2 class="designSubTitle">Creative Process</h2>
                           For the title text "decoded", I blended together an array of dots and then masked everything under a bold typeface. Lastly I applied the blue-to-pink gradient.
                           The goal for the text was to have it fit the concept of an LED to fit with the intended aesthetic. 
                        </div>
                     </div>
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/spdmagazine/de.jpg" alt="" class="offsetImg800">
                        </div>
                     </div>
                  </div>

                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     I decided to have the threads run up and off the page along the spine of the magazine to reduce any awkwardness as designs transitioned over to the next page. The text is from Wikipedia.
                  </div>
                  <img src="../../assets/design/spdmagazine/left1.jpg" alt="" class="img50Percent">
                  <img src="../../assets/design/spdmagazine/right1.jpg" alt="" class="img50Percent">
                  <img src="../../assets/design/spdmagazine/left2.jpg" alt="" class="img50Percent">
                  <img src="../../assets/design/spdmagazine/right2.jpg" alt="" class="img50Percent">
                  <div class="designImageSubText">
                     <p> Final images </p>
                  </div>
                  <div class="designSpace"></div>
                     <div class="designTextContainerBody">
                        <h2 class="designSubTitle">Thoughts</h2>
                        Desiging this was a lot of fun. However in retrospect, next time I will probably cut down on amount of text and and use the
                        available real-estate for adding more illustrations and designs.
                     <div class="designSpace"></div>
                  </div>
                  <!-- <img src="../../assets/design/spdmagazine/mock21.jpg" alt="" id="img1300">
                  <img src="../../assets/design/spdmagazine/mock22.jpg" alt="" id="img1300"> -->
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
// import gsap from 'gsap'

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade
   },
   // mounted() {
   //    gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
   //    threeScene.scene.remove(threeScene.sphere, threeScene.plane)
   //    threeScene.scene.add(threeScene.spdMesh)
   //    }})
   //    gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

   //    gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

   //    threeScene.cache = 'spdScene'
   // }
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