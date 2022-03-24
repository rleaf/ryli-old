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
      
      // gsap.fromTo('.introword', {opacity: 0}, {opacity: 1, duration: 7, delay: 0.8})
      gsap.from('.introword', {duration: 7, opacity: 0, delay: .8});
      gsap.from('.subwordhomeIntro', {duration: 7, opacity: 0, delay: 3})
      
      // for (let i = 0; i < x.length; i++) {
      //    // gsap.from(x[i], {duration: "random(3, 5)", y: 120});
      // }
   
      // gsap.from(y[0], {duration: 5, opacity: 0, delay: 4.5});
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
   margin-top: 18vh;
   position: relative;
}

#subda {
   padding-top: 14px;
   font-size: 18px;
}

@media screen and (max-height: 850px) {
   #landingintro {
      margin-top: 10vh;
   }
}

.introword, .subwordhomeIntro {
   display: inline-block;
   white-space: nowrap;
   visibility: inherit;
   padding: 0 4px;
}

</style>