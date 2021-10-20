<template>
  <div class="scrollBarContainer">
     <div class="bar"></div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
   
   mounted() {
      // const scrollTween = gsap.to('.bar', {yPercent: 400, ease: "none", paused: true})
      

      window.addEventListener('scroll', this.updateScrollBar)
      // window.addEventListener('scroll', () => {
      //    // console.log('toad');
      //    this.updateScrollBar()
      // })
      window.addEventListener('resize', this.updateScrollBar)

      // updateScrollBar() {
      //    scrollTween.progress(scrollY / (document.body.scrollHeight - innerHeight))
      // }
   },
   methods: {
      // Scroll on signObject
      updateScrollBar() {
         const scrollTween = gsap.to('.bar', {yPercent: 100, ease: "none", paused: true});
         // console.log('toads', document.querySelector('.bar'));
         scrollTween.progress(scrollY / (document.body.scrollHeight - innerHeight))
         console.log(scrollY / (document.body.scrollHeight - innerHeight));
         
      },
   }
}
</script>

<style scoped>

   .scrollBarContainer {
      display: block;
      position: fixed;
      right: 8px;
      width: 7px;
      top: 16px;
      bottom: 16px;
      /* height: 400px; */
      background-color: rgba(255, 255, 255, 0.08);
      z-index: 50;
   }

   .bar {
      height: 50px;
      width: 100%;
      background-color: rgb(148, 148, 148);
   }

</style>