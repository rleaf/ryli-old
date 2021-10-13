<template>
   <keep-alive>
      <canvas class="threeScene">

      </canvas>
   </keep-alive>
</template>

<script>
import threeScene from '../assets/js/threeScene.js'

export default {
   name: 'threeScene',
   components: {

   },
   mounted() {
      threeScene.mounted()
   }
}

</script>

<style scoped>

.threeScene {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    z-index: 0;
}
</style>