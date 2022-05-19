<template>
<div id="origin">
   <!-- <div id="canvas">
      <threeScene />
   </div> -->
  <div id="landing">
      <!-- <NavBar /> -->
      <homeIntro />
      <div id="homefooter">
         <!-- <a href="https://youtu.be/wupToqz1e2g" target="_blank">Made by Ryan Lin</a> -->
      </div>
  </div>
</div>
</template>

<script>
   // import NavBar from '../components/nav.vue'
   import homeIntro from '../components/homeIntro.vue'
   // import threeScene from '../components/threeScene.vue'
   import threeScene from '../assets/js/threeScene.js'
   import gsap from 'gsap'

   export default {
      name: 'home',
      components: {
         // NavBar,
         homeIntro,
         // threeScene
      },
      mounted() {
         // threeScene.loadPageScene()
         gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})
      },
   }

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lora&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Amiri&display=swap');


:root {
   --green: #ffffff;
   --white: #dddddd;
   --offWhite: #b1b1b1;
}

::-webkit-scrollbar {
   /* display: none; */
   background: #0e0e0e;
   width: 14px;
}

::-webkit-scrollbar-thumb {
   background: #3f3f3f;
}

::-webkit-scrollbar-thumb:hover {
   background: var(--offWhite);
}

::selection {
  background: #2c2c2c; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #2c2c2c; /* Gecko Browsers */
}

body, html {
   /* overflow: auto; */
   margin: 0;
   padding: 0;
   background-color: #0e0e0e;
   width: 100%;
   height: 100%;
}

/* #origin {
   width: 100vw;
} */

#landing {
   padding: 0 8vw 0 8vw;
   display: inherit;
   position: relative;
   flex-wrap: inherit;
   justify-content: inherit;
   clear: both;
}

.nav:hover a {
   color: var(--green);
}

#bar, #bar2 {
   margin-top: 32px; /* 32 pixels to accordingly float to bottom w/  50px logo */
}

#bar {
   float: left;
   padding: 0;
   /* padding-left: 200px; Add padding to left side of navbar*/
}

#bar2 {
   float: right;
   padding: 0;
   /* padding-right: 200px; ??? Add more social links?? */
}

.barsvg {
   fill: var(--white);
   padding: 0;
   margin: 0;
   position: relative;
}

.nav ul li{
   color: var(--white);
   font-family: 'Inconsolata', sans-serif;
   text-transform: uppercase;
   list-style-type: none;
   text-decoration: none;
   display: inline-block;
}

#mainnav ul a {
   margin: 0 40px 0 40px;
}

@media (max-width: 1100px) {
   #mainnav ul a {
      margin: 0 20px;
   }
}

.nav ul li:hover {
   color: var(--green);
   /* add fade transition */
}

.underline {
   /* display: inline; */
   position: relative;
   /* overflow: hidden; */
}

.underline::after {
   content: '';
   position: absolute;
   z-index: 1;
   right: 0;
   width: 0;
   bottom: -12px;
   background: var(--green);
   height: 1px;
   transition-property: left right;
   transition-duration: 0.3s;
   transition-timing-function: ease-out;
}

.underline:hover::after, .underline:focus::after, .underline:active::after {
   left: 0;
   right: auto;
   width: 100%;
   color: var(--green);
}

#portfolio {
   position: relative;
   display: flex;
   flex-wrap: wrap;
   /* flex-direction: row; */
   clear:both;
   padding: 120px 50px 0 50px;
   justify-content: center;
}

#imgcontainer {
   width: 300px;
   height: 300px;
   position: relative;
}

#imgrouter img{
   width: 300px;
   height: 300px;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

.imagehover {
   position: absolute;
   display: inline-block;
   width: 300px;
   height: 300px;
   opacity: 0;
   text-align: center;
}

.imagehover > p {
   display: inline-block;
   font-size: 20px;
   font-family: 'Inconsolata', sans-serif;
   margin-top: 45px;
   margin-bottom: 0;
   color: var(--white);
   border-bottom: 1px solid var(--white);
   text-transform: uppercase;
}

#subtext > p {
   font-size: 16px;
   font-family: 'Inconsolata', sans-serif;
   color: var(--white);
   text-transform: uppercase;
}

#covertext > p {
   display: inline-block;
   font-size: 20px;
   font-family: 'Inconsolata', sans-serif;
   color: var(--white);
   margin-top: 30px;
   text-transform: uppercase;

}

#imgcontainer:hover .imagehover {
   opacity: 1;
   transition: 0.1s;
}

.imagePreviewHover {
   width: 300px;
   height: 300px;
   overflow: hidden;
}

.imagePreviewHover img {
   transition: 0.3s ease-out;
}

#imgrouter:hover img {
   transform: scale(1.08) rotate(-2deg);
   opacity: 0.25;
   /* transition: 0.3s; */
   transition: 0.3s ease-in;
}

#centerContainer {
   clear: both;
   font-family: 'Lora', serif;
   text-align: center;
   position: relative;
   z-index: 10;
}

#centerContainer > img, #centerContainer > video {
   width: 800px;
   padding: 45px 0;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

#img1600 {
   width: 1600px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

@media (max-width: 1720px) {
   #img1600 {
     width: 80vw !important;
   }
}

.designImg1300 {
   max-width: 100%;
   box-shadow: 0 3px 5px rgb(0 0 0 / 0.5);
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

#img1300 {
   width: 1300px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

.offsetImg800 {
   /* max-height: 800px; */
   height: auto;
   box-shadow: 0 3px 5px rgb(0 0 0 / 0.5);
   max-width: 100%;
}

.img50Percent {
   width: 50%;
   /* max-width: 800px; */
}

#img800 {
   width: 100%;
   box-shadow: 0 3px 5px rgb(0 0 0 / 0.5);
   max-width: 800px;
}

@media (max-width: 850px) {
   #img800 {
      width: 100%;
   }
}

#img700 {
   width: 100%;
   box-shadow: 0 3px 5px rgb(0 0 0 / 0.5);
   max-width: 700px;
}

@media (max-width: 750px) {
   #img700 {
      width: 100%;
   }
}


#img1000 {
   width: 100%;
   box-shadow: 0 3px 5px rgb(0 0 0 / 0.5);
   max-width: 1000px;
}


@media (max-width: 1420px) {
   #img1300 {
      width: 80vw !important;
   }
}
@media (max-width: 1086px) {
   .offsetImgText {
      padding-bottom: 50px !important;
      padding-top: 50px !important;
   }
}

@media (max-width: 850px) {
   .designContainerBoxPadding {
      padding: 0 !important;
   }
}

#img500 {
   width: 500px;
   padding: 25px 50px;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

@media (max-width: 625px) {
   #img500 {
      width: 100%;
      padding: 25px 0;
   }
}

#img600 {
   width: 600px;
   padding: 25px 50px;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

@media (max-width: 725px) {
   #img600 {
      width: 100%;
      padding: 25px 0;
   }
}

#img500nopad {
   width: 500px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

#img350 {
   width: 350px;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;

}

@media screen and (max-width: 375px) {
   #img350 {
      width: 100%;
   }
}

#imgH400 {
   height: 400px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

#textContainerHeader {
   position: relative;
   font-size: 40px;
   font-family: 'Inconsolata';
   color: var(--white);
   text-transform: uppercase;
   padding-top: 80px;
   padding-bottom: 75px;
   z-index: 2;
}

#subHeader {
   font-size: 22px;
   padding-top: 20px;
}

.textDesignSubHeader {
   font-size: 18px;
   padding-top: 20px;
   text-shadow: 1px 1px 8px #0e0e0e;
}

.landingDesign {
   clear: both;
   /* width: 100vw; */
   /* height: 80vh; */
   /* position: relative; */
}

.designHero {
   /* position: relative; */
   width: 100%;
   height: 100vh;
   z-index: 10;
}
.designContainerHeader {
   align-items: center;
   top: calc(50% - 35vmin / 2);
   position: relative;
   width: 100%;
}

.textDesignContainer {
   font-size: 46px;
   font-family: 'Lora';
   color: var(--white);
   text-shadow: 1px 1px 8px #0e0e0e;
   text-align: center;
}

.designBodyContainer {
   position: relative;
   padding-top: 50px;
   z-index: 10;
   text-align: center;
   justify-content: center;
   width: 100%;
}

.designContainerBox {
   margin: 0 auto;
   padding-top: 50px;
   /* margin-left: 4em;
   margin-right: 4em; */
   background-color: #fff;
   max-width: 90vw;
}

.designSpace {
   padding: 50px 0;
}

.designContainerBoxPadding {
   padding: 0 4em;
}

.designTextContainerBody {
   padding: 50px 10vw;
   /* color: var(--offWhite); */
   color: #000;
   font-family: 'Lora', serif;
   font-size: 16px;
   line-height: 140%;
}

.designImageSubText {
   color: #000;
   font-family: 'Lora', serif;
   font-size: 14px;
   font-style: oblique;
}

.designOffsetImageLeft {
   display: flex;
   flex-wrap: wrap-reverse;
   align-items: center;
   justify-content: center;
}

.designOffsetImageRight {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
}

/* .designOffsetImageContainer {
   width: 100%;
} */


.designOffsetContainer {
   min-width: 425px;
   width: 50%;
}

@media screen and (max-width: 450px) {
   .designOffsetContainer {
      min-width: 100%;
      /* width: 100%; */
   }  
}

.designOffsetImageContainer {
   width: 200px;
}


.offsetImgText {
   padding: 0 6em;
   /* color: var(--offWhite); */
   color: #000;
   font-family: 'Lora', serif;
   font-size: 16px;
   line-height: 140%;
   /* margin-bottom: 70px; */
}

#textContainerBody {
   padding: 25px 10vw;
   color: var(--offWhite);
   font-family: 'Lora', serif;
   font-size: 16px;
   /* font-weight: 300; */
   line-height: 140%;
}

#curriculumStructure {
   display: block;
   /* flex-wrap: wrap; */
}

#curriculumHeader {
   font-family: 'Lora', serif;
   /* text-transform: uppercase; */
}

#curriculumBody {
   display: inherit;
   position: relative;
   font-family: 'Lora', serif;
   color: var(--offWhite);
   font-size: 15px;
   line-height: 140%;
   width: 700px;
   padding: 25px 5vw;
   z-index: 9;
   /* float: left; */
}

@media (max-width: 870px) {
   #curriculumBody {
      width: 100% !important;
      padding: 0;
   }
}

#homefooter {
   position: absolute;
   font-family: 'Inconsolata', sans-serif;
   color: var(--offWhite);
   font-size: 16px;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;
   text-align: center;
   bottom: 5vh;
}

#homefooter, a {
   text-decoration: none;
   color: var(--offWhite);
}

#homefooter, a:hover {
   color: var(--white);
}

.codeblock {
   background: #131313;
   color: #ccc;
   /* max-width: 950px; */
   max-width: max-content;

   font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
   font-size: 14px;
   line-height: 1.5;
   padding: 20px 10px;

   border-radius: 7px;
}

.prism-editor__textarea:focus {
   outline: none;
}

</style>

