<template>
  <div id="linkhover"> 
      Hello I'm Ryan Lin. This is my personal site and here you'll find more of who I am and the things I enjoy doing.
      Amongst what is briefly mentioned below, I also enjoy
      <a :href='youtube' target='_blank'><u><i>power/olympic lifting</i></u></a>,
      <a :href='insta' target='_blank'><u><i>eating/cooking</i></u></a>, practicing guitar & uke, reading, and 
      playing games. Check out the <router-link :to="{ name: 'blog'}" :style="{ textDecoration: 'underline', fontStyle: 'oblique'}">blog</router-link> section for more in depth discussion on my interests.
      <br><br>
      You can get in touch with me at: ryanurquhartlin [at] gmail [dot] com
   </div>
</template>

<script>
export default {
   data() {
      return {
         youtube: 'https://www.youtube.com/channel/UCe8X-Ib4hEc7keoBQ7cMdmA',
         insta: 'https://www.instagram.com/rylikefood/'
      }
   }
}
</script>

<style scoped>

* {
   z-index: 5;
}

#linkhover > a {
   color: var(--white);
}

#linkhover > a:hover {
   color: var(--shadeWhite2) !important;
}

</style> 