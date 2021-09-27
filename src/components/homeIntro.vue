<template>
<div id="syntax">
   <div id="landingintro">
      <span class="introword">Ryan</span>
      <span class="introword">Lin</span>
      <br>
      <!-- <span class="subword">asdfasdfasdf</span> -->
      <div id="subda">
         <!-- <span class="subwordhomeIntro">Sun not to scale</span> -->
      </div>
   </div>
</div>
</template>

<script>
import { gsap } from "gsap";

export default {
   
   mounted() {
      
         // subtextArray = ['PS sun not to scale', 'If ']

         const x = document.getElementsByClassName("introword");
         const y = document.getElementsByClassName("subwordhomeIntro");

         // const ran = x[Math.floor(Math.random() * x.length)]
         // gsap.from(x[ran], {duration: "random(10, 12)", opacity: 0, stagger: 6, ease: "slow"});

         for (let i = 0; i < x.length; i++) {
            // gsap.from(x[i], {duration: "random(3, 5)", y: 120});
            gsap.from(x[i], {duration: 8, opacity: 0, stagger: 6, ease: "slow"});
         }
      
         gsap.from(y[0], {duration: 5, opacity: 0, delay: 4.5});
   }
}
</script>

<style scoped>


#landingintro {
   color: var(--white);
   font-size: 46px;
   padding-bottom: 0px;
   height: 100px;
   text-align: center;
   line-height: normal;
   margin-top: 18vh;
   position: relative;
}

#subda {
   padding-top: 14px;
   font-size: 18px;
}

@media screen and (max-height: 850px) {
   #landingintro {
      margin-top: 10vh;
   }
}

.introword, .subwordhomeIntro {
   display: inline-block;
   white-space: nowrap;
   visibility: inherit;
   padding: 0 4px;
}

</style>