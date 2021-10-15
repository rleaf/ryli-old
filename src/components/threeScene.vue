<template>
   <keep-alive>
      <transition name="fade">
         <canvas class="threeScene"></canvas>
      </transition>
   </keep-alive>
</template>

<script>
import threeScene from '../assets/js/threeScene.js'
// import Experience from '../assets/js/mainScene'

export default {
   name: 'threeScene',
   components: {
      
      },
   mounted() {
      threeScene.init()
      // new Experience()
   }
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .6s;
}

.fade-enter-active {
  transition-delay: .6s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
.threeScene {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    z-index: 0;
}
</style>