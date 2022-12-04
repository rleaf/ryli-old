<template>
  <div class="casePreview">
      <router-link :to="{ name: `${route}`}">
         <div class="caseflex">
            <img :src="require(`@/assets/case/steam/${img}`)" alt="">
            <div class="caseInfo">
               <p class="caseTitle">
                  {{ title }}
               </p>
               <p class="caseYear">
                  {{ year }}
               </p>
               <p class="caseDescription">
                  {{ description }}
               </p>
            </div>

         </div>
      </router-link>
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
   }

   .caseInfo {
      margin-left: 5rem;
   }

   .caseInfo p {
      font-family: var(--type2);
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