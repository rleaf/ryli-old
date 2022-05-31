<template>
   <div id="landing">
   <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Implementing K Nearest Neighbors on CIFAR-10</p>
                  <p style="font-size: 18px; padding: 0 !important; ">9 &#8226; 7 &#8226; 2021</p>
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <ul>
                     <li><a href="#knn_whatisknn">What is kNN</a></li>
                  </ul>
                  <li>Setting Up</li>
                  <ul>
                     <li><a href="#loadcifar">Loading CIFAR-10</a></li>
                     <li><a href="#visualizing">Visualizing CIFAR-10</a></li>
                     <li><a href="#subsampling">Subsampling</a></li>
                  </ul>
                  <li>Building kNN</li>
                  <ul>
                     <li><a href="#euclideandistance">Finding the Euclidean distance</a></li>
                     <li><a href="#classifying">Classifying our test images</a></li>
                     <li><a href="#crossvalidation">Cross Validation</a></li>
                     <li><a href="#entirecifar">Running on the entire CIFAR-10</a></li>
                  </ul>
                  <li><a href="#thoughts">Thoughts</a></li>
               </ul>
            </div>
            <i>(5/17/22) Edit: Cleaned up a lot of the wording & redesigned some of the code to provide better explanation.</i>
            <i>(4/18/22) Edit: Cleaned up some wording for clarity.</i>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               The purpose of this was to familiarize myself further with PyTorch and in general, tensor operations. Credit to <a href="https://web.eecs.umich.edu/~justincj/teaching/eecs498/FA2020/" target="_blank">UMichigan's
               498/598 Deep Learning for Computer Vision</a> - I use some of their code.
               <br>
               <br>
               <a href="https://www.cs.toronto.edu/~kriz/cifar.html" target="_blank">CIFAR-10</a> is a well known dataset composed of 60,000
               colored 32x32 images. <a href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm" target="_blank">kNN</a> classification is an algorithm to classify inputs by comparing their similarities to
               a training set accompanied with labels. There is the very similar <a href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm#k-NN_regression" target="_blank">kNN Regression</a>, which employs the
               same idea, just different task. The next section <a href="#whatIsKNN"><i>"What is kNN / How does kNN work"</i></a>
               assumes the reader has no prior understanding of kNN. The sections following, <a href="#loadingCIFAR"><i>"Loading CIFAR"</i></a> and beyond, assumes the reader to have basic understanding of Python, PyTorch, and Linear Algebra. If you aren't familiar with
               these concepts but have read the <i>"What is kNN / How does kNN work"</i> section, then you may still be good. I will toss in some explanations in <span style="color: #81A1C1;">blue</span> for important things.
            </p>
            <div id="knn_whatisknn"></div>
            <h2>
               What is kNN / How does kNN work
            </h2>
            <p>
               I broadly defined kNN above. This section is going to be dedicated to explaining further what kNN classification does, and how it works. I'm going to be using images as an example
               dataset to aid my explanation of kNN. Throughout this read, I frequently use "test", "unlabeled", and "input" interchangeably to refer to the input for kNN. Feel free to skip this section if you're just interested in the code and implementation.
               Feel free to also <i>only</i> read this section if you just want a synopsis of kNN classification.
            </p>
            <p>
               The goal is <i>classification</i>. We have a dataset, images in our case, and unfortunately a portion of the images are <i>unlabeled</i>, they do not have an accompanying label which classifies them.
               kNN is a method to "intelligibly" label the unclassified images by computing similarity with the labeled images. Euclidean distance is a popular metric to quantify the similarities, however there are a handful
               of other measures that have their own idiosyncrasies (Manhattan & Minkowsi). In the case of images, kNN computes the Euclidean distance between an unlabled and labeled image by iterating over their pixel values.
               The unlabeled image then takes the same majority classification as its <i>k nearest neighbors</i> or <i>k</i> neighbors with the lowest Euclidean distance, where <i>k</i> is a hyperparameter. 
               This process produces a loop where each unlabeled input image is compared to every labeled image in the dataset by their pixel values.
               Once the first unlabeled image iterates through the entire labeled training set, the algorithm
               then moves onto the next image in the test set to do it all again.
               <!-- Afterwards the unlabeled images will be prescribed the same classification as their k nearest neighbors, k being an integer  -->
            </p>
            <video id="img500" autoplay loop muted :src="knn_train" style="padding-bottom: 5px !important;"></video>
            <span style="font-size:14px; padding-top: -10px;"><i>Visualization of computing the pixel values of a single <i>test</i> image (left) against every <i>train</i> image (right). <br>
            Right click and toggle 'show controls' to stop the animation.</i></span>
            <p>
               For reference, the Euclidean distance is: <vue-mathjax :formula='euclidean'></vue-mathjax>. In the visualization above, kNN is operating on a colored (RGB) image dataset of 5x5 pixels - so in total 75 pixels per image (3x5x5).
               To compute the Eucliden distance between one test image and one training image, the squared difference between corresponding pixels in both images are taken and then
               then summed and finally taken the square root of. To reiterate, we are taking 75 differences, squaring each one, summing all that together, and then finally square rooting everything. And this occurs for each test image
               against every training image. It's worth mentioning, in the animation I do not show the 5x5 green and blue pixel channels being iterated over
               like I did for the red channel; instead the green and blue layers are simplified with a single "blink".
               <br>
               <br>
               As mentioned briefly before, the <i>k</i> in kNN is an integer hyperparameter that says how many neighbors our test image should pay attention to.
               It tells each test image to find their <i>k</i> nearest neighbors of a particular label, then label them in accordance with those neighbors.
               If k = 1, then we're asking kNN to classify every test image with it's closest single neighbor. If k = 3, then we're asking kNN to classify a test image with it's 3 closest neighbors (lowest Euclidean distance) of the same class.
               Some considerations when picking a value for <i>k</i> is to not pick a value that would result in a tie - where the k closest neighbors are an even distribution between different classes. This can generally be avoided by 1) picking odd numbers for k and 2)
               not picking multiples of the number of classes. Below is a visualization for different values of k. <a style="color: #81A1C1;" href="https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)" target="_blank">Hyperparameter
               definition</a>.
            </p>
            <br>
            <img id="img1300" src="../../assets/blog/knn.png" class="noInvert" alt="">
            <span style="font-size:14px; padding-top: -10px;"><i>The stars reference labeled images and the translucent dots reference unlabled images.</i></span>
            <div id="loadcifar"></div>
               <div id="blogSubHeader">
                  Loading CIFAR-10
               </div>
            <p>
               Lets now look at using kNN on CIFAR-10. Our data is going to be stored simply in the four variables: <code style="background: var(--codeSnippet);; border-radius: 5px;">x_train</code>,
               <code style="background: var(--codeSnippet);; border-radius: 5px;">x_test</code>,
               <code style="background: var(--codeSnippet);; border-radius: 5px;">y_train</code>, and <code style="background: var(--codeSnippet);; border-radius: 5px;">y_test</code>. They are declared simply with:
            </p>
            <prism-editor class="codeblock" v-model="declaration" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               Below is the <code style="background: var(--codeSnippet);; border-radius: 5px;">cifar10()</code> definition. It isn't necessary to understand kNN's but I thought it was worth adding for the curious.
               You can see it above in the comments: <code style="background: var(--codeSnippet);; border-radius: 5px;">x_train</code> returns a 4 dimensional tensor composed of 50,000 3x32x32 training images,
               <code style="background: var(--codeSnippet);; border-radius: 5px;">y_train</code> returns a 1 dimensional tensor composed of corresponding labels for those 50,000 images, <code style="background: var(--codeSnippet);; border-radius: 5px;">x_test</code>
               returns a 10,000 3x32x32 testing images, and lastly <code style="background: var(--codeSnippet);; border-radius: 5px;">y_test</code> returns the corresponding labels for those 10,000 images. I refer to the
               training dataset as "unlabeled" despite having a tensor, <code style="background: var(--codeSnippet);; border-radius: 5px;">y_train</code>, of labels because we will only use those labels to
               determine the final accuracy of our kNN algorithm.
            </p>
            <prism-editor class="codeblock" v-model="load" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="visualizing"></div>
            <div id="blogSubHeader">
               Visualizing CIFAR-10
            </div>
            <p>
               To see what we're working with, here are a 12 random images from each class with their corresponding label to the left:<br>
            </p>
            <img id="img600" src="../../assets/blog/output.png" class="noInvert" alt="">
            <p>
               Each image is composed of 3x32x32 pixel values. The 3x<b><u>32x32</u></b> references their height/width and the <b><u>3</u></b>x32x32 references the color channels, which most of computer vision (to my knowledge)
               use RGB. The labels are simply a  tensor of integers ranging from [0,9]. Each integer serves as an index to a corresponding list of classes:
            </p>
            <prism-editor class="codeblock" v-model="classes" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="subsampling"></div>
            <div id="blogSubHeader">
               Subsampling
            </div>
            <p>
               Before actually implementing kNN, iterating over 60000 images and labels when testing code is exhaustive. To keep my 1070 GPU happy, I subsampled. Subsampling takes a
               small portion of the whole dataset to work with while building the kNN. Doing this, I no longer had my computer run through the entire dataset each time I tested code. We subsample using the parameters provided in
               <code style="background: var(--codeSnippet);; border-radius: 5px;">cifar10()</code>. We can set these to any integer value to determine the size of the subsample. These will be the tensors we work with while building the kNN
               algorithm.
            </p>
            <prism-editor class="codeblock" v-model="subsample" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="euclideandistance"></div>
            <div id="blogSubHeader">
               kNN: Finding the Euclidean distance
            </div>
            <br>
            <p>Everything is set - we've preprocessed and subsampled our dataset. I'm going to show a couple ways to find the Euclidean distance between testing and training images. The first is with using nested
               loops to populate our output matrix <code style="background: var(--codeSnippet);; border-radius: 5px;">dists</code>, where each loop will iterate over an axis.
               Although this method is not very efficient because it does not make use of broadcasting, I think it's helpful from a pedagogical standpoint. A more efficient representation,
               <code style="background: var(--codeSnippet);; border-radius: 5px;">compute_distances_no_loops</code> is shown immediately below. It is worth mentioning that PyTorch does have functions designed to do this already
               such as: <code style="background: var(--codeSnippet);; border-radius: 5px;"><a href="https://pytorch.org/docs/stable/generated/torch.cdist.html" target="_blank">torch.cdist</a></code>, but I'm also going to refrain
               from using them.
               <span style="color: #81A1C1;">Broadcasting is a term that enables arithmetic for tensors of different dimensionality, read more
               <a href="https://pytorch.org/docs/stable/notes/broadcasting.html" target="_blank" style="color: #81A1C1 !important;">here</a>.</span>
            </p>
            <prism-editor class="codeblock" v-model="nested_for_loops" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               As stated before, CIFAR-10 images are 3x32x32. The entire training dataset can be represented with a tensor of shape [50000, 3, 32, 32]. Because of our subsampling, we drastically reduce the training size to [500, 3, 32, 32].
               We <a href="https://pytorch.org/docs/stable/generated/torch.flatten.html" target="_blank">flatten</a> both the the <code style="background: var(--codeSnippet);; border-radius: 5px;">x_train</code>
               and <code style="background: var(--codeSnippet);; border-radius: 5px;">x_test</code> tensors to transform our [500, 3, 32, 32] and [250, 3, 32, 32] training image tensor into [500, 3072] and [250, 3072] tensors respectively.
               Now you can think of our reshaped tensors as matrices where each row houses every single
               pixel value (3x32x32) of an image. The purpose of flattening can be thought of as the final preprocessing step before we compute the Euclidean distance using two loops.
               <br>
               <br>
               The first <code style="background: var(--codeSnippet);; border-radius: 5px;">for</code> loop iterates over every test image. The second iterates over every training image. Like discussed before, it computes the Euclidean distance between the
               <i>jth</i> training image and <i>ith</i> testing image two and populates the <code style="background: var(--codeSnippet);; border-radius: 5px;">dists</code> tensor in its respective position.
            </p>
            <p>
               Here is a more optimal variation of finding the Euclidean distance that has no loops and instead makes use of broadcasting:
            </p>
            <prism-editor class="codeblock" v-model="no_loops" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               This procedure makes use of expanding the square in the Euclidean distance:
               <br>
               <br>
               <vue-mathjax :formula='distributed_euclidean'></vue-mathjax>
               <br>
               On this no-loop variant of computing the Euclidean, we are evaluating all arithmetic independently and then compiling everything together so that it represents the right hand side of the formula above.
               Instead of going through element by element, after we preprocess the inputs,
               we square the <code style="background: var(--codeSnippet);; border-radius: 5px;">train</code> and <code style="background: var(--codeSnippet);; border-radius: 5px;">test</code>
               tensors immediately then take the sum of their rows. Then, <vue-mathjax :formula='midterm'></vue-mathjax> is evaluated through the matrix multiplication of the
               <code style="background: var(--codeSnippet);; border-radius: 5px;">train</code> <i>[500, 3072]</i> and the transpose of the <code style="background: var(--codeSnippet);; border-radius: 5px;">test</code> <i>[3072, 250]</i> tensors.
               Finally, we have all terms to produce the right hand of the equality above, allowing us to wrap everything in a square root and
               store it in <code style="background: var(--codeSnippet);; border-radius: 5px;">dists</code>. 
               Within each column of <code style="background: var(--codeSnippet);; border-radius: 5px;">dists</code> is the Euclidean distance of every training image with respect to a test image.
               For comparison, the two loop version takes (for me) 7.27 seconds. The no loop version takes 0.02 seconds. The no loop version is 455.7x
               faster than the two loop. This probably provides better intuition behind how powerful broadcasting (and <a href="https://pytorch.org/docs/stable/generated/torch.matmul.html" target="_blank">matmul</a>) can be.
            </p>
            <div id="classifying"></div>
            <div id="blogSubHeader">
               kNN: Classifying our test images
            </div>
            <p>
               Using the <code style="background: var(--codeSnippet);; border-radius: 5px;">compute_distances_no_loops</code> function, we can now build a classifier. I will be focusing on the
               <code style="background: var(--codeSnippet);; border-radius: 5px;">predict</code> method. <code style="background: var(--codeSnippet);; border-radius: 5px;">check_accuracy</code> is simply to determine how well our classifier
               performs.
            </p>
            <prism-editor class="codeblock" v-model="classify" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <p>
               The goal is to return a tensor <code style="background: var(--codeSnippet);; border-radius: 5px;">y_test_pred</code> where the <i>ith</i> index is the assigned label to <i>ith</i> test image by the kNN algorithm. Below is a visualization
               of how the classification works on a <code style="background: var(--codeSnippet);; border-radius: 5px;">dists</code> of size [5x3]. The algorithm finds the index of the <i>k</i> lowest Euclidean distances within each column. Then it corresponds
               that index with <code style="background: var(--codeSnippet);; border-radius: 5px;">self.y_train</code> and stores those values in <code style="background: var(--codeSnippet);; border-radius: 5px;">k_lowest_labels</code>. 
               <code style="background: var(--codeSnippet);; border-radius: 5px;">y_test_pred[i]</code> is then assigned the most frequent occuring label present in <code style="background: var(--codeSnippet);; border-radius: 5px;">k_lowest_labels</code>. Once a column
               calculates it's value for <code style="background: var(--codeSnippet);; border-radius: 5px;">y_test_pred</code>, it proceeds to the next. Each column can be thought of as a test image and every element in the column
               represents the Euclidean distance between that test image with every training image.
            </p>
            <video id="img700" autoplay muted loop :src="knn_classify" style="padding-bottom: 5px !important;"></video>
            <span style="font-size:14px; padding-top: -10px;"><i>Right click and toggle 'show controls' to stop the animation</i></span>
            <p>
               We've finished implementing kNN and can begin testing the algorithm on larger portions of the dataset to see how well it performs.
               With k set to 5, 5000 training images, and 500 testing images, our kNN results in a 27.8% accuracy for proper classification on a portion of the CIFAR-10 dataset.
               It's certainly no convolutional neural network, however it shows how far computer vision has come (kNN was developed in 1951).
            </p>
            <prism-editor class="codeblock" v-model="running_kNN" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="crossvalidation"></div>
            <div id="blogSubHeader">
               Optimizing kNN: Cross Validation
            </div>
            <p>
               A problem with the current kNN is that after we've successfully automated a process of "intelligebly" classifying images, we are still left with "guessing" the best <i>k</i> for the algorithm.
               As our algorithm currently
               exists, we have to manually tune the hyperparameter <i>k</i> to some integer value, which raises the question - is that the best value for k?
               Cross validation is a procedure to automate selecting an optimal value for <i>k</i>. The problem with this is that to evaluate the efficacy of some value <i>k</i>, we currently use the test set. If we want to evaluate numerous values
               for <i>k</i> it breaks the convention of segregating the test set until final testing. Finding some optimal k through using the same test set on each evaluation, would have our kNN algorithm fall victim to overfitting. Our model
               would be too well trained to the test set, and because of this, may not generalize well to new and unseen data.
               <span style="color: #81A1C1;">Overfitting is a big issue in training. The inverse of overfitting is underfitting, where a model does not yield high enough or desired efficacy on training data.</span> 
               <br>
               <br>
               Cross validation further segregates our training set into "chunks". For our subsample of 5,000 test images and labels, we can create 5 tensors of shape [1,000, 3072]. One of those 5 chunks becomes what is called
               the validation set to evaluate an optimal <i>k</i>. The validation set does the job of the previously defined test set. By partioning our data, we circumvent the issue of overfitting - our test set is untouched until the final...test.
            </p>
            <prism-editor class="codeblock" v-model="cross_validation" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <img id="img500" class="noInvert" src="../../assets/blog/optimalk.png" alt="">
            <p>
               A total of 50 different accuracies result from our 10 different <i>k's</i> and 5 partitions from cross validation. We'd now like kNN to select the value for k that yielded the highest average accuracy for the 5 folds. We can see
               on the graph above, a k of around 12 provides the highest average. Below returns the k that has the highest average.
            </p>
            <prism-editor class="codeblock" v-model="best_k" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="entirecifar"></div>
            <div id="blogSubHeader">
               Running on the entire CIFAR-10
            </div>
            <p>
               We've finished creating our kNN algorithm which also makes use of cross validation to pick an optimal k based off the validation sets. Now we can finally operate on the entire CIFAR-10 dataset.
               If you have clicked to here from a Google search and are quickly looking to find the relevant code for kNN, it's in <a href="#classifying">Classifying our test images</a>.
            </p>
            <prism-editor class="codeblock" v-model="full_cifar" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
            <div id="thoughts"></div>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <p>
               Writing this took a bit longer than I expected. I tried to be intentionally redundant at times to solidify understanding of concepts that, when I learned kNN and some ML in general, had trouble understanding. Creating the animations was fun. I was considering between Three.js and manim originally, but ended up with using
               After Effects & Illustrator. I mentioned this at the top, but shoutout to <a href="https://web.eecs.umich.edu/~justincj/teaching/eecs498/FA2020/" target="_blank">
               UMichigan's 498/598 Deep Learning for Computer Vision</a>. If you're interested in making a kNN yourself, you can find the files there or analogously, you can find a NumPy variation through Stanford's CS231n. I say that assumingly because 
               I'm actually not sure if they still use NumPy or if they have transitioned to PyTorch/TensorFlow. As usual, if you notice
               any typos, inconsistencies, or have thoughts in general, feel free to ping me and let me know.
            </p>
            <p>
               - Ryan Lin
            </p>
         </div>
         <themeSwitch />
         <toTop />
   </div>

</template>

<script>
import { VueMathjax } from 'vue-mathjax'
import toTop from '../../components/toTop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import backdrop from '../../components/backdrop.vue'

import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-nord.css'

import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'




export default {
   name: 'knn_cifar',
   components: {
      toTop,
      themeSwitch,
      backdrop,
      'vue-mathjax': VueMathjax,
      PrismEditor
   },
   metaInfo: {
      title: 'Implementing K Nearest Neighbors on CIFAR-10',
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'Implementing K Nearest Neighbors on CIFAR-10. Introduction to kNN classification by implementing it on the CIFAR-10 dataset. A simple and thorough explanation.',
         },
         {
            name: 'keywords',
            content: 'knn, classification, k nearest neighbors, cifar 10, artificial intelligence, ai, machine learning, ml, introduction, beginners, python, cross validation'
         },
         {
            property: 'og:description',
            content: 'Implementing K Nearest Neighbors on CIFAR-10. Introduction to kNN classification by implementing it on the CIFAR-10 dataset. A simple and thorough explanation.',
         }
      ],
   },
   data() {
      return {
         lineNumbers: true,
         blogs: [],
         error: null,
         knn_train: require('../../assets/blog/knn_train.webm'),
         knn_classify: require('../../assets/blog/knn_classify.webm'),
         euclidean: `$\\sqrt{\\sum_{i=1}^{n}{(x_i-y_i)^2}}$`,
         distributed_euclidean: `$$\\sqrt{\\sum_{i=1}^{n}{(x_i-y_i)^2}} =
         \\sqrt{\\sum_{i=1}^{n}{x_i^2-2x_iy_i+y_i^2}}$$`,
         midterm: `$x_iy_i$`,
         full_cifar: 
`   from knn import KnnClassifier

   torch.manual_seed(0)
   x_train_all, y_train_all, x_test_all, y_test_all = cifar10()
   
   classifier = KnnClassifier(x_train_all, y_train_all)
   classifier.check_accuracy(x_test_all, y_test_all, k=best_k)

   # >>> Got 3399 / 10000 correct; accuracy is 33.99%
   # >>> 33.99`,
         best_k: 
`   def knn_get_best_k(k_to_accuracies):
      """
      Inputs:
      - k_to_accuracies: Dictionary mapping values of k to lists, where
      k_to_accuracies[k][i] is the accuracy on the ith fold of a KnnClassifier
      that uses k nearest neighbors.

      Returns:
      - best_k: best (and smallest if there is a conflict) k value based on
      the k_to_accuracies info
      """
      # Create best_k variable to return optimal k
      best_k = 0

      # Get keys and values from k_to_accuracies object
      keys = [k for k in k_to_accuracies.keys()]
      # >>> keys = [1, 3, 5, 8, 10, 12, 15, 20, 50, 100]
      values = [v for v in k_to_accuracies.values()]
      # >>> values = [[26.3, 25.7, 26.4, 27.8, 26.6], ..., [25.6, 27.0, 26.3, 25.6, 26.3]]

      # Get largest average of all the values
      max_avg = torch.argmax(torch.mean(torch.tensor(values), dim=1))
      # Get corresponding k for max_avg
      best_k = keys[max_avg]

      return best_k

      # >>> Best k is  10
      # >>> Got 141 / 500 correct; accuracy is 28.20%
      # >>> 28.2`,
         cross_validation:
`   def knn_cross_validate(x_train, y_train, num_folds=5, k_choices=None):
      """
      Inputs:
      x_train: Tensor of shape (num_train, C, H, W) giving all training data
      y_train: int64 tensor of shape (num_train,) giving labels for training data
      num_folds: Integer giving the number of folds to use
      k_choices: List of integers giving the values of k to try

      Returns:
      k_to_accuracies: Dictionary mapping values of k to lists, where
         k_to_accuracies[k][i] is the accuracy on the ith fold of a KnnClassifier
         that uses k nearest neighbors.
      """
      # Create a list of k's for testing
      if k_choices is None:
         k_choices = [1, 3, 5, 8, 10, 12, 15, 20, 50, 100]

      # Create empty lists to house the chunks for cross validation
      x_train_folds = []
      y_train_folds = []

      # Flatten x_train from [5000, 3, 32, 32] to [5000, 3072]
      x_train_flat = x_train.view(x_train.shape[0], -1)

      # Partition our training set to 5 tensors of training images of shape [1000, 3072] and 5 labels of shape [1000]
      x_train_folds = torch.chunk(x_train_flat, num_folds, dim=0)
      y_train_folds = torch.chunk(y_train, num_folds, dim=0)

      # Create object to house the combination of accuracies for different values k for different validation sets
      k_to_accuracies = {}

      # Iterate through every combination of k_choices and possible validation sets
      for k in k_choices:
         for folds in range(num_folds):
            # Setting validation sets
            x_valid = x_train_folds[folds]
            y_valid = y_train_folds[folds]

            # Setting new training sets 
            x_traink = torch.cat(x_train_folds[:folds] + x_train_folds[folds + 1:])
            y_traink = torch.cat(y_train_folds[:folds] + y_train_folds[folds + 1:])

            # Call our kNN with the newly defined sets
            knn = KnnClassifier(x_traink, y_traink)

            # Check accuracy 
            accuracy = knn.check_accuracy(x_valid, y_valid, k=k)

            # Append a list of accuracies for different values k to k_to_accuracies
            k_to_accuracies.setdefault(k, []).append(accuracy)

            return k_to_accuracies
      
   # Accuracies when running cross validation on our subsample
   # >>> k = 1 got accuracies: [26.3, 25.7, 26.4, 27.8, 26.6]
   # >>> k = 3 got accuracies: [23.9, 24.9, 24.0, 26.6, 25.4]
   # >>> k = 5 got accuracies: [24.8, 26.6, 28.0, 29.2, 28.0]
   # >>> k = 8 got accuracies: [26.2, 28.2, 27.3, 29.0, 27.3]
   # >>> k = 10 got accuracies: [26.5, 29.6, 27.6, 28.4, 28.0]
   # >>> k = 12 got accuracies: [26.0, 29.5, 27.9, 28.3, 28.0]
   # >>> k = 15 got accuracies: [25.2, 28.9, 27.8, 28.2, 27.4]
   # >>> k = 20 got accuracies: [27.0, 27.9, 27.9, 28.2, 28.5]
   # >>> k = 50 got accuracies: [27.1, 28.8, 27.8, 26.9, 26.6]
   # >>> k = 100 got accuracies: [25.6, 27.0, 26.3, 25.6, 26.3]`,
         running_kNN: 
`   from knn import KnnClassifier

   torch.manual_seed(0)
   num_train = 5000
   num_test = 500
   x_train, y_train, x_test, y_test = cifar10(num_train, num_test)

   classifier = KnnClassifier(x_train, y_train)
   classifier.check_accuracy(x_test, y_test, k=5)
   # >>> Got 139 / 500 correct; accuracy is 27.80%
   # >>> 27.8`,
         classify: 
`   class KnnClassifier:
      def __init__(self, x_train, y_train):
         """
         x_train: shape (num_train, C, H, W) tensor where num_train is batch size,
            C is channel size, H is height, and W is width.
         y_train: shape (num_train) tensor where num_train is batch size providing labels
         """

         self.x_train = x_train
         self.y_train = y_train

      def predict(self, x_test, k=1):
         """
         x_test: shape (num_test, C, H, W) tensor where num_test is batch size,
            C is channel size, H is height, and W is width.
         k: The number of neighbors to use for prediction
         """

         # Init output shape
         y_test_pred = torch.zeros(x_test.shape[0], dtype=torch.int64)

         # Find & store Euclidean distance between test & train
         dists = compute_distances_no_loops(self.x_train, x_test)

         # Index over test images
         for i in range(dists.shape[1]):
            # Find index of k lowest values
            x = torch.topk(dists[:,i], k, largest=False).indices

            # Index the labels according to x
            k_lowest_labels = self.y_train[x]

            # y_test_pred[i] = the most frequent occuring index
            y_test_pred[i] = torch.argmax(torch.bincount(k_lowest_labels))
         
         return y_test_pred

      def check_accuracy(self, x_test, y_test, k=1, quiet=False):
         """
         x_test: shape (num_test, C, H, W) tensor where num_test is batch size,
            C is channel size, H is height, and W is width.
         y_test: shape (num_test) tensor where num_test is batch size providing labels
         k: The number of neighbors to use for prediction
         quiet: If True, don't print a message.

         Returns:
         accuracy: Accuracy of this classifier on the test data, as a percent.
            Python float in the range [0, 100]
         """

         y_test_pred = self.predict(x_test, k=k)
         num_samples = x_test.shape[0]
         num_correct = (y_test == y_test_pred).sum().item()
         accuracy = 100.0 * num_correct / num_samples
         msg = (f'Got {num_correct} / {num_samples} correct; '
               f'accuracy is {accuracy:.2f}%')
         if not quiet:
            print(msg)
         return accuracy`,
         no_loops:
`   def compute_distances_no_loops(x_train, x_test):
      """
      Inputs:
      x_train: shape (num_train, C, H, W) tensor.
      x_test: shape (num_test, C, H, W) tensor.

      Returns:
      dists: shape (num_train, num_test) tensor where dists[i, j] is the
         Euclidean distance between the ith training image and the jth test
         image.
      """
      # Get number of training and testing images
      num_train = x_train.shape[0]
      num_test = x_test.shape[0]

      # Create return tensor with desired dimensions
      dists = x_train.new_zeros(num_train, num_test) # (500, 250)

      # Flattening tensors
      train = x_train.flatten(1) # (500, 3072)
      test = x_test.flatten(1) # (250, 3072)

      # Find Euclidean distance
      # Squaring elements
      train_sq = torch.square(train)
      test_sq = torch.square(test)

      # Summing row elements
      train_sum_sq = torch.sum(train_sq, 1) # (500)
      test_sum_sq = torch.sum(test_sq, 1) # (250)

      # Matrix multiplying train tensor with the transpose of test tensor
      mul = torch.matmul(train, test.transpose(0, 1)) # (500, 250)

      # Reshape enables proper broadcasting.
      # train_sum_sq = [500, 1] shape tensor and test_sum_sq = [1, 250] shape tensor.
      # This enables broadcasting to match desired dimensions of dists
      dists = torch.sqrt(train_sum_sq.reshape(-1, 1) + test_sum_sq.reshape(1, -1) - 2*mul)

      return dists`,
         nested_for_loops:
`   def compute_distances_two_loops(x_train, x_test):
      """
      Inputs:
      x_train: shape (num_train, C, H, W) tensor.
      x_test: shape (num_test, C, H, W) tensor.

      Returns:
      dists: shape (num_train, num_test) tensor where dists[j, i] is the
         Euclidean distance between the ith training image and the jth test
         image.
      """

      # Get the number of training and testing images
      num_train = x_train.shape[0] # (500)
      num_test = x_test.shape[0] # (250)
      

      # dists will be the tensor housing all distance measurements between testing and training
      dists = x_train.new_zeros(num_train, num_test) # (500, 250)

      # Flatten tensors
      train = x_train.flatten(1) # (500, 3072)
      test = x_test.flatten(1) # (250, 3072)

      # Find Euclidean distance using loops
      for i in range(num_test):
         for j in range(num_train):
            dists[j, i] = torch.sqrt(torch.sum(torch.square(train[j] - test[i])))


      return dists`,
         subsample:
`   # Subsample size
   num_train = 500
   num_test = 250

   # Redeclaring x_train...y_test with subsample
   x_train, y_train, x_test, y_test = cifar10(num_train, num_test)

   print('data shape:', x_train.shape)
   print('labels shape:', y_train.shape)
   # Training set:
   # >>> data shape: torch.Size([500, 3, 32, 32])
   # >>> labels shape: torch.Size([500])

   print('data shape:', x_test.shape)
   print('labels shape:', y_test.shape)
   # Testing set:
   # >>> data shape: torch.Size([250, 3, 32, 32])
   # >>> labels shape: torch.Size([250])`,
         classes:
`   classes = ['plane', 'car', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']
   # plane = 0, car = 1, bird = 2 ... truck = 9
      
   print(x_train[0].shape)
   # >>> torch.Size([3, 32, 32])

   # Finding integer label of corresponding 0th image
   print(y_train[0]) 
   # >>> tensor(6)
   # Element 6 in 'classes' list is a frog (which is correct, just take my word for it)`,
         declaration:
`   x_train, y_train, x_test, y_test = cifar10()
   """
   x_train: shape (B, C, H, W) tensor where B is batch size, C is channel size, H
      is height, and W is width.
   y_train: shape (B) tensor where B is batch size.
   x_test: shape (B, C, H, W) tensor where B is batch size, C is channel size, H
      is height, and W is width.
   y_test: shape(B) tensor where B is batch size.
   """

   
   # Training Set.
   # x_train is composed of 50,000 images where y_train references the corresponding labels
   print('data shape:', x_train.shape)
   print('labels shape:', y_train.shape)
   # >>> data shape: torch.Size([50000, 3, 32, 32])
   # >>> labels shape: torch.Size([50000])

   # Test Set
   # x_test is composed of 10,000 images where y_test references the corresponding labels
   print('data shape:', x_test.shape)
   print('labels shape', y_test.shape)
   # >>> data shape: torch.Size([10000, 3, 32, 32])
   # >>> labels shape: torch.Size([10000])`,
         load:
`   import os
   import torch
   from torchvision.datasets import CIFAR10

   def _extract_tensors(dset, num=None):
      x = torch.tensor(dset.data, dtype=torch.float32).permute(0, 3, 1, 2).div_(255)
      y = torch.tensor(dset.targets, dtype=torch.int64)
      if num is not None:
         if num <= 0 or num > x.shape[0]:
            raise ValueError('Invalid value num=%d; must be in the range [0, %d]'
                           % (num, x.shape[0]))
         x = x[:num].clone()
         y = y[:num].clone()
      return x, y
      
   def cifar10(num_train=None, num_test=None):
      download = not os.path.isdir('cifar-10-batches-py')
      dset_train = CIFAR10(root='.', download=download, train=True)
      dset_test = CIFAR10(root='.', train=False)
      x_train, y_train = _extract_tensors(dset_train, num_train)
      x_test, y_test = _extract_tensors(dset_test, num_test)
      
      return x_train, y_train, x_test, y_test`,
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
   font-family: var(--type);
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}

#blogHeader {
   padding-bottom: 8vh;
   font-size: 22px;
}

p {
   padding: 25px 6vw;
   line-height: 2;
}

a { 
   text-decoration: underline;
   font-style: oblique;
}

a:not(.blogtoc a) {
   color: var(--shadeWhite1);
}

#blogSubHeader {
   color: var(--shadeWhite1);
   font-family: var(--type);
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

h2 {
   color: var(--shadeWhite1);
   font-size: 16px;
   font-style: italic;
   padding-top: 10px;
   margin: 0;
   font-weight: 200;
}
</style>