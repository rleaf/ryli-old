import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import HomePage from '../pages/home.vue'
// import CurriculumVitae from '../pages/curriculum.vue'
// import wipLink from '../pages/wip.vue'
// import contact from '../pages/contact.vue'
// import sketches from '../pages/sketches.vue'
// import designLink from '../pages/design.vue'
// import speakLink from '../pages/cms.vue'
// import glossaryLink from '../pages/glossary.vue'

// import portfolioLink from '../pages/portfolioObjects/portfolioObject.vue'
// import expanseLink from '../pages/portfolioObjects/expanseObject.vue'
// import tubeLink from '../pages/portfolioObjects/tubeObject.vue'
// import barnegatLink from '../pages/portfolioObjects/barnegatObject.vue'
// import dropboxLink from '../pages/portfolioObjects/dropboxObject.vue'
// import valiantLink from '../pages/portfolioObjects/valiantObject.vue'
// import spotifyLink from '../pages/portfolioObjects/spotifyObject.vue'
// import spdmagazineLink from '../pages/portfolioObjects/spdmagazineObject.vue'
// import jawsLink from '../pages/portfolioObjects/jawsObject.vue'
// import signLink from '../pages/portfolioObjects/signObject.vue'
// import blogskeletonLink from '../components/blog/skeleton.vue'
// import blogQuadraticFormLink from '../components/blog/quadraticform.vue'
// import knn_cifarLink from '../components/blog/knn_cifar.vue'
// import bn_backpassLink from '../components/blog/bn_backpass.vue'
// import rnnLink from '../components/blog/rnn.vue'
// import bigo from '../components/blog/bigo.vue'
// import cnn from '../components/blog/cnn.vue'



Vue.use(VueRouter)
// Vue.use(VueMeta, {
//   refreshOnceOnNavigation: true
// })
Vue.use(VueMeta, {
  keyName: 'metaInfo',
  // attribute: 'data-vue-meta',
  // ssrAttribute: 'data-vue-meta-server-rendered',
  // tagIDKeyName: 'vmid',
  // refreshOnceOnNavigation: true
})

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/cv',
    name: 'curriculumvitae',
    meta: {
      title: 'About | Ryan Lin'
    },
    component: () => import('../pages/curriculum.vue')
  },
  {
    path: '/wip',
    name: 'wip',
    component: () => import('../pages/wip.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/contact.vue')
  },
  {
    path: '/glossary',
    name: 'glossary',
    component: () => import('../pages/glossary.vue'),
    meta: {
      title: 'Food | Ryan Lin',
    }
  },

  // DESIGN SECTION
  {
    path: '/design',
    name: 'design',
    meta: {
      title: 'Design | Ryan Lin'
    },
    component: () => import('../pages/design.vue')
  },
  {
    path: '/PortfolioTest',
    name: 'PortfolioTest',
    component: () => import('../pages/portfolioObjects/portfolioObject.vue')
  },
  {
    path: '/design/expanse',
    name: 'expanse',
    component: () => import('../pages/portfolioObjects/expanseObject.vue')
  },
  // {
  //   path: '/tube',
  //   name: 'tube',
  //   component: () => import('../pages/portfolioObjects/tubeObject.vue')
  // },
  {
    path: '/design/barnegat',
    name: 'barnegat',
    component: () => import('../pages/portfolioObjects/barnegatObject.vue')
  },
  {
    path: '/design/dropbox',
    name: 'dropbox',
    component: () => import('../pages/portfolioObjects/dropboxObject.vue')
  },
  {
    path: '/design/valiant',
    name: 'valiant',
    component: () => import('../pages/portfolioObjects/valiantObject.vue')
  },
  {
    path: '/design/spotify',
    name: 'spotify',
    component: () => import('../pages/portfolioObjects/spotifyObject.vue')
  },
  {
    path: '/design/spdmagazine',
    name: 'spdmagazine',
    component: () => import('../pages/portfolioObjects/spdmagazineObject.vue')
  },
  // {
  //   path: '/jawsposter',
  //   name: 'jawsposter',
  //   component: () => import('../pages/portfolioObjects/jawsObject.vue')
  // },
  {
    path: '/design/sign',
    name: 'sign',
    component: () => import('../pages/portfolioObjects/signObject.vue')
  },


  // BLOG SECTION
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../pages/cms.vue'),
    meta: {
      title: 'Blog | Ryan Lin',
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
    component: () => import('../components/blog/quadraticform.vue')
  },
  {
    path: '/blog/knn',
    name: 'knn',
    component: () => import('../components/blog/knn_cifar.vue')
  },
  {
    path: '/blog/bnbackpass',
    name: 'bnbackpass',
    component: () => import('../components/blog/bn_backpass.vue')
  },
  {
    path: '/blog/rnn',
    name: 'rnn',
    component: () => import('../components/blog/rnn.vue')
  }, 
  {
    path: '/blog/bigo',
    name: 'bigo',
    component: () => import('../components/blog/bigo.vue')
  },
  {
    path: '/blog/cnn',
    name: 'cnn',
    component: () => import('../components/blog/cnn.vue')
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
    // redirect: {name: 'home'}
    component: () => import('../components/404.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
  // scrollBehavior() {
  //   return {x:0, y:0};
  // }
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Ryan Lin';

  next();
})

export default router;
