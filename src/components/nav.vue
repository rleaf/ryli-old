<template>
   <div class="nav">
         <div id="mainnav">
            <router-link  :to="{ name: 'home' }" class="underline">
               <img class="logoimg" src="../assets/logo.svg" alt="">
               <!-- <p class="name">RL</p> -->
            </router-link>
            <ul id='bar'>
               <router-link  :to="{ name: 'design'}" class="underline">
                  <li>Design</li>
               </router-link>
               <router-link :to="{ name: 'curriculumvitae'}" class="underline">
                  <li>About / CV</li>
               </router-link>
               <!-- <router-link to='' class="underline">
                  <span @click="emailnotif">
                     <li>Contact</li>
                     <input value="ryanurquhartlin@gmail.com" class="email" style="opacity: 0; visibility: 0; z-index: -999; position: absolute;">
                     <span class="emailnotif" style="position: absolute; overflow-wrap: normal;">Email copied to clipboard!</span>
                  </span>
               </router-link> -->
               <router-link :to="{ name: 'blog'}" class="underline">
                  <li>Blog</li>
               </router-link>
               <router-link :to="{ name: 'food'}" class="underline">
                  <li>Food</li>
               </router-link>
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
                     <img @click="isActive = true" class="logoimgmobile" src="../assets/logo.svg" alt="">
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
                     <!-- <span @click="emailnotif" class="mobilenavbutton" style="cursor: pointer;">
                        <li>Copy email to clipboard</li>
                     </span> -->
                     <router-link :to="{ name: 'blog'}" class="mobilenavbutton">
                        <li>Blog</li>
                     </router-link>
                     <router-link :to="{ name: 'food'}" class="mobilenavbutton">
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
         let menu = document.querySelector('#mobilepad')
         let bread = document.getElementsByClassName('bread')

         // Easier way to understand. Group style changes under classes and then append classes when desired
         this.isActive ?
            (menu.style.transform = 'translate(0, -100%)') &
            bread[0].classList.remove('topbun') &
            bread[1].classList.remove('meet') &
            bread[2].classList.remove('botbun') :
            (menu.style.transform = 'none') &
            bread[0].classList.add('topbun') &
            bread[1].classList.add('meet') &
            bread[2].classList.add('botbun')
         
            // window.addEventListener('click', this.isActive = true)
      },

      // Remove themeswitch class upon route change
      // Do it here because can use $route() {}
      $route(to, from) {

         // Prohibit theme transition when clicking on section header in a read
         if(!(to.path == from.path)){
            let nav = document.querySelector('.nav')
            // Grab mainnav & mobilenav img
            let navimg = document.querySelectorAll('.nav img')

            if (nav.classList.contains('day')) {
               // li elements
               nav.classList.toggle('day')
               // img element
               navimg.forEach((toads) => {
                  toads.classList.toggle('daymodeimg')
               })
            }
         }
      }
   },

   methods: {

      hide() {
         this.isActive = !this.isActive
      },

      emailnotif() {

         const x = document.getElementsByClassName("emailnotif")[0];
         const y = document.getElementsByClassName("email")[0];

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

<style scoped>
.nav {
   font-size: 16px;
   position: relative;
   padding: 6vh 3vw 0 3vw;
   z-index: 10;
}

.logoimg {
   width: 60px;
   float: left;
   margin-right: 40px;
   filter: invert(100%) sepia(0%) saturate(1922%) hue-rotate(236deg) brightness(89%) contrast(94%);
   margin-top: 16px;
   /* transition: 0.3s cubic-bezier(0.77,0.2,0.05,1.0); */
}

.name {
   font-family: var(--displayFont);
   font-size: 40px;
   float: left;
   padding-right: 40px;
   /* margin-top: 32px; */
   margin: 0;
   line-height: 1;
}

.logoimgmobile {
   /* position: absolute; */
   width: 60px;
   filter: invert(100%) sepia(0%) saturate(1922%) hue-rotate(236deg) brightness(89%) contrast(94%);
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

.burger span:first-child {
   transform-origin: left center;
}

.burger span:last-child {
   transform-origin: left center;
}

.topbun {
   transform: translate(4px, -3px) rotate(45deg)
}

.meet {
   transform: scale(0.2);
   opacity: 0;
}

.botbun {
   transform: translate(4px, 3px) rotate(-45deg);
}

.bread {
   left: 50% - 13px;
   background: var(--white);
   display: block;
   width: 26px;
   height: 1px;
   margin-bottom: 5px;
   position: relative;

   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
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
   background: var(--mobilePad);
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

/* .daymodeimg {
   filter: invert(1);
} */

</style>