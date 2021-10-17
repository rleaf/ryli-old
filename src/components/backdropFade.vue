<template>
   <div class="backdropContainer">
      <div class="backdropFade"></div>
   </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
   mounted() {

      gsap.to('.backdropFade', {scrollTrigger: {
         trigger: '.backdropFade',
         start: '40%',
         end: 'bottom+=10% 10%',
         // markers: true,
         scrub: true,
      },
      opacity: .85})
   }
}
</script>

<style>
   .backdropFade {
      width: 100vw;
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