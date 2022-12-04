<template>
   <!-- <transition>  -->
      <div class="pin">
         <div class="finalpin">
               <div class="sectionWrapper">
                  <h2 class="designSubTitle">Final Designs</h2>
                  <p class="bodyText" style="margin-top: 3rem;">
                     <i>Clicking through the <a href="https://www.figma.com/proto/IhXLtsI57GP0gw1iMC4snL/Steam?page-id=0%3A1&node-id=11%3A5&viewport=2309%2C-2416%2C1.28&scaling=min-zoom&starting-point-node-id=11%3A5&show-proto-sidebar=1" class="metaLinks2" target="_blank">Figma Prototype</a>
                     is encouraged to provide a more robust experience. The <a class="metaLinks2" href="https://www.figma.com/file/IhXLtsI57GP0gw1iMC4snL/Steam?node-id=0%3A1&t=Oen9lS4G9X8Klnyi-1" target="_blank">Figma File</a>
                     is also available to view.</i>
                  </p>

               </div>
            </div>
      </div>
   <!-- </transition> -->
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({
   autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
})

export default {
   mounted() {

      this.tl = gsap.timeline({
         scrollTrigger: {
            trigger: '.finalpin',
            start: 'top-=40%',
            end: 'bottom+=150%',
            pin: true,
            scrub: true,
            anticipatePin: 1,
            markers: true,
         }
      })
      .to('.finalbg', {
         opacity: 1,
      })
      .to('.finalbg', {
         width: '100%',
      })
      .to('.casenav', {
         marginLeft: '-5vw',
         delay: -0.5,
         // onComplete: ScrollTrigger.refresh()
      })

      setTimeout(() => {
         this.tl.scrollTrigger.refresh()
      }, 800)
   },

   beforeDestroy() {
      this.tl.kill()
      this.tl = null
   }
}
</script>

<style scoped>
   /* .finalpin {
      margin-top: 3vh;
   } */
</style>