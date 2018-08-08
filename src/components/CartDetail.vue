<template>
  <div class="cart-detail">
    <h1>{{ msg }}</h1>
    <router-link to="/cart/completed" tag="el-button">goto /cart/completed</router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      goodsList: [],
      msg: 'this is cart detail'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-detail{
  background-color: goldenrod;
}
</style>
