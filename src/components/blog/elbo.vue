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
                  <li><a href="#dkl-encoder-prior">Closed Form Computation of KL Divergence in the ELBO</a></li>
                  <li><a href="#gradientflow">Gradient Flow</a></li>
                  <ul>
                     <li><a href="#reparameterization">Reparameterization Trick</a></li>
                  </ul>
               </ul>
            </div>
            <i>(8/18/22) Edit: Improved explanation on what the reparameterization trick is and how it works.</i>
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
               Closed Form Computation of KL Divergence in the ELBO
            </div>
            <p>
               This section is more of an aside to show the breakdown of the KL divergence term in <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax> when the prior and encoder are initialized
               to certain densities. To make sure our ducks are in a row before proceeding...
               <br>
               <b>Duck 1:</b> For reference, the lower variational bound referenced in eq 2.31 is: <vue-mathjax :formula='l1'></vue-mathjax>
               <br>
               <b>Duck 2:</b> The KL divergence between two multivariate gaussians simplifies to (<a href="/blog/kl-divergence-mv-gaussian" target="_blank">shown here</a>):
               <vue-mathjax :formula='`$$D_{\\mathbb{KL}}(q\\,||\\,p) \\triangleq \\frac{1}{2}\\Biggl(\\log\\Bigl(\\frac{\\det{(\\Sigma_2)}}{\\det{(\\Sigma_1)}}\\Bigr) - n +
               \\text{tr}\\bigl(\\Sigma^{-1}_2\\Sigma_1\\bigr)+\\bigl(\\mu_2-\\mu_1\\bigr)^\\top\\Sigma^{-1}_2\\bigl(\\mu_2-\\mu_1\\bigr)\\Biggr)$$`'></vue-mathjax>
               <br>  
               When both the encoder <vue-mathjax :formula='`$q_\\phi(z|x)$`'></vue-mathjax> and prior <vue-mathjax :formula='`$p_\\theta(z)$`'></vue-mathjax> are multivariate diagonal gaussians, where
               <vue-mathjax :formula='`$q_\\phi(z|x) = \\mathcal{N}(\\mu_1, \\Sigma_1) = \\mathcal{N}(\\mu, \\Sigma)$`'></vue-mathjax> and <vue-mathjax :formula='`$p_\\theta(z) = \\mathcal{N}(\\mu_2, \\Sigma_2) =\\mathcal{N}(0, I)$`'></vue-mathjax>, the
               KL divergence term in <vue-mathjax :formula='`$\\mathcal{L}$`'></vue-mathjax> can be computed.
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
               The reparameterization trick is a procedure that segregates the stochasticity in <vue-mathjax :formula='`$z$`'></vue-mathjax> from the desired parameters for backpropogation.
               This provides two benefits. One, reparameterization is a variance reduction technique. Although these estimates can provide tractible means to calculate <vue-mathjax :formula='`$\\nabla_{\\theta,\\phi}$`'></vue-mathjax>,
               they express high variance making them impractical for use.
               By reducing variance, we ensure a more appropriate gradient for the model to learn. Two, reparameterization also guarantees
               the function to be differentiable because <vue-mathjax :formula='`$\\nabla_\\phi q_\\phi(z|x)$`'></vue-mathjax> is not always possible to compute. By eschewing the gradient's parameters from this density's parameters, we circumvent this issue.
            </p>
               <img id="img500" class="noInvert" @click="imageZoom" src="../../assets/blog/elbo/reparameterization3.png" alt="">
               <span style="font-size:14px; padding-top: -10px;"><i><a href="https://arxiv.org/abs/1906.02691" target="_blank">Figure 2.3 from "An Introduction to Variational Autoencoders"</a></i></span>
            <p>
               Reparameterization introduces an intermediary function <vue-mathjax :formula='`$g$`'></vue-mathjax> such that instead of <vue-mathjax :formula='`$z \\sim q_\\phi(z|x)$`'></vue-mathjax>,
               <vue-mathjax :formula='`$z = g(\\phi, x, \\epsilon)$`'></vue-mathjax> where the stochasticity is delegated to random variable <vue-mathjax :formula='`$\\epsilon \\sim p(\\epsilon)$`'></vue-mathjax>. The desired parameter for backpropagation,
               <vue-mathjax :formula='`$\\phi$`'></vue-mathjax>, now becomes deterministic and provides a more reliable flow downstream.
               On a more tangible level this converts a lot of the headache witnessed in equations 5.X to something more approachable because, by
               reparameterizing <vue-mathjax :formula='`$z$`'></vue-mathjax>, the parameters of the density of the expectation changes, which in turn allows the gradient to be inside the expectation.
            </p>
            <vue-mathjax :formula='reparam'></vue-mathjax>
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
      'vue-mathjax': VueMathjax
   },
   head: {
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
         l1: `$$\\mathcal{L} = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x|z)} \\bigr] - D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z))$$`,
         l2: `$\\mathcal{L} = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}\\bigr]$`,
         gradtheta: `$$\\begin{align}
         \\nabla_\\theta \\mathcal{L} & =  \\nabla_\\theta\\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}\\bigr] \\\\[2ex]
            & = \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\nabla_\\theta(\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x))}\\bigr] \\\\[2ex]
            & \\approx \\nabla_\\theta(\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) \\quad \\text{Monte Carlo estimate where } z \\sim q_\\phi(z|x) \\\\[2ex]
            & = \\nabla_\\theta(\\log{p_\\theta(x, z))}  \\\\[2ex]
         \\end{align}$$`,
         gradphi: `$$\\begin{align}
         \\nabla_\\phi \\mathcal{L} & =  \\nabla_\\phi\\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}\\bigr] && \\text{definition of } \\mathcal{L}\\tag{5.0} \\\\[2ex]
            & = \\nabla_\\phi \\int (\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)})q_{\\phi}(z|x)dz && \\text{continuous latent space z} \\tag{5.1}\\\\[2ex]
            & = \\nabla_\\phi \\int \\log{p_\\theta(x, z)}q_{\\phi}(z|x)dz - \\nabla_\\phi \\int \\log{q_\\phi(z|x)}q_{\\phi}(z|x)dz && \\text{distribute terms} \\tag{5.2}\\\\[2ex]
            & =  \\int \\log{p_\\theta(x, z)}\\nabla_\\phi q_{\\phi}(z|x)dz - \\int \\bigl(\\log{q_\\phi(z|x)} \\nabla_\\phi q_{\\phi}(z|x) + \\nabla_\\phi q_{\\phi}(z|x)\\bigr)dz && \\text{product rule on RHS} \\tag{5.3}\\\\[2ex]
            & =  \\int \\log{p_\\theta(x, z)}\\nabla_\\phi q_{\\phi}(z|x)dz - \\int \\log{q_\\phi(z|x)} \\nabla_\\phi q_{\\phi}(z|x)dz + \\nabla_\\phi \\int q_{\\phi}(z|x)dz && \\text{distribute integral on RHS} \\tag{5.4}\\\\[2ex]
            & =  \\int \\log{p_\\theta(x, z)}\\nabla_\\phi q_{\\phi}(z|x)dz - \\int \\log{q_\\phi(z|x)} \\nabla_\\phi q_{\\phi}(z|x)dz && \\int q_\\phi(z|x)dz = 1, \\nabla_\\phi 1 = 0 \\tag{5.5}\\\\[2ex]
            & =  \\int (\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) \\nabla_\\phi q_{\\phi}(z|x)dz && \\text{combine terms & factor out } \\nabla_\\phi q_\\phi(z|x) \\tag{5.6}\\\\[2ex]
            & =  \\int (\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) q_{\\phi}(z|x) \\nabla_\\phi \\log{q_{\\phi}(z|x)}dz && \\text{chain rule, }\\frac{d}{dx}\\log{(x)} = \\frac{1}{x}\\log{\\biggl(\\frac{d}{dx}x\\biggr)}   \\tag{5.7}\\\\[2ex]
            & =  \\mathbb{E}_{q_{\\phi}(z|x)}\\bigl[(\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) \\nabla_\\phi \\log{q_{\\phi}(z|x)}\\bigr] && \\text{convert back to expectation}  \\tag{5.8}\\\\[2ex]
            & \\approx  (\\log{p_\\theta(x, z)} - \\log{q_\\phi(z|x)}) \\nabla_\\phi \\log{q_{\\phi}(z|x)} && \\text{Monte Carlo estimate where } z \\sim q_\\phi(z|x) \\tag{5.9}\\\\[2ex]
         \\end{align}$$`,
         controlvariate: `\\begin{align}
         \\int f(x)dx & = \\int g(x)dx + \\int (f(x) - g(x))dx \\tag{6.0} \\\\
            & \\approx \\mathbb{E}[g(x)] + \\frac{1}{n}\\sum_n(f(x) - g(x)) && \\text{take n samples} \\tag{6.1} \\\\ 
         \\text{Var of eq (6.1)}& = \\frac{1}{n}\\text{Var}\\biggl(\\sum_n(f(x) - g(x))\\biggr) && \\text{Var}(X + c) = \\text{Var}(X), \\text{where c is constant} \\tag{6.2} \\\\
         \\end{align}`,
         sgvb: `$$\\begin{align}
         \\mathcal{L} & \\approx \\mathcal{\\widetilde{L}}^A \\\\
            & = \\frac{1}{L}\\sum_{l=1}^L \\log{p_\\theta(x, z^l)} - \\log{q_\\phi(z^l|x)} && \\text{where } z^l = g(\\phi, x, \\epsilon^l) \\text{ and } \\epsilon^l \\sim p(\\epsilon) \\\\
            & \\text{and} \\\\[2ex]
         \\mathcal{L} & \\approx \\mathcal{\\widetilde{L}}^B \\\\
            & = - D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z)) + \\frac{1}{L}\\sum_{l=1}^L\\log{p_\\theta(x|z^l)} && \\text{where } z^l = g(\\phi, x, \\epsilon^l) \\text{ and } \\epsilon^l \\sim p(\\epsilon) \\\\
            & = \\frac{1}{2}\\sum_i\\Biggl(\\log{\\sigma_i^2} + 1 - \\sigma_i^2 - \\mu_i^2\\Biggr) + \\frac{1}{L}\\sum_{l=1}^L\\log{p_\\theta(x|z^l)} && \\text{sub in eq 4.5}
         \\end{align}$$`,
         encoderprior: `\\begin{align}
         D_{\\mathbb{KL}}(q_\\phi(z|x)\\,||\\,p_\\theta(z)) & = \\frac{1}{2}\\Biggl(\\log\\Bigl(\\frac{|I|}{|\\Sigma|}\\Bigr) - n +
               \\text{tr}\\bigl(I^{-1}\\Sigma\\bigr)+\\bigl(0-\\mu\\bigr)^\\top I^{-1}\\bigl(0-\\mu\\bigr)\\Biggr) && \\text{definition. Change det(x) to |x| for readability} \\tag{4.0} \\\\[2ex]
            & = \\frac{1}{2}\\Biggl(\\log{|I|} - \\log{|\\Sigma|} - n + \\text{tr}\\bigl(\\Sigma\\bigr)+\\mu^\\top\\mu\\Biggr)
               && \\text{log quotient property}, I=I^{-1}, IA = A, -1\\times -1 = 1\\times 1 \\tag{4.1} \\\\[2ex]
            & = \\frac{1}{2}\\Biggl(0 - \\log{\\prod_i{\\sigma_i^2}} - n + \\text{tr}\\bigl(\\Sigma\\bigr)+\\mu^\\top\\mu\\Biggr)
               && |I| = 1, ln(1) = 0, \\text{det of diag matrix = product of diag values} \\tag{4.2} \\\\[2ex]
            & = \\frac{1}{2}\\Biggl(-\\sum_i{\\log{\\sigma_i^2}} - n + \\sum_i{\\sigma_i^2}+\\sum_i{\\mu_i^2}\\Biggr)
               && \\text{convert to sums. Recall diagonal of covariance mat is }\\sigma^2 \\tag{4.3} \\\\[2ex]
            & = \\frac{1}{2}\\Biggl(-\\sum_i{\\bigl(\\log{\\sigma_i^2}} + 1\\bigr) + \\sum_i{\\sigma_i^2}+\\sum_i{\\mu_i^2}\\Biggr)
               && \\text{n = dimension of latent space} \\tag{4.4} \\\\[2ex]
            & = \\frac{1}{2}\\sum_i\\Biggl(-\\bigl(\\log{\\sigma_i^2} + 1\\bigr) + \\sigma_i^2 +\\mu_i^2\\Biggr)
               && \\text{simplify} \\tag{4.5}

         \\end{align}`,
         reparam: `\\begin{align}
         \\nabla_\\phi\\mathbb{E}_{q_\\phi(z|x)}[f(z)] & = \\nabla_\\phi\\mathbb{E}_{p(\\epsilon))}[f(g(\\phi, x, \\epsilon))] && \\text{where } z = g(\\phi, x, \\epsilon), \\epsilon \\sim p(\\epsilon) \\\\[2ex]
            & = \\mathbb{E}_{p(\\epsilon))}[\\nabla_\\phi f(g(\\phi, x, \\epsilon))] \\\\[2ex]
            & \\approx \\nabla_\\phi f(g(\\phi, x, \\epsilon)) && \\text{Monte Carlo estimate where } \\epsilon \\sim p(\\epsilon)
         \\end{align}`
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
   } 
}
</script>

<style scoped src='./css/blog.css'>
</style>