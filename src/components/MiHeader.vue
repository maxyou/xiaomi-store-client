<template>
<div>
    <!-- <h1>====={{ $store.getters.getUserLogin }}=====</h1>
    <h1>====={{ $store.state.userLogin }}=====</h1> -->
    <div class="flex-container">

        <!-- <img src="@/assets/logo.png"> -->

        <!-- <img src="@/assets/logo.png" width="128" height="128" alt="goto goods list"> -->
        <router-link to="/goodslist" class="flex-items flex-logo">
            <img src="@/assets/logo.jpg" height="64" alt="goto goods list">
        </router-link>

        <div class="flex-items flex-space"></div>

        <!-- <el-button v-if="!$store.state.userLogin" class="flex-items flex-login" @click="showLoginDialog">login</el-button> -->
        <!-- <el-button v-if="!$store.getters.getUserLogin" class="flex-items flex-login" @click="showLoginDialog">login</el-button> -->
        <el-button v-if="!userLogin" class="flex-items flex-login" @click="showLoginDialog">login</el-button>
        <span v-else>
            <el-button class="flex-items flex-logout" @click="logout">logout</el-button>
            <el-button class="flex-items flex-name">{{userName}}</el-button>

            <!-- <el-badge :value="cartListLength" class="badge-item"> -->
            <!-- <el-badge :value="$store.getters.cartListTotalAmount" class="badge-item"> -->
            <el-badge :value="cartListTotalAmount" class="badge-item">
                <router-link to="/cart" class="flex-items flex-cart" tag="span">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#mi-icon-gouwuche"></use>
                    </svg>
                </router-link>
            </el-badge>
        </span>

        <el-dialog title="please login:" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="name" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="password" :label-width="formLabelWidth">
                    <el-input v-model="form.pwd" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">cancel</el-button>
                <el-button type="primary" @click="login">submit</el-button>
            </div>
        </el-dialog>

    </div>
</div>
</template>

<script>
import "@/assets/icons/iconfont.js"
// import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name: 'MiHeader',
    // props: ['stateLogin', 'cartListLength'],
    data() {
        return {
            userName: '',
            dialogFormVisible: false,
            form: {
                name: '',
                pwd: ''
            },
            formLabelWidth: '120px',
            // login: false,
            howManyInShopCart: 0,
            msg: 'this is Header'
        }
    },
    computed: {
        ...mapGetters({
            userLogin: 'getUserLogin',
            cartListTotalAmount: 'cartListTotalAmount'
        })
    },
    methods: {
        logout() {
            // this.$emit('setStateLogin', false)
            // this.$emit('update:stateLogin', false)
            this.$store.commit('setUserLogin', false)
        },
        showLoginDialog() {
            this.dialogFormVisible = true
        },
        login() {
            this.dialogFormVisible = false

            this.$http.post("/users/login", {
                userName: this.form.name,
                userPwd: this.form.pwd
            }).then((res) => {
                console.log(JSON.stringify(res.data))

                if (res.data.status == 0) {
                    //login success
                    // this.$emit('setStateLogin', true)
                    // this.$emit('update:stateLogin', true)
                    this.$store.commit('setUserLogin', true)
                    // console.log('update stateLogin:' + true)
                    this.userName = res.data.result.userName
                } else {
                    alert('login failed')
                }

            })
            // console.log('name:' + this.form.name + ' pwd:' + this.form.pwd)
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
    flex: 0;
    margin: 10px;
}

.flex-space {
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
