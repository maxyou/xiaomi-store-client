<template>
<div class="cart-list">
    <h4>{{ msg }}</h4>
    <el-table ref="multipleTable" :data="cartList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
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

    </el-table>

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
    width: 64px;
    height: 64px;
}

.adjust-amount-container {
    display: flex;
    width: 60px;
    background-color: coral;
    justify-content: space-between;
}

.adjust-amount {
    display: inline;
    border: 1px solid #7b797b;
    padding: 3px;
}
</style>
