<template>
<div class="cart-detail">
        <el-steps class="cart-steps" :active="active" finish-status="success">
        <el-step title="confirm address"></el-step>
        <el-step title="view order"></el-step>
        <el-step title="pay"></el-step>
        <el-step title="confirm pay"></el-step>
    </el-steps>
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
            active: 1,
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

.cart-steps {
    /* background-color: aqua; */
    padding-left: 20px;
    padding-top: 20px;
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
