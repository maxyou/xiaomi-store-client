<template>
<div class="cart-completed">
    <el-steps class="cart-steps" :active="active" finish-status="success">
        <el-step title="confirm address"></el-step>
        <el-step title="view order"></el-step>
        <el-step title="pay"></el-step>
        <el-step title="confirm pay"></el-step>
    </el-steps>
    <div class="cart-completed-done">

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#mi-icon-dingdanwancheng"></use>
        </svg>
        <span class="cart-completed-done-cong">congratuation, your order is done</span>
        <div class="cart-completed-done-next">

            <router-link class="cart-completed-done-next-cartlist" to="/cart" tag="a">goto /cart</router-link>

            <router-link class="cart-completed-done-next-goodslist" to="/goodslist" tag="a">goto /goodslist</router-link>

        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            active: 4,
            msg: 'this is cart completed'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .cart-completed {
    background-color: hotpink;
} */

.cart-steps {
    margin-top: 20px;
    margin-left: 20px;
}

.icon {
    width: 120px;
    height: 120px;
    margin-top: 20px;
}

.cart-completed-done-cong {
    margin: 20px;
    color: crimson;
}

.cart-completed-done {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cart-completed-done-next {
    width: 280px;
    height: 50px;
    /* background-color: aqua; */
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.cart-completed-done-next-goodslist {
    text-align: center;
    line-height: 50px;
    width: 120px;
    height: 50px;
    display: inline-block;
    text-decoration: none;
    background-color: crimson;
}

.cart-completed-done-next-cartlist {
    text-align: center;
    line-height: 50px;
    width: 120px;
    height: 50px;
    display: inline-block;
    text-decoration: none;
    background-color: crimson;
}

</style>
