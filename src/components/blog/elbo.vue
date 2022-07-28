<template>
   <div id="landing">
      <backdrop />
      <div id="textContainerHeader">
      </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <div id="blogHeader">
                  <p style="padding: 0 !important; margin: 0 !important;">Tractability and Optimization of the Variational Autoencoder</p>
                  <!-- <p style="display: flex; justify-content: center;">2 3 4 </p> -->
                  <p style="font-size: 18px; padding: 0 !important; ">7 &#8226; 8 &#8226; 2022</p>
                  <!-- <p>{{ blogs[0].name }}</p> -->
               </div>
            </div>
            <div class="blogtoc">
               Contents
               <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#elbo">Variational Lower Bound (or ELBO)</a></li>
                  <ul>
                     <li><a href="#logpx">Starting with: log p(x)</a></li>
                     <li><a href="#bayes">Starting with: Bayes Rule</a></li>
                     <li><a href="#kldivergence">Starting with: KL divergence</a></li>
                  </ul>
                  <li><a href="#dkl-encoder-prior">KL Divergence Between Encoder And Prior</a></li>
                  <li><a href="#gradientflow">Gradient Flow</a></li>
                  <ul>
                     <li><a href="#reparameterization">Reparameterization Trick</a></li>
                  </ul>
               </ul>
            </div>
            <div id="introduction"></div>
            <div id="blogSubHeader">
               Introduction
            </div>
            <p>
               Tractibility concerns become evident when considering likelihood estimation for a Variational Autoencoder. Unable to maximize the marginal distribution
               <vue-mathjax :formula='`$p_\\theta(x) = \\int{p_\\theta(x|z)p_\\theta(z)dz}$`'></vue-mathjax> due to complexity of integrating over the high dimensional latent space <vue-mathjax :formula='`$z$`'></vue-mathjax>,
               it is also prohibitive to maximize the bayesian representation <vue-mathjax :formula='`$p_\\theta(x) = p_\\theta(x|z)p_\\theta(z)/p_\\theta(z|x)$`'></vue-mathjax>
               because of the posterior <vue-mathjax :formula='`$p_\\theta(z|x)$`'></vue-mathjax>. To circumvent this tractibility concern an auxiliary network,
               <vue-mathjax :formula='`$q_\\phi(z|x)$`'></vue-mathjax>, is introduced to approximate the posterior: <vue-mathjax :formula='`$q_\\phi(z|x) \\approx p_\\theta(z|x)$`'></vue-mathjax>.
               <br><br>
               The relationship between the auxiliary network, popularly referred to as the <i>encoder</i>, and the posterior distribution will provide a tractible means for likelihood estimation
               and is what will become known as the <i>variational lower bound</i> or the <i> evidence lower bound (ELBO)</i>. Then by jointly updating parameters 
               <vue-mathjax :formula='`$\\phi$`'></vue-mathjax> and <vue-mathjax :formula='`$\\theta$`'></vue-mathjax> via some gradient optimization (maximizing likelihood), the Variational
               Autoencoder increases in efficacy.
               <br><br>
               The goal here is to "homogenize" the information I've found on VAEs. Different sources on the network begin explanation differently, so some people (me) are prone to confusion.
               By sewing together these sources, the different philosophies are packaged together and presented, hopefully, with a bow on top.
               <!-- <br><br>
               An important consideration about this read is that I only delve into a portion of what VAEs are. I focus particularly on what is explained above: both their tractibility and their gradient flow.
               I do not talk about overarching concepts typically associated with VAEs like discriminative vs. generative models or Deep Latent Variable Models (DLVMs).
               <a href="https://arxiv.org/abs/1906.02691" target="_blank">Here</a> is a link that does talk about these concepts.  -->
               
            </p>
            <div id="elbo"></div>
            <div id="blogSubHeader">
               Variational Lower Bound (or ELBO)
            </div>
            <p>
               The variational lower bound, <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>,
               is a value that is always less than or equal to the proposed density <vue-mathjax :formula='`$\\log{p_\\theta(x)}$`'></vue-mathjax>. By maximizing the tractible
               <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>, the intractible marginal likelihood, <vue-mathjax :formula='`$p_\\theta(x)$`'></vue-mathjax>, is also maximized. Note that
               applying the monotonic transformation <vue-mathjax :formula='`$\\log{f(x)}$`'></vue-mathjax> to some function <vue-mathjax :formula='`$f(x)$`'></vue-mathjax> preserves local extrema which does
               not conflict with maximum likelihood estimation. Below are three different ways to arrive at <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>.
            </p>
            <div id="logpx"></div>
            <h2>Starting with: log p(x)</h2>
            <br><br>
            <vue-mathjax :formula='logpx'></vue-mathjax>
            <p>
               This is, from what I've seen, the most popular way to formulate <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>. Equation 1.4 shows the relationship between the marginal likelihood,
               <vue-mathjax :formula='`$\\log{p_\\theta(x)}$`'></vue-mathjax>, and <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax> where the difference between the two values is the KL divergence
               from the encoder, <vue-mathjax :formula='`$q_\\phi(z|x)$`'></vue-mathjax>, to the posterior, <vue-mathjax :formula='`$p_\\theta(z|x)$`'></vue-mathjax>. Because the KL divergence is non negative,
               by subtracting it from the RHS we ensure <vue-mathjax :formula='`$\\log{p_\\theta(x) \\geq \\mathcal{L}}$`'></vue-mathjax>.
            </p>
            <div id="bayes"></div>
            <h2>Starting with: Bayes Rule</h2>
            <br><br>
            <vue-mathjax :formula='bayes'></vue-mathjax>
            <p>
               This explanation is a little unnecessarily long because it should seem apparent how to get from eq 2.2 to eq 2.7 with understanding of eq 1.0 - 1.5.
               However eq 2.31 shows a further decomposition of the variational lower bound: <vue-mathjax :formula='l'></vue-mathjax>.
               The left term is the <i>reconstruction error</i> or <i>expected reconstruction error</i> and the right is the KL divergence from the encoder to the prior distribution. An alternative
               formulation is: <vue-mathjax :formula='l2'></vue-mathjax>.
            </p>
            <div id="kldivergence"></div>
            <h2>Starting with: KL divergence</h2>
            <br><br>
            <vue-mathjax :formula='dkl'></vue-mathjax>
            <div id="dkl-encoder-prior"></div>
            <div id="blogSubHeader">
               KL Divergence Between Encoder And Prior
            </div>
            <p>
               <!-- When both the encoder and prior are multivariate gaussian distributions the KL divergence, <vue-mathjax :formula='`$D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z))$`'></vue-mathjax>,
               in the lower variational bound <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax> shown in equation 2.31 simplifies. Let the encoder
               <vue-mathjax :formula='`$q_\\phi(z|x) = \\mathcal{N}(\\mu_1, \\Sigma_1)$`'></vue-mathjax> where <vue-mathjax :formula='`$\\mu_1 = \\mu$`'></vue-mathjax> and 
               <vue-mathjax :formula='`$\\Sigma_1 = \\text{diag}(\\sigma_1^2, \\sigma_2^2, \\text{ ... }, \\sigma_n^2)$`'></vue-mathjax>
               and let the prior <vue-mathjax :formula='`$p_\\theta(z) = \\mathcal{N}(\\mu_2, \\Sigma_2)$`'></vue-mathjax> where <vue-mathjax :formula='`$\\mu_2 = 0$`'></vue-mathjax> and <vue-mathjax :formula='`$\\Sigma_2 = I$`'></vue-mathjax>. -->
            </p>
            <vue-mathjax :formula='encoderprior'></vue-mathjax>
            <div id="gradientflow"></div> 
            <div id="blogSubHeader">
               Gradient Flow
            </div>
            <p>
               <!-- Section 2.3 of <a href="https://arxiv.org/abs/1906.02691" target="_blank">An Introduction to Variational Autoencoders</a> -->
               Monte Carlo estimates are used to show the gradients wrt <vue-mathjax :formula='`$\\theta$`'></vue-mathjax> and <vue-mathjax :formula='`$\\phi$`'></vue-mathjax>
               for the variational lower bound <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>.
               In the case of <vue-mathjax :formula='`$\\nabla_\\theta$`'></vue-mathjax> and using <vue-mathjax :formula='l2'></vue-mathjax>, the gradient will be:
            </p>
            <vue-mathjax :formula='gradtheta'></vue-mathjax>
            <p>
               For <vue-mathjax :formula='`$\\nabla_\\phi$`'></vue-mathjax> the process is a little more convoluted because we're seeking the gradient for the parameters of the expectation.
            </p>
            <vue-mathjax :formula='gradphi'></vue-mathjax>
            <div id="reparameterization"></div>
            <h2>Reparameterization Trick</h2>
            <p>
               Although these estimates can provide tractible means to calculate <vue-mathjax :formula='`$\\nabla_{\\theta,\\phi}$`'></vue-mathjax>, they express high variance making them impractical for use. To reduce variance
               the reparameterization trick is used which delegates the stochasticity in random variable
               <vue-mathjax :formula='`$z$`'></vue-mathjax> to random variable <vue-mathjax :formula='`$\\epsilon$`'></vue-mathjax>. Random variable <vue-mathjax :formula='`$z$`'></vue-mathjax> is then "reparametized" to
               <vue-mathjax :formula='`$\\tilde{z} = g(\\phi, x, \\epsilon)$`'></vue-mathjax> and is referred to as the <i>control variate</i>.
            </p>
               <img id="img500" class="noInvert" @click="imageZoom" src="../../assets/blog/elbo/reparameterization3.png" alt="">
               <span style="font-size:14px; padding-top: -10px;"><i><a href="https://arxiv.org/abs/1906.02691" target="_blank">Figure 2.3 from "An Introduction to Variational Autoencoders"</a></i></span>
            <p>
               As a brief aside, the reparameterization trick reduces variance specifically through the use of a control variate.
               Variance reduction through a control variate works by approximating some function <vue-mathjax :formula='`$g(x)$`'></vue-mathjax>, whose expectation is known,
               to another function <vue-mathjax :formula='`$f(x)$`'></vue-mathjax>. Then by taking the variance of a Monte Carlo estimate, the known constant expectation nullifies. If
               <vue-mathjax :formula='`$g(x)$`'></vue-mathjax> is correlated with <vue-mathjax :formula='`$f(x)$`'></vue-mathjax>, then <vue-mathjax :formula='`$\\tilde{z}$`'></vue-mathjax> can produce lower variance.
            </p>
            <vue-mathjax :formula='controlvariate'></vue-mathjax>
            <p>
               Variance reduction works because the expectation of the control variate is known. Because of this,
               <vue-mathjax :formula='`$p(\\epsilon)$`'></vue-mathjax> it is popularly initialized as the unit gaussian <vue-mathjax :formula='`$\\epsilon \\sim \\mathcal{N}(0, 1)$`'></vue-mathjax>.
               By scaling and shifting <vue-mathjax :formula='`$\\epsilon$`'></vue-mathjax> through transformation <vue-mathjax :formula='`$g(\\phi, x, \\epsilon) = \\mu + \\sigma\\epsilon$`'></vue-mathjax>,
               the hope is to sample from random variable <vue-mathjax :formula='`$\\tilde{z} = g(\\phi, x, \\epsilon)$`'></vue-mathjax> that approximates <vue-mathjax :formula='`$z \\sim q(z|x)$`'></vue-mathjax> with lower variance.
            </p>
            <p>
               With reparameterization, the two representations of the variational lower bound <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax>  shown in "<a href="#bayes">Starting with: Bayes Rule</a>" are called
               the Stochastic Gradient Variational Bayes Estimator (SGVB) and can be represented as:
            </p>
            <vue-mathjax :formula='sgvb'></vue-mathjax>
            <p>
               
            </p>
         </div>
         <themeSwitch />
         <toTop />
   </div>
</template>

<script>
// import axios from 'axios'
import backdrop from '../backdrop.vue'
import toTop from '../../components/toTop.vue'
import themeSwitch from '../../components/themeSwitch.vue'
import { VueMathjax } from 'vue-mathjax'
import threeScene from '../../assets/js/threeScene'
import gsap from 'gsap'



export default {
   name: 'blogskeleton',
   components: {
      backdrop,
      toTop,
      themeSwitch, 
      'vue-mathjax': VueMathjax
      // MathJax
   },
   metaInfo: {
      meta: [
         {
            name: 'author',
            content: 'Ryan Lin'
         },
         { 
            name: 'description',
            content: 'Covering different interpretations to the variational lower bound (ELBO), gradient flow through a Variational Autoencoder, and the use of the reparameterization trick for variance reduction.'
         },
         {
            name: 'keywords',
            content: 'variational autoencoder, bayesian inference, bayes rule, gradient, variational lower bound, elbo, evidence lower bound, reparameterization trick, variation reduction'
         },
         {
            property: 'og:description',
            content: 'Covering different interpretations to the variational lower bound (ELBO), gradient flow through a Variational Autoencoder, and the use of the reparameterization trick for variance reduction.'
         }
      ]
   },
   data() {
      return {
         logpx: `$$\\begin{align}
         \\log{p_\\theta(x)} & = \\mathbb{E}_{q_{\\phi}(z|x)}[\\log{p_\\theta(x)}] && \\mathbb{E}_p[C] = C, \\text{where C is constant to distribution p} \\tag{1.0} \\\\[2ex] 
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x, z)}{p_\\theta(z|x)}}\\biggr] && \\text{probability chain rule}\\tag{1.1} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x, z)q_\\phi(z|x)}{q_\\phi(z|x)p_\\theta(z|x)}}\\biggr] && \\text{multiply by "1"}\\tag{1.2} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x, z)}{q_\\phi(z|x)}\\biggr] + \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_\\phi(z|x)}{p_\\theta(z|x)}}}\\biggr] && \\text{segregate}\\tag{1.3} \\\\[2ex]
            & = \\mathcal{L} + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) \\tag{1.4} \\\\[2ex]
         \\log{p_\\theta(x)} & \\geq \\mathcal{L} \\tag{1.5}
         \\end{align}$$`,
         bayes: `$$\\begin{align}
         \\log{\\frac{p_\\theta(x|z)p_\\theta(z)}{p_\\theta(z|x)}} & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x|z)p_\\theta(z)}{p_\\theta(z|x)}}\\biggr] && \\text{Reasoning from (1.0)} \\tag{2.0} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x|z)q_\\phi(z|x)p_\\theta(z)}{p_\\theta(z|x)q_\\phi(z|x)}}\\biggr] && \\text{multiply by "1"} \\tag{2.1} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{p_\\theta(x|z)} - \\log{\\frac{q_\\phi(z|x)}{p_\\theta(z)}} + \\log{\\frac{q_\\phi(z|x)}{p_\\theta(z|x)}}\\biggr] && \\text{segregate}\\tag{2.2} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x|z)} \\bigr] - \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_\\phi(z|x)}{p_\\theta(z)}} \\biggr] +
                \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_\\phi(z|x)}{p_\\theta(z|x)}} \\biggr] \\tag{2.3} && \\text{distibute expectation} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x|z)} \\bigr] - D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z)) + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) && \\text{*check below}\\tag{2.31} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x|z)} \\bigr] + \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(z)}{q_\\phi(z|x)}} \\biggr] +
               D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) && \\text{log reciprocal & definition of KL divergence} \\tag{2.4} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x|z)p_\\theta(z)}{q_\\phi(z|x)}} \\biggr] + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) && \\text{log product rule} \\tag{2.5} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(x, z)}{q_\\phi(z|x)}} \\biggr] + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) && \\text{probability chain rule} \\tag{2.6} \\\\[2ex]
            & = \\mathcal{L} + D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) \\tag{2.7} \\\\[2ex]
         \\end{align}$$`,
         dkl: `$$\\begin{align}
         D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z|x)) & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_{\\phi}(z|x)}{p_\\theta(z|x)}} \\biggr] && \\text{definition of kl divergence} \\tag{3.0} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_{\\phi}(z|x)p_\\theta(x)}{p_\\theta(z,x)}} \\biggr] && p(z|x) = \\frac{p(z, x)}{p(x)}\\, \\text{and reciprocal} \\tag{3.1} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_{\\phi}(z|x)}{p_\\theta(z,x)}} + \\log{p_\\theta(x)} \\biggr] && \\text{segregate} \\tag{3.2} \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{q_{\\phi}(z|x)}{p_\\theta(z,x)}}\\biggr] +  \\mathbb{E}_{q_{\\phi}(z|x)}[\\log{p_\\theta(x)}] && \\text{distribute expectation} \\tag{3.3} \\\\[2ex]
            & = -\\mathbb{E}_{q_{\\phi}(z|x)}\\biggl[\\log{\\frac{p_\\theta(z,x)}{q_{\\phi}(z|x)}}\\biggr] +  \\log{p_\\theta(x)} && \\text{log reciprocal and reasoning from (1.0) & (2.0)} \\tag{3.4} \\\\[2ex]
            & = - \\mathcal{L} + \\log{p_\\theta(x)}  \\tag{3.5} \\\\[2ex]
         \\end{align}$$`,
         l: `$\\mathcal{L} = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x|z)} \\bigr] - D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z))$`,
         l2: `$\\mathcal{L} = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}\\bigr]$`,
         gradtheta: `$$\\begin{align}
         \\nabla_\\theta \\mathcal{L} & =  \\nabla_\\theta\\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}\\bigr] \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\nabla_\\theta(\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x))}\\bigr] \\\\[2ex]
            & \\approx \\nabla_\\theta(\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) \\quad \\text{Monte Carlo estimate where } z \\sim q_\\phi(z|x) \\\\[2ex]
            & = \\nabla_\\theta(\\log{p_\\theta(x, z))}  \\\\[2ex]
         \\end{align}$$`,
         gradphi: `$$\\begin{align}
         \\nabla_\\phi \\mathcal{L} & =  \\nabla_\\phi\\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}\\bigr] && \\text{definition of } \\mathcal{L}\\tag{4.0} \\\\[2ex]
            & = \\nabla_\\phi \\int (\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)})q_{\\phi}(z|x)dz && \\text{continuous latent space z} \\tag{4.1}\\\\[2ex]
            & = \\nabla_\\phi \\int \\log{p_\\theta(x, z)}q_{\\phi}(z|x)dz - \\nabla_\\phi \\int \\log{q_\\phi(z|x)}q_{\\phi}(z|x)dz && \\text{distribute terms} \\tag{4.2}\\\\[2ex]
            & =  \\int \\log{p_\\theta(x, z)}\\nabla_\\phi q_{\\phi}(z|x)dz - \\int \\bigl(\\log{q_\\phi(z|x)} \\nabla_\\phi q_{\\phi}(z|x) + \\nabla_\\phi q_{\\phi}(z|x)\\bigr)dz && \\text{product rule} \\tag{4.3}\\\\[2ex]
            & =  \\int \\log{p_\\theta(x, z)}\\nabla_\\phi q_{\\phi}(z|x)dz - \\int \\log{q_\\phi(z|x)} \\nabla_\\phi q_{\\phi}(z|x)dz + \\nabla_\\phi \\int q_{\\phi}(z|x)dz && \\text{distribute integral on RHS} \\tag{4.4}\\\\[2ex]
            & =  \\int \\log{p_\\theta(x, z)}\\nabla_\\phi q_{\\phi}(z|x)dz - \\int \\log{q_\\phi(z|x)} \\nabla_\\phi q_{\\phi}(z|x)dz && \\int q_\\phi(z|x)dz = 1, \\nabla_\\phi 1 = 0 \\tag{4.5}\\\\[2ex]
            & =  \\int (\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) \\nabla_\\phi q_{\\phi}(z|x)dz && \\text{combine terms & factor out } \\nabla_\\phi q_\\phi(z|x) \\tag{4.6}\\\\[2ex]
            & =  \\int (\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) q_{\\phi}(z|x) \\nabla_\\phi \\log{q_{\\phi}(z|x)}dz && \\text{chain rule, }\\frac{d}{dx}\\log{(x)} = \\frac{1}{x}\\log{\\biggl(\\frac{d}{dx}x\\biggr)}   \\tag{4.7}\\\\[2ex]
            & =  \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[(\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) \\nabla_\\phi \\log{q_{\\phi}(z|x)}\\bigr] && \\text{convert back to expectation}  \\tag{4.8}\\\\[2ex]
            & \\approx  (\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) \\nabla_\\phi \\log{q_{\\phi}(z|x)} && \\text{Monte Carlo estimate where } z \\sim q_\\phi(z|x) \\tag{4.9}\\\\[2ex]
         \\end{align}$$`,
         controlvariate: `\\begin{align}
         \\int f(x)dx & = \\int g(x)dx + \\int (f(x) - g(x))dx \\tag{5.0} \\\\
            & \\approx \\mathbb{E}[g(x)] + \\frac{1}{n}\\sum_n(f(x) - g(x)) && \\text{take n samples} \\tag{5.1} \\\\ 
         \\text{Var of eq (5.1)}& = \\frac{1}{n}\\text{Var}\\biggl(\\sum_n(f(x) - g(x))\\biggr) && \\text{Var}(X + c) = \\text{Var}(X), \\text{where c is constant} \\tag{5.2} \\\\
         \\end{align}`,
         sgvb: `$$\\begin{align}
         \\mathcal{L} & \\approx \\mathcal{\\widetilde{L}}^A \\\\
            & = \\frac{1}{L}\\sum_{l=1}^L \\log{p_\\theta(x, z^l)} - \\log{q_\\phi(z^l|x)} && \\text{where } z^l = g(\\phi, x, \\epsilon^l) \\text{ and } \\epsilon^l \\sim p(\\epsilon) \\\\
            & \\text{and} \\\\[2ex]
         \\mathcal{L} & \\approx \\mathcal{\\widetilde{L}}^B \\\\
            & = - D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z)) + \\frac{1}{L}\\sum_{l=1}^L\\log{p_\\theta(x|z^l)} && \\text{where } z^l = g(\\phi, x, \\epsilon^l) \\text{ and } \\epsilon^l \\sim p(\\epsilon)
         \\end{align}$$`,
         encoderprior: `\\begin{align}
         x
         \\end{align}`,
      }
   },

   methods: {
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