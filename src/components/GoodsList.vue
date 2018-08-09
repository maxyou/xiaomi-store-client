<template>
<div>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="sort-bar">sort, default, price</div>

    <div>
        <div class="price-bar">aside</div>
        <div class="goods-list">
            <div class="flex-container">
                <div class="flex-items" v-for="item in goodsdata" :key="item.id">
                    <div><img :src="getSrc(item.productImg)" alt=""></div>

                    <div>{{item.productName}}</div>
                    <div>${{item.productPrice}}</div>
                    <div>
                        <el-button>add to cart</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'GoodsList',
    mounted() {
        this.getGoodsList()
    },
    data() {
        return {
            goodsdata: '',
            msg: 'this is goods list page'
        }
    },
    methods: {
        getSrc(name) {
            var images = require.context('@/assets/goods/', false, /\.jpg$/)
            return images('./' + name)
        },
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
.sort-bar{
    width: 100%;
    height: 60px;
    background-color: gray;

}
.price-bar {
    float: left;
    width: 15%;
    height: 500px;
    background-color: blue;
}

.goods-list {
    float: left;
    width: 85%;
    background-color: aquamarine;
}

.flex-container {
    margin-left: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.flex-items {
    width: 250px;
    height: 350px;
    /* flex: 1; */
    margin: 10px;
    background-color: crimson;
}

.flex-items img {
    width: 250px;
    height: 250px;
}


</style>
