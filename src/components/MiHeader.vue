<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/goodslist" tag="button">goto goods list</router-link>
    <router-link to="/cart" tag="button">goto cart</router-link>
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
}
</style>
