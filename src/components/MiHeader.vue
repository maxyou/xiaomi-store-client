<template>
  <div class="hello">
    <!-- <img src="@/assets/logo.png"> -->
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <img src="@/assets/logo.png" width="128" height="128" alt="goto goods list"> -->
    <router-link to="/goodslist">
      <img src="@/assets/logo.png" width="64" height="64" alt="goto goods list">
    </router-link>
    <router-link to="/cart">goto cart</router-link>
  </div>
</template>

<script>
export default {
  name: 'MiHeader',
  data () {
    return {
      login: false,
      howManyInShopCart: 0,
      msg: 'this is Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100px;
  background-color: yellowgreen;
  display: flex;
}
</style>
