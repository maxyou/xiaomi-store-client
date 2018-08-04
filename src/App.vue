<template>
<div id="app">
    <img src="./assets/logo.png">
    <button @click="getGoodsList">load goods list</button>
    <router-view/>
</div>
</template>

<script>
import axios from 'axios'

// axios.defaults.baseURL = 'http://hotemotion.fun:3389';

export default {
    name: 'App',

    data() {
        return {}
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
                console.log(JSON.stringify(res.data))
            })
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
