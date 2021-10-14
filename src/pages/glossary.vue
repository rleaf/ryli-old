<template>
   <div id="landing">
   <!-- <backdrop /> -->
      <div id="textContainerHeader">
      </div>
         <div id="curriculumStructure">
            <div id="curriculumBody">
               <div id="curriculumHeader">
                  <!-- <u style="font-size: 18px;">For reference</u> -->
                  <p style="font-size: 18px; margin: 0;">Searchable references: {{postList.length}}</p>
               </div>
               <p>
                  <i style="font-size: 14px;">Experimental page. May delete in the future. Intended primarily for food.</i>
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
            </div>
         </div>
   </div>
</template>

<script>
// // import backdrop from '../components/backdrop.vue'
import threeScene from '../assets/js/threeScene.js'
import Post from '../assets/js/glossaryStruc.js'
import g from '../assets/json/glossary.json'
import { VueMathjax } from 'vue-mathjax'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-nord.css'

export default {
   components: {
      'vue-mathjax': VueMathjax,
      PrismEditor,
      // backdrop
   },

   data() {
      return {
         search: '',
         postList: [
               // title
               // body
               // math
               // code
               // keys

            new Post(
               g.svmLoss.title, 
               g.svmLoss.body,
               g.svmLoss.math,
               undefined,
               g.svmLoss.keys
            ),
            new Post(
               g.Pesto.title, 
               g.Pesto.body, 
               undefined,
               undefined,
               g.Pesto.keys
            ),
            new Post(
               g.Pizza.title,
               g.Pizza.body,
               undefined,
               undefined,
               g.Pizza.keys
            ),
            new Post(
               g.Print.title,
               g.Print.body,
               undefined,
               g.Print.code,
               g.Print.keys
            ),
            new Post(
               g.Cookies.title,
               g.Cookies.body,
               undefined,
               undefined,
               g.Cookies.keys
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
      threeScene.loadScene(threeScene.scene1)
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
   max-width: 400px;
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
   padding: 5px 10px;
}
</style>