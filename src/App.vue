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
  },
  watch: {
    $route() {
      document.body.style.overflowY = "hidden";
    }
  },
  updated() {
    setTimeout(function () {
        document.body.style.overflowY = "auto";
    }, 625);
  },
}
</script>

<style>


.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .6s;
  /* overflow: auto; */
}

.fade-enter-active {
  transition-delay: .6s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>