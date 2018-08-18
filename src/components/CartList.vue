<template>
<div class="cart-list">

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

    <div class="cart-next">
        <span class="cart-next-total">total</span>
        <router-link class="cart-next-goto" to="/cart/address" tag="a">goto /cart/address</router-link>
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
    methods: {
        ...mapMutations([
            'setProductSelect'
        ]),
        ...mapActions([
            'removeProduct',
            'editProduct',
            'checkAllProduct'
        ]),
        del(willDel) {
            this.removeProduct(willDel)
        },
        toggleSelectAll() {
            this.checkAllProduct(!this.selectAll)
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
                }
            })

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

                    adjusted.productNum = item.productNum + change
                    if (adjusted.productNum == 0) {
                        adjusted.productNum = 1
                    }
                    _this.editProduct(adjusted)

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
            msg: 'this is cart list'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-list {
    background-color: white;
}

.goods-pic {
    width: 45px;
    height: 45px;
}


.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
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

.cart-next{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: aqua;
}

.cart-next-total{
    color: red;
    padding-right: 20px;
}

.cart-next-goto{
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
