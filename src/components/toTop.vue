<template>
  <div id="toTop">
     <!-- <a href onclick="window.scrollTo({0,0, behavior: 'smooth'})">Go back to top</a> -->
     <!-- <router-link  to="/">Go Back Top</router-link> -->
     <!-- <router-link id="toTop" to="" @click.native="scrollToTop()">Go Back Top</router-link> -->
     <button id="toTopButton" to="" @click="scrollToTop()">Go Back Top</button>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
   
   mounted() {
      window.addEventListener('scroll', this.toTop)

   },
   beforeDestroy() {
      window.removeEventListener('scroll', this.toTop)

   },
   methods: {
      toTop() {
         // const buttonToTop = document.querySelector('#toTopButton')
         if(document.body.scrollTop > 150 ||  document.documentElement.scrollTop > 150) {
            gsap.to('#toTopButton', {duration: .25, display: 'block', opacity: 1, bottom: 20})
            // buttonToTop.style.display = "block"
         } else {
            gsap.to('#toTopButton', {duration: .25, display: 'none', opacity: 0, bottom: 0})
            // buttonToTop.style.display = 'none'
         }
      },
      scrollToTop() {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      }
   }
}

</script>

<style scoped>

#toTop {
   position: relative;
   z-index: 10;
   text-align: center;
}

/* #toTop > a {

   font-size: 18px;
   font-family: 'Inconsolata', sans-serif;
   color: var(--white);
   text-decoration: none;
   list-style-type: none;
   padding-bottom: 150px;
} */

button {
   font-family: 'Inconsolata', sans-serif;
   display: none; 
   /* opacity: 0; */
   position: fixed;
   /* bottom: 20px;  */
   right: 30px;
   z-index: 99; 
   border: none;
   box-shadow: -1px 0 var(--shadeWhite2), 0 1px var(--shadeWhite2), 1px 0 var(--shadeWhite2), 0 -1px var(--shadeWhite2);
   outline: none;
   background-color: var(--primaryDark); 
   color: var(--white); 
   cursor: pointer; /* Add a mouse pointer on hover */
   padding: 5px 10px; 
   font-size: 14px;
   /* transition: 0.3s cubic-bezier(0.77,0.2,0.05,1.0); */
}

.daymodeButton {
   color: black !important;
   background-color: #e0e0e0;
   box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
   /* transition: 0.3s cubic-bezier(0.77,0.2,0.05,1.0); */
}

</style>