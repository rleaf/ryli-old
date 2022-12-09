<template>
   <div id="landing">
   <!-- <backdrop /> -->
      <div id="textContainerHeader">
      </div>
         <div id="curriculumStructure">
            <div id="curriculumBody">
               <div id="curriculumHeader">
                  <!-- <u style="font-size: 18px;">For reference</u> -->
                  <p>The most important section...</p>
               </div>
               <p>
                  For when you're at the store and remember you wanted to make something, but also remember you don't have the recipe on hand.
                  <br>
                  <!-- <i style="font-size: 16px;">Total References: {{postList.length}}</i> -->
               </p>
                  <input type="text" v-model="search" :placeholder='postList.length + " total references..."'/>
            </div>
         </div>
         <div id="glossarySkeletonFlex">
            <div class="glossaryWrapper" v-for="post in filteredList" :key="post.title">
                  <p class="postTitle">
                     {{ post.title }}
                  </p>
                  <div v-if="post.list" class="checkList">
                     <div v-for="item in post.list" :key="item">
                        <input type="checkbox">
                        <label class="strikethrough" for="">{{ item }}</label>
                     </div>
                  </div>
                  <p v-if="post.body">
                     {{ post.body}}
                  </p>
                  <p class='source' v-if="post.source">
                     Source: <a :href='post.source.value' target="_blank">{{ post.source.key }}</a>
                  </p>
                  <p>
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
               // list
               // body
               // source
                  // key
                  // value
               // keys
            {
               title: 'Apple Pie',
               list: [
                  'All-purpose flour (2 1/2 cups, 300g)',
                  'Salt (3/4 tsp)',
                  'Vegetable shortening (1/3 cup, 60g)',
                  'Cold unsalted butter (8 tbsp, 113g)',
                  'Ice water (7-10 tbsp, 99-142g)',
                  'Peeled & sliced apples (8 cups, 964g, ~3 1/4 lbs)',
                  'Lemon juice (2 tbsn)',
                  'Granulated sugar (3/4 cup, 194g)',
                  'All-purpose flour (2 tbsp, 14g)',
                  'Cornstarch/Instant ClearJel (2 tbsp, 14g)',
                  'Salt (1/4 tsp)',
                  'Cinnamon (1 tsp)',
                  'Nutmeg (1/4 tsp)',
                  'Allspice (1/4 tsp)',
                  'Boiled cider (1/4 cup, 85g) OR Apple juice concentrate (1/4 cup, 80g), optional',
                  'Vanilla Extract (2 tsp), optional',
                  'Butter, diced in small pieces (2 tbsn, 28g)'
               ],
               body: 'First five ingredients are for the crust - remaining are for the filling. Check source for full recipe.',
               source: {
                  key: 'Susan Reid at King Arthur Baking',
                  value: 'https://www.kingarthurbaking.com/recipes/apple-pie-recipe'
               },
               keys: 'apple pie'
            },
            {
               title: `Pesto`,
               list: [
                  'Basil leaves (3 packed cups, no stems)',
                  'Garlic (3-4 cloves)',
                  'Salt (1/4 - 1/2 tsp)',
                  'Grated parmesan cheese (3/4 cup)',
                  'Pine nuts (1/4 cup)',
                  'Olive oil (1/2 cup)',
               ],
               body: `Puree everything together a food processor while slowly drizzling in olive oil.`,
               source: {
                  key: `"The Enchanted Broccoli Forest" by Mollie Katzen`,
                  value: `https://www.molliekatzen.com/books_enchanted_broccoli.php`,
               },
               keys: `pesto`
            },
            {
               title: `Pizza Dough`,
               body: `wip. In search for thin crust.`,
               keys: `pizza dough bread`
            },
            {
               title: `Chocolate Chip Cookies`,
               list: [
                  'Unsalted Butter cut into tablespoons (2 sticks, 227g)',
                  'Heavy Cream, Half and Half, or Whole Milk (2 tbsp, 28g)',
                  'All-purpose flour (2 cups, 260g)',
                  'Crystal kosher salt (2 tsp, 6g)',
                  'Baking soda (1 tsp, 6g)',
                  'Dark brown sugar (3/4 packed cup, 150g)',
                  'Granulated sugar (3/4 cup, 150g)',
                  'Cold large eggs (2, 100g)',
                  'Vanilla Extract (1 tbsn)',
                  'Bittersweet chocolate disks, half coarsely chopped (5oz, 142g)',
                  'Milk chocolate disks, half coarsely chopped (5oz, 142g)',
               ],
               body: `1. Brown half the butter, later combine with other half of butter then add in heavy cream. Try to get all the browned bits from cooking the butter. Set aside to cool.\n 2. Mix dry (flour, salt, baking soda)\n 3. Mix butter/milk with sugars then whisk for ~45 secs. Make sure butter isn't hot.\n 4. Add eggs & vanilla and whisk again for ~45 secs.\n 5. Add dry and whisk. May need to switch to a spatula to fold the dough.\n 6. Add chocolate chips.\n 7. Scoop and chill with 2oz scoop or 1/4 measuring cup. Lay cookies on parchment-lined baking sheet.\n 8. Wrap cookies with platic wrap and put them in fridge for 12-48 hrs. Couple hours if desperate.\n 9. Preheat oven to 350F. Once heated, cook cookies for 18-22 min.\n 10. Take cookies out and allow to rest for ~5min. Then eat.`,
               source: {
                  key: `Claire Saffitz's YouTube`,
                  value: `https://www.youtube.com/watch?v=kPauR6tP_cg`,
               },
               keys: `chocolate chip cookies`
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
   max-width: 400px;
   white-space: pre-wrap;
   font-family: var(--type), serif;
}

.glossaryWrapper > p:not(:first) {
   color: var(--offWhite);
}

.postTitle {
   color: var(--white);
   /* font-size: 18px; */
}

.codeblock {
   /* max-width: 500px; */
   padding: 5px 10px;
}

label.striketrhough {
   font-size: 20px;
}

.checkList {
   font-family: var(--type);
   /* color: var(--shadeWhite1) */
}

.checkList input[type="checkbox"]:checked + label.strikethrough {
   text-decoration: line-through;
   text-decoration-thickness: 0.1rem;
   /* color: var(--designSelection); */
}

p.source {
   /* color: var(--white); */
   font-size: 15px;
}

p.source a {
   text-decoration: underline;
}
</style>