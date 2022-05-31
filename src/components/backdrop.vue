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
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: fixed;
      background: var(--primaryDark);
      opacity: 1;
      z-index: 2;
      /* transition: 0.3s cubic-bezier(0.77,0.2,0.05,1.0); */
      }

   .imageBackdrop {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: fixed;
      background: var(--primaryDark);
      opacity: 0;
      z-index: 1;
      /* transition: 1.5s; */
   }

   .daymode2 {
      background: var(--white);
      /* transition: 0.3s cubic-bezier(0.77,0.2,0.05,1.0); */
   }
</style>