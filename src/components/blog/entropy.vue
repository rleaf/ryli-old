<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p>Entropy in Machine Learning</p>
                  <p style="font-size: 18px">6 &#8226; 11 &#8226; 2022</p>
               </div>
            </div>
            <div class="tocHeader">
               <div class="blogtoc">
                     Contents
                  
                  <ul>
                     <li><a href="#introduction">Introduction</a></li>
                     <li>Entropy</li>
                     <ul>
                        <li><a href="#intuition">Intuition & Explanation</a></li>
                        <li><a href="#entropymath">Mathematical Formalism</a></li>
                        <li><a href="#entropyexamples">Examples</a></li>
                     </ul>
                     <li><a href="#selfinformation">Self Information</a></li>
                     <li><a href="#cross">Cross Entropy</a></li>
                     <ul>
                        <li><a href="#crossexample">Example</a></li>
                     </ul>
                     <li><a href="#joint">Joint Entropy</a></li>
                     <li><a href="#conditional">Conditional Entropy</a></li>
                     <ul>
                        <li><a href="#61">Example (6.1)</a></li>
                        <li><a href="#645">Example (6.4) & (6.5)</a></li>
                        <li><a href="#70">Example (7.0)</a></li>
                     </ul>
                     <!-- <li><a href="#kldivergence">Kullback-Leibler Divergence</a></li> -->
                     <li><a href="#thoughts">Thoughts</a></li>
                     <!-- <li>KL Divergence</li>
                     <ul>
                        <li></li>
                     </ul> -->
                  </ul>
               </div>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               Although this read
               is catered to explaining entropy through a Machine Learning perspective, I encourage reading through some of the originating paper:
               <a href="https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf" target="_blank">A Mathematical Theory of Communication</a>. All random variables mentioned here, unless
               specifically mentioned otherwise, are discrete. I currently do not discuss <a href="https://en.wikipedia.org/wiki/Differential_entropy" target="_blank">differential entropy</a>.
            </p>
            <div id="intuition"></div>
            <div id="blogSubHeader">
               Entropy
            </div>
            <h2>Intuition & Definition</h2>
            <p>
               Entropy, in <a href="https://en.wikipedia.org/wiki/Information_theory" target="_blank">Information Theory</a>, is the innate uncertainty of a random variable with its associated probability
               distribution. The word "uncertainty" is synonymous to other interpretations used to define entropy such as "missing information", "surprisal", and "lack of predictability". The higher the entropy, the more
               uncertainty there is encoded into a random variable. By this logic a uniform distribution encodes the maximum entropy on a discrete random variable as each value is equally probable - there is total
               uncertainty as to which value will be sampled. 
               <br>
               <br>
               As an example and to briefly
               generalize outside of Machine Learning, entropy is the measurement of information. <i>"To be sure, this word information in communication theory
               relates not so much to what you do say, as to what you could say. That is, information is a measure of one's freedom of choice when one selects a message"
               (<a href="https://pure.mpg.de/rest/items/item_2383164/component/file_2383163/content" target="_blank">Preface of A Mathematical Theory of Communication, p. 9</a></i>). 
               <!-- <br> -->
               If I say to you, <i>"The rain in Spain falls mainly on the..."</i>, you might infer the next word in that statement
               to be <i>"plain"</i>. For context, this is a famous quote from the film <a href="https://en.wikipedia.org/wiki/My_Fair_Lady_(film)" target="_blank">My Fair Lady</a>. In the example the word
               is the random variable and what is inferred, "plain", is what is sampled from the distribution of possible values.
               We can say, because of the quote's fame, that there is high certainty of the random variable to be the word "plain" thus yielding low entropy. However, it may
               be too ambitious to assert that there is <i>no</i> entropy at all, indicating certainty, <vm :formula="`$p(X = \\textit{plain}) = 1$`"></vm>, because maybe I lied about attributing 
               my partially finished quote to <i>My Fair Lady</i> and instead just wanted to say <i>"The rain in Spain falls mainly on the ground"</i>.
            </p>
            <div id="entropymath"></div>
            <h2>Mathematical Formalism of Entropy</h2>
            <p>
               Entropy can be represented with different units depending on the base of the logarithm: nats (<vm :formula="`$\\ln$`"></vm>),
               bits &  shannons (<vm :formula="`$\\log_2$`"></vm>), or bans (<vm :formula="`$\\log_{10}$`"></vm>); anecdotally, I have never seen entropy defined in bans.
               Defined as <vm :formula="`$\\mathbb{H}$`"></vm>, the entropy of the random variable <vm :formula="`$X$`"></vm> with distribution
               <vm :formula="`$p$`"></vm> is: 
            </p>
               <vm :formula='entropy.entropy'></vm>
            <p>
               As an example we can represent the entropy of random variable <vm :formula="`$X$`"></vm> with the aforementioned uniform distribution,
               <vm :formula="`$X\\sim\\mathcal{U}$`"></vm>, as such:
            </p>
            <vm :formula='entropy.uniform'></vm>
            <br>
            <div id="entropyexamples"></div>
            <h2>Examples</h2>
            <p>
               Let's pretend we're rolling a fair 4 sided die where each vertex has equal probability of pointing up (you look at the vertices on a 4 sided die, not
               the face). Taking the uniform distribution where the random variable, the die, has 4 possible outcomes, <vm :formula="`$X=\\{1, 2, 3, 4\\}$`"></vm>, we can calculate the entropy simply with
               <vm :formula="`$\\log_2{4} = 2\\,\\text{bits}$`"></vm>. With a 6 sided die, this would be <vm :formula="`$\\log_2{6} = 2.58\\dots\\text{bits}$`"></vm>.
               As mentioned previously about the uniform distribution, these answers not only represent the amount of entropy
               present in our dice random variables, but are also the upper bound of possible entropy. 
            </p>
               <!-- <h3>Uniform distribution of a random variable with 3 events: </h3> -->
            
               <vm :formula="`$$\\mathbb{H}(X),\\; X \\sim \\mathcal{U}(1, 3)$$`"></vm>
               <br>
               <vm :formula='entropy.uniformThree'></vm>
               <br><br>

               <vm :formula="`$$\\mathbb{H}(X),\\; X \\sim \\mathcal{U}(1, 2)$$`"></vm>
               <i>This is equal to a fair Bernoulli distribution</i>
               <br>
               <vm :formula='entropy.uniformBernoulli'></vm>
               <br><br>

               <vm :formula="`$$\\mathbb{H}(X),\\; X \\sim p\\;\\text{where}$$`"></vm>
               <br>
               <vm :formula='`$$p(x) = \\begin{cases} 
                  0.8 & \\text{if}\\; x = 0 \\\\
                  0.2 & \\text{if}\\; x = 1 \\\\  
                  \\end{cases} $$`'></vm>
               <br>
               <vm :formula='entropy.unfairBernoulli'></vm>
               <br><br>
               
               <vm :formula="`$$\\mathbb{H}(X),\\; X \\sim p\\;\\text{where}$$`"></vm>
               <br>
               <vm :formula='`$$p(x) = \\begin{cases} 
                  0.95 & \\text{if}\\; x = 0 \\\\  
                  0.05 & \\text{if}\\; x = 1 \\\\  
                  \\end{cases} $$`'></vm>
               <br>
               <vm :formula='entropy.extremeBernoulli'></vm>
            
            <p>
               The amount of entropy is predicated primarily on the distribution a random variable follows. It may seem that the amount of values in a random variable participates to the entropy given the examples:
               <vm :formula="`$X\\sim\\mathcal{U}(1,4) = 2\\,\\text{bits}$`"></vm> and <vm :formula="`$X\\sim\\mathcal{U}(1,3) = 1.58\\dots\\text{bits}$`"></vm> where the only difference
               is <vm :formula="`$X=\\{1, 2, 3, 4\\}$`"></vm> versus <vm :formula="`$X=\\{1, 2, 3\\}$`"></vm>, however this is not accurate. We can see this by assigning a categorical
               distribution to random variable <vm :formula="`$Z=\\{1, 2, 3, 4\\}$`"></vm> such that <vm :formula="`$p(Z=1)=0$`"></vm> and
               <vm :formula="`$ p(Z=2) = p(Z=3) = p(Z=4) = \\frac{1}{3}$`"></vm>. This random variable, <vm :formula="`$Z$`"></vm>, although composed of four values yields the same
               entropy as <vm :formula="`$X\\sim\\mathcal{U}(1,3)$`"></vm>, composed of three. Of course if we know that there is no impossible value in a random variable,
               <vm :formula="`$p(X=x)=0$`"></vm>, we can then attribute the amount of values to the entropy.
               <br><br>
               Looking at entropy like this we can decompose the measurement to be a combination of a random variable's probability distribution and i.f.f the random variable has no impossible values, the total amount
               of values in that random variable.
               <!-- You can see that as the values of random variable
               <vm :formula="`$X$`"></vm> decrement while following the same uniform distribution, <vm :formula="`$\\mathcal{U}$`"></vm>, the entropy reduces accordingly.
               You can also see that as we fix the values of random variable <vm :formula="`$X$`"></vm> to be the same but bias the probabilities to further promote certainty, the entropy reduces. -->
            </p>
            <div id="selfinformation"></div>
            <div id="blogSubHeader">
               Self Information
            </div>
            <p>
               If entropy is the measure of the expected uncertainty of a random variable and its associated probability distribution, self information is the measure of uncertainty for a specific value in a random
               variable and its associated probability distribution. Self information is the basic quantity that tells us how much uncertainty is present in a particular event. 
               Defined as <vm :formula="`$I$`"></vm> the self information of random variable <vm :formula="`$X$`"></vm> with distribution <vm :formula="`$p$`"></vm> is:
            </p>
            <vm :formula="`$I(x) \\triangleq -\\log_bp(x)$`"></vm>
            <p>
               where once again the base <vm :formula="`$b$`"></vm> in <vm :formula="`$\\log_b$`"></vm> denotes the unit. Using the most recent example in the <a href="#entropyexamples">entropy</a>
               section with the Bernoulli distribution where <vm :formula="`$p(X=0) = 0.95$`"></vm>, we can calculate entropy of that event as
               <vm :formula="`$I(X=0) = -\\log_20.95 = 0.07400\\dots\\text{bits}$`"></vm>. This event encodes approximately 3.8x less information
               compared to its entropy of
               <vm :formula="`$0.28639\\dots\\text{bits}$`"></vm>.
            </p>
               <!-- <vm :formula="entropy.entropySelfInformation"></vm> -->
            <div id="cross"></div>
            <div id="blogSubHeader">
               Cross Entropy
            </div>
            <p>
               Cross entropy tells us how much more entropy there will be on a random variable with its associated innate distribution if we sample it from a new prescribed distribution.
               Because two distributions are embedding onto a random variable, cross entropy is a metric that quantifies the difference between those two probability distributions.
               It tells us how many more expected bits we will need, assuming <vm :formula="`$\\log_2$`"></vm>, if we calculate information that has distribution <vm :formula="`$p(x)$`"></vm>
               using a new distribution <vm :formula="`$q(x)$`"></vm>.
               Cross entropy can also be thought of as the average uncertainty of information, generated from <vm :formula="`$p(x)$`"></vm>,
               of self information for all values in <vm :formula="`$q(x)$`"></vm>.
               
               Defined as <vm :formula="`$\\mathbb{H}$`"></vm> the cross entropy of random variable <vm :formula="`$X$`"></vm> between distributions
               <vm :formula="`$p$`"></vm> and <vm :formula="`$q$`"></vm> is:
            </p>
            <vm :formula='entropy.crossEntropy'></vm>
            <p>
               Cross entropy is inclusively lower bounded by the originating distribution's entropy, <vm :formula="`$\\mathbb{H}(p)$`"></vm>, and has no upper bound. The lower the cross entropy
               between distributions <vm :formula="`$p(x)$`"></vm> and <vm :formula="`$q(x)$`"></vm> the more similar the two distributions are. If
               <vm :formula="`$\\mathbb{H}(p,q) = \\mathbb{H}(p,p)$`"></vm>, then <vm :formula="`$q(x) = p(x)$`"></vm> and we are simply calculating the entropy
               <vm :formula="`$\\mathbb{H}(p)$`"></vm>. Conversely, the higher the cross entropy or the expected bits between two distributions, the more idiosyncratic the two distributions will be
               from one another.
               <br><br>
               Machine learning considers two distributions, <vm :formula="`$p(x)$`"></vm> and <vm :formula="`$q(x)$`"></vm> in this case, where one is the ground truth distribution
               of the dataset we are training a model on (let's make that <vm :formula="`$p(x)$`"></vm>) and the other is predicted distribution (let's make that <vm :formula="`$q(x)$`"></vm>).
               An implementation of cross entropy called <a href="https://en.wikipedia.org/wiki/Cross_entropy#Cross-entropy_loss_function_and_logistic_regression">cross entropy loss</a> is a popular loss function to find how
               dissimilar the two distributions <vm :formula="`$p(x)$`"></vm> and <vm :formula="`$q(x)$`"></vm> are from each other.
            </p>
            <div id="crossexample"></div>
            <h2>Example</h2>
            <p>
               Let random variable <vm :formula="`$X=\\{1, 2, 3, 4\\}$`"></vm> and
            
               <br>
               <br>
               <vm :formula='`$p(x) = \\begin{cases} 
                  0.15 & \\text{if}\\; x = 1 \\\\  
                  0.30 & \\text{if}\\; x = 2 \\\\  
                  0.20 & \\text{if}\\; x = 3 \\\\  
                  0.35 & \\text{if}\\; x = 4 \\\\  
                  \\end{cases} \\qquad$`'></vm>
               <vm :formula='`$q(x) = \\begin{cases} 
                  0.25 & \\text{if}\\; x = 1 \\\\  
                  0.10 & \\text{if}\\; x = 2 \\\\  
                  0.40 & \\text{if}\\; x = 3 \\\\  
                  0.25 & \\text{if}\\; x = 4 \\\\  
                  \\end{cases} $`'></vm>
            </p>
               <vm :formula='entropy.crossEntropyExample1'></vm>
               <vm :formula='entropy.crossEntropyExample2'></vm>
            <p>
               Unless <vm :formula="`$q(x)=p(x)$`"></vm>, <vm :formula="`$\\mathbb{H}(p, q) \\neq \\mathbb{H}(q, p)$`"></vm>. Introducing a third distribution which will be <i>very</i>
               similar to <vm :formula="`$p(x)$`"></vm> to better illustrate the lower bounds of cross entropy, let
               <vm :formula='`$$z(x) = \\begin{cases} 
                  0.17 & \\text{if}\\; x = 1 \\\\  
                  0.28 & \\text{if}\\; x = 2 \\\\  
                  0.20 & \\text{if}\\; x = 3 \\\\  
                  0.35 & \\text{if}\\; x = 4 \\\\  
                  \\end{cases}$$`'></vm>
            </p>
            <vm :formula='entropy.crossEntropyExample3'></vm>
            <vm :formula='entropy.crossEntropyExample4'></vm>
            <p>
               It may be discussed later, but the difference between <vm :formula="`$\\mathbb{H}(p, z)$`"></vm> and <vm :formula="`$\\mathbb{H}(p)$`"></vm>
               is known as the <a href="https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence" target="_blank">Kullback-Leibler divergence / Relative entropy</a>:
               <vm :formula="`$$D_\\mathbb{KL}(p\\;\\lvert\\rvert \\;z) = \\mathbb{H}(p, z) - \\mathbb{H}(p) = 0.00277$$`"></vm>
            </p>
            <div id="joint"></div>
            <div id="blogSubHeader">
               Joint Entropy
            </div>
            <p>
               Joint entropy carries analagous concept and definition as <a href="#intuition">entropy</a> however operates on a set of random variables as opposed to one.
               Defined as <vm :formula="`$\\mathbb{H}$`"></vm>, the joint entropy of the random variables <vm :formula="`$X$`"></vm> and <vm :formula="`$Y$`"></vm>
               with joint distribution <vm :formula="`$p$`"></vm> is:
            </p>
            <vm :formula='entropy.jointEntropy'></vm>
            <p>
               Although similar to entropy, <vm :formula="`$\\mathbb{H}(X)$`"></vm>, an important difference is the potential correlation between the multiple random variables. As correlation is a metric
               of interdependence of data, it should be obvious that higher the correlation, the more certainty or information we will have, which will result in lower entropy. Because of this relationship
               we can say that unless the events sampled from random variables of a joint distribution indicate independence, the joint entropy will usually be less than the sum of each random variable's entropy:
               <vm :formula="`$\\mathbb{H}(X, Y) \\lt \\mathbb{H}(X) + \\mathbb{H}(Y)$`"></vm> and if they are independent:
               <vm :formula="`$\\mathbb{H}(X, Y) = \\mathbb{H}(X) + \\mathbb{H}(Y)$`"></vm>.
            </p>
            <h2>Example</h2>
            <p>
               Given the joint distribution between <vm :formula="`$X$`"></vm> and <vm :formula="`$Y$`"></vm>:
               <table>
                  <tr>
                     <th style="border-right: 1px solid; border-bottom: 1px solid;" ><vm :formula="`$p(X,Y)$`"></vm></th>
                     <th style="border-bottom: 1px solid;"><vm :formula="`$Y = 0 $`"></vm></th>
                     <th style="border-bottom: 1px solid;"><vm :formula="`$Y = 1 $`"></vm></th>
                  </tr>
                  <tr>
                     <th style="border-right: 1px solid;"><vm :formula="`$X = 0$`"></vm></th>
                     <td><vm :formula="`$1/6$`"></vm></td>
                     <td><vm :formula="`$2/6$`"></vm></td>
                  </tr>
                  <tr>
                     <th style="border-right: 1px solid;"><vm :formula="`$X = 1$`"></vm></th>
                     <td><vm :formula="`$1/6$`"></vm></td>
                     <td><vm :formula="`$2/6$`"></vm></td>
                  </tr>
               </table>
            </p>
            <vm :formula='entropy.jointEntropy2'></vm>
            
            <div id="conditional"></div>
            <div id="blogSubHeader">
               Conditional Entropy
            </div>
            <p>
               The conditional entropy tells us how much uncertainty there will be in calculating <vm :formula="`$Y$`"></vm> given <vm :formula="`$X$`"></vm>. Because of
               the relationship between joint and conditional probability, specifically the <a href="https://en.wikipedia.org/wiki/Chain_rule_(probability)" target="_blank">chain rule of probability</a>:
               <vm :formula="`$p(x, y) = p(x\\,|\\, y)\\,p(y) = p(y\\,|\\,x) \\,p(x)$`"></vm>, there are a 
               handful of different interpretations to the conditional entropy. Most, if not all, of these interpretations are built directly on concepts defined above. As such, I would like to initially
               define conditional entropy with what seems the most intuitive and then work through the remaining rigor to show those other interpretations. Defined as
               <vm :formula="`$\\mathbb{H}$`"></vm>, the conditional entropy of the random variable <vm :formula="`$Y$`"></vm> given <vm :formula="`$X$`"></vm>
               with distribution <vm :formula="`$p$`"></vm> is:
            </p>
            <div style="justify-content: left"></div>
            <vm :formula='entropy.conditionalEntropy1'></vm>
            <p>
               Equation 6.1, 6.4, 6.5, and 7.0 are the different interpretations I am going to focus on. The differences between these interpretations is that they each require a different combination of understanding
               for concepts in probability theory, <a href="#intuition">entropy</a>, <a href="#selfinformation">self information</a> and <a href="#joint">joint entropy</a>. The examples refer to the
               distribution defined immediately below.
               <br><br>
               Rolling a fair die, let <vm :formula="`$X=1$`"></vm> to indicate the rolled number is even and <vm :formula="`$X=0$`"></vm> otherwise. Let
               <vm :formula="`$Y=1 $`"></vm> to indicate the rolled number is prime and <vm :formula="`$Y = 0$`"></vm> otherwise.
               <br>
               <br>
               <table>
                  <tr>
                     <th style="border-right: 1px solid; border-bottom: 1px solid;"><vm :formula="`$n$`"></vm></th>
                     <th style="border-bottom: 1px solid;">1</th>
                     <th style="border-bottom: 1px solid;">2</th>
                     <th style="border-bottom: 1px solid;">3</th>
                     <th style="border-bottom: 1px solid;">4</th>
                     <th style="border-bottom: 1px solid;">5</th>
                     <th style="border-bottom: 1px solid;">6</th>
                  </tr>
                  <tr>
                     <th style="border-right: 1px solid;"><vm :formula="`$X$`"></vm></th>
                     <th>0</th>
                     <th>1</th>
                     <th>0</th>
                     <th>1</th>
                     <th>0</th>
                     <th>1</th>
                  </tr>
                  <tr>
                     <th style="border-right: 1px solid;"><vm :formula="`$Y$`"></vm></th>
                     <th>0</th>
                     <th>1</th>
                     <th>1</th>
                     <th>0</th>
                     <th>1</th>
                     <th>0</th>
                  </tr>
               </table>
               <br>
               <table>
                  <tr>
                     <th style="border-right: 1px solid; border-bottom: 1px solid;" ><vm :formula="`$p(X,Y)$`"></vm></th>
                     <th style="border-bottom: 1px solid;"><vm :formula="`$Y = 0 $`"></vm></th>
                     <th style="border-bottom: 1px solid;"><vm :formula="`$Y = 1 $`"></vm></th>
                  </tr>
                  <tr>
                     <th style="border-right: 1px solid;"><vm :formula="`$X = 0$`"></vm></th>
                     <td><vm :formula="`$1/6$`"></vm></td>
                     <td><vm :formula="`$2/6$`"></vm></td>
                  </tr>
                  <tr>
                     <th style="border-right: 1px solid;"><vm :formula="`$X = 1$`"></vm></th>
                     <td><vm :formula="`$2/6$`"></vm></td>
                     <td><vm :formula="`$1/6$`"></vm></td>
                  </tr>
               </table>
            </p>
            <div id="61"></div>
            <h2>Example 6.1</h2>
            <p>
               Equation 6.1 most succinctly defines the relationship, in terms of entropy, between joint and conditional probability. Conditional probability is joint probability except the only difference is that, in
               the case of two random variables, one of those random variables are fixed. This means the conditional distribution is restricted to a subspace of the joint distribution's sample space. This
               intuition is directly transferable to the concept of uncertainty. If I have <vm :formula="`$p(y\\,|\\,x)$`"></vm>, because the event of random variable
               <vm :formula="`$X$`"></vm> is predetermined, the entropy it provides is equal to 0. We can reformulate this as the joint entropy,
               <vm :formula="`$\\mathbb{H}(X, Y)$`"></vm>, except again because random variable <vm :formula="`$X$`"></vm> should be 0 as it has no entropy (because it is given), it has to be subtracted. 
               This provides us with equation 6.1.
            </p>
            <vm :formula='entropy.conditionalEntropy2'></vm>
            <br><br>
            <div id="645"></div>
            <h2>Examples 6.4 & 6.5</h2>
            <p>
               Both 6.4 and 6.5 have a couple "sub" interpretations. One way to look at it is taking the joint cross entropy where <vm :formula="`$P = p(x, y)$`"></vm> and
               <vm :formula="`$Q = p(y\\,|\\,x)$`"></vm>. Through this lens, we are calculating the combined expected entropy between random variables <vm :formula="`$X$`"></vm>
               and <vm :formula="`$Y$`"></vm> of their joint distribution when encoded to a new conditional distribution. This is synonymous to quantifying the difference between the two distributions.
               A second way to look at it is by taking the expectation generated from distribution <vm :formula="`$P$`"></vm> of the self information of distribution
               <vm :formula="`$Q$`"></vm>. A third way can be seen as finding the KL Divergence <vm :formula="`$D_{\\mathbb{KL}}(p(x, y)\\,||\\,p(x))$`"></vm>.
            </p>
            <vm :formula='entropy.conditionalEntropy3'></vm>
            <br><br>
            <div id="70"></div>
            <h2>Example 7.0</h2>
            <p>
               Equation 7.0 says "the conditional entropy of <vm :formula="`$Y$`"></vm> given <vm :formula="`$X$`"></vm> is equal to the expectation, generated
               from the marginal distribution of <vm :formula="`$X$`"></vm>, of the entropy of the distribution <vm :formula="`$Y$`"></vm> given
               <vm :formula="`$X$`"></vm>. It is subtle and may look visually deceiving, 
               but the right hand term inside the expectation is not conditional entropy, it is the entropy of the conditional distribution.
            </p>
            <vm :formula='entropy.conditionalEntropy4'></vm>
            <div id="kldivergence"></div>
            <!-- <div id="blogSubHeader">
               Kullback-Leibler Divergence
            </div>
            <p>
               Also known as relative entropy, the KL Divergence is a measurement that quantifies the dissimilarity between two probaility distributions <vm :formula="`$p$`"></vm>
               and <vm :formula="`$q$`"></vm>
            </p> -->
            <div id="thoughts"></div>
            <div id="blogSubHeader">
               Thoughts
            </div>
            <p>
               My first run-in with entropy was cross entropy loss maybe half a year ago at the time of writing this. My second was with the KL divergence very quickly after that. My third happened about a week ago and
               is what made me want to write this, I was reading about the lower variational bound on a variational autoencoder. Originally I did not intend to delve into the different ways you can view some of the
               entropies such as the conditional entropy but the more I thought about it, the more I realized "Oh...you can look at it like this too, let me quickly write that down". I think it's important in all of math,
               but I'd like to emphasize trying to understand the different interpretations of entropy found here and in any other read. Because a lot of machine learning is defined probabilistically, information (entropy)
               has become a very useful tool in reconfiguring mechanics in deep learning.
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
import entropyjs from './assets/entropy'
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import { VueMathjax } from 'vue-mathjax'

export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      themeSwitch, 
      'vm': VueMathjax
      // MathJax
   },
   head: {
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: `An explanation on entropy from a Machine Learning perspective. I incorporate philosophy drawn from Claude Shannon's "A Mathematical Theory of Communication" and provides examples, while walking through the math, of the different types of entropy.`,
         },
         {
            name: 'keywords',
            content: 'entropy, machine learning, self information, cross entropy, cross entropy loss, joint entropy, conditional entropy, kullback leibler divergence, kl divergence, relative entropy'
         },
         {
            property: 'og:description',
            content: `An explanation on entropy from a Machine Learning perspective. I incorporate philosophy drawn from Claude Shannon's "A Mathematical Theory of Communication" and provides examples, while walking through the math, of the different types of entropy.`,
         }
      ]
   },
   data() {
      return {
         entropy: entropyjs
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