<template>
  <div class="landingDesign">
     <backdropFade />
      <div class="designHero">
         <div class="designContainerHeader">
            <div class="textDesignContainer">
               Expanse
               <div class="textDesignSubHeader">
                  2020
                  <br><br>
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
                     Expanse is a header typeface designed with tech and sci-fi aesthetics. I incorporated minimalistic and geometric aesthetics into the typeface while
                     attempting to preserve readability.
                  </div>
                  <img src="../../assets/design/expanse/expanseland.jpg" class="designImg1300">
                  <div class="designSpace"></div>
                  <img src="../../assets/design/expanse/quickbrownfox.png" class="designImg1300" style="box-shadow: none;">
                  <div class="designOffsetImageLeft">
                     <div class="designOffsetContainer">
                        <div class="designOffsetImgContainer">
                           <img src="../../assets/design/expanse/expanse_fill2.png" class="offsetImg800" style="box-shadow: none;">
                        </div>
                     </div>
                  </div>
                  <img src="../../assets/design/expanse/space.jpg" class="designImg1300">
                  <img src="../../assets/design/expanse/mock1.jpg" class="designImg1300">
                  <div class="designSpace"></div>

                  <div class="designTextContainerBody">
                     <h2 class="designSubTitle">Thoughts</h2>
                     Expanse is free to download on my Github, link <a href="https://github.com/rleaf/Typefaces/tree/main/Expanse" target="_blank">here</a>.
                     Sources: <a href="https://www.artstation.com/karlpoyzer" style="color: #000;"> Karl Poyzer</a> &
                     <a href="https://www.instagram.com/cosmic_background/" style="color: #000;">Andrew McCarthy</a>
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

::selection {
  background: var(--designSelection) !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--designSelection) !important; /* Gecko Browsers */
}

</style>