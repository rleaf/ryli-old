<template>
<div id="syntax">
   <div id="landingintro">
      <span class="introword">Ryan Lin</span>
      <!-- <span class="introword">Lin</span> -->
      <br>
      <div id="subda">
         <span class="subwordhomeIntro">All things design. A lot of things development.</span>
      </div>
   </div>
</div>
</template>

<script>

export default {
   
   metaInfo: {
      meta: [
         { 
            name: 'description',
            content: 'Personal site of Ryan Lin - learn more about my hobbies.',
         },
         {
            property: 'og:description',
            content: 'Personal site of Ryan Lin - learn more about my hobbies.',
         }
      ]
   },
}
</script>

<style scoped>


#landingintro {
   color: var(--white);
   font-size: 46px;
   padding-bottom: 0px;
   height: 100px;
   text-align: center;
   line-height: normal;
   top: calc(60vh/ 2);
   /* margin-top: 18vh; */
   position: relative;
   z-index: 1;
}

#subda {
   padding-top: 14px;
   font-size: 18px;
}

.introword {
   font-family: var(--displayFont);
   font-size: 10vh;
}

.introword, .subwordhomeIntro {
   display: inline-block;
   white-space: nowrap;
   visibility: inherit;
   padding: 0 4px;
}

</style>