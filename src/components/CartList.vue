<template>
  <div class="cart-list">
    <h4>{{ msg }}</h4>



    
    <router-link to="/cart/address" tag="el-button">goto /cart/address</router-link>
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
.cart-list{
  background-color: darkgoldenrod;
}
</style>
