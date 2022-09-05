<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'sign'}">
         <div class="imagehover">
            <p>Hand Gestures</p>
            <div id="subtext">
               <p>Illustration</p>
            </div>
            <div id="covertext">
               <!-- <p>4/2/2020</p> -->
            </div>
         </div>
         <div id="signTween" class="imagePreviewHover">
            <img src="../../assets/design/signlanguage/sign_cover.jpg" class="portimg">
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