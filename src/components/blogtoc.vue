<template>
  <div class="blogtoc">
     Contents
     <ul>
         <li>
           <a href="#toads">toad</a>
         </li>
         <li>
           <a href="#toads">toad</a>
         </li>
        <ul>
            <li>
            <a href="#toads">toad</a>
            </li>
            <li>
            <a href="#toads">toad</a>
            </li>
            <li>
            <a href="#toads">toad</a>
            </li>
        </ul>
         <li>
         <a href="#toads">toad</a>
         </li>
     </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
   .blogtoc {
      color: var(--white);
      /* border-color: #4a4d4f */
      border: 1px solid;
      border-color: var(--white);
      width: 300px;
      font-size: 95%;
      /* color: red; */
   }

   .blogtoc a {
      color: var(--white);
   }

   .blogtoc ul {
      text-align: left;
      list-style: numbers;
   }

</style>