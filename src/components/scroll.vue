<template>
  <div class="scrollBarContainer">
     <div class="bar"></div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
   
   mounted() {

      // let toads
      console.log(this.toads);
      // const scrollTween = gsap.to('.bar', {yPercent: 400, ease: "none", paused: true})
      gsap.to('.bar', {scrollTrigger: {
         trigger: '.bar',
         start: 'top',
         endTrigger: 'bottom',
         // end: 'bottom',
         scroller: 'body',
         scrub: true,
         markers: true,

      },
      top: '90%'});
      window.addEventListener('scroll', this.test)
      // window.addEventListener('scroll', this.updateScrollBar)
      // // window.addEventListener('scroll', () => {
      // //    // console.log('toad');
      // //    this.updateScrollBar()
      // // })
      // window.addEventListener('resize', this.updateScrollBar)
   },
   methods: {
      test() {
         // console.log(scrollY);
      }
      // Scroll on signObject
      // updateScrollBar() {
      //    const scrollTween = gsap.to('.bar', {yPercent: 100, ease: "none", paused: true});
      //    // console.log('toads', document.querySelector('.bar'));
      //    // scrollTween.progress(scrollY / (document.body.scrollHeight - innerHeight))
      //    scrollTween.progress(.5)
      //    console.log(scrollY / (document.body.scrollHeight - innerHeight));
         
      // },
   }
}
</script>

<style scoped>
   /* body {
      height: 500vh;
   } */

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
      display: block;
      position: absolute;
      /* transform: translate3d(0, 100%, 0); */
      top: 0%;
      width: 100%;
      background-color: rgb(148, 148, 148);
   }

</style>