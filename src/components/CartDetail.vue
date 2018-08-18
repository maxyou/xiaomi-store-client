<template>
<div class="cart-detail">
    <h1>{{ msg }}</h1>
    <div class="cart-next">
        <router-link class="cart-next-goto" to="/cart/completed" tag="a">goto /cart/completed</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            goodsList: [],
            msg: 'this is cart detail'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-detail {
    background-color: goldenrod;
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
