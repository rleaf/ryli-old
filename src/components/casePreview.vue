<template>
  <div class="casePreview">
         <div class="caseflex">
            <img :src="require(`@/assets/case/steam/${img}`)" alt="">
            <div class="caseInfo">
            <router-link :to="{ name: `${route}`}">
               <p class="caseTitle">
                  {{ title }}
               </p>
            </router-link>
               <p class="caseYear">
                  {{ year }}
               </p>
               <p class="caseDescription">
                  {{ description }}
               </p>
            </div>

         </div>
  </div>
</template>

<script>
export default {
   props: {
      title: String,
      year: String,
      route: String,
      img: String,
      description: String,
   }
}
</script>

<style scoped>
   .casePreview {
      width: 80vw;
   }

   .casePreview img {
      width: 40%;
   }

   .caseflex {
      display: flex;
      flex-direction: row;
      gap: 5rem;
   }

   /* .caseInfo {
      margin-left: 5rem;
   } */

   .caseInfo p {
      font-family: var(--type2);
      color: var(--shadeWhite2);
   }

   .caseTitle {
      font-size: 34px;
      margin-bottom: 0.5rem;
   }

   .caseYear {
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 2rem;
   }

   .caseDescription {
      font-size: 18px;
   }
</style>