<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: 'portfoliotest'}">
         <div @mouseover="cLog" class="imagehover">
            <p>The quick brown fox</p>
            <div id="subtext">
               <p>fox</p>
            </div>
            <div id="covertext">
               <!-- <p>01/04/20</p> -->
            </div>
         </div>
         <div class="imagePreviewHover">
            <img src="../../assets/design/test.jpg" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
export default {
   methods: {
      cLog: function() {
         console.log('toads');
         
      }
   }
}
</script>

<style>

</style>