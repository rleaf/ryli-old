<template>
<div>
   <li><router-link :to="{ name: `${route}`}"> {{ title }}</router-link></li>
   <p class="date">{{ date }}</p>
   <p class="blogdescription">
      {{ summary }}
   </p>
</div>
</template>

<script>
export default {
   props: {
      title: String,
      summary: String,
      date: String,
      route: String
   }
}
</script>

<style scoped>

a, li {
   font-size: 16px;
   font-weight: bold;
   list-style-type: none;
}

a {
   float: left;
}

li {
   margin-top: 3em;
}

.date {
   margin: 0;
   float: right;
}

.test {
   clear:both;
}
#links {
   margin-top: 6em;
   margin-bottom: 6em;
}

.blogdescription {
   padding-top: 0.6em;
   margin: 0;
   margin-left: 1.5em;
   font-size: 14px;
   clear: both;
}
</style>