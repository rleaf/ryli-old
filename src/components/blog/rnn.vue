<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">A Thorough Explanation to Recurrent Neural Networks</p>
                  <p style="font-size: 18px; padding: 0 !important; ">11 &#8226; 6 &#8226; 2021</p>
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#sequenceprocessing">Sequence Processing</a></li>
                  <li><a href="#forward">Forward Pass Transformations</a></li>
                  <ul>
                     <li><a href="#forwardhidden">Between hidden steps</a></li>
                     <li><a href="#forwardpred">Between hidden steps & prediction</a></li>
                  </ul>
                  <li><a href="#onestepback">One Step Backwards</a></li>
                  <li><a href="#fullback">All the way Back</a></li>
                  <li><a href="#rnn_thoughts">Thoughts</a></li>
               </ul>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Recurrent Neural Networks: Introduction
            </div>
            <p>
               Just as how a CNN's specialty is processing grid-like data such as images, a RNN specializes in procesing <i>sequential data</i> - data that is discretized. A very common example of a sequence
               could be a sentence. Each word in a sentence stands wholly on its own but when strung together constitute something new. Depending on the design and intended use of the RNN, we can parse a sequence in a
               handful of different ways. This "parsing" is specifically <a href="#sequenceprocessing">sequence processing</a>, which I briefly talk
               about soon. I want to mention this now however since there is a lot of nuance in the math between different types of sequence processing. Because of this, the sections
               <a href="#forward">Forward Pass Transformations</a> and beyond presume the type of sequence shown immediately below called a <i>many to many</i>.
            </p>
            <img id="img1000" @click="imageZoom" style="box-shadow: none;" src="../../assets/blog/rnn4.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i><vm :formula='`$x_t$`'></vm> represents the input sequence, <vm :formula='`$h_t$`'></vm> the hidden states,
            <vm :formula='`$y_t$`'></vm> the prediction, and <vm :formula='`$L_t$`'></vm>, the individual loss</i></span>
            <p>
               A couple of "top level" things to look at. I discuss some of these points further below, but they're nice to acknowledge in the beginning - confusion is okay. <u>One:</u> every timestep function
               <vm :formula='`$f_h$`'></vm> requires, as arguments, it's corresponding input <vm :formula='`$x_t$`'></vm> and prior hidden state
               <vm :formula='`$h_{t - 1}$`'></vm> to produce the next hidden state <vm :formula='`$h_t$`'></vm>. <u>Two:</u> The gradients in backpropagation will be summed at each
               step as RNNs use shared weights at every timestep. <u>Three:</u> both the input and output sequence, shown as red and
               yellow respectively, are arbitrarily partitioned <i>t</i> times.
               This is one of a <i>"handful of different ways"</i> to represent the input and output for an RNN. <u>Four:</u> a inital hidden state, <vm :formula='`$h_0$`'></vm>, must be provided for the forward pass
               of an RNN. The initial hidden state is either learnt (the output of  network <i>x</i> can be used to to populate <vm :formula='`$h_0$`'></vm> in RNN <i>y</i> ) or set to 0.
               <u>Five:</u> the total loss is a sum over every individual loss.
            </p>
            <div id="sequenceprocessing"></div>
            <div id="blogSubHeader">
               Sequence Processing
            </div>
            <p>
               The picture above is referred to as a <i>"many to many"</i> RNN. Depending on the task of the network,
               there are different ways of processing the data. For the many to many shown above, consider a video as input where the frames of the video compose the sequence. <vm :formula='`$x_1$`'></vm> would be the first frame,
               <vm :formula='`$x_2$`'></vm> would be the second... and so on. For this type of many-to-many, our output at each timestep could then be some decision/classification
               based off the input at that same timestep. So our RNN would be producing some output for every frame of video. Below are different types of models for processing different sequences.
               Note that although labeling and some intricacies are omitted, the many to many show below is not the same as the one shown above.  
            </p>
            <img id="img1000" @click="imageZoom" style="box-shadow: none;" src="../../assets/blog/types.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><b>Examples:</b> <i>one to one</i>: Image classification, <i>one to many</i>: Image captioning, <i>many to one</i>: Video classification, <i>many to many</i>:
            Machine translation <br> Captioning refers to a sequence of symbols. For image captioning our output would be a sequence of, ideally coherent, words describing what's happening in the image.
            Another example of a caption could be a sequence of letters, which at the end, would produce a word.</span>
            <div id="forward"></div>
            <div id="blogSubHeader">
              Forward Pass Transformations
            </div>
            <p>
               As mentioned above, a characteristic to RNNs is that weights are shared temporally, between all time steps. A simple Vanilla RNN can have three weight tensors: <vm :formula='`$W_{hh}$`'></vm>, <vm :formula='`$W_{xh}$`'></vm>,
               <vm :formula='`$W_{hy}$`'></vm> and only a couple of bias parameters <vm :formula='`$b_h$`'></vm> and <vm :formula='`$b_y$`'></vm>. Each of these parameters
               are recycled at each hidden step to compute either a local prediction or the next hidden step.
               It helps me to think of the index of tensors as <vm :formula='`$W_{(from)\\;(to)}$`'></vm>
               to visualize where that particular tensor belongs. Excluding the loss function, the two transformations shown below are fundamental to a Vanilla RNN. 
            </p>
            <div id="forwardhidden"></div>
            <h2>One:</h2>
            <p>
               Transformation between hidden steps <vm :formula='`$h_{t-1} \\rightarrow h_t$`'></vm>
            </p>
            <vm :formula='rnnAssets.rnnStep'></vm>
            <img id="img500" @click="imageZoom" style="box-shadow: none;" src="../../assets/blog/graph.png" alt="">
            <prism-editor class="codeblock" v-model="rnnAssets.toad" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="forwardpred"></div>
            <h2>Two:</h2>
            <p>
               Transformation between hidden step and prediction <vm :formula='`$h_{t} \\rightarrow \\hat{y}$`'></vm>
            </p>
            <vm :formula='rnnAssets.yhatTransform'></vm>
            <img id="img500" @click="imageZoom" style="box-shadow: none;" src="../../assets/blog/graph2.png" alt="">
            <prism-editor class="codeblock" v-model="rnnAssets.toad2" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="onestepback"></div>
            <div id="blogSubHeader">
               One Step Backwards
            </div>
            <img id="img500" @click="imageZoom" style="box-shadow: none;" src="../../assets/blog/combinedgraphs.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i>Combined picture of both computational graphs</i></span>
            <p>
               Time to go backwards. Before talking about anything, there are a handful of idiosyncrasies between the different sequence styles of RNNs. <b>Everything below assumes a many to many sequence</b>, very similar
               to the first picture at the top of this page. This is important because the process of computing some gradients is different between sequence styles.
               <br>
               <br>
               I first show the process of <u>only going back only a single hidden step</u>. Afterwards I discuss fully propagating backwards <i>t</i> times to the first values.
               <br>
               <br>
               Here are the partials we're looking for: <vm :formula='`$$\\frac{\\partial{L}}{\\partial{W_{hy}}},
               \\frac{\\partial{L}}{\\partial{b_y}},
               \\frac{\\partial{L}}{\\partial{h_{t}}},
               \\frac{\\partial{L}}{\\partial{W_{hh}}},
               \\frac{\\partial{L}}{\\partial{h_{t-1}}},
               \\frac{\\partial{L}}{\\partial{b_h}},
               \\frac{\\partial{L}}{\\partial{W_{xh}}}$$`'></vm>
               <br>
               Here are the transformations again:
               <vm :formula='rnnAssets.rnnStep'></vm>
               <vm :formula='rnnAssets.yhatTransform'></vm>
               <br>
               Above are the local gradients. The upstream gradient will be the derivative of the loss wrt to the prediction
               of the model at the subsequent timestep and will be represented as <i>output_grad</i>. We can now begin finding the desired gradients. Note that when differentiating wrt to a bias parameter, I sum along the Nth
               dimension to match the shape of said bias parameter.
               <br>
               <br>
               <vm :formula='`$$\\frac{\\partial{L}}{\\partial{W_{hy}}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{W_{hy}}}=output\\_grad\\;\\cdot h_t^\\top$$`'></vm>
               <br>
               <span style="font-color: red;"><vm :formula='`$$\\frac{\\partial{L}}{\\partial{b_y}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{b_y}}=\\sum^N{output\\_grad}$$`'></vm>
               </span >
               <br>
               <vm :formula='`$$\\frac{\\partial{L}}{\\partial{h_t}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}=output\\_grad\\;\\cdot W_{hy}^\\top$$`'></vm>
               <br>
               Everything beyond <vm :formula='`$h_t$`'></vm> runs through the element-wise <i>tanh</i> non-linearity so I create an intermediary variable which I will call <vm :formula='`$dtanh$`'></vm> that uses a hyperbolic identity:
               <vm :formula='`$\\frac{\\mathrm{d}tanh(x)}{\\mathrm{d}} = sech^2(x) = 1-tanh^2(x)$`'></vm> to simplify finding the derivative since <vm :formula='`$tanh(x)$`'></vm> is already provided to us in from the forward pass.
               For clarification, the <i>x</i> argument inside the <i>tanh</i> function is the argument in the forward pass at the current timestep.
               <br>
               <br>
               <vm :formula='`$$\\frac{\\partial{L}}{\\partial{W_{hh}}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}\\cdot\\frac{\\partial{h_t}}{\\partial{W_{hh}}}=dtanh\\;\\cdot h_{t-1}^\\top$$`'></vm>
               <br>
               <vm :formula='`$$\\frac{\\partial{L}}{\\partial{h_{t-1}}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}\\cdot\\frac{\\partial{h_t}}{\\partial{h_{t-1}}}=dtanh\\;\\cdot W_{hh}^\\top$$`'></vm>
               <br>
               <vm :formula='`$$\\frac{\\partial{L}}{\\partial{b_h}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}\\cdot\\frac{\\partial{h_t}}{\\partial{h_{t-1}}}=\\sum^N{dtanh}$$`'></vm>
               <br>
               <vm :formula='`$$\\frac{\\partial{L}}{\\partial{W_{xh}}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}\\cdot\\frac{\\partial{h_t}}{\\partial{W_{xh}}}=dtanh\\;\\cdot x_t^\\top$$`'></vm>
               <br>
            </p>
            <prism-editor class="codeblock" v-model="rnnAssets.toad3" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="fullback"></div>
            <div id="blogSubHeader">
               Full Backpropagation
            </div>
            <p>
               We can now implement backpropagation by repeating this process to reach the initial nodes. (Remember above where I talked about the idiosyncrasies in computing gradients between sequence styles? 
               This second concern is an example of one).
               A couple of important concerns:
               <br>
               <br>
               First: Because we're using the same weights throughout the network, to find 
               the loss with respect to every parameter at each hidden state, we sum the weights at every timestep as we backpropagate. This is because for something like a many to many RNN, a weight tensor at an
               arbitrary timestep affects the individual output of every future timestep. Summing the gradients at each timestep as we backpropagate calculates the total impact the weight tensor had on those future outputs.
               <br>
               <br>
               Second: As we proceed to the next hidden state during backpropagation, there can be a "redundancy" of computed gradients. To be more concrete, lets say we've computed the gradients at time step <vm :formula='`$h_3$`'></vm>
               of a many to many styled RNN.
               As we proceed to find the gradients at time step <vm :formula='`$h_2$`'></vm>, the gradient <vm :formula='`$\\frac{\\partial{L}}{\\partial{h_{t-1}}}$`'></vm> from time step <vm :formula='`$h_3$`'></vm>
               overlaps with <vm :formula='`$\\frac{\\partial{L}}{\\partial{h_{t}}}$`'></vm> at time step <vm :formula='`$h_2$`'></vm>. This isn't a problem, just food for thought. Similar to the resolution in the first
               concern, we simply sum the redundant gradients.
               <br>
               <br>
               Although both concerns are resolved in the same manner, the philosophy behind <i>why</i> is a little different. The first is a summation of a parameter's gradient at each time step - simple enough.
               The second is a series of summing two overlapping, but different, gradients. Even though <vm :formula='`$\\frac{\\partial{L}}{\\partial{h_{t-1}}}$`'></vm> and <vm :formula='`$\\frac{\\partial{L}}{\\partial{h_{t}}}$`'></vm>
               calculate the gradient wrt to the same variable between two backward steps, <vm :formula='`$\\frac{\\partial{L}}{\\partial{h_{t-1}}}$`'></vm> computes it's value from all upstream gradients
               through <vm :formula='`$f_h$`'></vm> while <vm :formula='`$\\frac{\\partial{L}}{\\partial{h_{t}}}$`'></vm> computes it's value from the local loss through 
               <vm :formula='`$f_y$`'></vm>.
            </p>
            <prism-editor class="codeblock" v-model="rnnAssets.toad4" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="rnn_thoughts"></div>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <p>
               I originally wrote this wanting to talk about LSTM... I'll still probably make one about LSTM, now I just have an excuse to not make it as detailed. Something about RNNs though is that a lot of sources
               seem to have different information on them. Some people use a linear transformation between <vm :formula='`$h_t$`'></vm> and <vm :formula='`$\\hat{y}_t$`'></vm> as I did, 
               while others use non-linear transformations (tanh, relu, sigmoid, etc...). Some explanations on RNNs don't even use a transformation - which makes sense pedagogically, but could be a detriment as well. Understanding
               backpropagation tripped me up for a couple of hours, but it helps to think about things <i>very</i> slowly. The summing for the parameters wasn't difficult to grasp, but the section where I talked about summing
               two unique gradients because of a redundancy was a little annoying. Felt nice figuring it out though. Feel free to reach out. I'm going to bed :).
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
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import { VueMathjax } from 'vue-mathjax'
import rnnjs from './assets/rnn'

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
      'vm': VueMathjax,
      PrismEditor
   },
   head: {
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: `A discussion about the philosophy of a recurrent neural network and both it's forward and backward transformations. Accompanied with code, mathematical explanation, and visuals, I go into detail about the popular transformations and focus heavily on the intuition behind some operations.`,
         },
         {
            name: 'keywords',
            content: 'recurrent neural network, rnn, math, differentiation, forward pass, backward pass, computational graph, derivatives, pain, gradients, python, machine learning, ml, artificial intelligence, ai'
         },
         {
            property: 'og:description',
            content: `A discussion about the philosophy of a recurrent neural network and both it's forward and backward transformations. Accompanied with code, mathematical explanation, and visuals, I go into detail about the popular transformations and focus heavily on the intuition behind some operations.`,
         }
      ],
      link: [
         {
            rel: 'canonical',
            href: 'https://ryli.design/blog/rnn'
         }
      ]
   },

   data() {
      return {
         rnnAssets: rnnjs
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
   }
}
</script>

<style scoped src='./css/blog.css'>
</style>