<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">The Forward & Backward of a CNN</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">1 &#8226; 12 &#8226; 2022</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#cnn_cnnintroduction">Introduction</a></li>
                  <li>Convolutional Layer</li>
                  <ul>
                     <li><a href="#convolution_forward">Forward</a></li>
                     <li><a href="#convolution_backward">Backward</a></li>
                  </ul>
                  <li>Activation (ReLU)</li>
                  <ul>
                     <li><a href="#activation_foward">Forward</a></li>
                     <li><a href="#activation_backward">Backward</a></li>
                  </ul>
                  <li>Pooling (Max Pooling)</li>
                  <ul>
                     <li><a href="#pooling_forward">Forward</a></li>
                     <li><a href="#pooling_backward">Backward</a></li>
                  </ul>
                  <li><a href="#thoughts">Thoughts</a></li>
               </ul>
            </div>
            <div id="cnn_cnnintroduction"></div>
            <div id="blogSubHeader">
                  Introduction
            </div>
               <p>
                  Convolutional neural networks are an architecture of neural nets designed to process grid-like data such as images. They're a nice architecture to move onto
                  in the journey of learning neural nets because they help show the innate generalizing capabilites of networks, but not, in my opinion, too much such that it easily
                  confuses. Here, I focus on discussing the <i>forward</i> and <i>backward</i> transformations between layers in a CNN.
                  I may add transformations in the future, so everything will be listed in the table of contents provided above.
               </p>
               <p>
                  When understanding CNNs, colored RGB images are a solid example to think of as input because they are able to easily <i>and intuitively</i>
                  be represented as 3d tensors. Whenever I talk about inputs for a CNN here, I will be thinking of colored images.
               </p>
               <img id="img800" @click="imageZoom" class="noInvert" style="box-shadow: none;" src="../../assets/blog/cnnImage.png" alt="">
               <span style="font-size:14px; padding-top: -10px;"><i>On the left shows the image isolated to the 3 color channels. When layered and blended properly, shown on the right, we get a properly colored image.</i></span>
               <div id="convolution_forward"></div>
               <div id="blogSubHeader">
                  Convolutional Layer
               </div>
                  <h2>Forward</h2>
               <p>
                  CNNs, similar to MLPs operate under the same archetype of <vue-mathjax :formula='`$w^\\top x+b$`'></vue-mathjax>, except are designed to <i>preserve spatial
                  structure</i>. Because there is no dimension reduction, to deal with these high dimensional inputs, the weight matrix <i>w</i>, also frequently referred to as a <i>kernel</i>
                  or <i>filter</i> operates on a portion of the input by taking the dot product
                  then convolves/slides/translates to the next portion. The kernel usually extends to the full depth of the input; there are times
                  when this is not true. The output of the series of dot products composes the <i>activation map</i>. As the input traverses through a CNN, it is typically expected for
                  it to get progressively "<a href="https://i.imgur.com/H1pU0yu.png" target="_blank">stumpier</a>",
                  where what it loses in width & height grows in depth. The linked image shows 4 activation maps, producing a 4x4x4 output, from the original 3x5x5 input.
                  <!-- <br>
                  <br>
                  Hyperparameters include:
                  <br>
                  <b>Number of Filters</b>: It is standard for a single convolutional layer to house many filters
                  <br>
                  <b>Kernel size</b>: Determines the width/height of the kernel
                  <br>
                  <b>Stride</b>: Determines the step distance of the kernel after each dot product
                  <br>
                  <b>Padding</b>: Adds a border to the input to ameliorate edge learning. By enabling the kernel to "sit" offset with the input, edges have greater coverage of the kernel. -->
               </p>
               <video id="img500" @click="imageZoom" autoplay loop muted :src="cnn_anim" style="padding-bottom: 5px !important;"></video>
               <span style="font-size:14px; padding-top: -10px;"><i>Simple animation showing a 3x2x2 kernel interacting with a 3x5x5 input. Stride is 1 and there is no padding. <br>
               Right click on animation to toggle controls or open in a new tab to enlarge.</i></span>
               <p>
                  Code breakdown for a forward pass in a convolutional layer. PyTorch does have a <a href="https://pytorch.org/docs/1.9.1/generated/torch.nn.Conv2d.html" target="_blank">class</a> that does
                  this must faster, but for understanding - I am a fan of what's below. The actual operations occur within the nested for loops.
               </p>
               <prism-editor class="codeblock" v-model="cnnAssets.cnnForward" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
               <br>
               <br>
               <div id="convolution_backward"></div>
                  <h2>Backward</h2>
               <p>
                  Consider again thinking about the equation <vue-mathjax :formula='`$f(x) = w^\\top x+b$`'></vue-mathjax>. Looking at the equation, it is very easy to find the desired local gradients
                  and then simply multiply them by the upstream:
                  <br>
                  <br>
                  <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{x}} = \\frac{\\partial{f}}{\\partial{x}} \\cdot upstream= w \\cdot dout$$`'></vue-mathjax>
                  <br>
                  <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{w}} = \\frac{\\partial{f}}{\\partial{w}} \\cdot upstream= x \\cdot dout$$`'></vue-mathjax>
                  <br>
                  <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{b}} = \\frac{\\partial{f}}{\\partial{b}} \\cdot upstream= dout$$`'></vue-mathjax>
                  <br>
                  The tricky part is thinking about the interaction between the tensor shapes. <i>"Okay...so we're indexing along dimension x and this 4x2x5x5 tensor multiples elementwise with this 2x3x3x3..."</i>.
                  I also have a lot of difficulty conceptualizing it - especially with high dimensional tensors. For more elaborate discussion, my post on
                  <a href="/bnbackpass" target="_blank">differentiating batch normalization</a> and <a href="/rnn" target="_blank">recurrent neural networks</a> may be helpful.
                  Keeping it simple however, here are some "rules" which work well for me:
                  <br>
                  <br>
                  1) Gradients, ie: <vue-mathjax :formula='`$\\frac{\\partial{f}}{\\partial{x}}$`'></vue-mathjax>, match dimensionality of what is being differentiated wrt to.
                  <br>
                  2) Calculating the entire gradient is a running sum (note the <code style="background: var(--codeSnippet); border-radius: 5px;">+=</code> on lines 39, 46, and 47 where the gradient formulas are shown).
                  <br>
                  3) Make sure to properly "locate" where a gradient belongs. Consider what needs to be indexed in order to compute a gradient. For instance,
                  <code style="background: var(--codeSnippet); border-radius: 5px;">db</code> on line 39 <i>can</i> be next to <code style="background: var(--codeSnippet); border-radius: 5px;">dw</code> and <code>dx</code>,
                  but unlike <code style="background: var(--codeSnippet); border-radius: 5px;">dw</code> and <code style="background: var(--codeSnippet); border-radius: 5px;">dx</code>, it doesn't <i>need</i> to be since we're only indexing along f.
               </p>

               <prism-editor class="codeblock" v-model="cnnAssets.cnnBackward" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>


               <div id="activation_foward"></div>
               <div id="blogSubHeader">
                  Activation
               </div>
               <h2>Forward</h2>
               <p>
                  The forward pass through activation layers operate element-wise. ReLU is shown below and iterates through each neuron to check if it is greater than 0. I discuss the forward pass for other
                  activations, such as tanh, in my post on RNNs linked above. PyTorch has a bunch of well documented
                  <a href="https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity" target="_blank">activation classes</a>.
               </p>
               <prism-editor class="codeblock" v-model="cnnAssets.reluForward" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
               <div id="activation_backward"></div>
               <h2>Backward</h2>
               <p>
                  Backprop through this layer funtions similarly. A convenience of ReLU is that all the local gradients will equal to 1, so this transformation behaves like a mask that only allows the
                  corresponding index between the activated neurons and <code style="background: var(--codeSnippet); border-radius: 5px;">dout</code> to progress backwards unchanged.
                  <a href="https://pytorch.org/docs/stable/generated/torch.gt.html" target="_blank">Link</a> to <code style="background: var(--codeSnippet); border-radius: 5px;">torch.gt()</code>.
               </p>
               <prism-editor class="codeblock" v-model="cnnAssets.reluBackward" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
               <p>
                  An example below. Backpropagation through a single transformation can be broken down to two metaphorical steps:
                  <br>
                  <br>
                  1) There is the local computation. For the convolutional backpass, this was
                  computing the local jacobian for <vue-mathjax :formula='`$f(x) = w^\\top x+b$`'></vue-mathjax>. For ReLU, this means doing the same the piecewise function:
                  <vue-mathjax :formula='`$$f(x) = \\begin{cases} 
                  x & \\text{if $x \\gt 0$} \\\\  
                  0 & \\text{otherwise} \\\\  
                  \\end{cases} $$`'></vue-mathjax>
                  which will provide 1's and 0's. Further shown below is max pooling where there's not much math and it strictly routes the upstream values.
                  <br>
                  <br>
                  2) Multiply that local computation by the upstream. I use <code style="background: var(--codeSnippet); border-radius: 5px;">dout</code> to refer to the upstream.
               </p>
               <prism-editor class="codeblock" v-model="cnnAssets.reluBackwardsExample" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>

               <div id="pooling_forward"></div>
               <div id="blogSubHeader">
                  Pooling Layer
               </div>
               <h2>Forward</h2>
               <p>
                  The pooling transformation is similar to the convolutional layer. A kernel that extends the full depth slides across the face of the input to "pool" together the sectioned values.
                  I show max pooling, but there are <a href="https://pytorch.org/docs/stable/nn.html#pooling-layers" target="_blank">other forms of pooling</a>. Even though the pooling kernel operates
                  on the full depth of the input, the pooling operation operates uniquely on each slice of the depth. So an arbitrary tensor, lets say [6x20x20], going through a pooling layer with
                  kernel of size 2 and stride 2 would output to [6x10x10].
                  <!-- <br>
                  <br>
                  Hyperparameters include:
                  <br>
                  <b>Pooling Kernel size</b>: Determines the width/height of the kernel
                  <br>
                  <b>Stride</b>: Determines the step distance of the kernel after each dot product
                  <br>
                  <b>Padding</b>: Adds a border to the input. Not common (to my knowledge), so the <code style="background: var(--codeSnippet); border-radius: 5px;">xpad</code> seen in the forward pass
                  in the convolutional layer is omitted. -->
               </p>
               <prism-editor class="codeblock" v-model="cnnAssets.poolForward" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
               <div id="pooling_backward"></div>
               <h2>Backward</h2>
               <p>
                  Backpass through a pooling transformation routes <code style="background: var(--codeSnippet); border-radius: 5px;">dout</code> values to the index of the largest value of the corresponding 
                  partition. Because pooling is a form of spatial <i>reduction</i>, on the backpass we have to upscale to produce a valid output tensor shape. Down below, I immediately produce the desired
                  shape for dx and populate it with zeros (line 24), then mutate the values of the desired index (line 26-40). 
               </p>
               <prism-editor class="codeblock" v-model="cnnAssets.poolBackward" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
               <p>
                  An example below. With pooling kernel size of 2 and stride 2, look how the values (<code style="background: var(--codeSnippet); border-radius: 5px;">dout</code>) that get through the backwards pass
                  are indexed to the maximum value of every 2x2 square with stride 2.
               </p>
               <prism-editor class="codeblock" v-model="cnnAssets.poolBackwardsExample" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
               <div id="thoughts"></div>
               <div id="blogSubHeader">
               Thoughts
               </div>
               <p>
                  I've been wanting to do a little post on CNNs for a roughly a year now. They've been relatively low priority compared to some of the other topics I discuss, but I think (and I state this
                  at the top of the page) CNNs are a <i>great</i> architecture to focus on when learning about machine learning - so the more I thought about them, the more I wanted to write about them.
                  The goal was to concretely breakdown the processes going on during the forward and backward pass of a CNN and how the tensor values change. There are a lot of bells and whistles to a
                  CNN and neural networks in general I did not talk about here, but that's now another topic added to the list of things I want to write about.
               </p>
               <p>
                  Ryan
               </p>
         </div>
         <themeSwitch />
         <toTop />
   </div>
</template>

<script>
// import axios from 'axios'
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'
import backdrop from '../backdrop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import toTop from '../../components/toTop.vue'
import { VueMathjax } from 'vue-mathjax'
import cnnjs from './assets/cnn'

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
      themeSwitch,
      'vue-mathjax': VueMathjax,
      PrismEditor

   },
   head: {
      title: {
         inner: 'The Transformations in a CNN'
      },
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'Forward & Backward of a CNN. I talk about the forward and backward pass of a Convolutional neural network with illustrations and codeblocks as examples.'
         },
         {
            name: 'keywords',
            content: 'convolutional neural networks, cnn, neural network, gradient, forward pass, backward pass, cnn transformations, computer vision'
         },
         {
            property: 'og:description',
            content: 'Forward & Backward of a CNN. I talk about the forward and backward pass of a Convolutional neural network with illustrations and codeblocks as examples.'
         }
      ],
      link: [
         {
            rel: 'canonical',
            href: 'https://ryli.design/blog/cnn'
         }
      ],
   },
   data() {
      return {
         cnnAssets: cnnjs,
         cnn_anim: require('../../assets/blog/cnn_anim.webm'),
      }
   },
   methods: {
      highlighter(code) {
        return highlight(code, languages.py); // languages.<insert language> to return html with markup
      },

      imageZoom(event) {
         // https://stackoverflow.com/questions/53737648/how-get-clicked-item-in-vue
         event.target.classList.toggle('scaledUp')
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

<style scoped src='./css/blog.css'>
</style>