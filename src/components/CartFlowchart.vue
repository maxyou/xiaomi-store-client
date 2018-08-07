<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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

</style>
