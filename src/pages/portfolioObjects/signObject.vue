<template>
  <div class="landingDesign">
     <backdropFade />
     <!-- <scroll /> -->
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Hand Gestures
               <div class="textDesignSubHeader">
                  Illustration
               </div>         

            </div>
         </div>
      </div>

         <div class="designBodyContainer">
            <div class="designContainerBox">
               <div class="designContainerBoxPadding">
                  <div class="designTextContainerBody">
                     I designed and illustrated 50 various hand gestures for <a href="https://titles.cognella.com/advanced-public-speaking-9781793513274" target="_blank"><i>"Advanced Public Speaking: Theory and Technique"</i></a>. The book involves
                     incorporating these gestures into public speaking to increase effective communication. Original inspiration
                     came from the American Sign Language, however many gestures have been redesigned to be more suitable
                     for a presentation environment.
                  </div>
                  <img src="../../assets/design/signlanguage/mock.jpg" class="designImg1300">
                  <img src="../../assets/design/signlanguage/mock2.jpg" class="designImg1300">
                  <div class="designImageSubText">
                     <p> Shown above are mockups found online, not the actual book. </p>
                  </div>
                  <div class="designSpace"></div>
                  <div class="designOffsetImageLeft">
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/signlanguage/trace2.jpg" class="offsetImg800">
                        </div>
                     </div>
                     <div class="designOffsetContainer">
                        <div class="offsetImgText">
                           Before I could begin designing the gestures, I needed to create them. The author marked the desired ASL signs he wanted me to replicate, but also
                           emphasized that if the sign wasn't intuitive in a presentation environment, to consider variations. An overlap I realized while creating the gestures,
                           was that most people, when they present, actually use the <i>same</i> hand movements, or at the very least, similar variations. I wanted to evenly incorporate the
                           idiosyncratic movement that came with ASL while also maintaining the generality of "regular hand waving".
                           <br>
                           <br>
                           I decided to used my arms as a model for the gestures and first trace everything in Photoshop. This helped tremendously speed up drawing all 50 gestures. During the first draft,
                           I would check in with the author every ~10 drawings to confirm the gestures.
                        </div>
                     </div>
                  </div>
                  <div class="designSpace"></div>
                  <img src="../../assets/design/signlanguage/ps.jpg" id="img800">
                  <div class="designImageSubText">
                     <p> The final draft of the 50 drawings prior to illustrating </p>
                  </div>
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     Below are 55 illustrations of the final gestures. I added indicator arrows and a gray-to-white color change to help communicate <i>"where to start"</i> and <i>"how to move"</i>. I did not
                     illustrate the finer characteristics of hands such as fingernails and knuckles to keep everything simple.
                  </div>
                  <img src="../../assets/design/signlanguage/illustrations1.jpg" class="designImg1300">
                  <div class="designSpace"></div>
                  <img src="../../assets/design/signlanguage/illustrations2.jpg" class="designImg1300">
                  <div class="designImageSubText">
                     <p> Close up of some of the illustrations </p>
                  </div>
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     I was initially apprehensive doing this project because I did not have a lot of experience illustrating. I started everything by Googling <i>"*insert sign name here* ASL"</i> and trying to trace
                     out the images I found. This was problematic because the process wasn't reliable (different perspective & different hands). However, after coming up with the idea to use my own hands to create the gesture
                     and then draw/illustrate those, everything became more rhythmic.
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
// // import scroll from '../../components/scroll.vue'
import gsap from 'gsap'

export default {
   components: {
      toTop,
      // scroll,
      backdropFade
   },
   mounted() {
      
      gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
         threeScene.scene.remove(threeScene.sphere, threeScene.plane)
         threeScene.scene.add(threeScene.signMesh)
      }})
      gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5, delay: 1.5})

      threeScene.cache = 'signScene'
   }
}
</script>

<style scoped>

* {
   overflow: hidden;
}

a {
   color: #a9a9a9;
}

a:hover {
   color: #7c98c5;
}
::selection {
  background: #bbbbbb !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #bbbbbb !important; /* Gecko Browsers */
}

</style>