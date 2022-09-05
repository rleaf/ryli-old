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
                  <h2 class="designSubTitle">About The Project</h2>
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
                        <h2 class="designSubTitle">Thoughts</h2>
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

export default {
   name: 'portfolioObject',
   components: {
      toTop,
      backdropFade,
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