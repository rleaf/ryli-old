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

   export default {
      name: 'home',
      components: {
         // NavBar,
         homeIntro,
         // threeScene
      },
      head: {
         meta: [
            {
               name: 'author',
               content: 'Ryan Lin'
            },
            {
               name: 'description',
               content: `Personal site of Ryan Lin.`
            },
            {
               name: 'keywords',
               content: 'I love food'
            },
            {
               property: 'og:description',
               content: `Personal site of Ryan Lin.`
            },
            
         ],
      },
      mounted() {
         // threeScene.loadPageScene()
         // gsap.to(threeScene.fogColorRGB, {r: 14/255,g: 14/255, b: 14/255, duration: 1.5})
      },
   }

</script>

<style>

@font-face {
   font-family: 'Butler';
   /* src: url('../assets/MeshedDisplay-Medium.woff2') format('woff2'); */
   src: url('../assets/Butler-Medium.woff2') format('woff2');
}

@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
/* @import url('https://fonts.googleapis.com/css?family=Lora&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');

:root {
   /* green */
   --white: #ffffff;
   --black: #000000;
   /* white */
   --shadeWhite1: #dddddd;
   /* offWhite */
   --dayLink: #aaaaaa;
   --shadeWhite2: #b1b1b1;
   --primaryDark: #0e0e0e;
   --scrollbarThumb: #3f3f3f;
   --selection: #2c2c2c;
   --designSelection: #bbbbbb;
   --bgColor: #1d1d1d;
   --codeblock: #131313;
   --codeSnippet: #242424;
   --mobilePad: #050505;
   --toc: #171717;
   --type: 'Lora', sans-serif;
   --type2: 'Open Sans', sans-serif;
   --displayFont: 'Butler', sans-serif;
   --typeSize: 15px;

}

::-webkit-scrollbar {
   /* display: none; */
   background: #1d1d1d;
   width: 13px;
}

::-webkit-scrollbar-thumb {
   background: var(--scrollbarThumb);
}

::-webkit-scrollbar-thumb:hover {
   background: var(--shadeWhite2);
}

::selection {
  background: var(--selection); /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--selection); /* Gecko Browsers */
}

body {
 margin: 0;
 padding: 0;
}

html {
   margin: 0;
   padding: 0;
   background-color: var(--primaryDark);
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
   color: var(--white);
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
   fill: var(--shadeWhite1);
   padding: 0;
   margin: 0;
   position: relative;
}

.nav ul li{
   color: var(--shadeWhite1);
   font-family: var(--type2);
   font-size: 14px;
   text-transform: uppercase;
   list-style-type: none;
   text-decoration: none;
   display: inline-block;
   /* transition: 0.3s cubic-bezier(0.77,0.2,0.05,1.0); */
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
   color: var(--white);
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
   background: var(--white);
   height: 1px;
   transition-property: left right;
   transition-duration: 0.3s;
   transition-timing-function: ease-out;
}

.underline:hover::after, .underline:focus::after, .underline:active::after {
   left: 0;
   right: auto;
   width: 100%;
   color: var(--white);
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
   font-size: 16px;
   font-family: var(--type2), sans-serif;
   margin-top: 45px;
   margin-bottom: 0;
   color: var(--shadeWhite1);
   border-bottom: 1px solid var(--shadeWhite1);
   text-transform: uppercase;
}

#subtext > p {
   font-size: 15px;
   font-family: var(--type2), sans-serif;
   color: var(--shadeWhite1);
   text-transform: uppercase;
}

#covertext > p {
   display: inline-block;
   font-size: 20px;
   font-family: 'Inconsolata', sans-serif;
   color: var(--shadeWhite1);
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
   width: 1300px;
   max-width: 100%;
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
   margin: 25px 50px;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

@media (max-width: 625px) {
   #img500 {
      width: 100%;
      margin: 25px 0;
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
   color: var(--shadeWhite1);
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
   font-size: 20px;
   font-weight: 300;
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
   font-size: 8vh;
   font-weight: 500;
   /* font-family: var(--type); */
   font-family: var(--displayFont);
   color: var(--shadeWhite1);
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
   background-color: var(--white);
   max-width: 90vw;
}

.designSpace {
   padding: 50px 0;
}

.designContainerBoxPadding {
   padding: 0 4em;
}

.designTextContainerBody {
   /* background-color: var(--white); */
   text-align: left;
   padding: 50px 10vw;
   color: var(--black);
   font-family: 'Lora', serif;
   font-size: 16px;
   line-height: 1.9;
}

h2.designSubTitle {
   font-family: var(--displayFont);
   font-size: 40px;
   line-height: normal;
   font-weight: 500;
   margin-left: 1em;
   margin-bottom: 1em;
}

h3.designUsedSkills {
   line-height: normal;
   font-size: 14px;
   font-weight: 100;
   margin-left: 24px;
   margin-bottom: 2em;
}

.designImageSubText {
   color: var(--black);
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
   /* color: var(--shadeWhite2); */
   color: var(--black);
   font-family: 'Lora', serif;
   font-size: 16px;
   line-height: 1.9;
   text-align: left;
   /* margin-bottom: 70px; */
}

#textContainerBody {
   padding: 25px 10vw;
   color: var(--shadeWhite2);
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
   font-family: var(--displayFont), serif;
   font-size: 46px;
   line-height: 100%;
}

#curriculumBody {
   display: inherit;
   position: relative;
   font-family: 'Lora', serif;
   color: var(--shadeWhite2);
   font-size: var(--typeSize);
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
   color: var(--shadeWhite2);
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
   color: var(--shadeWhite2);
}

#homefooter, a:hover {
   color: var(--shadeWhite1);
}

.codeblock {
   background: var(--codeblock);
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


/* .blogtoc a {
   color: var(--shadeWhite2) !important;
}

.blogtoc a:hover {
   color: var(--white) !important;
} */

.blogtoc ul {
   text-align: left;
   list-style: numbers;
}

.blogtoc {
   color: var(--shadeWhite2);
   background-color: var(--toc);
   /* border-color: #4a4d4f */
   border: 1px solid;
   border-color: var(--shadeWhite2);
   width: 300px;
   font-size: 95%;
   /* color: red; */
   margin-bottom: 5vh;
}

.blogtoc a {
   color: var(--shadeWhite2);
}

.blogtoc a:hover {
   color: var(--shadeWhite1);
}

.day {
   --primaryDark: #fff;
   --white: #000;
   --shadeWhite1: #0e0e0e;
   --shadeWhite2: #0e0e0e;
   --bgColor: #c2c2c2;
   --codeblock: #292d3e;
   --codeSnippet: #d8d8d8;
   --mobilePad: #c0c0c0;
   --selection: #bbbbbb;
   --toc: #dadada;
   /* --selection: #ffdce2; */
}

.daymodeimg {
      filter: invert(100%) hue-rotate(180deg) contrast(90%) grayscale(50%) !important;
   }

.serif {
   --type: 'Open Sans', sans-serif;
}

.typeSize {
   --typeSize: 17px;
}

</style>

