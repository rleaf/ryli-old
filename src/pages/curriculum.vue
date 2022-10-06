<template>
  <div id="landing">
     <!-- <backdrop /> -->
         <div id="textContainerHeader">
         </div>
         <div id="curriculumBody">
            <div id="curriculumHeader">
               <u style="font-size: 18px;">About</u>
            </div>
            <div id="linkhover"> 
               <p>
                  Hello I'm Ryan Lin. This is my personal site and here you'll find more about who I am and the things I enjoy doing.
                  Most of my time is divided between some derivative of design, frequently UI/UX, and machine learning projects.
                  <br><br>
                  The 
                  <router-link :to="{ name: 'design'}">design</router-link> section serves as a portfolio and showcases some of my previous projects.
                  A lot of the technology I've used in design is abbreviated in "Technical Skills" below, however each portfolio piece provides a brief synopsis
                  of the goals and challenges faced for that project.
                  <br><br>
                  In the <router-link :to="{ name: 'blog'}">blog</router-link> section, you'll find a lot of discussion affiliated to machine learning.
                  Accompanied with those discussions, my <a :href=github target="_blank">GitHub</a> also has repositories showing various models I've made. All of what I talk about
                  in my blogs and, in general, knowledge of machine learning is self taught.
                  <br><br>
                  In the remaining time when I'm not designing something or wrapping my head around some model, I enjoy
                  <a :href='youtube' target='_blank'><u><i>power/olympic lifting</i></u></a>,
                  <a :href='insta' target='_blank'><u><i>eating/cooking</i></u></a>, practicing guitar & ukulele, reading, 
                  playing games, and reading about full stack development (particularly MEVN).
                  <br><br>
                  You can get in touch with me at: ryanurquhartlin [at] gmail [dot] com
               </p>
            </div>
         </div>
         <!-- <div id="curriculumBody">
            <u style="font-size: 18px;">Education</u>
            <p>
               Rider University 2016-2020
               <br>
               Bachelor of Arts: Graphic Design
            </p>
         </div> -->
      <div id="curriculumStructure">
         <div id="curriculumBody">
            <div>
               <div id="curriculumHeader">
                  <u style="font-size: 18px;">Technical Skills & Education</u>
               </div>
               <i style="color: var(--white); font-size: 14px">* Full CV available upon request</i>
               <p>
                  Rider University 2016-2020
                  <br>
                  Bachelor of Arts: Graphic Design
               </p>
               <ul class="curriculumul" style="list-style-type: none;">
                  <li><i>Design:</i></li>
                     <ul>
                        <li>Adobe CC (PhotoShop, Illustrator, After Effects, Premiere, InDesign)</li>
                        <li>Figma</li>
                        <li>InVision</li>
                        <li>HTML & CSS</li>
                     </ul>
                     <br>
                  <li><i>Development:</i></li>
                     <ul>
                        <li>Python (PyTorch, Pandas, NumPy, Matplotlib)</li>
                        <li>JavaScript (Vue.js, Node.js, Three.js, GSAP)</li>
                        <li>GLSL</li>
                     </ul>
                  </ul>
            </div>
         </div>

      </div>
     </div>
</template>

<script>

export default {
   name: 'curriculum',

   data() {
      return {
         youtube: 'https://www.youtube.com/channel/UCe8X-Ib4hEc7keoBQ7cMdmA',
         github: 'https://github.com/rleaf',
         insta: 'https://www.instagram.com/rylikefood/'
      }
   }
}
</script>

<style scoped>

a {
   text-decoration: underline;
   font-style: oblique
}

#curriculumBody {
   padding: 1rem 5vw;
}

.curriculumul ul {
   list-style-type: disc;
}

/* * {
   z-index: 5;
} */

#linkhover > a {
   color: var(--white);
}

#linkhover > a:hover {
   color: var(--shadeWhite2) !important;
}

</style>