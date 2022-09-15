<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'dropbox'}">
         <div class="imagehover">
            <p>Dropbox Redesign</p>
            <div id="subtext">
               <p>2019</p>
               <p>Web Design / Dev</p>
            </div>
            <div id="covertext">
               <!-- <p>10/5/2018</p> -->
            </div>
         </div>
         <div id="dropboxTween" class="imagePreviewHover">
            <img src="../../assets/design/dropbox/dropbox_cover.webp" class="portimg">
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