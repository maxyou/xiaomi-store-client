<template>
<div id="app">
    <img src="./assets/logo.png">
    <button @click="getGoodsList(false)">load goods list</button>
    <router-view/>
</div>
</template>

<script>
import axios from 'axios'

// axios.defaults.baseURL = 'http://hotemotion.fun:3389';

export default {
    name: 'App',

    data() {
        return {
            goodsList: [],
            price: [{
                    "startPrice": "0.00",
                    "endPrice": "100.00"
                },
                {
                    "startPrice": "100.00",
                    "endPrice": "500.00"
                },
                {
                    "startPrice": "500.00",
                    "endPrice": "1000.00"
                },
                {
                    "startPrice": "1000.00",
                    "endPrice": "8000.00"
                },
            ],
            priceChecked: 'all',
            page: 0,
            pageSize: 8,
            orderFlag: true,
            busy: true,
            priceLevel: 'all',
            modalCar: false,
            modalShow: false,
        }
    },
    // components: {
    //     NavHeader,
    //     NavFooter,
    //     NavBread,
    //     Modal,
    // },

    // mounted: function () {
    //     this.getGoodsList(false);
    // },
    methods: {

        getGoodsList(flag) {
            var param = {
                page: this.page,
                pageSize: this.pageSize,
                orderFlag: this.orderFlag,
                priceLevel: this.priceLevel,
            };
            axios.get("/goods/list", {
                params: param
            }).then((res) => {
                console.log(JSON.stringify(res.data))
                if (flag) {
                    this.goodsList = this.goodsList.concat(res.data);
                    if (res.data.length !== 0) {
                        this.busy = false;
                    } else {
                        this.busy = true;
                    }
                } else {
                    this.goodsList = res.data;
                    this.busy = false;
                }
            })
        },
        sortBy() {
            this.orderFlag = !this.orderFlag;
            this.page = 0;
            this.getGoodsList(false);
        },
        loadMore() {
            this.busy = true;
            setTimeout(() => {
                this.page++;
                this.getGoodsList(true);
            })
        },
        setPriceLevel(index) {
            this.priceLevel = index;
            this.page = 0;
            this.getGoodsList(false);
        },
        addToCar(productId) {
            axios.post("/goods/addCar", {
                productId: productId
            }).then((res) => {
                if (res.data.status == '0') {
                    this.modalCar = true;
                    store.commit("updateCartCount1", 1);
                } else {
                    this.modalShow = true
                }
            })
        },
        closeModal() {
            this.modalShow = false;
            this.modalCar = false;
        }

    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: green;
}
</style>
