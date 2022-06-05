<template>
  <div id="landing">
     <!-- <backdrop /> -->
     <div class="testo">

     <!-- <NavBar /> -->
         <div id="textContainerHeader">
         </div>
      <!-- <div id="textContainerBody" style="font-size: 16px;"> -->
         <div id="curriculumBody">
               <div id="curriculumHeader">
                  <u style="font-size: 18px;">About</u>
               </div>
               <!-- <sharks /> -->
               <p>
                  <curriculumAbout/>
               </p>
         </div>
         <div id="curriculumBody">
            <u style="font-size: 18px;">Education</u>
            <p>Rider University 2016-2020 <br>
            Bachelor of Arts: Graphic Design</p>
            <p></p>
         </div>
      <div id="curriculumStructure">
         <div id="curriculumBody">
            <div>
               <div id="curriculumHeader">
                  <u style="font-size: 18px;">Skills</u>
               </div>
               <div  style="padding-bottom: 0;">
               <i style="color: var(--white); font-size: 14px">* Full CV available upon request</i>
               </div>
               <!-- <li>Bachelor of Arts in Graphic Design & Minor in Web Design</li>
               <li>Branding / UI & UX / Photography / Development</li> -->
               <ul class="curriculumul" style="list-style-type: none;">
                  <li><i>Design:</i></li>
                     <ul>
                        <li>Adobe CC (PhotoShop, Illustrator, After Effects, Premiere, InDesign)</li>
                        <li>Figma</li>
                        <li>HTML & CSS</li>
                     </ul>
                     <br>
                  <li><i>Development:</i></li>
                     <ul>
                        <li>Python (PyTorch, Pandas, NumPy)</li>
                        <li>JavaScript (Vue, Node.js, Three.js, GSAP)</li>
                        <li>GLSL Shaders</li>
                     </ul>
                     <!-- <li><i>MS Office</i></li>
                        <ul>
                           <ul>
                              <li>Word</li>
                              <li>Power Point</li>
                              <li>Excel</li>
                              <li>Access</li>
                           </ul>
                        </ul> -->
                     <!-- <li><i>HTML, CSS</i></li>
                     <li><i>JavaScript</i></li>
                     <ul>
                        <li style="list-style-type: none; font-size: 14px;"><i>Have worked with: </i></li>
                        <ul>
                           <li>Vue</li>
                           <li>Node</li>
                           <li>Webpack</li>
                           <li>Three & WebGL / GLSL</li>
                           <li>GSAP</li>
                           <li>jQuery</li>
                           </ul>
                        </ul>

                     <li><i>Python</i></li>
                        <ul>
                           <li style="list-style-type: none; font-size: 14px;"><i>Have worked with: </i></li>
                        <ul>
                           <li>PyTorch</li>
                           <li>Pandas</li>
                           <li>Scikit-learn</li>
                           <li>NumPy</li>
                        </ul>
                        </ul> -->
                  </ul>
            </div>
         </div>

      </div>
     </div>
  </div>
</template>

<script>
// import NavBar from '../components/nav.vue'
// // import backdrop from '../components/backdrop.vue'
import curriculumAbout from '../components/curriculumAbout.vue'
import threeScene from '../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   name: 'curriculum',
   components: {
      // NavBar,
      // backdrop,
      curriculumAbout,
      // sharks
   },
   mounted() {
      // threeScene.loadPageScene()
      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, delay: 1.5, duration: 1.5})

      if(threeScene.cache == 'mainScene') {
         return
      } else {
         
         gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: "auto", onComplete:() => {
         threeScene.destroyMesh()
         threeScene.scene.add(threeScene.sphere,threeScene.plane)
         }})

         gsap.fromTo(threeScene.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})
         
         threeScene.cache = 'mainScene'
      }
   }
}
</script>

<style scoped>


.curriculumul ul {
   list-style-type: disc;
}

</style>