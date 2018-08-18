<template>
<div id="app">
    <miheader class="miheader"></miheader>
    <router-view></router-view>    
</div>
</template>

<script>
import MiHeader from './components/MiHeader.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name: 'App',
    components: {
        miheader: MiHeader
    },
    data() {
        return {
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
    },
    methods: {

    }
}
</script>

<style>
#app {
    width: 80%;
    min-width: 800px;
    margin: 0 auto;
    /* background-color: green; */
}

/* .miheader {
    width: 100%;
    height: 200px;
    background-color: yellow;
} */
</style>
