<template>
   <div id="landing">  
      <!-- <backdrop /> -->
      <div id="textContainerHeader">
      </div>
      <div id="curriculumBody">
         <div id="curriculumHeader">
            <i style="font-size: 18px;">A place for talking...</i>
         </div>
         <p>
            Usually it'll be about math, food, music, design, ml/ai, dev, and the things in between.
         </p>
         <div id="links">

            <li><router-link :to="{ name: 'elbo'}">Tractability and Optimization of the Variational Autoencoder</router-link></li>
            <p class="date">7/8/22</p>
            <p class="blogdescription">
               {{description.elbo}}
            </p>
            <li><router-link :to="{ name: 'dklmvgaus'}">KL Divergence Between Multivariate Gaussians</router-link></li>
            <p class="date">6/27/22</p>
            <p class="blogdescription">
               {{description.dklmvgaus}}
            </p>
            <li><router-link :to="{ name: 'entropy'}">Entropy in Machine Learning</router-link></li>
            <p class="date">6/11/22</p>
            <p class="blogdescription">
               {{description.entropy}}
            </p>
            <li><router-link :to="{ name: 'transformer'}">Transformers Deconstructed and Explained</router-link></li>
            <p class="date">5/4/22</p>
            <p class="blogdescription">
               {{description.transformers}}
            </p>
            <li><router-link :to="{ name: 'cnn'}">The Forward and Backward of a Convolutional Neural Network</router-link></li>
            <p class="date">1/12/22</p>
            <p class="blogdescription">
               {{description.cnn}}
            </p>
            <li><router-link :to="{ name: 'bigo'}">Introduction to Big "Oh" Notation</router-link></li>
            <p class="date">12/20/21</p>
            <p class="blogdescription">
               {{description.bigo}}
            </p>
            <li><router-link :to="{ name: 'rnn'}">A Thorough Explanation to Recurrent Neural Networks</router-link></li>
            <p class="date">11/6/21</p>
            <p class="blogdescription">
               {{description.rnn}}
            </p>
            <li><router-link :to="{ name: 'bnbackpass'}">The Shortcut in Differentiating the Backwards Pass in Batch Normalization</router-link></li>
            <p class="date">10/5/21</p>
            <p class="blogdescription">
               {{description.batchnorm}}
            </p>
            <li><router-link :to="{ name: 'knn'}">Implementing K Nearest Neighbors on CIFAR-10</router-link></li>
            <p class="date">9/7/21</p>
            <p class="blogdescription">
               {{description.knn}}
            </p>
            <li><router-link :to="{ name: 'quadraticform'}">Learning to Find the Derivative of the Quadratic Form</router-link></li>
            <p class="date">8/26/21</p>
            <p class="blogdescription">
               {{description.quadratic}}
            </p>
         </div>
         <!------------ Code to pull blog titles from Strapi -->
         <!-- <li v-for='(blog, index) in blogs' :key="blog.id">
            <a :href="links[index]">{{ blog.name }}</a>
         </li> -->
         <!-- </div> -->
     </div>
  </div> 
</template>

<script>
   // // import backdrop from '../components/backdrop.vue'
   // import axios from 'axios'

export default {
   name: 'cms',
   components: {
      // backdrop
   },
   data() {
      return {
         description: {
            elbo: `Covering different interpretations to the variational lower bound (ELBO), gradient flow through a Variational Autoencoder, and the use of the reparameterization trick for variance reduction.`,
            dklmvgaus: `An step by step on the KL divergence between two mv gaussian distributions.`,
            entropy: `An explanation on entropy from a Machine Learning perspective. I incorporate philosophy drawn from Claude Shannon's "A Mathematical Theory of Communication" and provides examples, while walking through the math, of the different types of entropy.`,
            transformers: `A thorough breakdown on the operations and overall construction of a Transformer neural network. I show code for each module of the Transformer while also explaining the purpose of each one.`,
            cnn: `A discussion about both the forward and backward pass of a convolutional neural network. Accompanied with code, mathematical explanation, and visuals, I go into detail about the popular transformations.`,
            bigo: `A beginners introduction to Big "Oh" notation and time complexity. Understanding how asymptotic growth represents algorithm efficiency while providing examples in math, code, and *literally* plain english to aid intuition.`,
            rnn: `A discussion about the philosophy of a recurrent neural network and both it's forward and backward transformations. Accompanied with code, mathematical explanation, and visuals, I go into detail about the popular transformations and focus heavily on the intuition behind some operations.`,
            batchnorm: `An explanation on providing faster means to derive the gradient of the batch normalization process. A step by step walkthrough through all of the needed math with some code.`,
            knn: `A beginners introduction to kNN classification by implementing it on the CIFAR-10 dataset. I thoroughly walk through each of the operations behind the entire kNN process with code, visuals, and math.`,
            quadratic: `I explain 3.5 different procedures, along with my own experiences, on learning how to derive the quadratic form x^tAx.`,
         }
      }
   },

   watch: {
      $route(to) {
         console.log('cms', to);
      }
   },
}
</script>

<style scoped>

#curriculumBody {
   width: 700px;
}

#curriculumBody > a, li {
   font-size: 16px;
   font-weight: bold;
   /* padding: 10px 0 10px 0; */
   margin-top: 3em;
   list-style-type: none;
   /* text-decoration: underline; */
}

a {
   float: left;
}

.date {
   margin: 0;

   float: right;
}

.test {
   clear:both;
}
#links {
   margin-top: 6em;
   margin-bottom: 6em;
}

.blogdescription {
   padding-top: 0.6em;
   margin: 0;
   margin-left: 1.5em;
   font-size: 14px;
   clear: both;
}

</style>