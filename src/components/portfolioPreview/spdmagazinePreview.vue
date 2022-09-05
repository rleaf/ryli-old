<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'spdmagazine'}">
         <div class="imagehover">
            <p>Magazine Spread</p>
            <div id="subtext">
               <p>Illustration / Print / Layout</p>
            </div>
            <div id="covertext">
               <!-- <p>2/24/2020</p> -->
            </div>
         </div>
         <div id="spdTween" class="imagePreviewHover">
            <img src="../../assets/design/spdmagazine/magazine_cover.webp" class="portimg">
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