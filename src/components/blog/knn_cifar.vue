<template>
   <div id="landing">
      <NavBar />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Implementing K Nearest Neighbors on CIFAR-10</p>
                  <p style="font-size: 20px; padding: 0 !important; ">9&#8226;7&#8226;2021</p>
               </div>
            </div>
            
            <p>
               <!-- <a href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm">kNN</a> classification is (my definition) an algorithm that classifies inputs to their "k" majoritarily closest neighbors. -->
               The purpose of this was to familiarize myself further with PyTorch and in general, tensor operations. I'm going to say this again at the end, but feel free to get in touch with me if you have alternative
               ways of representing some of the code, irregardless if it's better or worse. Some code here is taken from <a href="https://web.eecs.umich.edu/~justincj/teaching/eecs498/FA2020/">UMichigan's
               498/598 Deep Learning for Computer Vision</a> to support utilities such as visualization of kNN and importing from CIFAR.
               <a href="https://www.cs.toronto.edu/~kriz/cifar.html" target="_blank">CIFAR-10</a> is a well known dataset composed of 60,000
               colored 32x32 images. <a href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm" target="_blank">kNN</a> classification is an algorithm to classify inputs by comparing their similarities to
               a training set accompanied with labels. There is the very similar <a href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm#k-NN_regression" target="_blank">kNN Regression</a>, which employs the
               same idea, just different task. Throughout this explanation, I'm going to be sprinkling in print statements in code blocks represented with triple angle brackets: <i>>>></i>. The next section <i>"What is kNN / How does kNN work"</i>
               assumes the reader has no prior understanding of kNN. The sections following, <i>"Loading CIFAR"</i> and beyond, assumes the reader to have basic understanding of Python, PyTorch, and Linear Algebra. If you aren't familiar with
               these concepts but have read the <i>"What is kNN / How does kNN work"</i> section, then you may still be good. I will toss in some explanations in <span style="color: #81A1C1;">blue</span> for important things.
            </p>
            <div id="blogSubHeader">
               <!-- kNN Step 1: Qualify and Quantify the similarities -->
               What is kNN / How does kNN work
            </div>
            <p>
               I broadly defined kNN in the last paragraph. This section is going to be dedicated to explaining further what kNN classification does, and how it works. I'm going to be using images as an example
               dataset to aid my explanation of kNN. I will not be defining concepts such as cross-validation for optimal <i>k</i> and means of optimizing for more efficient code here. When moving on to the next section where we will use kNN on the CIFAR-10 dataset,
               I will explain those concepts. Throughout this read, I frequently use "test", "unlabeled", and "input" interchangeably to refer to the input for kNN. Feel free to skip this section if you're just interested in the code and implementation.
               Feel free to also <i>only</i> read this section if you just want a synopsis of kNN.
            </p>
            <p>
               The goal is <i>classification</i>. We have a dataset, images in our case, and unfortunately a portion of the images are <i>unlabeled</i>, they do not have an accompanying label which classifies them.
               kNN is a method to "intelligibly" label the unclassified by computing similarity with the labeled images. I'm going to use Euclidean distance to quantify the similarities, however there are a handful
               of other measures that have their own idiosyncrasies (Manhattan...Minkowsi). In the case of images, kNN computes the Euclidean distance by iterating over the pixel values of the images.
               This means that the first input image (unlabeled) is compared to every image in the labeled dataset by their pixel values. Once the first image iterates through the entire training set, the algorithm
               then moves onto the next testing (unlabeled) image to do it all again. The most similar labeled image is synonymous to having the lowest Euclidean distance.
               <!-- Afterwards the unlabeled images will be prescribed the same classification as their k nearest neighbors, k being an integer  -->
            </p>
            <video id="img500" autoplay loop :src="knn_train" style="padding-bottom: 5px !important;"></video>
            <span style="font-size:14px; padding-top: -10px;"><i>Right click and toggle 'show controls' to stop the animation</i></span>
            <p>
               Here's the formula for Euclidean distance: <vue-mathjax :formula='euclidean'></vue-mathjax>. Aside from the code, it is probably the only math I'm going to show. The animation above is my attempt at visualizing
               kNN where a test image iterates through the training images. Here, kNN is operating on a colored (RGB) dataset of 5x5 (height x width) dimensions - so in total 75 pixels per image (3x5x5).
               To compute the Eucliden distance (find similarity) between one test image and one training image, the squared difference in each corresponding pixel with respect to location in both images are taken and then every value
               is then summed and finally taken the square root of. To reiterate, we are taking 75 (total pixel count) differences, squaring each one, summing all that together, and then finally square rooting everything - for each test image
               for each training image. Then as I said before, the test image proceeds to the next training image. Once the test image completes finding it's Euclidean distance with every image in the
               training set, it steps aside for the proceeding test image to repeat the cycle. The distances, which are scalar values, are usually stored in a matrix/tensor.
               It's worth mentioning, to expedite conveying the concept in the animation, I do not show the 5x5 green and blue pixel channels being iterated over
               like I did for the red channel; instead the green and blue layers are simplified with a "single blink".
               <br>
               <br>
               We are almost understanding how kNN works. We understand how to qualify and quantify similarities between every test and training image and now want to classify those test images based off similarity to the training images.
               The <i>k</i> in kNN is a integer parameter that moderates this aspect of the algorithm. It tells each test image to find their <i>k</i> nearest neighbors of a particular label, then labels them in accordance with those neighbors.
               If k = 1, then we're asking kNN to classify every test image with it's closest single neighbor. If k = 3, then we're asking kNN to classify a test image with it's 3 closest neighbors of the same class. Some considerations when
               picking a value for <i>k</i> is to not pick a value that would result in a tie - where the k closest neighbors are an even distribution between different classes. This can generally be avoided by 1) picking odd numbers for k and 2)
               not picking multiples of the number of classes.
               <!-- The animation below is of what's called a feature map, a space where the test and training images exist within. The red sphere could be interpreted as a single test image and the blue spheres training images.
               The Euclidean distance would be exactly the distance between two spheres, which the only ones we're interested in are the test points with respect to every single training point.  -->
            </p>
               <!-- <video id="img500" autoplay loop :src="feature_map" style="padding-bottom: 5px !important;"></video>
               <span style="font-size:14px; padding-top: -10px;"><i>Right click and toggle 'show controls' to stop the animation</i></span> -->
            <div id="blogSubHeader">
               Loading CIFAR
            </div>
            <p>
               Lets now look at using kNN on CIFAR-10. Our data is going to be stored simply in the four variables: <code style="background: #242424; border-radius: 5px;">x_train</code>, <code style="background: #242424; border-radius: 5px;">x_test</code>,
               <code style="background: #242424; border-radius: 5px;">y_train</code>, and <code style="background: #242424; border-radius: 5px;">y_test</code>. They are declared simply with:
            </p>
               <code-highlight language="python">
                  <pre>
         {{ declaration }}
                  </pre>
               </code-highlight>
            <p>
               Below is the <code style="background: #242424; border-radius: 5px;">cifar10()</code> definition. It isn't necessary to understand kNN's but I thought it was worth adding for the curious.
               PyTorch ameliorates importing a handful of popular datasets and networks. By calling <code style="background: #242424; border-radius: 5px;">cifar10()</code>, we're populating tensors with the...CIFAR-10 dataset (shocker).
               You can see it in the above print statements: <code style="background: #242424; border-radius: 5px;">x_train</code> returns a 4 dimensional tensor (aka a rank 4 tensor) composed of 50,000 3x32x32 training images,
               <code style="background: #242424; border-radius: 5px;">y_train</code> returns a 1 dimensional tensor composed of the labels for those same 50,000 images, <code style="background: #242424; border-radius: 5px;">x_test</code>
               returns a 10,000 testing images (of same dimensionality as x_train), and lastly <code style="background: #242424; border-radius: 5px;">y_test</code> returns the labels for those 10,000 images (of same dimensionality as x_test).
               <span style="color: #81A1C1;">A tensor can be thought of as a generalization to a scalar (0D tensor), vector (1D tensor), matrix (2D tensor), etc...</span>
            </p>
               <code-highlight language="python">
                  <pre>
         {{ load }}
                  </pre>
               </code-highlight>
            <div id="blogSubHeader">
               Visualizing
            </div>
            <p>
               To see what we're working with, here are a 12 random images from each class with their corresponding label to the left:<br>
                <img src="../../assets/blog/output.png" alt=""> <br>
               Each image is composed of 3x32x32 pixel values. The 3x<b><u>32x32</u></b> references their height/width and the <b><u>3</u></b>x32x32 references the color channels, which most of computer vision (to my knowledge)
               use RGB. The labels are simply a  tensor of integers ranging from [0,9]. Each integer label then corresponds to a list of classes:
            </p>
               <code-highlight language="python">
                  {{ classes }}
               </code-highlight>
            <div id="blogSubHeader">
               Subsampling
            </div>
            <p>
               Before actually implementing kNN, iterating over 60000 images and labels when testing code is exhaustive. To keep my 1070 GPU happy, I did what's called subsampling. Subsampling enables taking a
               smaller partition from the whole dataset to work with while you build the kNN. Doing this, I no longer had my computer run through the entire dataset each time I ran code. We subsample by looking back at the definition of
               <code style="background: #242424; border-radius: 5px;">cifar10()</code>, there are two keyword aruments present in it's declaration <code style="background: #242424; border-radius: 5px;">num_train</code> and
               <code style="background: #242424; border-radius: 5px;">num_test</code>. We can set these to any integer value to determine the size of the subsample. These will be the tensors we work with while building the kNN
               algorithm.
            </p>
            <code-highlight language="python">
               <pre>
         {{ subsample }}
               </pre>
            </code-highlight>
            <div id="blogSubHeader">
               The actual part with kNN
            </div>
            <br>
            <h2><u>Finding Euclidean distance</u></h2>
            <p>Everything is set - we've preprocessed and subsampled our dataset. I'm going to show a couple ways to find the Euclidean distance between testing and training images. The first is with using nested
               <code style="background: #242424; border-radius: 5px;">for</code> loops to populate
               our output matrix <code style="background: #242424; border-radius: 5px;">dists</code> (declared below) where each loop will iterate over a unique axis. This method is not computationally efficient as it does not make use
               of Linear Algebra operations and broadcasting. However, where it lacks in efficiency, it makes up for in intuition from a pedogogical standpoint. Because of this, I'm going over it first.
               <span style="color: #81A1C1;">Broadcasting is a term that enables arithmetic for tensors of different dimensionality, read more
               <a href="https://pytorch.org/docs/stable/notes/broadcasting.html" target="_blank" style="color: #81A1C1 !important;">here</a>.</span>
            </p>
            <code-highlight language="python">
               <pre>
         {{ nested_for_loops }}
               </pre>
            </code-highlight>
            <p>
               As stated before, CIFAR-10 images are 3x32x32. The entire training dataset can be represented with a rank 4 tensor as [50000, 3, 32, 32]. Because of our subsampling, we drastically reduce the training size to [500, 3, 32, 32].
               It is important to notice that prior to our loop, we flatten the tensors <span style="color: #81A1C1;">(reduce dimensionality)</span>. <code style="background: #242424; border-radius: 5px;">
               <a href="https://pytorch.org/docs/stable/generated/torch.flatten.html" target="_blank">torch.flatten</a></code> is a function worth mentioning as it is an alternative means to flatten without doing the gymnastics I did.
               I emphasize flattening because it transforms our before [500, 3, 32, 32] training image tensor into a [500, 3072] tensor. Now you can think of our reshaped tensor as a matrix where each row houses every single
               pixel value (3x32x32) of every training image. We repeat the same to the test images yielding a [250, 3072] tensor. The purpose of flattening can be thought of as the final preprocessing step before we evaluate anything with our data.
               We are further simplifying our data to make it easier to implement in a kNN.
               <br>
               <br>
               The first <code style="background: #242424; border-radius: 5px;">for</code> loop iterates over every test image. The second iterates over every training image. Like discussed before, it computes the Euclidean distance between the two
               and populates the <code style="background: #242424; border-radius: 5px;">dists</code> tensor.
            </p>
         </div>
   </div>
</template>

<script>
import NavBar from '../nav.vue'
import { VueMathjax } from 'vue-mathjax'
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'

import "vue-code-highlight/themes/prism-nord.css"
// import "vue-code-highlight/themes/duotone-sea.css"
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-python';



export default {
   name: 'blogskeleton',
   components: {
      NavBar,
      'vue-mathjax': VueMathjax,
      CodeHighlight,
   },
   data() {
      return {
         blogs: [],
         error: null,
         knn_train: require('../../assets/blog/knn_train.webm'),
         feature_map: require('../../assets/blog/featuremap.webm'),
         euclidean: `$\\sqrt{\\sum_{i=1}^{n}{(x_i-y_i)^2}}$`,
         nested_for_loops:`
   def compute_distances_two_loops(x_train, x_test):
      """
      Inputs:
      - x_train: Torch tensor of shape (num_train, D1, D2, ...)
      - x_test: Torch tensor of shape (num_test, D1, D2, ...)

      Returns:
      - dists: Torch tensor of shape (num_train, num_test) where dists[j, i] is the
      squared Euclidean distance between the ith training point and the jth test
      point. It should have the same dtype as x_train.
      """

      # Get the number of training and testing images
      num_train = x_train.shape[0]
      num_test = x_test.shape[0]

      # dists will be the tensor housing all distance measurements between testing and training
      dists = x_train.new_zeros(num_train, num_test)
      # >>> dists shape: torch.Size([500, 250])

      # Flatten tensors
      train = x_train.view(num_train, x_train[1].view(1, -1).shape[1])
      # >>> train shape: torch.Size([500, 3072])
      test = x_test.view(num_test, x_test[1].view(1, -1).shape[1])
      # >>> test shape: torch.Size([250, 3072])

      for i in range(num_test):
         for j in range(num_train):
            dists[j, i] = torch.sqrt(torch.sum(torch.square(train[j] - test[i])))

      return dists


   torch.manual_seed(0)
   num_train = 500
   num_test = 250
   x_train, y_train, x_test, y_test = cifar10(num_train, num_test)

   dists = compute_distances_two_loops(x_train, x_test)  
   `,
         subsample:`
   # Subsample size
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
   # >>> labels shape: torch.Size([250])
   `,
         classes: `
   classes = ['plane', 'car', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']
   # plane = 0, car = 1, bird = 2 ... truck = 9
      
   print(x_train[0].shape)
   # Seeing shape/dimensionality of the 0th image (Python starts at 0)
   # >>> torch.Size([3, 32, 32])
   print(y_train[0]) 
   # Finding integer label of corresponding 0th image
   # >>> tensor(6)
   # Element 6 in list classes is a frog (which is correct, just take my word for it)`,
         declaration:`
   x_train, y_train, x_test, y_test = cifar10()

   # Training Set
   print('data shape:', x_train.shape)
   print('labels shape:', y_train.shape)
   # >>> data shape: torch.Size([50000, 3, 32, 32])
   # >>> labels shape: torch.Size([50000])

   # Test Set
   print('data shape:', x_test.shape)
   print('labels shape', y_test.shape)
   # >>> data shape: torch.Size([10000, 3, 32, 32])
   # >>> labels shape: torch.Size([10000])`,
         load:`
   import os
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
   async mounted () {
      window.MathJax.Hub.Config({
         tex2jax: {
            inlineMath: [['$','$']],
            displayMath: [['$$', '$$'], ['[', ']']],
            processEscapes: true,
            processEnvironments: true
         }
      });
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