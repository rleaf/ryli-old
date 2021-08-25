<template>
   <div class="landing">
      <NavBar />
      <h1><span style="font-size: 40px; padding-bottom: 50px;">wip</span></h1>
      <p>Ryan</p>
      <!-- &#8226; Owl#4626 -->
      <br>
      -
      <br>
      <p>ryan@ryli.design</p>
   </div>
</template>

<script>

import NavBar from '../components/nav.vue'

export default {
   name: 'wip',
   components: {
      NavBar
   }
}
</script>

<style scoped>
   @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

   * {
      margin: 0;
      padding: 0;
      background-color: #161616;
   }

   .landing {
      display: flex;
      flex-direction: column;
      height: 100vh;
      color: #fff;
      font-family: 'Inconsolata', sans-serif;
      font-size: 16px;
      justify-content: center;
      align-items: center;
   }

   .landing>h1 {
      padding-bottom: 50px;
      font-weight: normal;
   }

   p {
      text-align: center;
   }
</style>