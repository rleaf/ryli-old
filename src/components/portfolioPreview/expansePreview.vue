<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'expanse'}">
         <div class="imagehover">
            <p>expanse</p>
            <div id="subtext">
               <p>2020</p>
               <p>typography</p>
            </div>
            <div id="covertext">
               <!-- <p>10/9/2019</p> -->
            </div>
         </div>
         <div id="expanseTween" class="imagePreviewHover">
            <img src="../../assets/design/expanse/expanse_cover.webp" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>

export default {
   data() {
      return {

      }
   },
}
</script>

<style>

</style>