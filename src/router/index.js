import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueMeta from 'vue-meta'

import HomePage from '../pages/home.vue'

Vue.use(VueRouter)

// Vue.use(VueMeta, {
//   keyName: 'metaInfo',
//   attribute: 'data-vue-meta',
//   ssrAttribute: 'data-vue-meta-server-rendered',
//   tagIDKeyName: 'vmid',
//   refreshOnceOnNavigation: true
// })

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Hello there.'
    },
    component: HomePage
  },
  {
    path: '/cv',
    name: 'curriculumvitae',
    meta: {
      title: 'About 👋'
    },
    component: () => import('../pages/curriculum.vue')
  },
  {
    path: '/glossary',
    name: 'glossary',
    component: () => import('../pages/glossary.vue'),
    meta: {
      title: 'Food 🍔',
    }
  },

  // DESIGN SECTION
  {
    path: '/design',
    name: 'design',
    meta: {
      title: 'Design 🖊️'
    },
    component: () => import('../pages/design.vue')
  },
  {
    path: '/design/expanse',
    name: 'expanse',
    meta: {
      title: 'Expanse Typeface'
    },
    component: () => import('../pages/portfolioObjects/expanseObject.vue')
  },
  {
    path: '/design/barnegat',
    name: 'barnegat',
    meta: {
      title: 'Barnegat Light'
    },
    component: () => import('../pages/portfolioObjects/barnegatObject.vue')
  },
  {
    path: '/design/dropbox',
    name: 'dropbox',
    meta: {
      title: 'Dropbox Redesign'
    },
    component: () => import('../pages/portfolioObjects/dropboxObject.vue')
  },
  {
    path: '/design/valiant',
    name: 'valiant',
    meta: {
      title: 'Valiant'
    },
    component: () => import('../pages/portfolioObjects/valiantObject.vue')
  },
  {
    path: '/design/spotify',
    name: 'spotify',
    meta: {
      title: 'Spotify Redesign'
    },
    component: () => import('../pages/portfolioObjects/spotifyObject.vue')
  },
  {
    path: '/design/spdmagazine',
    name: 'spdmagazine',
    meta: {
      title: 'Magazine Spread'
    },
    component: () => import('../pages/portfolioObjects/spdmagazineObject.vue')
  },
  {
    path: '/design/sign',
    name: 'sign',
    meta: {
      title: 'Sign'
    },
    component: () => import('../pages/portfolioObjects/signObject.vue')
  },
  {
    path: '/design/oscilla',
    name: 'oscilla',
    meta: {
      title: 'Oscilla Typeface'
    },
    component: () => import('../pages/portfolioObjects/oscillaObject.vue')
  },


  // BLOG SECTION
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/cms.vue'),
    meta: {
      title: 'Blog 📚',
    },
    // children: [
    //   {
    //     path: 'blog/knn',
    //     name: 'knn',
    //     // meta: {
    //     //   title: 'Implementing K Nearest Neighbors on CIFAR-10'
    //     // },
    //     component: knn_cifarLink
    //   },
    //   ]
  },
  {
    path: '/blog/quadraticform',
    name: 'quadraticform',
    meta: {
      title: 'Learning to find the derivative of the quadratic form'
    },
    component: () => import('../components/blog/quadraticform.vue')
  },
  {
    path: '/blog/knn',
    name: 'knn',
    meta: {
      title: 'Implementing K Nearest Neighbors on CIFAR-10'
    },
    component: () => import('../components/blog/knn_cifar.vue')
  },
  {
    path: '/blog/bnbackpass',
    name: 'bnbackpass',
    meta: {
      title: 'The Shortcut in Differentiating the Backwards Pass in Batch Normalization'
    },
    component: () => import('../components/blog/bn_backpass.vue')
  },
  {
    path: '/blog/rnn',
    name: 'rnn',
    meta: {
      title: 'A Thorough Explanation to Recurrent Neural Networks'
    },
    component: () => import('../components/blog/rnn.vue')
  }, 
  {
    path: '/blog/bigo',
    name: 'bigo',
    meta: {
      title: 'Introduction to Big "Oh" Notation'
    },
    component: () => import('../components/blog/bigo.vue')
  },
  {
    path: '/blog/cnn',
    name: 'cnn',
    meta: {
      title: 'The Forward and Backward of a Convolutional Neural Network'
    },
    component: () => import('../components/blog/cnn.vue')
  },
  {
    path: '/blog/transformer',
    name: 'transformer',
    meta: {
      title: 'Transformers Deconstructed and Explained'
    },
    component: () => import('../components/blog/transformer.vue')
  },
  {
    path: '/blog/entropy',
    name: 'entropy',
    meta: {
      title: 'Entropy in Machine Learning'
    },
    component: () => import('../components/blog/entropy.vue')
  },
  {
    path: '/blog/kl-divergence-mv-gaussian',
    name: 'dklmvgaus',
    meta: {
      title: 'KL Divergence Between Multivariate Gaussians'
    },
    component: () => import('../components/blog/dklmvgaussian.vue')
  },
  
  // REDIRECT HANDLING (temporary?)

  {
    path: '/expanse',
    redirect: {name: 'expanse'}
  },
  {
    path: '/barnegat',
    redirect: {name: 'barnegat'}
  },
  {
    path: '/dropbox',
    redirect: {name: 'dropbox'}
  },
  {
    path: '/valiant',
    redirect: {name: 'valiant'}
  },
  {
    path: '/spotify',
    redirect: {name: 'spotify'}
  },
  {
    path: '/spdmagazine',
    redirect: {name: 'spdmagazine'}
  },
  {
    path: '/sign',
    redirect: {name: 'sign'}
  },

  {
    path: '/quadraticform',
    redirect: {name: 'quadraticform'}
  },
  {
    path: '/knn',
    redirect: {name: 'knn'}
  },
  {
    path: '/bnbackpass',
    redirect: {name: 'bnbackpass'}
  },
  {
    path: '/rnn',
    redirect: {name: 'rnn'}
  },
  {
    path: '/bigo',
    redirect: {name: 'bigo'}
  },
  {
    path: '/cnn',
    redirect: {name: 'cnn'}
  },

  {
    path: '/*',
    meta: {
      title: `How'd you get here?`
    },
    component: () => import('../components/404.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from) {
    let path = to.path.slice(1).split('/')

    if (path.length > 1 && to.name != from.name) {
      if (path[0] === 'blog' || path[0] === 'design') {

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ y:0 })
          }, 600)
        })

      }
    }
  }
})

router.beforeEach((toRoute, fromRoute, next) => {

  // Stop changing title back to default on toc clicks in blogs
  if (toRoute.meta.title != undefined) {
    window.document.title = toRoute.meta && toRoute.meta.title
    // window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Ryan Lin';
  }

  next();
})

export default router;
