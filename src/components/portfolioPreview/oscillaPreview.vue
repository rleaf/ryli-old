<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'oscilla'}">
         <div class="imagehover">
            <p>Oscilla</p>
            <div id="subtext">
               <p>typography</p>
            </div>
            <div id="covertext">
               <!-- <p>01/20/19</p> -->
            </div>
         </div>
         <div id="barnegatTween" class="imagePreviewHover">
            <img src="../../assets/design/oscilla/oscillaCover.webp" class="portimg">
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