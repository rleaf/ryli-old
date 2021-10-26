<template>
  <div id="app">
    <NavBar />
    <transition name="fade">
      <threeScene />
    </transition>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import threeScene from '../src/components/threeScene.vue'
import NavBar from '../src/components/nav.vue'

export default {
  name: 'app',
  components: {
    threeScene,
    NavBar
  }
}
</script>

<style>

/* #app {
  width: 100vw;
} */

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
</style>