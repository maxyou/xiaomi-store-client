<template>
<div id="app">
    <!-- <h1>stateLogin:{{appState.stateLogin}}, cartList:{{appState.cartList}}</h1> -->
    <hr>
    <!-- <button @click="getGoodsList">load goods list</button> -->
    <!-- <miheader v-bind:stateLogin="stateLogin" v-on:setStateLogin="setStateLogin" class="miheader"></miheader> -->
    <!-- <miheader v-bind.sync="appState" class="miheader"></miheader> -->
    <miheader class="miheader"></miheader>
    <!-- <hr> -->
    <!-- <router-view v-bind.sync="appState" v-on:cartChange="cartChange"></router-view> -->
    <router-view></router-view>
    <hr>
</div>
</template>

<script>
import MiHeader from './components/MiHeader.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

// axios.defaults.baseURL = 'http://hotemotion.fun:3389';

export default {
    name: 'App',
    components: {
        miheader: MiHeader
    },
    data() {
        return {
            // appState: {
            //     stateLogin: false,
            //     cartList: [],
            //     cartListLength: 0
            // }
        }

    },
    computed: {
        ...mapGetters({
            userLogin: 'getUserLogin'
        })
    },
    watch: {
        userLogin: function (newVal, oldVal) {
            if (!newVal) {
                this.$router.push({
                    path: '/'
                })
            }
        }
        // stateLogin: function (newVal, oldVal) {
        //     console.log('stateLogin changed: ' + this.stateLogin)
        // }
        // cartList: {
        //     handler(newVal, oldVal) {

        //         this.cartListLength = this.cartList.length
        //         console.log('cartListLength changed: ' + this.cartListLength)

        //     },
        //     deep: true
        // }
        // cartList: function (newVal, oldVal) {
        //     this.cartListLength = this.cartList.length
        //     console.log('cartListLength changed: ' + this.cartListLength)
        // }
    },
    methods: {
        // cartChange(){
        //         this.appState.cartListLength = this.appState.cartList.length
        //         console.log('cartListLength changed: ' + this.appState.cartListLength)
        // },
        // setStateLogin(e) {
        //     this.stateLogin = e;
        //     if (!e) {
        //         this.$router.push({
        //             path: '/'
        //         })
        //     }
        // },
        // getGoodsList() {
        //     axios.get("/goods/list", {
        //         params: {
        //             page: 0,
        //             pageSize: 8,
        //             orderFlag: true,
        //             priceLevel: '4'
        //         }
        //     }).then((res) => {
        //         console.log(JSON.stringify(res.data))
        //     })
        // }

    }
}
</script>

<style>
#app {
    width: 80%;
    min-width: 800px;
    margin: 0 auto;
    background-color: green;
}

/* .miheader {
    width: 100%;
    height: 200px;
    background-color: yellow;
} */
</style>
