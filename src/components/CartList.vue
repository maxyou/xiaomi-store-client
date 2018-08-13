<template>
<div class="cart-list">
    <h4>{{ msg }}</h4>
    <el-table ref="multipleTable" :data="cartList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="pic" width="120">
            <template slot-scope="scope"><img class="goods-pic" :src="'http://hotemotion.fun:3389/static/' + scope.row.productImg" alt=""></template>
        </el-table-column>
        <el-table-column prop="amount" label="amount" width="120"><span>hahaha</span></el-table-column>
        <el-table-column prop="productName" label="name" width="120"></el-table-column>
        <el-table-column prop="amount" label="amount" width="120">
          <template slot-scope="scope"><h3>this is h3</h3>{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="amount" label="amount" width="120"></el-table-column>
        <el-table-column prop="productPrice" label="price" show-overflow-tooltip></el-table-column>
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
            tableData3: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王da虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
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
.goods-pic{
  width: 64px;
  height: 64px;
}
</style>
