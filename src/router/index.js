import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/home.vue'
import CurriculumVitae from '../pages/curriculum.vue'
import wipLink from '../pages/wip.vue'
import contact from '../pages/contact.vue'
import sketches from '../pages/sketches.vue'
import designLink from '../pages/design.vue'
import speakLink from '../pages/cms.vue'

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
import blogskeletonLink from '../components/blog/skeleton.vue'
import blogQuadraticFormLink from '../components/blog/quadraticform.vue'
import knn_cifarLink from '../components/blog/knn_cifar.vue'
import bn_backpassLink from '../components/blog/bn_backpass.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: HomePage
  },
  {
    path: '/cv',
    name: 'curriculumvitae',
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
  {
    path: '/sketches',
    name: 'sketches',
    component: sketches
  },
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
    component: designLink
  },
  {
    path: '/blog',
    name: 'blog',
    component: speakLink
  },
  {
    path: '/blogskeleton',
    name: 'blogskeleton',
    component: blogskeletonLink
  },
  {
    path: '/quadraticform',
    name: 'quadraticform',
    component: blogQuadraticFormLink
  },
  {
    path: '/knn',
    name: 'knn',
    component: knn_cifarLink
  },
  {
    path: '/bnbackpass',
    name: 'bnbackpass',
    component: bn_backpassLink
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
  scrollBehavior() {
    return {x:0, y:0};
  }
})

export default router;
