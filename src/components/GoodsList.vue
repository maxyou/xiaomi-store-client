<template>
  <div class="goods-list">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      goodsList: [],
      msg: 'this is goods list page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods-list{
  background-color: aquamarine;
}
</style>
