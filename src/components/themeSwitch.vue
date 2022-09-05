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

   mounted() {

      window.addEventListener('scroll', this.themeRender)

      if (localStorage.theme) {
         // ...has to be a better way...localStorage only stores strings...
         localStorage.theme == 'true' ? this.themeBool = true : this.themeBool = false
      }
      this.setTheme(this.themeBool)
      
      if (localStorage.getItem('type') == 'Sans Serif') {
         this.typeBool = true
         this.type = 'Sans Serif'

         if (document.querySelectorAll('#landing').length == 2) {
            document.querySelectorAll('#landing')[1].classList.toggle('serif')
         } else {
            document.querySelector('#landing').classList.toggle('serif')
         }
      }

      if (localStorage.getItem('size') == '17px') {
         this.sizeBool = true
         this.size = '17px'

         if (document.querySelectorAll('#landing').length == 2) {
            document.querySelectorAll('#landing')[1].classList.toggle('typeSize')
         } else {
            document.querySelector('#landing').classList.toggle('typeSize')
         }
      }
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

         this.themeBool = !this.themeBool
         localStorage.setItem('theme', this.themeBool)
         this.setTheme(this.themeBool)
      },

      setTheme(bool) {

         let landing

         if (document.querySelectorAll('#landing').length == 2) {
            landing = document.querySelectorAll('#landing')[1]
         } else {
            landing = document.querySelector('#landing')
         }

         let themeIcon = document.querySelector('.themeIcon')
         let nav = document.querySelectorAll('.nav')
         let img = document.querySelectorAll('img')

         if (bool) {
            landing.classList.add('day')
            themeIcon.classList.add('dayIcon')
   
            nav.forEach((li) => {
               li.classList.add('day')
            })
   
            img.forEach((img) => {
               if (!img.classList.contains('noInvert')) {
                  img.classList.add('daymodeimg')
               }
            })
            
         } else {
            landing.classList.remove('day')
            themeIcon.classList.remove('dayIcon')
   
            nav.forEach((li) => {
               li.classList.remove('day')
            })
   
            img.forEach((img) => {
               if (!img.classList.contains('noInvert')) {
                  img.classList.remove('daymodeimg')
               }
            })
         }
      },

      changeType() {

         let landing = document.querySelector('#landing')
         landing.classList.toggle('serif')

         this.typeBool = !this.typeBool
         this.typeBool ? this.type = 'Sans Serif': this.type = 'Serif'

         localStorage.setItem('type', this.type)
      },

      changeSize() {

         let landing = document.querySelector('#landing')
         landing.classList.toggle('typeSize')

         this.sizeBool = !this.sizeBool
         this.sizeBool ? this.size = '17px': this.size = '15px'

         localStorage.setItem('size', this.size)
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
      mask-size: 60%;
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