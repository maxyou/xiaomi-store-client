<template>
<div id="app">
    <button v-if="true" @click="getGoodsList">load goods list</button>
    <hr>
    <miheader class="miheader"></miheader>
    <hr>
    <router-view name="content" />
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

.miheader {
    width: 100%;
    height: 200px;
    background-color: yellow;
}
</style>
