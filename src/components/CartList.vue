<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/cart/address" tag="button">goto /cart/address</router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      goodsList: [],
      msg: 'this is cart list'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
