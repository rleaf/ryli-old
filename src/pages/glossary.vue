<template>
   <div id="landing">
      <div id="textContainerHeader">
      </div>
         <div id="curriculumStructure">
            <div id="curriculumBody">
               <div id="curriculumHeader">
                  <!-- <u style="font-size: 18px;">For reference</u> -->
                  <p style="font-size: 18px; margin: 0;">Total items: {{postList.length}}</p>
               </div>
               <p>
                  <i style="font-size: 14px;">Experimental page. May delete in the future</i>
               </p>
                  <input type="text" v-model="search" placeholder="Search..."/>
            </div>
         </div>
         <div id="glossarySkeletonFlex">
            <div class="glossaryWrapper" v-for="post in filteredList" :key="post.title">
                  <p style="white-space: pre;">
                     <u>{{ post.title }}</u>
                  </p>
                  <p style="white-space: pre;">
                     {{ post.body}}
                  </p>
                  <p style="white-space: pre;">
                     <vue-mathjax :formula='post.math'></vue-mathjax>
                  </p>
            </div>
         </div>
   </div>
</template>

<script>
import Post from '../assets/js/glossaryStruc.js'
import g from '../assets/json/glossary.json'
import { VueMathjax } from 'vue-mathjax'

export default {
   components: {
      'vue-mathjax': VueMathjax
   },

   data() {
      return {
         search: '',
         postList: [
               // title
               // body
               // math
               // keys

            new Post(
               g.svmLoss.title, 
               g.svmLoss.body,
               g.svmLoss.math,
               g.svmLoss.keys
            ),
            new Post(
               g.Pesto.title, 
               g.Pesto.body, 
               undefined,
               g.Pesto.keys
            ),
            new Post(
               g.Pizza.title,
               g.Pizza.body,
               undefined,
               g.Pizza.keys
            )
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
</style>