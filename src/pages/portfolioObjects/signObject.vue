<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Hand Gestures
               <div class="textDesignSubHeader">
                  2021
                  <br><br>
                  Illustration
               </div>         

            </div>
         </div>
      </div>

         <div class="designBodyContainer">
            <div class="designContainerBox">
               <div class="designContainerBoxPadding">
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">About The Project</h2>
                     I designed and illustrated 50 various hand gestures for <a href="https://titles.cognella.com/advanced-public-speaking-9781793513274" target="_blank"><i>"Advanced Public Speaking: Theory and Technique"</i></a>. The book involves
                     incorporating these gestures into public speaking to increase effective communication. Original inspiration
                     came from the American Sign Language, however many gestures have been redesigned to be more suitable
                     for a presentation environment.
                  </div>
                  <img src="../../assets/design/signlanguage/mock.jpg" class="designImg1300">
                  <img src="../../assets/design/signlanguage/mock2.jpg" class="designImg1300">
                  <div class="designImageSubText">
                     <p>Shown above are mockups</p>
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
                           <h2 class="designSubTitle">Problems & Resolutions</h2>
                           Before I could begin illustrating and designing the gestures, I needed to create them. The author marked the desired ASL signs to pull inspiration from, however also
                           emphasized that if the sign wasn't intuitive in a presentation environment, to consider variations.
                           <br>
                           <br>
                           An overlap I realized while creating the gestures
                           was that most people, when they present actually use the <i>same</i> hand movements - or at the very least similar variations. The goal was to evenly incorporate the
                           idiosyncratic movement that came with ASL while also maintaining the generality of "regular hand waving".
                           <br>
                           <br>
                           I decided to used my arms as a model for the gestures and first trace everything in Photoshop. This helped tremendously speed up drawing all 50 gestures. To account for any awkward drawings
                           that did not intuitively convey meaning or was too complex to be used in public speaking I frequently talked to other artists, designers, and the client.
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
                     <h2 class="designSubTitle">Further Improvements</h2>
                     Below are 55 illustrations of the final gestures. Arrows and a grey-to-white color change were added to help communicate <i>"where to start"</i> and <i>"how to move"</i>. I did not
                     illustrate the finer characteristics of hands such as fingernails and knuckles to keep detail simple.
                  </div>
                  <img src="../../assets/design/signlanguage/illustrations1.jpg" class="designImg1300">
                  <div class="designSpace"></div>
                  <img src="../../assets/design/signlanguage/illustrations2.jpg" class="designImg1300">
                  <div class="designImageSubText">
                     <p> Close up of some of the illustrations </p>
                  </div>
                  <div class="designSpace"></div>
                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">Thoughts</h2>
                     I was initially apprehensive doing this project because I did not have a lot familiarity with drawing; I'd like to believe that most artists are in the <i>"same boat"</i> on the topic of
                     hands being one of the more difficult parts of a human body to draw. Before even thinking of using my own hands as a model, I started by searching <i>"*insert sign name here* ASL"</i> and tracing
                     out the images I found. 
                     <br><br>
                     This process of tracing images I found online became very quickly problematic because it wasn't reliable. Different hand shapes and perspectives removed all cohesion between my drawings.
                     After using my own hands as a model to create the gestures in a much more controlled environment, everything became more rhythmic.
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

export default {
   components: {
      toTop,
      backdropFade
   },
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
  background: var(--designSelection) !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--designSelection) !important; /* Gecko Browsers */
}

</style>