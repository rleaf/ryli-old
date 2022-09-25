<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" :to="{name: `${route}`}">
         <div class="imagehover">
            <p>{{ title }}</p>
            <div id="subtext">
               <p>{{ year }}</p>
               <p>{{ genre }}</p>
            </div>
            <!-- <div id="covertext">
               <p>2022</p>
            </div> -->
         </div>
         <div id="barnegatTween" class="imagePreviewHover">
            <img :src="require(`@/assets/design/${img}`)" class="portimg">
         </div>
      </router-link>
   </div>
</template>

<script>
export default {
   props: {
      title: String,
      year: String,
      genre: String,
      route: String,
      img: String
   },
   data() {
      return {

      }
   },
}
</script>

<style scoped>

</style>