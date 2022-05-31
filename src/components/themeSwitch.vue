<template>
   <keep-alive> 

  <div class="themeSwitch">
     <!-- <button class="themeButton" @click="changeTheme()">Change Theme</button> -->
     <button class="themeButton" @click="changeTheme()">Change Theme</button>
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
         console.log('click');

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

      }
   }
}
</script>

<style scoped>

   .themeSwitch > button {
      /* display: none; */
      z-index: 10;
      position: fixed;
      border: none;
      box-shadow: -1px 0 var(--shadeWhite2), 0 1px var(--shadeWhite2), 1px 0 var(--shadeWhite2), 0 -1px var(--shadeWhite2);
      outline: none;
      background-color: var(--primaryDark); 
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