<template>
   <keep-alive>
      <transition name="fade">
         <canvas v-if="blogRender" class="threeScene"></canvas>
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
   data() {
      return {
         blogRender: false
      }
   },
   mounted() {
      // Break scene if path = /blog/
      let blogPath = this.$route.path.slice(0,6)
      if (blogPath != '/blog/') {
         this.blogRender = true
         setTimeout(() => {
            threeScene.init()
         })
      }
      // Reference...
      // console.log(this.$route.name)
      // console.log('toad', this.$route.path)
      // console.log('asdfasdf', asdf)
      // console.log('toad', this.$router.currentRoute)
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