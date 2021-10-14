<template>
   <div class="backdropContainer">
      <div class="backdrop"></div>
      <div class="imageBackdrop"></div>

   </div>
</template>

<script>
export default {

}
</script>

<style>
   .backdrop {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      position: fixed;
      background: #0e0e0e;
      opacity: 1;
      z-index: 2;
      }

   .imageBackdrop {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      position: fixed;
      background: #0e0e0e;
      background: url('../assets/design/signlanguage/background_sign3.jpg');
      opacity: 0;
      z-index: 1;

   }
</style>