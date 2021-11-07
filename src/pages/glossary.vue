<template>
   <div id="landing">
   <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumStructure">
            <div id="curriculumBody">
               <div id="curriculumHeader">
                  <!-- <u style="font-size: 18px;">For reference</u> -->
                  <p style="font-size: 18px; margin: 0;">Searchable references: {{postList.length}}</p>
               </div>
               <p>
                  <i style="font-size: 14px;">Keeping notes</i>
               </p>
                  <input type="text" v-model="search" placeholder="Search..."/>
            </div>
         </div>
         <div id="glossarySkeletonFlex">
            <div class="glossaryWrapper" v-for="post in filteredList" :key="post.title">
                  <p style="white-space: pre-wrap;">
                     <u>{{ post.title }}</u>
                  </p>
                  <p style="white-space: pre-wrap;" v-if="post.body">
                     {{ post.body}}
                  </p>
                  <p style="white-space: pre-wrap;">
                     <vue-mathjax v-if="post.math" :formula='post.math'></vue-mathjax>
                     <prism-editor class="codeblock" v-if="post.code" v-model="post.code" :highlight="highlighter" :readonly="true"></prism-editor>
                  </p>
                  <!-- <img v-if="post.img" src='../assets/backprop.png' alt=""> -->
                  <img v-if="post.img" :src="post.img" alt="">
            </div>
         </div>
   </div>
</template>

<script>
import backdrop from '../components/backdrop.vue'
import threeScene from '../assets/js/threeScene.js'
import Post from '../assets/js/glossaryStruc.js'
import g from '../assets/json/glossary.json'
import { VueMathjax } from 'vue-mathjax'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-nord.css'
import gsap from 'gsap'
const backpropImg = require('../assets/backprop2.png')

export default {
   components: {
      'vue-mathjax': VueMathjax,
      PrismEditor,
      backdrop
   },

   data() {
      return {
         search: '',
         postList: [
               // title
               // body
               // math
               // code
               // img
               // keys

            new Post(
               g.svmLoss.title, 
               g.svmLoss.body,
               g.svmLoss.math,
               undefined,
               undefined,
               g.svmLoss.keys
            ),
            new Post(
               g.Pesto.title, 
               g.Pesto.body, 
               undefined,
               undefined,
               undefined,
               g.Pesto.keys
            ),
            new Post(
               g.Pizza.title,
               g.Pizza.body,
               undefined,
               undefined,
               undefined,
               g.Pizza.keys
            ),
            new Post(
               g.Print.title,
               g.Print.body,
               undefined,
               g.Print.code,
               undefined,
               g.Print.keys
            ),
            new Post(
               g.Cookies.title,
               g.Cookies.body,
               undefined,
               undefined,
               undefined,
               g.Cookies.keys
            ),
            new Post(
               g.Backprop.title,
               g.Backprop.body,
               undefined,
               undefined,
               backpropImg,
               g.Backprop.keys
            ),
         ]
      }
   },

   computed: {
      filteredList() {
         return this.postList.filter(post => {
            return post.keys.toLowerCase().includes(this.search.toLowerCase())
         })
      },
   },

   methods: {
      highlighter(code) {
         return highlight(code, languages.py); // languages.<insert language> to return html with markup
      }
   },
   mounted() {
      gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, delay: 1.5, duration: 1.5})

      if(threeScene.cache == 'noScene') {
         return
      } else {
         
         gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete:() => {
         threeScene.destroyMesh()
         threeScene.scene.add(threeScene.sphere,threeScene.plane)
         }})
         setTimeout(() => {
            threeScene.destroyHero()
         }, 1500)
         // Easier to just use the backdrop component, which I made earlier, instead of tweening.
         // gsap.fromTo(threeScene.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})
         
         threeScene.cache = 'noScene'
      }
   }
}
</script>

<style scoped>

#glossarySkeletonFlex {
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start !important;
   padding: 25px 5vw;
}

.glossaryWrapper {
   padding: 20px 10px;
   /* width: 400px; */
   /* max-width: 900px; */
   z-index: 2;
   overflow: none;
   /* backdrop is 1 */
}

.glossaryWrapper img {
   flex-wrap: wrap;
   width: 400px;
}

input[type=text] {
   background: transparent;
   border: 0px solid;
   border-bottom: 1px solid white;
   color: var(--white);
   font-family: 'Lora', serif;
   font-size: 16px;
   height: 20px;
   width: 150px;
   outline: none;
}

.glossaryWrapper > p {
   
   color: var(--offWhite);
   max-width: 400px;
}

.codeblock {
   /* max-width: 500px; */
   padding: 5px 10px;
}
</style>