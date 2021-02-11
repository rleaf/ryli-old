<template>
   <div id="landingintro">
      <span class="introword">Hi </span>
      <span class="introword">I'm </span>
      <span class="introword">Ryan.</span>
      <!-- <span class="introword">I </span>
      <span class="introword">like </span>
      <span class="introword">to </span>
      <span class="introword">solve </span>
      <span class="introword">problems. </span> -->
      <!-- <br>
      <span class="subword">asdfasdfasdf</span> -->
      <div id="sub">
         <span class="subword">Neptune and Uranus are too far away</span>
      </div>
   </div>
</template>

<script>
import { gsap } from "gsap";

export default {
   
   mounted() {
      
         const x = document.getElementsByClassName("introword");
         const y = document.getElementsByClassName("subword");
      
         for (let i = 0; i < x.length; i++) {
            gsap.from(x[i], {duration: "random(3, 5)", y: 120});
            gsap.from(x[i], {duration: "random(4, 8)", opacity: 0, stagger: 6, ease: "slow"});
         }
      
         gsap.from(y[0], {duration: 3, opacity: 0, delay: 5});
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
}

#sub {
   padding-top: 10px;
   font-size: 20px;
}

@media screen and (max-height: 850px) {
   #landingintro {
      margin-top: 10vh;
   }
}

.introword {
   display: inline-block;
   white-space: nowrap;
   visibility: inherit;
   padding: 0 4px;
}
.subword {
   display: inline-block;
   white-space: nowrap;
   visibility: inherit;
   padding: 0 4px;
}

</style>