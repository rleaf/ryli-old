<template>
   <div>
      <div id="portfolioSkeletonFlex">
         <DesignPreview
            v-for="design in designs"
            :key="design.title"
            :title="design.title"
            :year="design.year"
            :genre="design.genre"
            :route="design.route"
            :img="design.img"
         /> 
      </div>
   </div>
</template>

<script>
import DesignPreview from './portfolioPreview/designPreview.vue'

export default {
   components: {
      DesignPreview
   },
   data() {
      return {
         designs: [
            { 
               title: 'Spotify Desktop',
               year: '2022',
               genre: 'UI / UX',
               route: 'spotifyDesk',
               img: 'spotifyDesktop/spot2.webp'
            },
            {
               title: 'Oscilla',
               year: '2022',
               genre: 'Typography',
               route: 'oscilla',
               img: 'oscilla/oscillaCover.webp'
            },
            {
               title: 'Hand Gestures',
               year: '2021',
               genre: 'Illustration',
               route: 'sign',
               img: 'signlanguage/sign_cover.jpg'
            },
            {
               title: 'Magazine Spread',
               year: '2020',
               genre: 'Illustration / Print / Layout',
               route: 'spdmagazine',
               img: 'spdmagazine/magazine_cover.webp'
            },
            {
               title: 'Valiant',
               year: '2020',
               genre: 'Branding & Web Design',
               route: 'valiant',
               img: 'valiant/valiant_cover.webp'
            },
            {
               title: 'Spotify Mobile',
               year: '2020',
               genre: 'UI / UX',
               route: 'spotify',
               img: 'spotify/spotify_cover.webp'
            },
            {
               title: 'Expanse',
               year: '2020',
               genre: 'Typography',
               route: 'expanse',
               img: 'expanse/expanse_cover.webp'
            },
            {
               title: 'Barnegat Light',
               year: '2020',
               genre: 'Photography',
               route: 'barnegat',
               img: 'barnegat/barnegat_cover.webp'
            },
            {
               title: 'Dropbox Redesign',
               year: '2019',
               genre: 'Web Design',
               route: 'dropbox',
               img: 'dropbox/dropbox_cover.webp'
            },
         ]
      }
   },
}

</script>

<style>

#portfolioSkeletonFlex {
   position: relative;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   /* padding-top: 120px; */
   clear: both;
   padding-bottom: 13vh;
   /* z-index: 5; */
   /* width: 100vw; */
}

</style>