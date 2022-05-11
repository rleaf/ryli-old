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
                  <li><a href="#xformer_mlp">Feed Forward Network</a></li>
                  <li><a href="#xformer_blocks">Blocks</a></li>
                  <ul>
                     <!-- <ul>
                        <li><a href="#xformer_layernorm">Layer Normalization</a></li>
                     </ul> -->
                     <li><a href="#xformer_encblock">Encoder Block</a></li>
                     <li><a href="#xformer_decblock">Decoder Block</a></li>
                  </ul>
                  <li><a href="#xformer_encdec">Encoder & Decoder Layers</a></li>
                  <li><a href="#xformer_transformer">Transformer</a></li>
                  <li><a href="#xformer_">Thoughts</a></li>
               </ul>
            </div>
            <div id="xformer_introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               I'm going to explain, hopefully thoroughly enough, the mechanisms present in Transformers. I reference the accompanied paper to the network
               <a href="https://arxiv.org/pdf/1706.03762.pdf" target="_blank"><i>Attention Is All You Need</i></a>
               a couple times throughout this read. Feel free to click around through the
               contents displayed above to read more about a particular section and the affiliated code. Similarly to other articles I've written, all code uses the PyTorch framework.
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
               By decomposing transformers as such, it becomes easier to see the constituent parts. For example, you can see there's a lot of importance on <i>Scaled dot product attention</i> because it is
               used heavily throughout the entire model. Every attention mechanism, whether it be masked, multiheaded, or cross employs <i>SDP attention</i>.
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
            <p>
               Before the sequence inputs can be fed into the encoder and decoder, they must be tokenized, pass go through an embedding layer, and then have positional encoding added to them.
               Tokenization is the process of converting a sequence,
               for example something that can be human interpretable, into a sequence of tokens represented as integers. For the embedding layer, I am going to be using 
               <code style="background: #242424; border-radius: 5px;">nn.Embedding</code> available through <a href="https://pytorch.org/docs/stable/generated/torch.nn.Embedding.html" target="_blank">PyTorch</a>.
               Positional encoding is defined below.
               
            </p>
            <div id="xformer_posenc"></div>
            <h2>Positional Encoding</h2>
            <p>
               We positionally encode our sequences to fortify structure because there is no inherint order during operation due to the parallelization of Transformers. Here, I will use sinusoidal positional
               encoding discussed in the original <i>Attention Is All You Need</i> paper, however there are many different ways to positionally encode a sequence such as
               <a href="https://arxiv.org/pdf/1803.02155.pdf" target="_blank">Relative Positinal Encoding</a>. Sinusoidal encoding works by oscillating between two different functions based of the 
               sequence index. If we have a sequence tensor of shape <code style="background: #242424; border-radius: 5px;">(K, E)</code> where <i>p</i> traverses the <i>Kth</i> dimension and <i>i</i> the <i>Eth</i>,
               then:
               <br><br>
               <vue-mathjax :formula='PEsin'></vue-mathjax>
               <br>
               <vue-mathjax :formula='PEcos'></vue-mathjax>
               <br>
               <vue-mathjax :formula='`$$a = \\biggr\\lfloor{\\frac{2i}{E}}\\biggl\\rfloor$$`'></vue-mathjax>
            </p>
            <prism-editor class="codeblock" v-model="positionalencoding" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br><br>
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
               <vue-mathjax :formula='`$Q \\in \\mathbb{R}^{k \\times e}$`'></vue-mathjax>,
               <vue-mathjax :formula='`$K \\in \\mathbb{R}^{k \\times e}$`'></vue-mathjax>,
               <vue-mathjax :formula='`$V \\in \\mathbb{R}^{k \\times e}$`'></vue-mathjax>
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
               We can now construct the classes that house SDP Attention. It's worth mentioning that there are <a href="https://www.catalyzex.com/paper/arxiv:1706.03762/code" target="_blank">different ways</a> how you can
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
               After creating our <code style="background: #242424; border-radius: 5px;">Self Attention</code> class, we can instantiate it inside a Module List based off the number of heads we have, which will be a hyperparameter. The
               forward pass of multi headed attention feeds the input through <code style="background: #242424; border-radius: 5px;">num_heads</code> self attention classes and then concatenates the each of the self attention
               outputs along the trailing dimension. Lastly the concatenated tensor is fed through a linear layer to transform it back to the input shape.
            </p>
            <prism-editor class="codeblock" v-model="multi_head_attn" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br><br>
            <div id="xformer_maskattn"></div>
            <h2>Masked Multi Headed Attention</h2>
            <p>
               Masking is simply the procedure to inhibit the decoder block from accessing information from future elements in the sequence. Because transformers operate on sequence elements in parallel, for certain
               tasks such as translation, we set subsequent values in the <code style="background: #242424; border-radius: 5px;">softmax_weights</code> matrix to <code style="background: #242424; border-radius: 5px;">-1e9</code>.
               With the code displayed above, all we have to is pass a mask into our instantiated <code style="background: #242424; border-radius: 5px;">MultiHeadAttention</code> class. The mask will be a tensor of
               boolean values, where <code style="background: #242424; border-radius: 5px;">true</code> will indicate masking that index in the matrix to <code style="background: #242424; border-radius: 5px;">-1e9</code>.
               It is easier to think about the masking operation when looking at the hierarchy: the mask gets passed to the forward pass of <code style="background: #242424; border-radius: 5px;">MultiHeadAttention</code>, which
               in turn passes the mask to each <code style="background: #242424; border-radius: 5px;">SelfAttention</code>, then finally passing the mask to each <code style="background: #242424; border-radius: 5px;">scaled_dot_product_attention</code>.
               The function below produces our mask which we will pass as a parameter down to the <code style="background: #242424; border-radius: 5px;">scaled_dot_product_attention</code>. Below I've shown two different ways
               of producing the mask.
            </p>
            <prism-editor class="codeblock" v-model="getsubmask" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="xformer_xattn"></div>
            <br><br>
            <h2>Cross Attention</h2>
            <p>
               Cross attention is the mechanism that enables communication to flow between the encoder block and decoder block. Cross attention accepts as inputs the queries from the previous output of the decoder sublayer and the keys and values
               from the output of the encoder block. Even though I've not explained the block architecture (explained down below), I'm saying block to also encapsulate residual, normalization, and dropout.
               There won't be any code in this section. Instead, refer to the <a href="#xformer_decblock">decoder block</a> and see how <code style="background: #242424; border-radius: 5px;">self.cross_attetion</code> interacts.
            </p>
            <div id="xformer_mlp"></div>
            <div id="blogSubHeader">
               Feed Forward Network
            </div>
            <p>
               A standard feed forward network composed of a linear -> ReLU -> linear tranformation is used at the end of every block. The first linear layer transforms the input into dimension
               <vue-mathjax :formula='`$d_{ff}$`'></vue-mathjax>, which will be a provided hyperparameter. <i>Attention Is All You Need</i> uses 2048. The second linear layer reforms that 
               <vue-mathjax :formula='`$d_{ff}$`'></vue-mathjax> vector back to a <vue-mathjax :formula='`$d_{in}$`'></vue-mathjax> dimensional tensor, another hyperparameter.
               Retaining original shape is important as generally the feed forward nets will need to feed into another encoder or decoder block.
               <br><br>
               <vue-mathjax :formula='`$FFN(x) = max(0,\\;xW_1 + b_1)W_2 + b_2$`'></vue-mathjax>
            </p>
            <prism-editor class="codeblock" v-model="mlp" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br><br>

            <div id="xformer_blocks"></div>
            <div id="blogSubHeader">
               Blocks
            </div>
            <p>
               We can now build both the encoder and decoder blocks. All of the constituent pieces to the blocks have been built and we are ready to instantiate everything inside a
               <code style="background: #242424; border-radius: 5px;">EncoderBlock</code> class and <code style="background: #242424; border-radius: 5px;">DecoderBlock</code> class. Once we've finished creating
               the blocks, we then need to wrap them one more time in an <code style="background: #242424; border-radius: 5px;">Encoder</code> and <code style="background: #242424; border-radius: 5px;">Decoder</code>
               class respectively. This is to modularize them so we can have <i>N</i> layers for our encoder and decoder stack.
               Following along using the image of the Transformer at the top may help. Normalization, residual, and regularization techniques will also
               be pointed out in the forward passes of each block here.
            </p>

            <div id="xformer_encblock"></div>
            <h2>Encoder Block</h2>
            <p>
               Defining the constructor of both the blocks will be simple, we define what we're going to use and distribute the hyperparameters accordingly. It is important
               to notice that <code style="background: #242424; border-radius: 5px;">emb_dim // num_heads</code> is used as the parameter for <code style="background: #242424; border-radius: 5px;">dim_out</code>
               in the <code style="background: #242424; border-radius: 5px;">MultiHeadAttention</code> sublayer. Here is <a href="https://github.com/pytorch/pytorch/blob/master/torch/nn/modules/transformer.py#L262" target="_blank">
               Pytorch's</a> implementation of the encoder block - look at lines 423 & 424 particularly. This is to ensure a smooth transformation between the concatenated tensor and the linear layer. The forward
               pass is laid out in a manner such that:
               <br><br>
               <vue-mathjax :formula='`$sublayer_1(x) = dropout(layernorm(multihead(x, x, x) + residual))$`'></vue-mathjax>
               <br>
               <vue-mathjax :formula='`$sublayer_2(sublayer_1) = dropout(layernorm(feedforward(sublayer_1) + residual))$`'></vue-mathjax>
            </p>
            <prism-editor class="codeblock" v-model="encoderblock" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br><br>

            <div id="xformer_decblock"></div>
            <h2>Decoder Block</h2>
            <p>
               The decoder block follows along the same vein as the encoder block. We declare all of the constituent parts we are going to use in the constructor and then implement the forward pass accordingly.
               Remember that the forward pass for the decoder block accepts two inputs: one from the predicted sequence and another from the output of the encoder block. First we do self attention with
               <code style="background: #242424; border-radius: 5px;">dec_inp</code> making sure to also pass the mask, and then we feed that output as queries into the cross attention.
               <a href="https://github.com/pytorch/pytorch/blob/master/torch/nn/modules/transformer.py#L443" target="_blank">Albeit added complexities</a>, you can see that Pytorch's decoder block follows the same
               fundamentals (look at the forward method, specifically line 536 - 538).
            </p>
            <prism-editor class="codeblock" v-model="decoderblock" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br><br>
            <div id="xformer_encdec"></div>
            <div id="blogSubHeader">
               Encoder & Decoder Layers
            </div>
            <p>
               As mentioned in the <a href="#xformer_blocks">blocks</a> section, let us now  wrap everything in an <code style="background: #242424; border-radius: 5px;">Encoder</code> and <code style="background: #242424; border-radius: 5px;">Decoder</code>
               class. This is so we can easily define a model with <i>N</i> encoder and decoder layers. The only thing I'd like to point out here is the final linear transformation present in the
               <code style="background: #242424; border-radius: 5px;">Decoder</code> class. After all we need to transform the embedding dimension of our tensor from the embedding size back to the size of
               possible classifications for a sequence element. 
            </p>
            <prism-editor class="codeblock" v-model="encoder" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br><br>
            <prism-editor class="codeblock" v-model="decoder" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br><br>
            <div id="xformer_transformer"></div>
            <div id="blogSubHeader">
               Transformer
            </div>
            <p>
               The Transformer model can finally be put together. Everything up to line 41 should look normal. In the constructor we instantiate the required classes with the according hyperparameters. In the
               forward pass, we pass both the tokenized <code style="background: #242424; border-radius: 5px;">enc_seq</code> and <code style="background: #242424; border-radius: 5px;">trg_seq</code> through
               <code style="background: #242424; border-radius: 5px;">nn.Embedding</code> and then add their positional encodings with <code style="background: #242424; border-radius: 5px;">positionalEncoding</code>.
               The results <code style="background: #242424; border-radius: 5px;">src_inp</code> and <code style="background: #242424; border-radius: 5px;">trg_inp</code> are then fed to the encoder and decoder
               respectively where the decoder will also take as input the output from the encoder to be used in the <a href="#xformer_xattn">cross attention</a> sublayer and a mask for the 
               <a href="#xformer_maskattn">masked multi headed attention</a> sublayer.
               <br><br>
               The reshaping at the end, on line 42, is such that the loss function takes in an appropiately sized input outputted from the Transformer. I usually deal with
               <a href="https://pytorch.org/docs/stable/generated/torch.nn.functional.cross_entropy.html#torch.nn.functional.cross_entropy" target="_blank">cross entropy</a>, in which case the prediction is shape
               <code style="background: #242424; border-radius: 5px;">(B * K, class_len)</code> and the ground truth is shape <code style="background: #242424; border-radius: 5px;">(B * K)</code>. The prediction
               variable houses the unnormalized scores (hence not softmaxing as shown in the Transformer image) and the ground truth variable houses the corresponding ground truth indices for each element of each
               sequence of every batch.

            </p>
            <prism-editor class="codeblock" v-model="transformer" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <br><br>

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
         PEsin: `$$PE_{(p, 2i)} = \\mathrm{sin}\\biggr(\\frac{p}{10000^a}\\biggl)$$`,
         PEcos: `$$PE_{(p, 2i+1)} = \\mathrm{cos}\\biggr(\\frac{p}{10000^a}\\biggl)$$`,
         sdp: '$$SDP\\; Attention(Q, K, V) = Softmax_{d_k}\\biggl(\\frac{Q K^\\top}{\\sqrt{d_e}}\\biggr) V$$',
         transformerArch:
`Transformer

   - Embedding 
   - Positional Encoding

   - Encoder
      - Encoder Block
         - MultiHeaded Attention
            Self Attention
               Scaled Dot Product Attn
         - Feed Forward Block
            Linear -> Act -> Linear
         - Normalization
         - Residual Connections
   
   - Decoder
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
         positionalencoding:
`def positionalEncoding(K, E):
   """
   k: sequence dimension
   e: embedding dimension

   y: shape (1, K, E) tensor
   """

   y = torch.zeros(K, E)

   p = torch.arange(0, K).unsqueeze(1) # Make column vector
   i = torch.arange(0, E).unsqueeze(0) # Make row vector
   a = torch.floor(2*i / E)

   y[:, 0::2] = torch.sin(p / torch.pow(10000, a[0, 0::2]))
   y[:, 1::2] = torch.cos(p / torch.pow(10000, a[0, 1::2]))

   return y.unsqueeze(0)`,
         scaleddotproduct:
`def scaled_dot_product_attention(q: Tensor, k: Tensor, v: Tensor, mask: Tensor = None):
   """
   q: shape (B, K, E) where B is batch size, K is sequence length,
      and E is the embedding dimension
   k: shape (B, K, E) where B is batch size, K is sequence length,
      and E is the embedding dimension
   v: shape (B, K, E) where B is batch size, K is sequence length,
      and E is the embedding dimension
   mask: shape (B, K, K) where B is batch size and K is sequence length

   y: shape (B, K, E) where B is batch size, K is sequence length,
      and E is the embedding dimension
   softmax_weights: (B, K, K) where B is batch size and K is sequence length
   """
   B, K, E = q.shape

   # Similarity matrix 
   e = torch.bmm(query, key.transpose(1, 2)) # (B, K, K)

   # For Multi Headed Attention
   if mask is Not None:
      e = e.masked_fill_(mask.to(e.device), -1e9)
      # e[mask] = -1e9

   # Attention matrix
   softmax_weights = (e / E**(1/2)).softmax(dim=-1)

   # Second batch mat-mul of weights_softmax with values
   y = torch.bmm(softmax_weights, v)
   
   return y, softmax_weights # (B, K, E), (B, K, K)`,
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
      q: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      k: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      v: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      mask: shape (B, K, K) boolean tensor where B is batch size and K is
      sequence length

      y: shape (B, K, dim_v) tensor where B is batch size and K is sequence length
      """

      k = self.k(k) # (B, K, dim_q)
      q = self.q(q) # (B, K, dim_q)
      v = self.v(v) # (B, K, dim_v)
      
      y, self.softmax_weights = scaled_dot_product_attention(k, q, v, mask)
      
      return y # (B, K, dim_v)`,
         multi_head_attn:
`class MultiHeadAttention(nn.Module):
   def __init__(self, num_heads: int, dim_in: int, dim_out: int):
      super().__init__()
      """
      num_heads: number of heads
      dim_in: input dimension size for the query, key, and value
      dim_out: output dimension for each SA block
      """
   
      self.multihead = \\
         torch.nn.ModuleList([SelfAttention(dim_in, dim_out, dim_out) for i in range(num_heads)])
      # self.linear adopts same concept for weight initialization from SelfAttention class
      self.linear = nn.Linear(dim_out * num_heads, dim_in)
   
   def forward(self, q: Tensor, k: Tensor, v: Tensor, mask: Tensor = None):
      """
      q: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      k: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      v: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      mask: shape (B, K, K) boolean tensor where B is batch size and K is
      sequence length

      y: shape (B, K, dim_in) tensor where B is batch size and K is sequence length
      """

      output_list = []
      
      for m in self.multihead:
         y = m(q, k, v, mask) # (B, K, dim_out)
         output_list.append(y)
         
      concat = torch.cat(output_list, dim=-1) # (B, K, num_heads * dim_out)
      y = self.linear(concat) 
      
      return y # (B, K, dim_in)`,
         getsubmask:
`def get_subsequent_mask(seq)
   """
   seq: shape (B, K) tensor where B is batch size and K is sequence length

   mask: shape (B, K, K) boolean tensor where B is batch size and K is
      sequence length
   """
   # Pytorch's implementation
   # https://pytorch.org/docs/stable/_modules/torch/nn/modules/transformer.html#Transformer.forward
   mask = torch.triu(torch.full( \\
      (seq.shape[1], seq.shape[1]), float('-inf'), dtype=torch.bool), diagonal=1)
   mask = mask.repeat((seq.shape[0], 1, 1))

   # Alternative not using Pytorch source code
   # mask = torch.ones((seq.shape[0], seq.shape[1], seq.shape[1]), dtype=torch.bool)
   # for n in range(seq.shape[0]):
   #     for k in range(seq.shape[1]):
   #         mask[n, k, :k+1] = 0
   
   return mask`,
         mlp: 
`class FeedForward(nn.Module):
   def __init__(self, inp_dim: int, hidden_dim_forward: int):
      super().__init__()
      """
      inp_dim: embedding dimension
      hidden_dim_forward: hidden dimension for linear layers
      """
      
      self.mlp = nn.Sequential(
            nn.Linear(inp_dim, hidden_dim_feedforward),
            nn.ReLU(),
            nn.Linear(hidden_dim_feedforward, inp_dim)
      )
      
      # nn.Linear weight initialization adopts same concept as SelfAttention class
      # self.c = (6/(inp_dim + hidden_dim_forward))**(1/2)
      # torch.nn.init.uniform(self.q.weight, -self.c, self.c)
      #
      # torch.nn.init.xavier_uniform_(self.q.weight)
      
   def forward(self, x):
      """
      x: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      
      y: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      """
      y = self.mlp(x)
      
      return y`,
         encoderblock:
`class EncoderBlock(nn.Module):
   def __init__(self, num_heads: int, emb_dim: int, feedforward_dim: int, dropout: float)
      super().__init__()
      """
      Hyperparameters defined in Transformer class section
      """
      
      self.multihead = MultiHeadAttention(num_heads, emb_dim, emb_dim // num_heads)
      self.layernorm = nn.LayerNorm(emb_dim, eps=1e-10)
      self.dropout = nn.Dropout(dropout)
      self.feedforward = FeedForward(emb_dim, feedforward_dim)
   
   def forward(self, x):
      """
      x: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
         
      y: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      """

      y = self.layernorm(self.multihead(x, x, x) + x)
      y = self.dropout(y) # (B, K, E)
      y = self.layernorm(self.feedforward(y) + y)
      y = self.dropout(y) # (B, K, E)
      
      return y`,
         decoderblock:
`class DecoderBlock(nn.Module):
   def __init__(self, num_heads: int, emb_dim: int, feedforward_dim: int, dropout: float)
      super().__init__()
      """
      Hyperparameters defined in Transformer class section
      """

      self.self_attention = MultiHeadAttention(num_heads, emb_dim, emb_dim // num_heads)
      self.cross_attention = MultiHeadAttention(num_heads, emb_dim, emb_dim // num_heads)
      self.feed_forward = FeedForward(emb_dim, feedforward_dim)
      self.layernorm = nn.LayerNorm(emb_dim, eps=1e-10)
      self.dropout = nn.Dropout(dropout)
      
   def forward(self, dec_inp: Tensor, enc_out: Tensor, mask: Tensor = None):
      """
      dec_inp: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      enc_out: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      mask: shape (B, K, K) boolean tensor

      y: shape (B, K, E) tensor
      """
      
      y = self.layernorm(self.self_attention(dec_inp, dec_inp, dec_inp, mask) + dec_inp)
      y = self.dropout(y) # (B, K, E)

      y = self.layernorm(self.cross_attention(y, enc_out, enc_out) + y)
      y = self.dropout(y) # (B, K, E)

      y = self.layernorm(self.feed_forward(y) + y)
      y = self.dropout(y) # (B, K, E)
      
      return y`,
         encoder:
`class Encoder(nn.Module):
   def __init__(self, num_heads: int, emb_dim: int, feedforward_dim: int, num_layers: int, dropout: float):
      super().__init__()   
      """
      Hyperparameters defined in Transformer class section
      """

      self.layers = nn.ModuleList(
         [EncoderBlock(num_heads, emb_dim, feedforward_dim, dropout) for _ in range(num_layers]
      )
   
   def forward(self, src_seq: Tensor):
      """
      (input & output)
      src_seq: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      """
      for layer in self.layers:
         src_seq = layer(srq_seq) 
      
      return src_seq`,
         decoder:
`class Decoder(nn.Module):
   def __init__(
      self, num_heads: int, emb_dim: int, feedforward_dim: int, num_layers: int, dropout: float, class_len: int,
   ):
      super().__init__()'
      """
      Hyperparameters defined in Transformer class section
      """

      self.layers = nn.ModuleList(
         [DecoderBlock(num_heads, emb_dim, feedforward_dim, dropout) for _ in range(num_layers)]
      )
      self.proj_to_class = nn.Linear(emb_dim, class_len)

      # Weight initialization similar to Self Attention
      # c = (6 / (emb_dim + class_len)) ** 0.5
      # nn.init.uniform_(self.proj_to_class.weight, -c, c)

   def forward(self, target_seq: Tensor, enc_out: Tensor, mask: Tensor):
      """
      The encoder sequence length K does not have to equal the decoder sequence length K!
      
      target_seq: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      target_seq: shape (B, K, E) tensor where B is batch size, K is sequence length,
         and E is the embedding dimension
      mask: shape (B, K, K) boolean tensor

      out = shape (B, K, class_len) tensor where B is batch size and K is sequence length,
         and class_len is the total possible classifications
      """

      out = target_seq.clone() # (B, K, E)
      
      for layer in self.layers:
         out = layer(out, enc_out, mask) # (B, K, E)

      out = self.proj_to_class(out) # (B, K, class_len)
      return out`,
         transformer:
`class Transformer(nn.Module):
   def __init__(
      self,
      num_heads: int,
      emb_dim: int,
      feedforward_dim: int,
      dropout: float,
      num_enc_layers: int,
      num_dec_layers: int,
      class_len: int
   ):
      """
      num_heads: number of heads
      emb_dim: embedding dimension
      feedforward_dim: feed forward dimension
      dropout: dropout probability
      num_enc_layers: number of encoder blocks
      num_dec_layers: number of decoder blocks
      class_len: total possible classifications for a sequence element
      """

      super().__init__()
        
      self.emb_layer = nn.Embedding(class_len, emb_dim)
      self.encoder = Encoder(num_heads, emb_dim, feedforward_dim, num_enc_layers, dropout)
      self.decoder = Decoder(num_heads, emb_dim, feedforward_dim, num_dec_layers, dropout)
      
   def forward(self, src_seq, trg_seq):
      """
      The encoder sequence length K does not have to equal the decoder sequence length K!
      
      src_seq: shape (B, K) tensor where B is batch size and K is sequence length
      trg_seq: shape (B, K) tensor where B is batch size and K is sequence length

      dec_out: shape (B * K, class_len) where class_len possible classifications
         for sequence element
      """

      src_emb = self.emb_layer(src_seq) # (B, K, E)
      src_inp = positionalEncoding(src_emb.shape[1], src_emb.shape[2]) + src_emb
      # Above: src_inp = (1, K, E) + (B, K, E)

      trg_emb = self.emb_layer(trg_seq) # (B, K, E)
      trg_inp = positionalEncoding(trg_emb.shape[1], trg_emb.shape[2]) + trg_emb
      # Above: src_inp = (1, K, E) + (B, K, E)

      mask = get_subsequent_mask(trg_seq) # (B, K, K)
      y = self.encoder(src_inp) # (B, K, E)
      dec_out = self.decoder(trg_inp, y, mask) # (B, K, class_len)

      dec_out = dec_out.view(-1, dec_out.size(2)) # (B * K, class_len)
      return dec_out`
   
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