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
                  <p>
                     This blog is currently being made, but feel free to follow along :)
                  </p>
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
                  <li><a href="#xformer_dotprod">Scaled Dot Product Attention</a></li>
                  <li><a href="#xformer_attention">Attention Implementation</a></li>
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
               about network architectures, I dedicate a portion to discussing the backwards pass; I will not be doing that here. I believe there will already be a lot of information just discussing the Transformer
               architecture.
            <p>
               It is mentioned in the opening of the <i>Attention is All You Need</i> that the transformer model was introduced to ameliorate and <i>"push the boundaries of recurrent language
               models and encoder-decoder architectures"</i>. While this was certainly true back when transformers were new, it is worth mentioning that the impact of transformers has broached
               well into other domains of machine learning. <a href="https://arxiv.org/pdf/2010.11929.pdf" target="_blank">Visual Transformers</a> and <a href="https://arxiv.org/pdf/2103.14030.pdf" target="_blank">Swin Transformers</a>
               are good examples. Although Computer Vision already has sequential tasks such as image captioning, those linked papers use the attention mechanism to process the image data itself, which is not inherently
               sequential.

               
            </p>
            <p>
               Transformers can be laid out in the following:
            </p>
            <prism-editor class="codeblock" v-model="transformerArch" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               By decomposing transformers as such, it becomes easier to see the constituent parts. For example, you can see there's a lot of importance on the <i>Scaled dot product attention</i> because it is
               used heavily throughout the entire model. Every attention mechanism, whether it be masked, multiheaded, or cross employs the <i>SDP attention</i>.
               Below is the visualization of a transformer from the orginitating paper (linked above). It is easy to see features such as the information flow throughout the network and finer detail such as how
               each attention block takes in three arguments (queries, keys, values) and skip connections to aid gradient flow.
            </p>
            <img id="img500" src="../../assets/blog/transformer.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i>Transformer layout from "Attention is All You Need"</i></span>
            <br><br>
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
               Scaled Dot Product Attention
            </div>
            <p>
               Scaled dot product attention takes takes three arguments as input: <i>queries</i>, <i>keys</i>, and <i>values</i>. These inputs are transformations
               from the prior block's output (or original input). These transformations happen using the weights initialized in the Self Attention class which we will explore in the next in
               the <a href="#xformer_selfattn">section</a>. 
            </p>
            <p>
               Supplied with our Q, K, and V (queries/keys/values respectively), scaled dot product attention on a <u>single element from the batch</u> will look like:
            <br>
            <br>
            <vue-mathjax :formula='sdp'></vue-mathjax>
               where shapes of inputs <i>Q, K, V</i> are: 
               <br>
               <vue-mathjax :formula='`$Q \\in R^{k \\times e}$`'></vue-mathjax>,
               <vue-mathjax :formula='`$K \\in R^{k \\times e}$`'></vue-mathjax>,
               <vue-mathjax :formula='`$V \\in R^{k \\times e}$`'></vue-mathjax>
               <br>
               <br>
               Fortunately in code, we can perform batch operations to calculate the attention values all at once. I encourage looking at the PyTorch SDP Attention implementation found <a href="https://github.com/pytorch/pytorch/blob/master/torch/nn/functional.py#L4765" target="_blank">here</a>.
               I will sprinkle in the corresponding PyTorch code at every section.
            </p>
            <prism-editor class="codeblock" v-model="scaleddotproduct" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="xformer_attention"></div>
            <div id="blogSubHeader">
               Attention Implementation
            </div>
            <p>
               We can now construct the classes that house the SDP Attention. It's worth mentioning that there are <a href="https://www.catalyzex.com/paper/arxiv:1706.03762/code" target="_blank">different ways</a> how you can
               code the model (<a href="https://pytorch.org/docs/stable/_modules/torch/nn/modules/transformer.html#Transformer" target="_blank">Pytorch's Transformer</a>). The way shown here will certainly have it's idiosyncrasies,
               so the goal is to really convey the main mechanisms present in all of these variations. I will try to discuss different characteristics of other Transformer models.
            </p>
            <div id="xformer_selfattn"></div>
            <h2>Self Attention</h2>
            <p>
               The purpose of the self attention class is to house the weights for transforming the input into the queries, keys, and values matrices. These values are then passed into the
               <code style="background: #242424; border-radius: 5px;">scaled_dot_product_attention(q, k, v)</code> as defined above. I've noticed a lot of people usually leave the weights
               initialized by <code style="background: #242424; border-radius: 5px;">nn.Linear</code> default, however it is not uncommon to see custom initializations displayed in the comments below.
            </p>
            <prism-editor class="codeblock" v-model="self_attn" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br>
            <br>
            <div id="xformer_multiattn"></div>
            <h2>Multi Headed Attention</h2>
            <p>
               Now we instantiate the <code style="background: #242424; border-radius: 5px;">Self Attention</code> inside a Module List based off the number of heads we have, which will be a hyperparameter. The
               forward pass of multi headed attention calculates <code style="background: #242424; border-radius: 5px;">num_heads</code> forward passes for self attention. Each of those outputs are then concatenated
               along the trailing dimension and then fed through a linear layer to reshape the tensor.
            </p>
            <prism-editor class="codeblock" v-model="multi_head_attn" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
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
      title: 'Transformers Deconstructed and Explained',
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'I try to provide a thorough explanation on the operations and overall construction of a Transformer Neural Network.'
         },
         {
            name: 'keywords',
            content: 'transformer, neural network, machine learning, attention, self attention, scaled dot product'
         },
         {
            property: 'og:description',
            content: 'I try to provide a thorough explanation on the operations and overall construction of a Transformer Neural Network.'
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
         sdp: '$$SDP\\; Attention(Q, K, V) = Softmax_{d_k}\\biggl(\\frac{Q K^\\top}{\\sqrt{d_e}}\\biggr) V$$',
         transformerArch:
`Transformer

   - Embedding 
   - Positional Encoding

   - Encoder Block
      - MultiHeaded Attention
         Self Attention
            Scaled Dot Product Attn
      - Feed Forward Block
         Linear -> Act -> Linear
      - Normalization
      - Residual Connections

   - Decoder Block
      - Multi Headed Attention
         Self Attention
            Scaled Dot Product Attn
      - Masked Multi Headed Attention
         Self Attention
            Scaled Dot Product Attn
      - Feed Forward Block
         Linear -> Act -> Linear
      - Normalization
      - Residual Connections`,
         scaleddotproduct:
`def scaled_dot_product_attention(q: Tensor, k: Tensor, v: Tensor, mask: Tensor = None):
   """
   q: shape (B, K, E) where B is batch size, K is sequence length,
      and E is the embedding dimension.
   k: shape (B, K, E) where B is batch size, K is sequence length,
      and E is the embedding dimension.
   v: shape (B, K, E) where B is batch size, K is sequence length,
      and E is the embedding dimension.
   mask: shape (B, K, K) where B is batch size and K is sequence length.

   output: shape (B, K, E) where B is batch size, K is sequence length,
      and E is the embedding dimension.
   softmax_weights: (B, K, K) where B is batch size and K is sequence length.
   """
   B, K, E = q.shape

   # Similarity matrix 
   e = torch.bmm(query, key.transpose(1, 2))

   # For Multi Headed Attention
   if mask is Not None:
      e = e.masked_fill_(mask.to(e.device), -1e9)
      # e[mask] = -1e9

   # Attention matrix
   softmax_weights = (e / E**(1/2)).softmax(dim=-1)

   # Second batch mat-mul of weights_softmax with values
   y = torch.bmm(softmax_weights, v)
   
   return y, softmax_weights`,
         self_attn:
`class SelfAttention(nn.Module):
   def __init__(self, dim_in: int, dim_q: int, dim_v: int):
      super().__init__()
      """
      dim_in: input dimension size of query, key, and value
      dim_q: output dimension size of query and key vectors
      dim_v: output dimension size of value vector
      """
      
      self.q = nn.Linear(dim_in, dim_q)
      self.k = nn.Linear(dim_in, dim_q)
      self.v = nn.Linear(dim_in, dim_v)
      self.softmax_weights = None

      # Weights initialized to different distribution using self.q as ex.
      # self.c = (6/(dim_in + dim_q))**(1/2)
      # torch.nn.init.uniform(self.q.weight, -self.c, self.c)
      #
      # torch.nn.init.xavier_uniform_(self.q.weight)
      
   def forward(self, q: Tensor, k: Tensor, v: Tensor, mask: Tensor = None):
      """
      q: shape (B, K, E)
      k: shape (B, K, E)
      v: shape (B, K, E)
      mask: shape (B, K, K)

      y: shape (B, K, dim_v)
      """
      k = self.k(k) # (B, K, dim_q)
      q = self.q(q) # (B, K, dim_q)
      v = self.v(v) # (B, K, dim_v)
      
      y, self.softmax_weights = scaled_dot_product_attention(k, q, v, mask)
      
      return y`,
         multi_head_attn:
`class MultiHeadAttention(nn.Module):
   def __init__(self, num_heads: int, dim_in: int, dim_out: int):
      super().__init__()
      """
      num_heads: number of heads
      dim_in: input dimension size of query, key, and value
      dim_out: output dimension for each SA block
      """
   
      self.multihead = \\
         torch.nn.ModuleList([SelfAttention(dim_in, dim_out, dim_out) for i in range(num_heads)])
      # self.linear adopts same concept for weight initialization from SelfAttention class
      self.linear = nn.Linear(dim_out * num_heads, dim_in)
   
   def forward(self, q: Tensor, k: Tensor, v: Tensor, mask: Tensor = None):
      """
      q: shape (B, K, E)
      k: shape (B, K, E)
      v: shape (B, K, E)
      mask: shape (B, K, K)

      y: shape (B, K, dim_in)
      """

      output_list = []
      
      for m in self.multihead:
         y = m(q, k, v, mask) # (B, K, dim_out)
         output_list.append(y)
         
      concat = torch.cat(output_list, dim=-1) # (B, K, num_heads * dim_out)
      y = self.linear(concat) 
      
      return y # (B, K, dim_in)`
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