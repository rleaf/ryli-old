<template>
   <div class="nav">
      <!-- <div class="imageheaderratio"> -->
            <!-- <li>Home</li> -->
         <div id="mainnav">
            <router-link  :to="{ name: 'home' }" class="underline">
               <img class="logoimg" src="../assets/logo.png" alt="">
            </router-link>
            <ul id='bar'>
               <!-- <router-link to="/" class="underline">
                  <li>Home</li>
               </router-link> -->
               <router-link  :to="{ name: 'design'}" class="underline">
                  <li>Design</li>
               </router-link>
               <router-link :to="{ name: 'curriculumvitae'}" class="underline">
                  <li>About / CV</li>
               </router-link>
               <router-link to='' class="underline">
                  <span @click="emailnotif">
                     <li>Contact</li>
                     <input value="ryanurquhartlin@gmail.com" class="email" style="opacity: 0; visibility: 0; z-index: -999; position: absolute;">
                     <span class="emailnotif" style="position: absolute; overflow-wrap: normal;">Email copied to clipboard!</span>
                  </span>
               </router-link>
               <router-link :to="{ name: 'blog'}" class="underline">
                  <li>Blog</li>
               </router-link>
               <router-link :to="{ name: 'glossary'}" class="underline">
                  <li>Food</li>
               </router-link>
               <!-- <router-link to='sketches' class="underline">
                  <li>Sketches +</li>
               </router-link> -->
            </ul>
            <ul id='bar2'>
               <a href="https://twitter.com/_ryli" class="underline" target="_blank">
                  <li>Twitter</li>
               </a>
               <a href="https://www.github.com/rleaf" class="underline" target="_blank">
                  <li>Github</li>
               </a>
               <!-- <li style="padding-left: 40px">Owl#4626</li> -->
            </ul>
         <!-- </div> -->
         </div>
            <div id="mobilenav">
               <div id="mobilemain">

                  <router-link  :to="{ name: 'home' }">
                     <img class="logoimgmobile" src="../assets/logo.png" alt="">
                  </router-link>
                  <div class="burger" @click="isActive = !isActive" style="cursor: pointer;">
                     <span class="bread"></span>
                     <span class="bread"></span>
                     <span class="bread"></span>
                  </div>
               </div>
               <div id="mobilepad">
                  <ul class="mobilemenu" @click="hide">
                     <router-link  :to="{ name: 'design'}" class="mobilenavbutton">
                        <li>Design</li>
                     </router-link>
                     <router-link :to="{ name: 'curriculumvitae'}" class="mobilenavbutton">
                        <li>About / CV</li>
                     </router-link>
                     <span @click="emailnotif" class="mobilenavbutton" style="cursor: pointer;">
                        <li>Copy email to clipboard</li>
                     </span>
                     <router-link :to="{ name: 'blog'}" class="mobilenavbutton">
                        <li>Blog</li>
                     </router-link>
                     <router-link :to="{ name: 'glossary'}" class="mobilenavbutton">
                        <li>Food</li>
                     </router-link>
                     <a href="https://twitter.com/_ryli" target="_blank" class="mobilenavbutton">
                        <li>Twitter</li>
                     </a>
                     <a href="https://www.github.com/rleaf" target="_blank" class="mobilenavbutton">
                        <li>Github</li>
                     </a>
                  </ul>

               </div>
            </div>
   </div>
</template>

<script>
import { gsap } from "gsap";
export default {

   data() {
      return {
         isActive: true

      }
   },

   watch: {
      isActive() {
         console.log('wee', this.isActive);
         let x = document.querySelector('#mobilepad')
         this.isActive ? (x.style.transform = 'translate(0, -100%)') : (x.style.transform = 'none')
      }
   },

   methods: {

      hide() {
         this.isActive = !this.isActive
      },

      emailnotif() {

         console.log('toadies');
         const x = document.getElementsByClassName("emailnotif")[0];
         const y = document.getElementsByClassName("email")[0];
         console.log(x, y);

         gsap.to(x, {duration: 2, opacity: 1, x: 50, onComplete: tweenFin});
         
         function tweenFin() {
            gsap.to(x, {duration: 1, opacity: 0, onComplete: tweenReset});
         }

         function tweenReset() {
            gsap.to(x, {duration: 0, x: -50});
         }

         y.select();
         y.setSelectionRange(0, 99999);
         
         navigator.clipboard.writeText(y.value)
      }
   },
}


</script>

<style>
.nav {
   font-size: 16px;
   position: relative;
   padding: 6vh 3vw 0 3vw;
   z-index: 10;
}

.logoimg {
   width: 50px;
   float: left;
   padding-right: 40px;
}

.logoimgmobile {
   /* position: absolute; */
   width: 42px;
   /* padding-top: 6vh; */
   padding-left: 5vw;
   position: relative;
   z-index: 12;
}

.burger {
   position: absolute;
   display: inline-block;
   /* padding: 0 5px 5px 5px; */
   padding-top: 20px;
   width: 30px;
   height: 25px;
   /* margin-top: 20px; */
   margin-left: -18px;
   right: 10%;
   z-index: 12;
}

.bread {
   left: 50% - 13px;
   background: var(--green);
   display: block;
   width: 30px;
   height: 1px;
   margin-bottom: 5px;
   position: relative;
}

#mobilenav {
   position: absolute;
   display: none;
   top:0;
   left:0;
   height: 100%;
   width: 100%;
   padding: 0;
}

#mobilemain {
   padding-top: 6vh;
   position: absolute;
   width: 100%;
}

#mobilepad {
   position: relative;
   padding-top: 10vh;
   background: #050505;
   height: 480px;

   transform-origin: 0% 0%;
   transform: translate(0, -100%);
   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.mobilemenu {
   padding: 0;
   padding-top: 4vh;
   /* z-index: 8; */
   /* justify-content: center; */
}

.mobilenavbutton {
   text-align: center;
   font-size: 17px;
   padding: 20px 0;
   display: block;
}

.emailnotif {
   font-family: 'Inconsolata', sans-serif;
   font-size: 14px;
   color: var(--offWhite);
   margin-top: 70px;
   margin-left: -80px;
   width: 200px !important;
   /* transition: opacity 1s ease-in-out; */
   opacity: 0;
}

@media only screen and (max-width: 850px) {
   #mainnav {
      display: none;
   }

   #mobilenav {
      display: block;
   }

   .nav {
      padding: 0;
   }

   #portfolio {
      top: 14vh;
      padding: 120px 0 0 0 !important;
   }

   #textContainerHeader {
      /* top: 20vh; */
      padding-top: 20vh !important;
   }

   #landingintro {
      top: calc(80vh/2) !important;
   }
}


</style>