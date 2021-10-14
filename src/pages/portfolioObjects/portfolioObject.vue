<template>
  <div id="landing">
      <!-- <div id="canvas">
         <threeScene />
      </div> -->
      <div id="centerContainer">
         <div id="textContainerHeader">
            moshi moshi
            <div id="subHeader">
               Photography
            </div>
         </div>
         <div id="textContainerBody">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
         </div>
         <img src="../../assets/design/test.jpg" alt="">
         <div id="textContainerBody">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
         </div>        
      </div>
      <toTop />
  </div>
</template>

<script>
// import NavBar from '../../components/nav.vue'
import toTop from '../../components/toTop.vue'
// import threeScene from '../../components/threeScene.vue'

export default {
   name: 'portfolioObject',
   components: {
      // NavBar,
      toTop,
      // threeScene
   },
   methods: {

   },
}
</script>

<style>

</style>