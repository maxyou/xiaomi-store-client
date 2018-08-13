<template>
<div class="cart-list">
    <h4>{{ msg }}</h4>

    <ul class="cart-item-ul">
        <li v-for="item in cartList" :key="item.id" class="cart-item-li">
            <div class="cart-item-container">

                <div class="cart-item cart-item-select">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#mi-icon-duoxuankuang"></use>                
                    </svg>
                </div>
                <div class="cart-item cart-item-img"><img class="goods-pic" :src="'http://hotemotion.fun:3389/static/' + item.productImg" alt=""></div>
                <div class="cart-item cart-item-name">{{item.productName}}</div>
                <div class="cart-item cart-item-price">{{item.productPrice}}</div>
                <div class="cart-item cart-item-amount">{{item.amount}}</div>
                <div class="cart-item cart-item-total">{{parseFloat(item.productPrice) * item.amount}}</div>
            </div>
        </li>
    </ul>

    <!-- <el-table ref="multipleTable" :data="cartList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="pic" width="120">
            <template slot-scope="scope"><img class="goods-pic" :src="'http://hotemotion.fun:3389/static/' + scope.row.productImg" alt=""></template>
        </el-table-column>
        <el-table-column prop="productName" label="name" width="120"></el-table-column>
        <el-table-column prop="productPrice" label="price" width="120"></el-table-column>
        <el-table-column prop="amount" label="amount" width="120">
            <template slot-scope="scope">
                <div class="adjust-amount-container">
                    <div class="adjust-amount">-</div>{{ scope.row.amount }}
                    <div class="adjust-amount">+</div>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="amount" label="total" width="120">
            <template slot-scope="scope">{{ parseFloat(scope.row.productPrice) * scope.row.amount }}</template>
        </el-table-column>

    </el-table> -->

    <router-link to="/cart/address" tag="el-button">goto /cart/address</router-link>
</div>
</template>

<script>
import {
    mapGetters,
    mapMutations
} from 'vuex'

export default {
    name: 'Cart',
    methods: {
        ...mapMutations([
            'removeProduct',
            'adjustProductAmount'
        ]),
        handleSelectionChange(val) {
            console.log(JSON.stringify(val))
        }
    },
    computed: {
        ...mapGetters({
            userLogin: 'getUserLogin',
            cartList: 'getCartList',
            cartListTotalAmount: 'cartListTotalAmount'
        })
    },
    data() {
        return {
            msg: 'this is cart list'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-list {
    background-color: darkgoldenrod;
}

.goods-pic {
    width: 45px;
    height: 45px;
}

/* .adjust-amount-container {
    display: flex;
    width: 60px;
    background-color: coral;
    justify-content: space-between;
}

.adjust-amount {
    display: inline;
    border: 1px solid #7b797b;
    padding: 3px;
} */

.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.cart-item-ul {
    background-color: aquamarine;
    -webkit-padding-start: 0%;
    width: 100%;
    /* height: 50px; */
    list-style: none;
}
.cart-item-li {
    margin: 0px;
    background-color: cornflowerblue;
    width: 100%;
    height: 50px;
    list-style: none;
}

.cart-item-container {
    background-color: darksalmon;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: 50px;
}

.cart-item {
    border:1px solid #7b797b;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart-item-select{
    width: 50px;    
}
.cart-item-img{
    width: 50px;    
}
.cart-item-name{
    width: 250px;    
}
.cart-item-price{
    width: 50px;    
}
.cart-item-amount{
    width: 50px;    
}
.cart-item-total{
    width: 50px;    
}

</style>
