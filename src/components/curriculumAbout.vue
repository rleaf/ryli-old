<template>
  <div id="linkhover"> 
      Hello I'm Ryan Lin. This site is intended to provide a synopsis of who I am and what I enjoy doing.
      Amongst what is already mentioned below in my resume, I also enjoy
      <a href='https://www.youtube.com/channel/UCe8X-Ib4hEc7keoBQ7cMdmA' target='_blank'><u><i>power/olympic lifting</i></u></a>,
      <a href='https://www.instagram.com/rylikefood/' target='_blank'><u><i>eating/cooking</i></u></a>, practicing guitar & uke,
      and playing games. Check out the blog section for more in depth discussion on some of my interests.
      <br>
   </div>
</template>

<script>
export default {

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
   color: var(--green) !important;
}

</style> 