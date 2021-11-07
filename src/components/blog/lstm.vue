<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Looking at LSTM Architecture</p>
                  <p s tyle="font-size: 20px; padding: 0 !important; ">10&#8226;6&#8226;2021</p>
               </div>
            </div>
            <p>
               <i>Before discussing LSTM's, I'm going to briefly talk about Vanilla RNN's.</i>
            </p>
            <div id="blogSubHeader">
               Recurrent Neural Networks
            </div>
            <p>
               Just as how a CNN's specialty is processing grid-like data such as images, an RNN specializes in procesing <i>sequential data</i> - data that can be discretized as steps in time - often referred to,
               as indicated by it's name, a sequence. Depending on the design and intended use of the RNN, we can parse a sequence in a handful of different ways. Below is a representation of a standard / Vanilla 
               RNN. Complimentary color coding for clarity.
            </p>
            <img id="img1000" style="box-shadow: none;" src="../../assets/blog/rnn2.png" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i>x_t represents the Input sequence, h_t the hidden states, W_ the parameters, y_t the prediction, and L_t, the individual loss</i></span>
            <p>
               A couple of "top level" things to look at. I discuss all of these points further below, but they're nice to acknowledge in the beginning; confusion is okay. <u>One:</u> every timestep <vue-mathjax :formula='`$h_t$`'></vue-mathjax>
               requires as arguments it's corresponding input <vue-mathjax :formula='`$x_t$`'></vue-mathjax> and prior hidden state <vue-mathjax :formula='`$h_{t - 1}$`'></vue-mathjax>. <u>Two:</u> the input sequence, in red, is partitioned <i>t</i> times.
               This is one of a <i>"handful of different ways"</i> to represent the input for an RNN. <u>Three:</u> a inital hidden state, <vue-mathjax :formula='`$h_0$`'></vue-mathjax>, must be provided for the forward pass
               of an RNN. The initial hidden state is either learn (the output of a network may go through a feature extraction to populate <vue-mathjax :formula='`$h_0$`'></vue-mathjax>) or set to 0.
               <u>Four:</u> the total loss is a sum over every individual loss.
            </p>
            <p>
               The points above are ranked somewhat by importance. I currently consider understanding the transformations between states to be the most important, but I will start with the second point that discusses
               the input sequence for intuition. The picture above is referred to as a <i>"many-to-many"</i> RNN. Using the colors in the above image, think of it like <i>"red-to-yellow"</i> RNN. Depending on the task of the network,
               there are different ways of processing the data. For the many-to-many shown above , consider our input sequence to be frames of a video: <vue-mathjax :formula='`$x_1$`'></vue-mathjax> would be the first frame,
               <vue-mathjax :formula='`$x_2$`'></vue-mathjax> would be the second, and so on. For this type of many-to-many, our output at each timestep could then be some decision/classification
               based off the input at that same timestep. Below are other representations of processing data. 
            </p>
            <vue-mathjax :formula='formula'></vue-mathjax>
         </div>
         <toTop />
   </div>
</template>

<script>
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import { VueMathjax } from 'vue-mathjax'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      'vue-mathjax': VueMathjax
   },
   data() {
      return {
         formula: '  $$x$$',
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