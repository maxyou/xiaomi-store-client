<template>
<div>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="sort-bar-header">
        <span>sort</span>
        <el-button>default</el-button>
        <el-button @click="sortPriceUp=!sortPriceUp">price</el-button>
        <svg class="icon" v-if="sortPriceUp" aria-hidden="true">
                    <use xlink:href="#mi-icon-icon_down"></use>
                    </svg>
        <svg class="icon" v-else aria-hidden="true">
                    <use xlink:href="#mi-icon-i_top"></use>
                    </svg>
    </div>

    <div>
        <div class="sort-bar-left">
            <h4>price:</h4>

            <ul class="sort-bar-left-ul">
                <li class="sort-bar-left-li" v-for="item in sortPriceLevel" :key="item.id" @click="currentPriceFilter = item"><a href="#">{{item.start}}-{{item.end}}</a></li>

                <!-- <li>0.00-100.00</li>
                <li>100.00-500.00</li>
                <li>500.00-1000.00</li>
                <li>1000.00-8000.00</li> -->
            </ul>

        </div>
        <div class="goods-list">
            <div class="flex-container">
                <div class="flex-items" v-for="item in filterAndSortGoodsList()" :key="item.id">
                    <!-- <div><img :src="getSrc(item.productImg)" alt=""></div> -->
                    <!-- <div><img :src="require('@/assets/goods/' + item.productImg)" alt=""></div> -->
                    <div><img :src="'http://hotemotion.fun:3389/static/' + item.productImg" alt=""></div>

                    <div>{{item.productName}}</div>
                    <div>${{item.productPrice}}</div>
                    <div>
                        <el-button @click="addToCart(item)">add to cart</el-button>
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
    props:[
        'stateLogin',
        'cartList'
    ],
    data() {
        return {
            currentPriceFilter: {
                start: 0.00,
                end: 10000.00
            },
            sortPriceLevel: [
                // {start:0, end:'all'},
                {
                    start: 0.00,
                    end: 100.00
                },
                {
                    start: 100.00,
                    end: 500.00
                },
                {
                    start: 500.00,
                    end: 1000.00
                },
                {
                    start: 1000.00,
                    end: 8000.00
                },
            ],
            sortPriceUp: true,
            goodsdata: [],
            msg: 'this is goods list page'
        }
    },
    methods: {
        addToCart(item){
            this.$emit('update:cartList', this.cartList.concat(item))
            this.$emit('cartChange')
            console.log('addToCart')
        },
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
        },
        filterAndSortGoodsList() {
            //filter
            var a = this.goodsdata.filter(
                item =>
                item.productPrice >= this.currentPriceFilter.start &&
                item.productPrice <= this.currentPriceFilter.end
            )
            // console.log(a)
            //sort
            a.sort((a, b) =>
                this.sortPriceUp ?
                a.productPrice - b.productPrice :
                b.productPrice - a.productPrice
            )
            return a;
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
.sort-bar-left-ul{
    background-color: rgb(100, 155, 200);
}
.sort-bar-left-li{
    list-style: none;
    margin: 10px;
}
.sort-bar-left-li a:link{
    text-decoration: none;
}
.sort-bar-left-li a:hover{
    background-color: rgb(200, 155, 0);
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
