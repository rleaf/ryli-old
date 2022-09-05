<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'spotify'}">
         <div class="imagehover">
            <p>Spotify</p>
            <div id="subtext">
               <p>UI / UX</p>
            </div>
            <div id="covertext">
               <!-- <p>11/12/2019</p> -->
            </div>
         </div>
         <div id="spotifyTween" class="imagePreviewHover">
            <img src="../../assets/design/spotify/spotify_cover.webp" class="portimg">
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