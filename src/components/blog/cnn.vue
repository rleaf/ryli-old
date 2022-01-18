<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Characteristics of a CNN <i>**In the works (1/12/22)**</i></p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">1 &#8226; 12 &#8226; 2022</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <p>
               <i>Hello, everything here is likely to change. I like pushing these, even thought they're incomplete, for the curious to see workflow.</i>
            </p>
            <!-- <p>
               On the journey to learn about neural networks, Convolutional neural networks (henceforth shortened to CNNs), serve as a very solid transition from Multilayered
               perceptrons to other network architectures. I believe this because the CNN architecture captures the generalizing capabilities and overall flexibility present
               when working with neural networks, yet provides 
            </p> -->
            <p>
               Convolutional neural networks are an architecture of neural nets designed to process grid-like data such as images. They're a nice architecture to move onto
               in the journey of learning neural nets because they help show the innate generalizing capabilites of networks, but not, in my opinion, too much such that it easily
               confuses. At the time of writing this, my intentions are not to give a rundown of what CNNs are. My post about <a href="rnn" target="_blank">RNNs</a>
               is, I think, a good example of what I mean by a "rundown". Instead I'm going to write pretty much exclusively about the transformations between layers in a CNN.
               
               


            </p>
            <!-- <p>
               Before going into CNNs, understanding "grid-like" data is just as easy as it is important. Images are probably the most popular examples, so throughout this post I will default to them.
               Below is an image I took at <a href="https://ryli.design/barnegat" target="_blank">Barnegat Light</a> and is also a simple illustration clarifying how
               images classify as a grid-like input. <b>Colored RGB</b> images have their 3 respsective channels populated with pixel integer values (0-255 inclusive) that tell how much of either red, green, or blue
               belongs at that location. Because of this, colored images can be represented as a 3 dimensional tensor and used as input for CNNs. It may help as well to think of the pixels as 1x3 vectors that extend
               through the depth/channels and are organized accordingly to the image.
            </p> -->
            <p>
               When understanding CNNs, colored RGB images are a solid example to think of as input because they are able to easily <i>and intuitively</i>
               be represented as 3d tensors. Whenever I talk about inputs for a CNN here, I will be thinking of colored images.
            </p>
            <img id="img800" style="box-shadow: none;" src="../../assets/blog/cnnImage.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i>On the left shows the image isolated to the 3 color channels. When layered and blended properly, shown on the right, we get a properly colored image.</i></span>
            <div id="blogSubHeader">
               Deconstructing
            </div>
            <p>
               I'm going to break down and talk about a CNN by transformations. As of 1/12/22 (mm/dd/yy), that means I will discuss:
               <br>- <a href="#convolution">Convolution</a>
               <br>- <a href="#activation">Activation</a>
               <br>- <a href="#pooling">Pooling</a>
            </p>
            <section id="convolution">
               <div id="blogSubHeader">
                  Convolutional Layer
               </div>
            </section>
               <h2>Forward</h2>
               <p>
                  CNNs, similar to MLPs operate under the same archetype of <vue-mathjax :formula='`$w^\\top x+b$`'></vue-mathjax>, except are designed to <i>preserve spatial
                  structure</i>. Because there is no dimension reduction, to deal with these high dimensional inputs, the weight matrix <i>w</i>, also frequently referred to as a <i>kernel</i>
                  or <i>filter</i> operates on a portion of the input by taking the dot product
                  then convolves/slides/translates to the next portion. The kernel usually extends to the full depth of the input; there are times
                  when this is not true. The output of the series of dot products composes the <i>activation map</i>. As the input traverses through a CNN, it is typically expected for
                  it to get progressively "<a href="https://i.imgur.com/H1pU0yu.png" target="_blank">stumpier</a>",
                  where what it loses in width & height grows in depth. The linked image shows 4 activation maps, producing a 4x4x4 output, from the original 3x5x5 input.
                  <br>
                  <br>
                  Hyperparameters include:
                  <br>
                  <b>Number of Filters</b>: It is standard for a single convolutional layer to house many filters
                  <br>
                  <b>Kernel size</b>: Determines the width/height of the kernel
                  <br>
                  <b>Stride</b>: Determines the step distance of the kernel after each dot product
                  <br>
                  <b>Padding</b>: Adds a border to the input to ameliorate edge learning. By enabling the kernel to "sit" offset with the input, edges have greater coverage of the kernel.
               </p>
               <video id="img500" autoplay loop :src="cnn_anim" style="padding-bottom: 5px !important;"></video>
               <span style="font-size:14px; padding-top: -10px;"><i>Simple animation showing a 3x2x2 kernel interacting with a 3x5x5 input. Stride is 1 and there is no padding. <br>
               Right click on animation to toggle controls or open in a new tab to enlarge.</i></span>
               <p>
                  Code breakdown for a forward pass in a convolutional layer. PyTorch does have a <a href="https://pytorch.org/docs/1.9.1/generated/torch.nn.Conv2d.html" target="_blank">class</a> that does
                  this must faster, but for understanding - I am a fan of what's below. The actual operations occur within the nested for loops.
               </p>
               <prism-editor class="codeblock" v-model="cnnForward" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
               <br>
               <br>
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
                  1) Gradients, ie: <vue-mathjax :formula='`$\\frac{\\partial{f}}{\\partial{x}}$`'></vue-mathjax>, matche dimensionality of what is being differentiated wrt to.
                  <br>
                  2) Calculating the entire gradient is a running sum (note the <code style="background: #242424; border-radius: 5px;">+=</code> on lines 39, 46, and 47 where the gradient formulas are shown).
                  <br>
                  3) Make sure to properly "locate" where a gradient belongs. Consider what needs to be indexed in order to compute a gradient. For instance,
                  <code style="background: #242424; border-radius: 5px;">db</code> on line 39 <i>can</i> be next to <code style="background: #242424; border-radius: 5px;">dw</code> and <code>dx</code>,
                  but unlike <code style="background: #242424; border-radius: 5px;">dw</code> and <code style="background: #242424; border-radius: 5px;">dx</code>, it doesn't <i>need</i> to be since we're only indexing along f.
               </p>

               <prism-editor class="codeblock" v-model="cnnBackward" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>


            <section id="activation">
               <div id="blogSubHeader">
                  Activation
               </div>
               <h2>Forward</h2>
               <p>
                  Toads
               </p>
               <h2>Backward</h2>
               <p>
                  Toads
               </p>
            </section>

            <section id="pooling">
               <div id="blogSubHeader">
                  Pooling Layer
               </div>
               <h2>Forward</h2>
               <p>
                  Toads
               </p>
               <h2>Backward</h2>
               <p>
                  Toads
               </p>
            </section>

            <p>
               - Code and breakdown of forwards pass
               <br>
               - Code and breakdown of backward pass
               <br>
               - <span style="text-decoration: line-through">Any tricks? (batch norm / l2 reg / kaiming / ...) w/ code + breakdown too</span>
               Make independent blog about the bells & whistles (regularization strats / initialization / optimization / cool stuff :) ) 
               <br>

            </p>
            <vue-mathjax :formula='formula'></vue-mathjax>
         </div>
         <toTop />
   </div>
</template>

<script>
// import axios from 'axios'
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import { VueMathjax } from 'vue-mathjax'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      'vue-mathjax': VueMathjax,
      PrismEditor

   },
   metaInfo: {
      title: 'Characteristics of a CNN',
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
         blogs: [],
         error: null,
         formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
         jacobian: '$$\\begin{bmatrix}a & b\\\\ c & d\\end{bmatrix}$$',
         cnn_anim: require('../../assets/blog/cnn_anim.webm'),
         spain:
`  def rain(location):
      if(location == 'spain'):
         return true
      else:
         return false`,
         cnnForward:
`  def forward(x, w, b, conv_param):
      """
      - x: Input data of shape (N, C, H, W). The input is 4 dimensional here because
        NNs usually operate on batches of data: (Batch size x Channel x Height x Width).
      - w: Filters of shape (F, C, HH, WW). Aka: (Fiter count x Channel x Filter Height x Filter Width)
      - b: Biases, of shape (F)
      - conv_param: A dictionary with the following keys:
      - 'stride': The number of pixels between adjacent receptive fields in the
      horizontal and vertical directions.
      - 'pad': The number of pixels that will be used to zero-pad the input. 

      Returns a tuple of:
      - out: Output data, of shape (N, F, H', W') where H' and W' are given by
      H' = 1 + (H + 2 * pad - HH) / stride
      W' = 1 + (W + 2 * pad - WW) / stride
      - cache: (x, w, b, conv_param)
      """

      # Getting shape sizes. We don't actually need w.shape[1] (channels), so that is omitted with '_'.
      N, C, H, W = x.shape
      F, _, HH, WW = w.shape

      # Get hyperparameters. Default to stride = 1, padding = 0.
      stride = conv_param.get('stride', 1)
      pad = conv_param.get('pad', 0)

      # Formula for calculating the width & height of activation map with hyperparameters.
      hPrime = 1 + (H + 2 * pad - HH) // stride
      wPrime = 1 + (W + 2 * pad - WW) // stride

      # Wrap input x with pad: https://pytorch.org/docs/stable/generated/torch.nn.functional.pad.html
      xpad = torch.nn.functional.pad(x, (pad,pad,pad,pad)).to(x.dtype).to(x.device)

      # Define output/activation map shape
      out = torch.zeros(N, F, hPrime, wPrime).to(x.dtype).to(x.device)

      # For each image in the batch
      for n in range(N):
         # For each filter
         for f in range(F):
            # Index along the height of activation map
            for h in range(0, hPrime):
               # Index along the width of activation map
               for W in range(0, wPrime):
                  # CNN takes the sum of the elementwise multiplication (dot product) between kernel
                  # and input and then adds the bias associated with that filter.
                  #
                  # Number of bias always corresponds 1:1 with number of filters
                  #
                  # We are demarcating the portion of the input to dot product with. Referring back
                  # to the animation above may help.
                  out[n, f, h, W] = torch.sum(xpad[n, :, h*stride:h*stride+HH, W*stride:W*stride+WW] * w[f, :, :, :]) + b[f]

      cache = (x, w, b, conv_param)
      return out, cache`,
      cnnBackward:
`  def backward(dout, cache):
      """
      Inputs:
      - dout: Upstream derivatives.
      - cache: A tuple of (x, w, b, conv_param).

      Returns a tuple of:
      - dx: Gradient with respect to x
      - dw: Gradient with respect to w
      - db: Gradient with respect to b
      """

      # Same as before, get shape sizes and hyperparameters stored in cache.
      x, w, b, conv_param = cache
      N, C, H, W = x.shape
      F, _, HH, WW = w.shape

      # Same as before, get the stride and padding. If DNE, set to 1 and 0 respectively.
      stride = conv_param.get('stride', 1)
      pad = conv_param.get('pad', 0)

      # Also same as forward pass
      xpad = torch.nn.functional.pad(x, (pad, pad, pad, pad)).to(x.dtype).to(x.device)
      hPrime = 1 + (H + 2 * pad - HH) // stride
      wPrime = 1 + (W + 2 * pad - WW) // stride

      dxpad = torch.zeros_like(xpad).to(x.dtype).to(x.device)
      dx = torch.zeros_like(x).to(x.dtype).to(x.device)
      dw = torch.zeros_like(w).to(x.dtype).to(x.device)
      db = torch.zeros_like(b).to(x.dtype).to(x.device)

      # For each image in the batch
      for n in range(N):
         # For each filter
         for f in range(F):
            # Derivative wrt bias. Since there is only 1 bias per filter, we can evaluate the gradient when
            # indexing through those filters, F. The gradient wrt to bias is simply dout indexed corresponding
            # to the respective bias.
            db[f] += torch.sum(dout[n, f])
            # Indexing along the height
            for h in range(0, hPrime):
               # Indexing a long the width
               for i in range(0, wPrime):
                  # Note how we deal with padding & striding. Striding should be intuitive, but for padding
                  # we use dxpad as an intermediary step and then on line 49, clip the padding to get dx. 
                  dw[f] += xpad[n, :, h * stride:h * stride + HH, i * stride:i * stride + WW] * dout[n, f, h, i]
                  dxpad[n, :, h * stride:h * stride + HH, i * stride:i * stride + WW] += w[f] * dout[n, f, h, i]
      
      dx = dxpad[:, :, pad:pad+H, pad:pad+W]
      return dx, dw, db`
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

#curriculumBody {
   width: auto !important;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}

#blogHeader {
   padding-bottom: 20px;
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
   font-size: 16px;
   font-style: italic;
   padding-top: 10px;
   margin: 0;
   font-weight: 200;
}

#blogSubHeader {
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

</style>