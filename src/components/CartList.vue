<template>
<div class="cart-list">
    <h4>{{ msg }}</h4>

    <ul class="cart-item-ul">
        <li v-for="item in cartList" :key="item.id" class="cart-item-li">
            <div class="cart-item-container">

                <div class="cart-item cart-item-select" @click="toggleSelect(item)">
                    <svg class="icon" aria-hidden="true">
                        <use v-if="!item.select || item.select == undefined" xlink:href="#mi-icon-duoxuankuang"></use>                
                        <use v-else xlink:href="#mi-icon-duoxuankuang1"></use>                
                    </svg>
                </div>
                <div class="cart-item cart-item-img"><img class="goods-pic" :src="'http://hotemotion.fun:3389/static/' + item.productImg" alt=""></div>
                <div class="cart-item cart-item-name">{{item.productName}}</div>
                <div class="cart-item cart-item-price">{{item.productPrice}}</div>
                <div class="cart-item cart-item-amount-minus" @click="minusAmount(item)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#mi-icon-minus-circle"></use>                
                    </svg>
                </div>
                <div class="cart-item cart-item-amount">{{item.amount}}</div>
                <div class="cart-item cart-item-amount-plus" @click="plusAmount(item)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#mi-icon-plus-circle"></use>                
                    </svg>
                </div>
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
            'setProductAmount',
            'setProductSelect'
        ]),
        // handleSelectionChange(val) {
        //     console.log(JSON.stringify(val))
        // }
        toggleSelect(toggled) {
            this.cartList.forEach(function (item, index, array) {
                if (item.productId == toggled.productId) {
                    console.log('select:' + toggled.select)
                    if (!item.select || item.select == undefined) {
                        item.select = true
                    } else {
                        item.select = false
                    }
                    // item.select = toggled.select
                    array.splice(index, 1, { ...item
                    })
                }
            })
        },
        minusAmount(minused) {
            this.adjustAmount(minused, -1)
        },
        plusAmount(plused) {
            this.adjustAmount(plused, 1)
        },
        adjustAmount(adjusted, change) {
            this.cartList.some(function (item, index, array) {
                if (item.productId == adjusted.productId) {
                    item.amount += change
                    if (item.amount == 0) {
                        item.amount = 1
                    }
                    array.splice(index, 1, { ...item
                    })
                    return true
                }
            })

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
    height: 65px;
    list-style: none;
}

.cart-item-container {
    background-color: darksalmon;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px auto;
    /* padding: 5px; */
    width: 90%;
    height: 60px;
}

.cart-item {
    /* border: 1px solid #7b797b; */
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-item-select {
    width: 50px;
}

.cart-item-img {
    width: 50px;
}

.cart-item-name {
    width: 250px;
}

.cart-item-price {
    width: 50px;
}

.cart-item-amount-minus {
    width: 40px;
    height: 40px;
    margin: 5px;
}

.cart-item-amount {
    width: 50px;
}

.cart-item-amount-plus {
    width: 40px;
    height: 40px;
    margin: 5px;
}

.cart-item-total {
    width: 50px;
}
</style>
