<template>
   <div id="landing">
   <!-- <backdrop /> -->
      <div id="textContainerHeader">
      </div>
         <div id="curriculumStructure">
            <div id="curriculumBody">
               <div id="curriculumHeader">
                  <!-- <u style="font-size: 18px;">For reference</u> -->
                  <p style="font-size: 18px; margin: 0;">Total References: {{postList.length}}</p>
               </div>
               <p>
                  <i style="font-size: 14px;">The most important section...</i>
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
// // import backdrop from '../components/backdrop.vue'
import { VueMathjax } from 'vue-mathjax'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-nord.css'
// const backpropImg = require('../assets/backprop2.png')

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
               // img
               // keys
            {
               title: `Pesto`,
               body: `3 packed cups fresh basil leaves (no stems)\n 3-4 healthy cloves of garlic\n 1/4-1/2 tsp. salt\n 3/4 cup freshly grated parmesan cheese\n 1/4 cup pulverized nuts (pine nuts are #1)\n 1/2 cup olive oil\n\n 1. Puree everything together in a blender or food processor.`,
               keys: `food pesto`
            },
            {
               title: `Pizza Dough`,
               body: `wip. In search for thin crust.`,
               keys: `food pizza dough bread`
            },
            {
               title: `Chocolate Chip Cookies`,
               body: `2 sticks unsalted butter (8oz/ 227g) cut\n 2 tablespoons heavy cream, half and half, or whole milk (1oz/ 28g)\n 2 cups all-purpose flour (9.2 oz/ 260 g) \n 2 teaspoons Diamonds Crystal kosher salt (0.22 oz/ 6g)\n 1 teaspoon baking soda (0.21 oz/ 6g) 3/4 cup packed dark brown sugar (5.3 oz/ 150g)\n 3/4 cup granulated sugar (5.3 oz/ 150g)\n 2 large eggs (3.5 oz/100g), cold from the refrigerator\n 1 tablespoon vanilla extract 5 ounces (142g) bittersweet chocolate disks, half coarsely chopped\n 5 ounces (142g) milk chocolate disks, half coarsely chopped\n\n 1. Brown half the butter, later combine with other half of butter then add in heavy cream. Try to get all the browned bits from cooking the butter. Set aside to cool.\n 2. Mix dry (flour, salt, baking soda)\n 3. Mix butter/milk with sugars then whisk for ~45 secs. Make sure butter isn't hot.\n 4. Add eggs & vanilla and whisk again for ~45 secs.\n 5. Add dry and whisk. May need to switch to a spatula to fold the dough.\n 6. Add chocolate chips.\n 7. Scoop and chill with 2oz scoop or 1/4 measuring cup. Lay cookies on parchment-lined baking sheet.\n 8. Wrap cookies with platic wrap and put them in fridge for 12-48 hrs. Couple hours if desperate.\n 9. Preheat oven to 350F. Once heated, cook cookies for 18-22 min.\n 10. Take cookies out and allow to rest for ~5min. Then eat.`,
               keys: `food chocolate chip cookies`
            },
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
   color: var(--shadeWhite2);
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