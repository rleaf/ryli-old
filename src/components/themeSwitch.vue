<template>
   <keep-alive> 

  <div class="themeSwitch">
     <!-- <button class="themeButton" @click="changeTheme()">Change Theme</button> -->
     <button class="themeButton" @click="changeTheme()">{{ theme }}</button>
     <button class="themeButton" @click="changeType()">{{ type }}</button>
     <button class="themeButton" @click="changeSize()">{{ size }}</button>
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

   watch: {
      theme() {
         // console.log(this.theme);
         // this.changeTheme()
         
         // this.theme ? this.mode = 'Day': this.mode = 'Night'
      },

      // This doesn't work because componenent is being destroyed on route change.
      // $route(to) {
      //    setTimeout(() => {
      //       console.log('themeSwitch', to)
      //    })
      // },
   },

   mounted() {
      window.addEventListener('scroll', this.themeRender)
   },

   beforeDestroy() {
      window.removeEventListener('scroll', this.themeRender)
   },

   methods: {
      themeRender() {
         if(document.body.scrollTop > 150 ||  document.documentElement.scrollTop > 150) {
            gsap.to('.themeSwitch', {duration: .25, display: 'block', opacity: 1, top: 20})
            // buttonToTop.style.display = "block"
         } else {
            gsap.to('.themeSwitch', {duration: .25, display: 'none', opacity: 0, top: 0})
            // buttonToTop.style.display = 'none'
         }
      },

      changeTheme() {

         let landing = document.querySelector('#landing')
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
         this.sizeBool ? this.size = '16px': this.size = '15px'

      }
   }
}
</script>

<style scoped>

   .themeSwitch {
      display: none;
      border: 1px solid;
      border-color: var(--shadeWhite2);
      background: var(--primaryDark);
      position: fixed;
      padding: 5px 5px 5px 0;
      /* width: 5vw; */
      text-align: center;
      right: 30px;
      /* width: 90px; */
      /* top: 20px; */
      z-index: 10;
   }
   .themeSwitch > button {
      /* display: none; */
      border: none;
      box-shadow: -1px 0 var(--shadeWhite2), 0 1px var(--shadeWhite2), 1px 0 var(--shadeWhite2), 0 -1px var(--shadeWhite2);
      outline: none;
      background-color: var(--primaryDark); 
      color: var(--white);
      padding: 5px 10px;
      margin-left: 5px;
      /* width: 400px; */
   }
   
   .daymodeButton {
   color: black !important;
   /* border-color: black !important; */
   background-color: #e0e0e0 !important;
   box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black !important;
   /* transition: 0.3s cubic-bezier(0.77,0.2,0.05,1.0); */
}

</style>