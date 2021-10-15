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
   data() {
      return {

      }
   },
   mounted() {
      window.addEventListener('scroll', this.toTop)
   },
   methods: {
      toTop() {
         const buttonToTop = document.querySelector('#toTopButton')

         if(document.body.scrollTop > 300 ||  document.documentElement.scrollTop > 300) {
            gsap.to(buttonToTop, {duration: .25, display: 'block', opacity: 1, bottom: 20})
            // buttonToTop.style.display = "block"
         } else {
            gsap.to(buttonToTop, {duration: .25, display: 'none', opacity: 0, bottom: 0})
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

#toTop > a {

   font-size: 18px;
   font-family: 'Inconsolata', sans-serif;
   color: var(--white);
   text-decoration: none;
   list-style-type: none;
   padding-bottom: 150px;
}

button {
   display: none; 
   /* opacity: 0; */
   position: fixed;
   /* bottom: 20px;  */
   right: 30px;
   z-index: 99; 
   border: none;
   box-shadow: -1px 0 var(--offWhite), 0 1px var(--offWhite), 1px 0 var(--offWhite), 0 -1px var(--offWhite);
   outline: none;
   background-color: #0e0e0e; 
   color: var(--white); 
   cursor: pointer; /* Add a mouse pointer on hover */
   padding: 5px 10px; 
   font-size: 14px; 
}

</style>