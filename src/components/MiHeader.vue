<template>
<div class="flex-container">

    <!-- <img src="@/assets/logo.png"> -->
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <img src="@/assets/logo.png" width="128" height="128" alt="goto goods list"> -->
    <router-link to="/goodslist" class="flex-items flex-logo">
        <img src="@/assets/logo.jpg" height="64" alt="goto goods list">
    </router-link>

    <el-button class="flex-items flex-login">login</el-button>
    <el-button class="flex-items flex-logout">logout</el-button>

    <el-button class="flex-items flex-name">name</el-button>

    <el-badge :value="12" class="badge-item">
        <router-link to="/cart" class="flex-items flex-cart" tag="span">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#mi-icon-gouwuche"></use>
            </svg>
        </router-link>
    </el-badge>

</div>
</template>

<script>
import "@/assets/icons/iconfont.js"

export default {
    name: 'MiHeader',
    data() {
        return {
            login: false,
            howManyInShopCart: 0,
            msg: 'this is Header'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.badge-item {
    margin-top: 10px;
    margin-right: 40px;
}

.icon {
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.flex-container {
    width: 100%;
    height: 100px;
    background-color: yellowgreen;
    display: flex;
    flex-wrap: nowrap;
    /* justify-content: space-around; */
    align-items: center;
}

.flex-logo {
    flex: 1;
    margin: 10px;
}

.flex-login {
    flex: 0;
    margin: 10px;
}

.flex-logout {
    flex: 0;
    margin: 10px;
}

.flex-name {
    flex: 0;
    margin: 10px;
}

.flex-cart {
    flex: 0;
    margin: 10px;
}
</style>
