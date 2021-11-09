<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Looking at RNN and then LSTM Architecture</p>
                  <p style="font-size: 20px; padding: 0 !important; ">11&#8226;6&#8226;2021</p>
               </div>
            </div>
            <p>
               <i>Before discussing LSTM's, I briefly talk about Vanilla RNN's.</i>
            </p>
            <div id="blogSubHeader">
               Recurrent Neural Networks
            </div>
            <p>
               Just as how a CNN's specialty is processing grid-like data such as images, an RNN specializes in procesing <i>sequential data</i> - data that can be discretized as steps in time - often referred to,
               as indicated by it's name, a sequence. Depending on the design and intended use of the RNN, we can parse a sequence in a handful of different ways. Below is a representation of a standard / Vanilla 
               RNN. Complimentary color coding for clarity.
            </p>
            <img id="img1000" style="box-shadow: none;" src="../../assets/blog/rnn4.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i><vue-mathjax :formula='`$x_t$`'></vue-mathjax> represents the input sequence, <vue-mathjax :formula='`$h_t$`'></vue-mathjax> the hidden states,
            <vue-mathjax :formula='`$y_t$`'></vue-mathjax> the prediction, and <vue-mathjax :formula='`$L_t$`'></vue-mathjax>, the individual loss</i></span>
            <p>
               A couple of "top level" things to look at. I discuss some of these points further below, but they're nice to acknowledge in the beginning; confusion is okay. <u>One:</u> every timestep function
               <vue-mathjax :formula='`$f_h$`'></vue-mathjax> requires, as arguments, it's corresponding input <vue-mathjax :formula='`$x_t$`'></vue-mathjax> and prior hidden state
               <vue-mathjax :formula='`$h_{t - 1}$`'></vue-mathjax> to produce the next hidden state <vue-mathjax :formula='`$h_t$`'></vue-mathjax>. <u>Two:</u> The gradients in backpropagation will be summed at each
               step as RNN's use shared weights at every timestep. <u>Three:</u> both the input and output sequence, shown as red and
               yellow respectively, are arbitrarily partitioned <i>t</i> times.
               This is one of a <i>"handful of different ways"</i> to represent the input and output for an RNN. <u>Three:</u> a inital hidden state, <vue-mathjax :formula='`$h_0$`'></vue-mathjax>, must be provided for the forward pass
               of an RNN. The initial hidden state is either learnt (the output of  network <i>x</i> can be used to to populate <vue-mathjax :formula='`$h_0$`'></vue-mathjax> in RNN <i>y</i> ) or set to 0.
               <u>Four:</u> the total loss is a sum over every individual loss.
            </p>
            <div id="blogSubHeader">
               Three: Sequence Processing
            </div>
            <p>
               The points above are ranked somewhat by importance. I currently consider understanding the transformations between states to be the most important, but I will start with the third point that discusses
               the input and output sequence for intuition. The picture above is referred to as a <i>"many to many"</i> RNN. Using the colors in the above image, it would be a <i>"red to yellow"</i> RNN. Depending on the task of the network,
               there are different ways of processing the data. For the many to many shown above , consider our input sequence to be frames of a video: <vue-mathjax :formula='`$x_1$`'></vue-mathjax> would be the first frame,
               <vue-mathjax :formula='`$x_2$`'></vue-mathjax> would be the second... and so on. For this type of many-to-many, our output at each timestep could then be some decision/classification
               based off the input at that same timestep. So our RNN would be producing some prediction for every frame of video. Below are different types of models for processing different sequences.
               Note that although labeling and some intricacies are omitted, the many to many show below is not the same as the one shown above.  
            </p>
            <img id="img1000" style="box-shadow: none;" src="../../assets/blog/types.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><b>Examples:</b> <i>one to one</i>: Image classification, <i>one to many</i>: Image captioning, <i>many to one</i>: Video classification, <i>many to many</i>:
            Machine translation <br> Captioning refers to a sequence of symbols. For image captioning our output would be a sequence of, ideally coherent, words describing what's happening in the image.
            Another example of a caption could be a sequence of letters, which at the end, would produce a word.</span>
            <div id="blogSubHeader">
               One: Forward Pass Transformations
            </div>
            <p>
               As mentioned above, a characteristic to RNN's is that weights are shared temporally. A simple Vanilla RNN can have three weight tensors: <vue-mathjax :formula='`$W_{hh}$`'></vue-mathjax>, <vue-mathjax :formula='`$W_{xh}$`'></vue-mathjax>,
               <vue-mathjax :formula='`$W_{hy}$`'></vue-mathjax> and only a couple of bias parameters <vue-mathjax :formula='`$b_h$`'></vue-mathjax> and <vue-mathjax :formula='`$b_y$`'></vue-mathjax>. Each of these parameters
               are recycled at each hidden step to compute either a local prediction or the next hidden step.
               It helps me to think of the index of tensors as <vue-mathjax :formula='`$W_{(from)\\;(to)}$`'></vue-mathjax>
               to visualize where that particular tensor belongs. Note that there are many bells and whistles you can add, generally to increase efficacy, which will also change the amount of parameters present - an
               example being attention. Excluding the loss function, the two transformations shown below are fundamental to a Vanilla RNN. 
            <p>
               <b>One:</b>
               <br>
               Transformation between hidden steps <vue-mathjax :formula='`$h_{t-1} \\rightarrow h_t$`'></vue-mathjax>
            </p>
            <vue-mathjax :formula='rnnStep'></vue-mathjax>
            <img id="img500" style="box-shadow: none;" src="../../assets/blog/graph.png" alt="">
            <prism-editor class="codeblock" v-model="toad" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               <b>Two:</b>
               <br>
               Transformation between hidden step and prediction <vue-mathjax :formula='`$h_{t} \\rightarrow \\hat{y}$`'></vue-mathjax>
            </p>
            <vue-mathjax :formula='yhatTransform'></vue-mathjax>
            <img id="img500" style="box-shadow: none;" src="../../assets/blog/graph2.png" alt="">
            <prism-editor class="codeblock" v-model="toad2" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
         <div id="blogSubHeader">
            Two: One Step Backwards
         </div>
         <img id="img500" style="box-shadow: none;" src="../../assets/blog/combinedgraphs.png" alt="">
         <span style="font-size:14px; padding-top: -10px;"><i>Combined picture of both computational graphs</i></span>
         <p>
            Time to go backwards. I first show the process <u>only going back only a single hidden step</u>. Afterwards I discuss fully propagating backwards <i>t</i> times to the first values.
            <br>
            <br>
            Here are the partials we're looking for: <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{W_{hy}}},
            \\frac{\\partial{L}}{\\partial{b_y}},
            \\frac{\\partial{L}}{\\partial{h_{t}}},
            \\frac{\\partial{L}}{\\partial{W_{hh}}},
            \\frac{\\partial{L}}{\\partial{h_{t-1}}},
            \\frac{\\partial{L}}{\\partial{b_h}},
            \\frac{\\partial{L}}{\\partial{W_{xh}}}$$`'></vue-mathjax>
            <br>
            Here are the transformations again:
            <vue-mathjax :formula='rnnStep'></vue-mathjax>
            <vue-mathjax :formula='yhatTransform'></vue-mathjax>
            <br>
            The first step is to look at the upstream gradient <vue-mathjax :formula='`$\\frac{\\partial{L_t}}{\\partial{\\hat{y_t}}}$`'></vue-mathjax>. This is the derivative of the loss wrt to the prediction
            of the model at the current timestep and the gradient is represented as the <i>output_grad</i>. We can now begin finding the desired gradients. Note that when differentiating wrt to a bias parameter, I sum along the Nth
            dimension to match the shape of said bias parameter.
            <br>
            <br>
            <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{W_{hy}}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{W_{hy}}}=output\\_grad\\;\\cdot h_t^\\top$$`'></vue-mathjax>
            <br>
            <span style="font-color: red;"><vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{b_y}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{b_y}}=\\sum^N{output\\_grad}$$`'></vue-mathjax>
            </span >
            <br>
            <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{h_t}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}=output\\_grad\\;\\cdot W_{hy}^\\top$$`'></vue-mathjax>
            <br>
            Everything beyond <vue-mathjax :formula='`$h_t$`'></vue-mathjax> runs through the element-wise <i>tanh</i> non-linearity, so I create an intermediary variable which I will call <vue-mathjax :formula='`$dtanh$`'></vue-mathjax>, that uses a hyperbolic identity:
            <vue-mathjax :formula='`$\\frac{\\mathrm{d}tanh(x)}{\\mathrm{d}} = sech^2(x) = 1-tanh^2(x)$`'></vue-mathjax> to find the derivative. I will also be multiplying it element-wise with
            <vue-mathjax :formula='`$\\frac{\\partial{L}}{\\partial{h_t}}$`'></vue-mathjax> to account for the preceeding partials in the chain rule. Doing this will provide more head space so I don't have to keep writing it down.
            In one succinct formula: <vue-mathjax :formula='`$ dtanh = \\frac{\\partial{L}}{\\partial{h_t}} \\odot (1-tanh^2(x))$`'></vue-mathjax>. For clarification, the <i>x</i> argument inside the <i>tanh</i> function
            is the argument in the forward pass at the current timestep.
            <br>
            <br>
            <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{W_{hh}}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}\\cdot\\frac{\\partial{h_t}}{\\partial{W_{hh}}}=dtanh\\;\\cdot h_{t-1}^\\top$$`'></vue-mathjax>
            <br>
            <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{h_{t-1}}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}\\cdot\\frac{\\partial{h_t}}{\\partial{h_{t-1}}}=dtanh\\;\\cdot W_{hh}^\\top$$`'></vue-mathjax>
            <br>
            <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{b_h}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}\\cdot\\frac{\\partial{h_t}}{\\partial{h_{t-1}}}=\\sum^N{dtanh}$$`'></vue-mathjax>
            <br>
            <vue-mathjax :formula='`$$\\frac{\\partial{L}}{\\partial{W_{xh}}} = \\frac{\\partial{L}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}}\\cdot\\frac{\\partial{h_t}}{\\partial{W_{xh}}}=dtanh\\;\\cdot x_t^\\top$$`'></vue-mathjax>
            <br>
         </p>
         <prism-editor class="codeblock" v-model="toad3" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
         <p>
            We can now implement backpropagation by repeating this process to reach the initial nodes.
            An important consideration is that because we're using the same weights throughout the network, to find the
            of the loss with respect to every parameter at each hidden state, we sum the weights at every timestep as we backpropagate. This is because for something like a many to many RNN, a weight tensor at an
            arbitrary timestep affects the individual output of every future timestep, so we calculate it's impact on each individual output by summing which represents a holistic direction for the network to step in to optimize.
            Looking at it in math, there's not much change. Just put a sigma that indexes through time in front of each gradient like <vue-mathjax :formula='`$\\sum^t\\frac{\\partial{L}}{\\partial{W_{hy}}}$`'></vue-mathjax>.
            <br>
            <br>
            Here it is in code:
         </p>
         <prism-editor class="codeblock" v-model="toad4" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
         <div id="blogSubHeader">
            Long Short Term Memory
         </div>
         <p>
            LSTM architecture became more popular from as problems became more evident in the RNN shown above. Actually, the problems are centered on the backwards pass, which I currently don't discuss.
         </p>
         </div>
         <toTop />
   </div>
</template>

<script>
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import { VueMathjax } from 'vue-mathjax'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      'vue-mathjax': VueMathjax,
      PrismEditor
   },
   data() {
      return {
         rnnStep: '$$f_h(h_{t-1}, x_t) = h_t = tanh(W_{hh}h_{t-1} + W_{xh}x_t + b_h)$$',
         yhatTransform: '$$f_y(h_{t}) = \\hat{y} = W_{hy}h_t + b_y$$',
         totalDeriv: `$$\\frac{\\partial{L}}{\\partial{h_t}} = 
            \\frac{\\partial{L_t}}{\\partial{\\hat{y_t}}}\\cdot\\frac{\\partial{\\hat{y_t}}}{\\partial{h_t}} +
            \\frac{\\partial{L}}{\\partial{h_{t+1}}}$$`,
         toad:
`  def rnn_step_forward(x, prev_h, Wx, Wh, b):
      # Vanilla RNN uses tanh
      # torch.tanh(x) applies an element-wise activation over it's input
      next_h = torch.tanh(prev_h.mm(Wh) + x.mm(Wx) + b)
      return next_h`,
         toad2:
`  def yhat(in_features, out_features, device, dtype):
      # Very simple linear transformation
      # https://pytorch.org/docs/stable/generated/torch.nn.Linear.html
      yhat = nn.Linear(in_features, out_features, device=device, dtype=dtype)
      return yhat`,
         toad3:
`  def oneStepBackwards(output_grad, cache):
      """
      Backward pass for a single timestep of a vanilla RNN.

      Inputs:
      - output_grad: Gradient of loss with respect to next hidden state, of shape (N, H)
      - cache: Cache object from the forward pass containing all local variables at t timestep
      """
      dWhy, dby, dht, dWhh, dprev_h, dbh, dWxh = None, None, None, None, None, None, None
      Why, by, ht, Whh, prev_h, bh, Wxh, next_h = cache

      # Gradients
      dWhy = output_grad.mm(ht.t())
      dby = torch.sum(output_grad, 0)
      dht = output_grad.mm(Why.t())

      # Non-linearity & upstream 
      dtanh = output_grad * (1 - next_h**2)
      
      dWhh = prev_h.t().mm(dtanh)
      dprev_h = dtanh.mm(Wh.t())
      dbh = torch.sum(dtanh, 0)
      dWxh = x.t().mm(dtanh)
      
      return dWhy, dby, dht, dWhh, dbh, dWxh, dprev_h`,
         toad4:
`  def rnn_backward(dh, cache):
      """
      Compute the backward pass for a vanilla RNN over an entire sequence of data.

      Inputs:
      - dh: Upstream gradients of all hidden states, of shape (N, T, H).
            Dimensions are ([minibatch size], [sequence length], [hidden_dim])
      
      NOTE: 'dh' contains the upstream gradients produced by the 
      individual loss functions at each timestep, *not* the gradients
      being passed between timesteps (which you'll have to compute yourself
      by calling rnn_step_backward in a loop).
      """
      dWhy, dby, dht, dWhh, dprev_h, dbh, dWxh = None, None, None, None, None, None, None

      # Index through the sequences in reverse starting at the last
      for i in range(dh.shape[1]-1, -1, -1):

         # Initialize dprev_h to be the upstream gradient of our last sequence
         if (i == dh.shape[1] - 1):
            dprev_h = dh[:, i, :]
         # After the first step backwards, assign dprev_h to b
         else:
            dprev_h += dh[:, i, :]

         _dWhy, _dby, _dht, _dWhh, _dbh, _dWxh, dprev_h = oneStepBackwards(dprev_h, cache[i])

         # Initialize gradients as zero tensors with corresponding shape
         if (i == dh.shape[1] - 1):
            dWhy = torch.zeros_like(_dWhy).to(_dWhy.device).to(_dWhy.dtype)
            dby = torch.zeros_like(_dby).to(_dWhy.device).to(_dWhy.dtype)
            dht = torch.zeros_like(_dht).to(_dWhy.device).to(_dWhy.dtype)
            dWhh = torch.zeros_like(_dWhh).to(_dWhy.device).to(_dWhy.dtype)
            dbh = torch.zeros_like(_dbh).to(_dWhy.device).to(_dWhy.dtype)
            dWxh = torch.zeros_like(_dWxh).to(_dWhy.device).to(_dWhy.dtype)

         dx[:,i,:] = dx1
         dh0 = dprev_h
         dWx += dWx1
         dWh += dWh1
         db += db1

         return dx, dh0, dWx, dWh, db`
      }
   },
   methods: {
      highlighter(code) {
        return highlight(code, languages.py); // languages.<insert language> to return html with markup
      }
   },
   mounted () {


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
   font-size: 28px;
}

p {
   padding: 25px 7vw !important;
   line-height: 2;
}

a {
   color: var(--white);
   text-decoration: underline;
   font-style: oblique;
}

h2 {
   font-size: 16px;
   padding-top: 10px;
   margin: 0;
   font-weight: 200;
}

#blogSubHeader {
   font-family: 'Inconsolata', sans-serif;
   font-size: 22px;
   padding-top: 50px;
}

</style>