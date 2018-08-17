<template>
<div class="cart-list">
    <h4>{{ msg }}</h4>

    <ul class="cart-item-ul">
        <div class="cart-item-container">
            <div class="cart-item cart-item-select" @click="toggleSelectAll()">
                <svg class="icon" aria-hidden="true">
                        <use v-if="!selectAll" xlink:href="#mi-icon-duoxuankuang"></use>                
                        <use v-else xlink:href="#mi-icon-duoxuankuang1"></use>                
                    </svg>
            </div>
            <div class="cart-item cart-item-img">pic</div>
            <div class="cart-item cart-item-name">name</div>
            <div class="cart-item cart-item-price">price</div>
            <div class="cart-item cart-item-amount-minus"> </div>
            <div class="cart-item cart-item-amount">amount</div>
            <div class="cart-item cart-item-amount-plus"> </div>
            <div class="cart-item cart-item-total">total</div>
            <div class="cart-item cart-item-del">del </div>
        </div>
        <li v-for="item in cartList" :key="item.id" class="cart-item-li">
            <div class="cart-item-container">

                <div class="cart-item cart-item-select" @click="toggleSelect(item)">
                    <svg class="icon" aria-hidden="true">
                        <use v-if="!item.checked || item.checked == undefined" xlink:href="#mi-icon-duoxuankuang"></use>                
                        <use v-else xlink:href="#mi-icon-duoxuankuang1"></use>                
                    </svg>
                </div>
                <div class="cart-item cart-item-img"><img class="goods-pic" :src="'http://hotemotion.fun:3389/static/' + item.productImg" alt=""></div>
                <div class="cart-item cart-item-name">{{item.productName}}</div>
                <div class="cart-item cart-item-price">RMB {{item.productPrice}}</div>
                <div class="cart-item cart-item-amount-minus" @click="minusAmount(item)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#mi-icon-minus-circle"></use>                
                    </svg>
                </div>
                <div class="cart-item cart-item-amount">{{item.productNum}}</div>
                <div class="cart-item cart-item-amount-plus" @click="plusAmount(item)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#mi-icon-plus-circle"></use>                
                    </svg>
                </div>
                <div class="cart-item cart-item-total">RMB {{parseFloat(item.salePrice) * item.productNum}}</div>
                <div class="cart-item cart-item-del" @click="del(item)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#mi-icon-del"></use>                
                    </svg>
                </div>
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
    mapMutations,
    mapActions
} from 'vuex'

export default {
    name: 'Cart',
    methods: {
        ...mapMutations([
            // 'setProductAmount',
            'setProductSelect'
        ]),
        ...mapActions([
            'removeProduct',
            'editProduct',
            'checkAllProduct'
        ]),
        // handleSelectionChange(val) {
        //     console.log(JSON.stringify(val))
        // }
        del(willDel) {
            this.removeProduct(willDel)
            // this.cartList.some(function (item, index, array) {
            //     if (item.productId == willDel.productId) {
            //         array.splice(index, 1)
            //     }
            // })

            // this.selectAll = this.cartList.every(function (item, index, array) {
            //     return item.select
            // })
        },
        // calcSelectAll() {
        //     if (this.cartList.length == 0) {
        //         this.selectAll = false
        //     } else {
        //         this.selectAll = this.cartList.every(function (item, index, array) {
        //             return item.checked
        //         })
        //     }
        // },
        toggleSelectAll() {

            this.checkAllProduct(!this.selectAll)

            // this.selectAll = !this.selectAll
            // var sa = this.selectAll
            // this.cartList.forEach(function (item, index, array) {
            //     item.checked = sa
            // })
        },
        toggleSelect(toggled) {
            var _this = this
            this.cartList.forEach(function (item, index, array) {
                if (item.productId == toggled.productId) {
                    console.log('checked:' + toggled.checked)
                    if (!item.checked || item.checked == undefined) {
                        toggled.checked = true
                    } else {
                        toggled.checked = false
                    }
                    _this.editProduct(toggled)
                    // item.select = toggled.select
                    // array.splice(index, 1, { ...item
                    // })
                }
            })

            // this.selectAll = this.cartList.every(function (item, index, array) {
            //     return item.checked
            // })
            // calcSelectAll()
            console.log('selectAll:' + this.selectAll)
        },
        minusAmount(minused) {
            this.adjustAmount(minused, -1)
        },
        plusAmount(plused) {
            this.adjustAmount(plused, 1)
        },
        adjustAmount(adjusted, change) {
            var _this = this
            this.cartList.some(function (item, index, array) {
                if (item.productId == adjusted.productId) {
                    // item.productNum += change
                    // if (item.productNum == 0) {
                    //     item.productNum = 1
                    // }

                    adjusted.productNum = item.productNum + change
                    if (adjusted.productNum == 0) {
                        adjusted.productNum = 1
                    }
                    _this.editProduct(adjusted)

                    // array.splice(index, 1, { ...item
                    // })
                    return true
                }
            })

        }
    },
    computed: {
        ...mapGetters({
            userLogin: 'getUserLogin',
            selectAll: 'getSelectAll',
            cartList: 'getCartList',
            cartListTotalAmount: 'cartListTotalAmount'
        })
    },
    mounted() {

    },
    data() {
        return {
            // selectAll: false,
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
    width: 100px;
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
    width: 100px;
}

.cart-item-del {
    width: 50px;
}
</style>
