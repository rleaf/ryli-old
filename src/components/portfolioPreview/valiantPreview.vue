<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'valiant'}">
         <div class="imagehover">
            <p>Valiant</p>
            <div id="subtext">
               <p>2020</p>
               <p>Branding & Web Design / Dev</p>
            </div>
            <div id="covertext">
               <!-- <p>12/8/2019</p> -->
            </div>
         </div>
         <div id="valiantTween" class="imagePreviewHover">
            <img src="../../assets/design/valiant/valiant_cover.webp" class="portimg">
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