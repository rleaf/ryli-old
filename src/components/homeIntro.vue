<template>
<div id="syntax">
   <div id="landingintro">
      <span class="introword">Ryan</span>
      <span class="introword">Lin</span>
      <br>
      <div id="subda">
         <span class="subwordhomeIntro">Design & Development</span>
      </div>
   </div>
</div>
</template>

<script>
import threeScene from '../assets/js/threeScene.js'
import { gsap } from "gsap";

export default {
   
   metaInfo: {
      meta: [
         { 
            name: 'description',
            content: 'Personal site of Ryan Lin - learn more about my hobbies.',
         },
         {
            property: 'og:description',
            content: 'Personal site of Ryan Lin - learn more about my hobbies.',
         }
      ]
   },
   watch: {
      $route(to) {
         console.log('asdf', to);
      }
   },
   mounted() {

      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, delay: 1.5, duration: 1.5})
      
      if(threeScene.cache == 'mainScene') {
         return
      } else {

         gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete:() => {
         threeScene.destroyMesh()
         threeScene.scene.add(threeScene.sphere,threeScene.plane)
         }})

         gsap.fromTo(threeScene.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})
         
         threeScene.cache = 'mainScene'
      }
      
      gsap.from('.introword', {duration: 7, opacity: 0, delay: .8});
      gsap.from('.subwordhomeIntro', {duration: 7, opacity: 0, delay: 3}) 
   },
}
</script>

<style scoped>


#landingintro {
   color: var(--white);
   font-size: 46px;
   padding-bottom: 0px;
   height: 100px;
   text-align: center;
   line-height: normal;
   top: calc(60vh/ 2);
   /* margin-top: 18vh; */
   position: relative;
   z-index: 1;
}

#subda {
   padding-top: 14px;
   font-size: 18px;
}

.introword, .subwordhomeIntro {
   display: inline-block;
   white-space: nowrap;
   visibility: inherit;
   padding: 0 4px;
}

</style>