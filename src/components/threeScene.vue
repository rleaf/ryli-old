<template>
   <keep-alive>
      <transition name="fade">
         <canvas v-show="blogRender" class="webgl"></canvas>
      </transition>

   </keep-alive>
</template>

<script>
// import threeScene from '../assets/js/threeScene.js'

import Experience from '../assets/js/Experience/Experience.js'
import gsap from 'gsap'


export default {
   // name: 'threeScene',
   components: {
      
   },
   data() {
      return {
         blogRender: null,
         experience: null,
         routeCache: 'hero'
      }
   },

   watch: {
      $route(to, from) {
         
         // Destroy shaders on blog pages
         if (to.path.slice(0, 5) == '/blog' && to.path.length > 5) {
            setTimeout(() => {
               this.experience.world.removeHero()
               this.experience.world.removeDesign()
            }, 600)
         }
         if (from.path.slice(0, 5) == '/blog' && from.path.length > 5) {
            this.heroScene()
         }

         // Change shaders depending on design or hero
         switch (to.name) {
            case 'oscilla':
               this.designScene()
               setTimeout(() => {
                  this.experience.scene.add(this.experience.world.image.oscillaMesh)
               }, 600)
               break;

            case 'sign':
               this.designScene()
               setTimeout(() => {
                  this.experience.scene.add(this.experience.world.image.signMesh)
               }, 600)
               break;

            case 'spdmagazine':
               this.designScene()
               setTimeout(() => {
                  this.experience.scene.add(this.experience.world.image.spdMesh)
               }, 600)
               break;

            case 'spotify':
               this.designScene()
               setTimeout(() => {
                  this.experience.scene.add(this.experience.world.image.spotifyMesh)
               }, 600)
               break;

            case 'valiant':
               this.designScene()
               setTimeout(() => {
                  this.experience.scene.add(this.experience.world.image.valiantMesh)
               }, 600)
               break;

            case 'dropbox':
               this.designScene()
               setTimeout(() => {
                  this.experience.scene.add(this.experience.world.image.dropboxMesh)
               }, 600)
               break;

            case 'barnegat':
               this.designScene()
               setTimeout(() => {
                  this.experience.scene.add(this.experience.world.image.barnegatMesh)
               }, 600)
               break;

            case 'expanse':
               this.designScene()
               setTimeout(() => {
                  this.experience.scene.add(this.experience.world.image.expanseMesh)
               }, 600)
               break;
            
            default:
               if (this.routeCache == 'design') {
                  this.heroScene()
               }
               break;
         }

         let x = to.path.split('/')

         x[1] == 'blog' && x.length > 2 ? (this.blogRender = false) : (this.blogRender = true)

      }  
   },

   methods: {

      designScene() {
         gsap.to(this.experience.world.groupOpacity, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
            this.experience.world.removeHero()
         }})
         gsap.to(this.experience.world.groupOpacity, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})
         // gsap.fromTo(this.experience.world.groupOpacity, {sphere: 1.0, plane: 1.0}, {sphere: 0.0, plane: 0.0, duration: 0.6, overwrite: "auto", onComplete:() => {
         //    this.experience.world.removeHero()
         // }})
         // gsap.fromTo(this.experience.world.groupOpacity, {designSceneOpacity: 0.0}, {designSceneOpacity: 0.4, delay: 0.6, duration: 1, overwrite: "auto"})

         this.routeCache = 'design'
      },

      heroScene() {
         gsap.to(this.experience.world.groupOpacity, {designSceneOpacity: 0, duration: .6, overwrite: true, onComplete: () => {
            this.experience.world.removeDesign()
            this.experience.world.scene.add(this.experience.world.sphere.mesh, this.experience.world.plane.mesh)
         }})

         gsap.to(this.experience.world.groupOpacity, {sphere: 1.0, plane: 1.0, delay: 0.6, duration: 1, overwrite: 'auto'})
         // gsap.fromTo(this.experience.world.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete:() => {
         // }})
         // gsap.fromTo(this.experience.world.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})

         this.routeCache = 'hero'
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

      this.experience = new Experience(document.querySelector('canvas.webgl'))
      // this.heroScene()
      // Set to null first to prevent "blinking" render when opening a blog directly.
      this.blogRender = true

      // setTimeout(() => {
      //    threeScene.init()
      // })
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
.webgl {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    z-index: 0;
}
</style>