<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'barnegat'}">
         <div class="imagehover">
            <p>barnegat light</p>
            <div id="subtext">
               <p>photography</p>
            </div>
            <div id="covertext">
               <!-- <p>01/20/19</p> -->
            </div>
         </div>
         <div id="barnegatTween" class="imagePreviewHover">
            <img src="../../assets/design/barnegat/barnegat_cover.webp" class="portimg">
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