<template>
  <div class="themeSwitch">
     <p>toads</p>
     <button class="themeButton" @click="changeTheme()">Change Theme</button>
  </div>
</template>

<script>
export default {
   methods: {
      changeTheme() {
         let text = document.querySelectorAll('p')
         let a = document.querySelectorAll('a')
         let bsubHeader = document.querySelectorAll('#blogSubHeader')
         console.log(bsubHeader);

         text.forEach((text) => {
            text.style.color = 'red'
         })

         a.forEach((a) => {
            a.style.color = 'red'
         })

         // bsubHeader.style.color = 'red'

         bsubHeader.forEach((x) => {
            x.style.color = 'red'
         })
         
         console.log(text[0]);
         // text.style.color = 'red'
      }
   }
}
</script>

<style>
   .themeSwitch {
      z-index: 10;
      position: absolute;
      top: 0;
      right: 30vw;
      width: 400px;
   }
</style>