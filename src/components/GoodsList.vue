<template>
<div>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="sort-bar-header">
        <span>sort</span>
        <el-button>default</el-button>
        <el-button>price</el-button>
        <svg class="icon" v-if="sortPriceUp" aria-hidden="true">
                    <use xlink:href="#mi-icon-icon_down"></use>
                    </svg>
        <svg class="icon" v-else aria-hidden="true">
                    <use xlink:href="#mi-icon-i_top"></use>
                    </svg>
    </div>

    <div>
        <div class="sort-bar-left">
            <h2>price:</h2>

            <ul>
                <li>all</li>
                <li>0.00-100.00</li>
                <li>100.00-500.00</li>
                <li>500.00-1000.00</li>
                <li>1000.00-8000.00</li>
            </ul>



        </div>
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
            sortPriceUp: true,
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
.sort-bar-header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: gray;
}

.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.sort-bar-left {
    float: left;
    width: 15%;
    height: 500px;
    background-color: rgb(200, 255, 0);
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
