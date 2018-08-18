<template>
<div class="cart-detail">
    <el-steps class="cart-steps" :active="active" finish-status="success">
        <el-step title="confirm address"></el-step>
        <el-step title="view order"></el-step>
        <el-step title="pay"></el-step>
        <el-step title="confirm pay"></el-step>
    </el-steps>

    <ul class="cart-item-ul">
        <div class="cart-item-container cart-item-container-title">
            <div class="cart-item cart-item-img">pic</div>
            <div class="cart-item cart-item-name">name</div>
            <div class="cart-item cart-item-price">price</div>
            <div class="cart-item cart-item-amount">amount</div>
            <div class="cart-item cart-item-total">total</div>
        </div>
        <li v-for="item in cartList" :key="item.id" class="cart-item-li">
            <div class="cart-item-container">

                <div class="cart-item cart-item-img"><img class="goods-pic" :src="serverBaseUrl + '/static/' + item.productImage" alt=""></div>
                <div class="cart-item cart-item-name">{{item.productName}}</div>
                <div class="cart-item cart-item-price">RMB {{item.productPrice}}</div>
                <div class="cart-item cart-item-amount">{{item.productNum}}</div>
                <div class="cart-item cart-item-total">RMB {{parseFloat(item.salePrice) * item.productNum}}</div>
            </div>
        </li>
    </ul>

    <div class="cart-next">
        <router-link class="cart-next-goto" to="/cart/completed" tag="a">goto /cart/completed</router-link>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex'

export default {
    name: 'Cart',
    data() {
        return {
            active: 1,
            msg: 'this is cart detail'
        }
    },
    computed: {
        ...mapGetters({
            userLogin: 'getUserLogin',
            selectAll: 'getSelectAll',
            cartList: 'getCartList',
            cartListTotalAmount: 'cartListTotalAmount',
            serverBaseUrl:'getServerBaseUrl'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .cart-detail {
    background-color: goldenrod;
} */

.cart-steps {
    /* background-color: aqua; */
    padding-left: 20px;
    padding-top: 20px;
}

.cart-item-ul {
    /* background-color: aquamarine; */
    -webkit-padding-start: 0%;
    width: 100%;
    /* height: 50px; */
    list-style: none;
}

.cart-item-li {
    margin: 0px;
    /* background-color: cornflowerblue; */
    width: 100%;
    height: 65px;
    list-style: none;
}

.cart-item-container {
    /* background-color: darksalmon; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px auto;
    /* padding: 5px; */
    width: 90%;
    height: 60px;
}
.cart-item-container-title{
  background-color: darkgrey;
}
.cart-item {
    /* border: 1px solid #7b797b; */
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.cart-item-img {
    width: 50px;
}

.goods-pic {
    width: 45px;
    height: 45px;
}

.cart-item-name {
    width: 250px;
}

.cart-item-price {
    width: 100px;
}


.cart-item-amount {
    width: 50px;
}


.cart-item-total {
    width: 100px;
}
.cart-next {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* background-color: aqua; */
}

.cart-next-goto {
    /* margin-left: 20px; */
    padding-left: 20px;
    padding-right: 20px;
    background-color: darkgrey;
    color: white;
    text-decoration: none;
    /* height: 100%; */
    /* display: block; */
    line-height: 50px;
}
</style>
