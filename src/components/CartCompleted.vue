<template>
  <div class="cart-completed">
    <h1>{{ msg }}</h1>
        <router-link to="/goodslist" tag="el-button">goto /goodslist</router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      goodsList: [],
      msg: 'this is cart completed'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-completed{
  background-color: hotpink;
}
</style>
