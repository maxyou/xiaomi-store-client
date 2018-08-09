<template>
<div id="app">
    <button v-if="false" @click="getGoodsList">load goods list</button>
    <miheader v-bind:stateLogin="stateLogin" v-on:setStateLogin="setStateLogin" class="miheader"></miheader>
    <!-- <hr> -->
    <router-view></router-view>
    <hr>
</div>
</template>

<script>
import MiHeader from './components/MiHeader.vue'
import axios from 'axios'

// axios.defaults.baseURL = 'http://hotemotion.fun:3389';

export default {
    name: 'App',
    components: {
        miheader: MiHeader
    },
    data() {
        return {
            stateLogin: false
        }

    },
    methods: {
        setStateLogin(e){
            this.stateLogin = e;
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
                console.log(JSON.stringify(res.data))
            })
        }

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
