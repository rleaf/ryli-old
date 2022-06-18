<template>
   <keep-alive> 

  <div class="themeSwitch">
     <!-- <button class="themeButton" @click="changeTheme()">Change Theme</button> -->
     <span class="themeButton" @click="changeTheme()">
      <div class="themeIcon"></div>
     </span>
     <span class="themeButton" @click="changeType()">{{ type }}</span>
     <span class="themeButton" @click="changeSize()">{{ size }}</span>
  </div>
   </keep-alive>
</template>

<script>
import { gsap } from 'gsap'

export default {

   data() {
      return{
         themeBool: false,
         theme: 'Night',

         typeBool: false,
         type: 'Serif',

         sizeBool: false,
         size: '15px'
      }
   },

   // watch: {
   //    theme() {
   //       console.log(this.theme);
   //       this.changeTheme()
         
   //       this.theme ? this.mode = 'Day': this.mode = 'Night'
   //    },

   //    // This doesn't work because componenent is being destroyed on route change.
   //    // $route(to) {
   //    //    setTimeout(() => {
   //    //       console.log('themeSwitch', to)
   //    //    })
   //    // },
   // },

   mounted() {
      window.addEventListener('scroll', this.themeRender)
   },

   beforeDestroy() {
      window.removeEventListener('scroll', this.themeRender)
   },

   methods: {
      themeRender() {
         if(document.body.scrollTop > 150 ||  document.documentElement.scrollTop > 150) {
            gsap.to('.themeSwitch', {duration: .25, display: 'flex', opacity: 1, top: 20})
            // buttonToTop.style.display = "block"
         } else {
            gsap.to('.themeSwitch', {duration: .25, display: 'none', opacity: 0, top: 0})
            // buttonToTop.style.display = 'none'
         }
      },

      changeTheme() {

         let landing = document.querySelector('#landing')
         let themeIcon = document.querySelector('.themeIcon')

         landing.classList.toggle('day')

         let nav = document.querySelectorAll('.nav')
         let img = document.querySelectorAll('img')

         nav.forEach((li) => {
            li.classList.toggle('day')
         })

         img.forEach((img) => {
            if (!img.classList.contains('noInvert')) {
               img.classList.toggle('daymodeimg')
            }
         })

         this.themeBool = !this.themeBool
         this.themeBool ? this.theme = 'Day': this.theme = 'Night'
         // this.themeBool ? themeIcon.style.maskImage = `url('../assets/moon2.svg')` : themeIcon.style.maskImage = `url('../assets/sun.svg')`
         themeIcon.classList.toggle('dayIcon')
      },

      changeType() {

         let landing = document.querySelector('#landing')
         landing.classList.toggle('serif')

         this.typeBool = !this.typeBool
         this.typeBool ? this.type = 'Sans Serif': this.type = 'Serif'
      },

      changeSize() {

         let landing = document.querySelector('#landing')
         landing.classList.toggle('typeSize')

         this.sizeBool = !this.sizeBool
         this.sizeBool ? this.size = '17px': this.size = '15px'

      }
   }
}
</script>

<style scoped>

   

   .themeSwitch {
      display: none;
      align-items: center;
      justify-content: center;
      border: 1px solid;
      border-color: var(--shadeWhite2);
      background: var(--primaryDark);
      position: fixed;
      /* line-height: 34px; */
      height: 36px;
      padding-right: 5px;
      right: 30px;
      z-index: 10;

   }

   .themeSwitch > span {
      border: none;
      /* height: 15px; */
      box-shadow: -1px 0 var(--shadeWhite2), 0 1px var(--shadeWhite2), 1px 0 var(--shadeWhite2), 0 -1px var(--shadeWhite2);
      font-family: 'Inconsolata', sans-serif;
      font-size: 14px;
      outline: none;
      color: var(--white);
      margin-left: 5px;
      cursor: pointer;
   }

   .themeSwitch > span:not(:first-child) {
   /* .themeSwitch > span { */
      padding: 5px 10px 5px 10px;
      /* background-color: var(--primaryDark); */
   }

   .themeSwitch > span:first-child {
      padding: 0;
   }

   .themeIcon {
      background-color: var(--primaryDark);
      width: 25px;
      height: 25px;
      background-color: var(--white);
      mask-image: url('../assets/moon.svg');
      mask-position: center;
      mask-size: 70%;
      mask-repeat: no-repeat;
   }

   .dayIcon {
      mask-image: url('../assets/sun.svg');
   }
   
   .daymodeButton {
   color: black !important;
   /* border-color: black !important; */
   background-color: #e0e0e0 !important;
   box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black !important;
   /* transition: 0.3s cubic-bezier(0.77,0.2,0.05,1.0); */
}
   
</style>