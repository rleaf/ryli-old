<template>
   <keep-alive>
      <transition name="fade">
      <!-- <div  class="threeshow"> -->
         <canvas v-show="blogRender" class="webgl"></canvas>
      <!-- </div> -->
      </transition>

   </keep-alive>
</template>

<script>
import threeScene from '../assets/js/threeScene.js'

// import Experience from '../assets/js/Experience/Experience.js'
// import config from '../assets/js/Experience/RyliConfig.js'


export default {
   // name: 'threeScene',
   components: {
      
   },
   data() {
      return {
         blogRender: null
      }
   },

   watch: {
      $route(to) {
         let x = to.path.split('/')

         x[1] == 'blog' && x.length > 2 ? (this.blogRender = false) : (this.blogRender = true)
         // threeScene.init()
         // console.log('three', to);
      }  
   },
   
   mounted() {
      // Stop initial three render if click straight to a blog post
      // Break scene if path = /blog/
      // console.log(this.$route.path.slice(0,6));
      // let blogPath = this.$route.path.slice(0,6)
      // if (blogPath != '/blog/') {
      //    console.log(blogPath);
      //    console.log('rendering...');
      // }

      // config.imageCache = 'oscilla'
      // new Experience(document.querySelector('canvas.webgl'))

      // Set to null first to prevent "blinking" render when opening a blog directly.
      this.blogRender = true
      setTimeout(() => {
         threeScene.init()
      })
   }
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .6s;
}

.alsdk {
   color: #1a1a1a;
   color: #0e0e0e;
   color: rgb(26, 26, 26);
}

.fade-enter-active {
  transition-delay: .6s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
.webgl {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    z-index: 0;
}
</style>