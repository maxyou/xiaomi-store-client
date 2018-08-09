<template>
<div class="goods-list">
    <!-- <h1>{{ msg }}</h1> -->

    <div class="flex-container">
        <div class="flex-items" v-for="item in goodsdata" :key="item.id">
            <div><img src="@/assets/goods/2.jpg" alt=""></div>

            <div>{{item.productName}}</div>
            <div>${{item.productPrice}}</div>
            <div>
                <el-button>add to cart</el-button>
            </div>
        </div>
    </div>

    <!-- <ul>
        <li v-for="item in goodsdata" :key="item.id">{{item}}</li>
    </ul> -->

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
.flex-container {
    margin-left: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.flex-items {
    width: 300px;
    height: 400px;
    /* flex: 1; */
    margin: 10px;
    background-color: crimson;
}

.goods-list {
    background-color: aquamarine;
}
</style>
