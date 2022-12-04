<template>
   <div class="quoteblock">
      <img class="quotesvg" src="../assets/quote.svg" alt="">
      <p class="quote">{{ quote }}</p>
      <img class="quotesvgend" src="../assets/quote_end.svg" alt="">
      <p class="author">- {{ author }}</p>
   </div>
</template>

<script>
export default {
   props: {
      quote: String,
      author: String
   }
   
}

</script>

<style scoped>

.quoteblock {
   /* margin-top: 30px;
   margin-bottom: 60px; */
   margin: 30px 20px 60px 20px;
}

.quote {
   margin: 0;
   margin-left: 50px;
   font-family: var(--type2), sans-serif;
   font-style: italic;
}


.quotesvg {
   margin-bottom: -26px;
}

.author {
   float: right;
   margin-top: 2rem;
   margin-right: 4rem;
}

.quotesvgend {
   margin-top: -34px;
   float: right;
}

::selection {
  background: var(--designSelection) !important; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: var(--designSelection) !important; /* Gecko Browsers */
}

</style>