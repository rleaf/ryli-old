<template>
  <div id="landing">
     <backdrop />
      <div id="centerContainer">
         <div id="textContainerHeader">
            Barnegat Light
            <div id="subHeader">
               Photography
            </div>
         </div>
         <div id="textContainerBody">
            I spent the weekend at Barnegat Light, NJ during the winter. Had a great time.
         </div>
         <img src="../../assets/design/barnegat/beach.jpg" alt="" id="img1300">
         <img src="../../assets/design/barnegat/bird.jpg" alt="" id="img1300">
         <img src="../../assets/design/barnegat/trails.jpg" alt="" id="img1300">
         <img src="../../assets/design/barnegat/seagullfront.jpg" alt="">
         <img src="../../assets/design/barnegat/seagullside.jpg" alt="">
         <img src="../../assets/design/barnegat/panorama.jpg" alt="" id="img1600">
         <img src="../../assets/design/barnegat/mock1.jpg" alt="" id="img800">
         <img src="../../assets/design/barnegat/mock2.jpg" alt="" id="img800">
         <div id="textContainerBody">
         </div>        
      </div>
      <toTop />
  </div>
</template>

<script>
import backdrop from '../../components/backdrop.vue'
import toTop from '../../components/toTop.vue'

export default {
   name: 'portfolioObject',
   components: {
      backdrop,
      toTop
   }
}
</script>

<style>
   .landing {
      display: inherit;
      z-index: 5;
   }
</style>