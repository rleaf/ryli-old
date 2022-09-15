<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'spotifyDesk'}">
         <div class="imagehover">
            <p>Spotify Desktop</p>
            <div id="subtext">
               <p>2022</p>
               <p>UI / UX</p>
            </div>
            <!-- <div id="covertext">
               <p>2022</p>
            </div> -->
         </div>
         <div id="barnegatTween" class="imagePreviewHover">
            <img src="../../assets/design/spotifyDesktop/spot2.webp" class="portimg">
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

<style scoped>

</style>