<template>
  <div class="themeSwitch">
     <p>toads</p>
     <button class="themeButton" @click="changeTheme()">Change Theme</button>
  </div>
</template>

<script>
export default {

   data() {
      return{

      }
   },
   
   methods: {
      changeTheme() {
         let text = document.querySelectorAll('p')
         let a = document.querySelectorAll('a')
         let bsubHeader = document.querySelectorAll('#blogSubHeader')
         let body = document.querySelector('html')
      
         body.style.backgroundColor = '#e4e4e4'
         console.log(body);

         text.forEach((text) => {
            text.style.color = 'black'
         })

         a.forEach((a) => {
            a.style.color = 'black'
         })

         // bsubHeader.style.color = 'black'

         bsubHeader.forEach((x) => {
            x.style.color = 'black'
         })
         
         console.log(text[0]);
         // text.style.color = 'black'
      }
   }
}
</script>

<style>
   .ok {
      color: #e4e4e4
   }
   .themeSwitch {
      z-index: 10;
      position: absolute;
      top: 0;
      right: 30vw;
      width: 400px;
   }
</style>