<template>
  <div id="landing">
     <backdrop />
      <div id="centerContainer">
         <div id="textContainerHeader">
            ASL Illustrations
            <div id="subHeader">
               Illustration
            </div>         
         </div>
         <div id="textContainerBody">
            I designed and illustrated 50 various signs for <i>"Advanced Public Speaking: Theory and Technique"</i>. The book discusses
            incorporating hand gestures with public speaking to increase efficacy of communication. Many signs have been redesigned specifically for a presentation environment
            to participate conveying the speakers message.
         </div>
         <img src="../../assets/design/signlanguage/mock.jpg" alt="" id="img1300">
         <img src="../../assets/design/signlanguage/mock2.jpg" alt="" id="img1300">
         <div id="textContainerBody">
            
         </div>
         <br>
      </div>
      <toTop />
  </div>
</template>

<script>
import backdrop from '../../components/backdrop.vue'
import toTop from '../../components/toTop.vue'

export default {
   components: {
      backdrop ,
      toTop
   }
}
</script>

<style scoped>



</style>