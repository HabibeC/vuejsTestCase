<template>
  <div id="app">
    <div id="nav">
      <router-view>
        <home></home>
      </router-view>
    </div>
  </div>
</template>
<script>

import Home from "@/views/Home";
export  default {
  name:'App',
  components: {Home},
}
</script>

<style>
.nav{
  margin: 0 auto;
  width: auto;
}
</style>
