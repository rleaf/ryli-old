import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import HomePage from '../pages/home.vue'
import CurriculumVitae from '../pages/curriculum.vue'
import wipLink from '../pages/wip.vue'
import contact from '../pages/contact.vue'
// import sketches from '../pages/sketches.vue'
import designLink from '../pages/design.vue'
import speakLink from '../pages/cms.vue'
import glossaryLink from '../pages/glossary.vue'

import portfolioLink from '../pages/portfolioObjects/portfolioObject.vue'
import expanseLink from '../pages/portfolioObjects/expanseObject.vue'
import tubeLink from '../pages/portfolioObjects/tubeObject.vue'
import barnegatLink from '../pages/portfolioObjects/barnegatObject.vue'
import dropboxLink from '../pages/portfolioObjects/dropboxObject.vue'
import valiantLink from '../pages/portfolioObjects/valiantObject.vue'
import spotifyLink from '../pages/portfolioObjects/spotifyObject.vue'
import spdmagazineLink from '../pages/portfolioObjects/spdmagazineObject.vue'
import jawsLink from '../pages/portfolioObjects/jawsObject.vue'
import signLink from '../pages/portfolioObjects/signObject.vue'
// import blogskeletonLink from '../components/blog/skeleton.vue'
import blogQuadraticFormLink from '../components/blog/quadraticform.vue'
import knn_cifarLink from '../components/blog/knn_cifar.vue'
import bn_backpassLink from '../components/blog/bn_backpass.vue'
import rnnLink from '../components/blog/rnn.vue'
import bigo from '../components/blog/bigo.vue'
import cnn from '../components/blog/cnn.vue'



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
    path: '',
    name: 'home',
    component: HomePage
  },
  {
    path: '/cv',
    name: 'curriculumvitae',
    meta: {
      title: 'About | Ryan Lin'
    },
    component: CurriculumVitae
  },
  {
    path: '/wip',
    name: 'wip',
    component: wipLink
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  // {
  //   path: '/sketches',
  //   name: 'sketches',
  //   component: sketches
  // },
  {
    path: '/PortfolioTest',
    name: 'PortfolioTest',
    component: portfolioLink
  },
  {
    path: '/expanse',
    name: 'expanse',
    component: expanseLink
  },
  {
    path: '/tube',
    name: 'tube',
    component: tubeLink
  },
  {
    path: '/barnegat',
    name: 'barnegat',
    component: barnegatLink
  },
  {
    path: '/dropbox',
    name: 'dropbox',
    component: dropboxLink
  },
  {
    path: '/valiant',
    name: 'valiant',
    component: valiantLink
  },
  {
    path: '/spotify',
    name: 'spotify',
    component: spotifyLink
  },
  {
    path: '/spdmagazine',
    name: 'spdmagazine',
    component: spdmagazineLink
  },
  {
    path: '/jawsposter',
    name: 'jawsposter',
    component: jawsLink
  },
  {
    path: '/sign',
    name: 'sign',
    component: signLink
  },
  {
    path: '/design',
    name: 'design',
    meta: {
      title: 'Design | Ryan Lin'
    },
    component: designLink
  },
  // {
  //   path: '/blogskeleton',
  //   name: 'blogskeleton',
  //   component: blogskeletonLink
  // },
  {
    path: '/blog/quadraticform',
    name: 'quadraticform',
    component: blogQuadraticFormLink
  },
  {
    path: '/glossary',
    name: 'glossary',
    component: glossaryLink,
    meta: {
      title: 'Food | Ryan Lin',
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: speakLink,
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
    path: '/blog/knn',
    name: 'knn',
    // meta: {
    //   title: 'Implementing K Nearest Neighbors on CIFAR-10'
    // },
    component: knn_cifarLink
  },
  {
    path: '/blog/bnbackpass',
    name: 'bnbackpass',
    component: bn_backpassLink
  },
  {
    path: '/blog/rnn',
    name: 'rnn',
    component: rnnLink
  }, 
  {
    path: '/blog/bigo',
    name: 'bigo',
    component: bigo
  },
  {
    path: '/blog/cnn',
    name: 'cnn',
    component: cnn
  },
  
  {
    path: '/*',
    component: 404
  }

  
            // {
            //   path: '/about',
            //   name: 'about',
            //   // route level code-splitting
            //   // this generates a separate chunk (about.[hash].js) for this route
            //   // which is lazy-loaded when the route is visited.
            //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            // },
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
