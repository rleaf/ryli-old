<template>
  <div id="landing">
     <div class="testo">

     <!-- <NavBar /> -->
         <div id="textContainerHeader">
         </div>
      <!-- <div id="textContainerBody" style="font-size: 16px;"> -->
         <div id="curriculumBody">
            <div>
               <div id="curriculumHeader">
                  <u style="font-size: 18px;">About</u>
               </div>
               <!-- <sharks /> -->
               <p>
                  <curriculumAbout/>
               </p>
            </div>
         </div>
      <div id="curriculumStructure">
         <div id="curriculumBody">
            <div>
               <div id="curriculumHeader">
                  <u style="font-size: 18px;">Resume</u>
               </div>
               <div  style="padding-bottom: 0;">
               <i style="color: var(--white); font-size: 14px">* Full CV available upon request</i>
               </div>
               <ul style="list-style-type: square; margin-bottom: 100px;">
                  <li>Bachelor of Arts in Graphic Design & Minor in Web Design</li>
                  <li>Branding / UI & UX / Photography / Development / Data Science</li>
                  <p>Skills:</p>
                  <ul style="list-style-type: none;">
                     <li><i>Adobe CC</i></li>
                     <ul>
                        <ul>
                           <li>Photoshop</li>
                           <li>Illustrator</li>
                           <li>InDesign</li>
                           <li>After Effects</li>
                           <li>Premiere</li>
                        </ul>
                     </ul>
                     <li><i>MS Office</i></li>
                        <ul>
                           <ul>
                              <li>Word</li>
                              <li>Power Point</li>
                              <li>Excel</li>
                              <li>Access</li>
                           </ul>
                        </ul>
                     <li><i>HTML, CSS</i></li>
                     <li><i>JavaScript</i></li>
                     <ul>
                        <li style="list-style-type: none; font-size: 14px;"><i>Have worked with: </i></li>
                        <ul>
                           <li>jQuery</li>
                           <li>Vue</li>
                           <li>Three</li>
                           <li>GSAP</li>
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
                        </ul>
                  </ul>
               </ul>
            </div>
         </div>

      </div>
     </div>
  </div>
</template>

<script>
// import NavBar from '../components/nav.vue'
import curriculumAbout from '../components/curriculumAbout.vue'
import threeScene from '../assets/js/threeScene.js'
import gsap from 'gsap'

export default {
   name: 'curriculum',
   components: {
      // NavBar,
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

</style>