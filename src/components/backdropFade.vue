<template>
   <div class="backdropContainer">
      <div class="backdropFade"></div>
   </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
   autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
})

export default {
   mounted() {

      this.x = gsap.to('.backdropFade', {scrollTrigger: {
         trigger: '.backdropFade',
         start: '40%',
         end: 'bottom+=10% 10%',
         // markers: true,
         scrub: true,
      },
      opacity: .85})
   },
   beforeDestroy() {
      this.x.kill()
   }
}
</script>

<style>
   .backdropFade {
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      position: fixed;
      background: #0e0e0e;
      opacity: 0;
      z-index: 2;
      }

   /* .imageBackdrop {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      position: fixed;
      background: #0e0e0e;
      opacity: 0;
      z-index: 1;

   } */
</style>