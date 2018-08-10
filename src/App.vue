<template>
<div id="app">
    <h1>stateLogin:{{appState.stateLogin}}</h1>
    <hr>
    <button v-if="false" @click="getGoodsList">load goods list</button>
    <!-- <miheader v-bind:stateLogin="stateLogin" v-on:setStateLogin="setStateLogin" class="miheader"></miheader> -->
    <miheader v-bind.sync="appState" class="miheader"></miheader>
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
            appState: {
                stateLogin: false
            }
        }

    },
    watch: {
        stateLogin: function (newVal, oldVal) {
            console.log('stateLogin changed: ' + this.stateLogin)
        }
    },
    methods: {
        setStateLogin(e) {
            this.stateLogin = e;
            if (!e) {
                this.$router.push({
                    path: '/'
                })
            }
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
