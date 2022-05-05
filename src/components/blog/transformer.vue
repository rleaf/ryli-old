<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Transformers Deconstructed and Explained</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">5 &#8226; 4 &#8226; 2022</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#xformer_introduction">Introduction</a></li>
                  <li><a href="#xformer_prep">Preparation</a></li>
                  <ul>
                     <li><a href="#xformer_embed">Embedding</a></li>
                     <li><a href="#xformer_posenc">Positional Encoding</a></li>
                  </ul>
                  <li><a href="#xformer_dotprod">Scaled Dot Product</a></li>
                  <li><a href="#xformer_attention">Attention</a></li>
                  <ul>
                     <li><a href="#xformer_selfattn">Self Attention</a></li>
                     <li><a href="#xformer_multiattn">Multi Headed Attention</a></li>
                     <li><a href="#xformer_maskattn">Masked Multi Headed Attention</a></li>
                     <li><a href="#xformer_xattn">Cross Attention</a></li>
                  </ul>
                  <li><a href="#xformer_blocks">Blocks</a></li>
                  <ul>
                     <li><a href="#xformer_encblock">Encoder Block</a></li>
                     <li><a href="#xformer_decblock">Decoder Block</a></li>
                  </ul>
                  <li><a href="#xformer_">Thoughts</a></li>
               </ul>
            </div>
            <div id="xformer_introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               I'm going to explain, hopefully thoroughly enough, the mechanisms present in <a href="https://arxiv.org/pdf/1706.03762.pdf" target="_blank">Transformers</a>. Usually, as evident in my prior discussions
               about network architectures, I dedicate a portion to discussing the backwards pass; I will not be doing that here. As I write this, I would like to design this read centric around the <i>Scaled Dot Product</i>
               and <i>Attention</i> operations.
            </p>
            <p>
               It is mentioned in the opening of the <i>Attention is All You Need</i> that the transformer model was introduced to ameliorate and "push the boundaries of recurrent language
               models and encoder-decoder architectures". While this was certainly true back when transformers were new, it is worth mentioning that the impact of transformers has broached
               well into other domains of machine learning. Computer Vision is a solid example with <a href="https://arxiv.org/pdf/2010.11929.pdf" target="_blank">Visual Transformers</a>
               and <a href="https://arxiv.org/pdf/2103.14030.pdf" target="_blank">Swin Transformers</a>.
               
            </p>
            <p>
               Transformers can be structured in the following:
            </p>
            <prism-editor class="codeblock" v-model="transformerArch" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               By decomposing transformers as such, it becomes easier to see the constituent parts. For example, I put a lot of importance on the <i>Scaled Dot Product</i> earlier, and for good reason too - it is
               used heavily throughout the entire model. You can see that every attention mechanism, whether it be masked, multiheaded, or cross employs the <i>Scaled Dot Product</i>.
               Below is the visualization of a transformer from the orginitating paper (linked above).
            </p>
            <img id="img500" src="../../assets/blog/transformer.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i>Transformer layout from "Attention is All You Need"</i></span>

            <div id="xformer_prep"></div>
            <div id="blogSubHeader">
               Preperation
            </div>
            <div id="xformer_embed"></div>
            <h2>Embedding</h2>

            <div id="xformer_posenc"></div>
            <h2>Positional Encoding</h2>


            <div id="xformer_dotprod"></div>
            <div id="blogSubHeader">
               Scaled Dot Product
            </div>
            <p>
               The "meat and potatos" 
            </p>

            <div id="xformer_attention"></div>
            <div id="blogSubHeader">
               Attention
            </div>
            <div id="xformer_selfattn"></div>
            <h2>Self Attention</h2>

            <div id="xformer_multiattn"></div>
            <h2>Multi Headed Attention</h2>

            <div id="xformer_maskattn"></div>
            <h2>Masked Multi Headed Attention</h2>

            <div id="xformer_xattn"></div>
            <h2>Cross Attention</h2>


            <div id="xformer_blocks"></div>
            <div id="blogSubHeader">
               Blocks
            </div>
            <div id="xformer_encblock"></div>
            <h2>Encoder Block</h2>

            <div id="xformer_decblock"></div>
            <h2>Decoder Block</h2>


            <div id="xformer_thoughts"></div>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <vue-mathjax :formula='formula'></vue-mathjax>
            <vue-mathjax :formula='jacobian'></vue-mathjax>
            <!-- <math-jax :latex="formula" />
            <math-jax :latex="formula" :block="true" /> -->
            <!-- <p>{{ blogs[0].description }}</p> -->
         </div>
         <toTop />
   </div>
</template>

<script>
// import axios from 'axios'
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import { VueMathjax } from 'vue-mathjax'
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'

import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-nord.css'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      PrismEditor,
      'vue-mathjax': VueMathjax
      // MathJax
   },
   metaInfo: {
      title: 'Toads',
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'Toads'
         },
         {
            name: 'keywords',
            content: 'toads, are, green, sometimes'
         },
         {
            property: 'og:description',
            content: 'Toads'
         }
      ]
   },
   data() {
      return {
         toc: {
            one: 'blueberries',
            two: 'waffles',
            three: 'strawberries'
         },
         error: null,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
         jacobian: '$$\\begin{bmatrix}a & b\\\\ c & d\\end{bmatrix}$$',
         transformerArch:
`Transformer

   - Embedding 
   - Positional Encoding

   - Encoder Block
      - MultiHeaded Attention
         Self Attention
            Scaled Dot Product
      - Feed Forward Block
         Linear -> Act -> Linear
      - Normalization
      - Residual Connections

   - Decoder Block
      - Multi Headed Attention
         Self Attention
            Scaled Dot Product
      - Masked Multi Headed Attention
         Self Attention
            Scaled Dot Product
      - Feed Forward Block
         Linear -> Act -> Linear
      - Normalization
      - Residual Connections`
      }
   },
   methods: {
      highlighter(code) {
        return highlight(code, languages.py); // languages.<insert language> to return html with markup
      }
   },
   mounted () {
      
      window.MathJax.Hub.Config({
         tex2jax: {
            inlineMath: [['$','$']],
            displayMath: [['$$', '$$']],
            skipStartupTypeset: true,
            processEscapes: true,
            processEnvironments: true
         }
      });

      if(threeScene.cache == 'noScene') {
         return
      } else {
         gsap.fromTo(threeScene.groupOpacity, {sphere: 1.0, plane: 1.0, designSceneOpacity: 0.4}, {sphere: 0.0, plane: 0.0, designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete: () => {
            threeScene.destroyHero()
            threeScene.destroyMesh()
            // From glossary.vue
         }})
         // gsap.fromTo(threeScene.groupOpacity, {designSceneOpacity: 0.4}, {designSceneOpacity: 0.0, duration: .6, overwrite: true, onComplete:() => {
         // threeScene.destroyMesh()
         // threeScene.scene.add(threeScene.sphere,threeScene.plane)
         // }})
         // setTimeout(() => {
         //    threeScene.destroyHero()
         // }, 1500)
         // Easier to just use the backdrop component, which I made earlier, instead of tweening.
         // gsap.fromTo(threeScene.groupOpacity, {sphere: 0.0, plane: 0.0}, {sphere: 1.0, plane: 1.0, delay: .6, duration: 1, overwrite: "auto"})
         
         threeScene.cache = 'noScene'
      }
   } 
}
</script>
<style scoped>

#curriculumBody {
   width: auto !important;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}

#blogHeader {
   color: var(--white);
   padding-bottom: 8vh;
   font-size: 22px;
}

p {
   padding: 25px 6vw;
   line-height: 2;
}

a {
   color: var(--white);
   text-decoration: underline;
   font-style: oblique;
}

h2 {
   /* color: var(--white); */
   font-size: 16px;
   font-style: italic;
   padding-top: 10px;
   margin: 0;
   font-weight: 200;
}

#blogSubHeader {
   color: var(--white);
   font-family: 'Lora', sans-serif;
   font-size: 19px;
   padding-top: 50px;
}

@media (max-width: 1255px) {
   p {
      padding: 2vw;
   }
}

@media (max-width: 735px) {
   p {
      padding: 0;
   }
}

.blogtoc {
   color: var(--offwhite);
   /* border-color: #4a4d4f */
   border: 1px solid;
   border-color: var(--white);
   width: 300px;
   font-size: 95%;
   /* color: red; */
   margin-bottom: 5vh;
}

.blogtoc a {
   color: var(--offwhite);
}

.blogtoc a:hover {
   color: var(--white);
}

.blogtoc ul {
   text-align: left;
   list-style: numbers;
}

</style>