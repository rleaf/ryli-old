<template>
   <keep-alive> 

  <div class="themeSwitch">
     <!-- <button class="themeButton" @click="changeTheme()">Change Theme</button> -->
     <button class="themeButton" @click="theme = !theme">Change Theme</button>
  </div>
   </keep-alive>
</template>

<script>
export default {

   data() {
      return{
         theme: false
      }
   },

   watch: {
      theme() {
         // console.log(this.theme);
         this.changeTheme()
         console.log(this.$route);

      },

      // This doesn't work because componenent is being destroyed on route change.
      // $route(to) {
      //    setTimeout(() => {
      //       console.log('themeSwitch', to)
      //    })
      // },
   },

   methods: {
      changeTheme() {
         // console.log(this.theme);
         let blogtoc = document.querySelector('.blogtoc')
         let backdrop = document.querySelector('.backdrop')
         let toTop = document.querySelector('#toTopButton')
         let theme = document.querySelector('.themeButton')
         let p = document.querySelectorAll('p')
         let a = document.querySelectorAll('a')
         let navli = document.querySelectorAll('.nav li')
         let img = document.querySelectorAll('img')
         let span = document.querySelectorAll('.theme')
         let bSubHeader = document.querySelectorAll('#blogSubHeader')
         let codeblock = document.querySelectorAll('.codeblock')
         // console.log(navli);
      
         blogtoc.classList.toggle('daymodetoc')
         backdrop.classList.toggle('daymode2')
         toTop.classList.toggle('daymodeButton')
         theme.classList.toggle('daymodeButton')

         codeblock.forEach((cb) => {
            cb.classList.toggle('daymodecode')
         })

         p.forEach((p) => {
            p.classList.toggle('daymode')
         })

         bSubHeader.forEach((lol) => {
            lol.classList.toggle('daymode')
         })

         a.forEach((a) => {
            a.classList.toggle('daymode')
         })

         navli.forEach((li) => {
            li.classList.toggle('daymode')
         })

         img.forEach((img) => {
            img.classList.toggle('daymodeimg')
         })

         span.forEach((span) => {
            span.classList.toggle('daymodespan')
         })

      }
   }
}
</script>

<style scoped>
   .ok {
      color: #e4e4e4
   }

   .themeSwitch > button {
      /* display: none; */
      z-index: 10;
      position: fixed;
      border: none;
      box-shadow: -1px 0 var(--offWhite), 0 1px var(--offWhite), 1px 0 var(--offWhite), 0 -1px var(--offWhite);
      outline: none;
      background-color: #0e0e0e; 
      color: var(--white);
      padding: 5px 10px;
      right: 30px;
      top: 20px;
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