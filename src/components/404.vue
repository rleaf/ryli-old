<template>
  <div id="fourofour">
     404
     <p>
        The URL does not exist
     </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#fourofour {
   font-family: 'Inconsolata', sans-serif;
   position: absolute;
   top: calc(50% - 14vmin / 2);
   left: 0;
   text-align: center;
   font-size: 40px;
   width: 100%;
   color: var(--offWhite);
}

#fourofour > p {
   font-size: 20px;
}

</style>