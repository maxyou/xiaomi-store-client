<template>
  <div class="goods-list">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="item in goodsdata" :key="item.id">{{item}}</li>
    </ul>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GoodsList',
  mounted(){
    this.getGoodsList()
  },
  data () {
    return {
      goodsdata: '',
      msg: 'this is goods list page'
    }
  },
  methods:{
    getGoodsList() {
            axios.get("/goods/list", {
                params: {
                    page: 0,
                    pageSize: 8,
                    orderFlag: true,
                    priceLevel: '4'
                }
            }).then((res) => {
              this.goodsdata = res.data
              console.log(JSON.stringify(res.data))
            })
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
