<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/cart/detail" tag="button">goto /cart/detail</router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      goodsList: [],
      msg: 'this is cart address'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
