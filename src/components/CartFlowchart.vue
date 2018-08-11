<template>
  <div class="cart-flowchart">
    <h4>{{ msg }}</h4>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      goodsList: [],
      msg: 'this is cart flowchart'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-flowchart{
  background-color: coral;
}
</style>
