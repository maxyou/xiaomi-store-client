<template>
<div class="cart-address">
    <el-steps class="cart-steps" :active="active" finish-status="success">
        <el-step title="confirm address"></el-step>
        <el-step title="view order"></el-step>
        <el-step title="pay"></el-step>
        <el-step title="confirm pay"></el-step>
    </el-steps>

    <div>
        <h3>address</h3>

        <div class="cart-address-add">

            <svg class="cart-address-add-icon" aria-hidden="true">
                    <use xlink:href="#mi-icon-tianjia"></use>
                    </svg>

            <p>add new address</p>
        </div>

    </div>

    <div class="cart-next">
        <router-link class="cart-next-goto" to="/cart/detail" tag="a">goto /cart/detail</router-link>
    </div>

</div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            active: 0,
            msg: 'this is cart address'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-address {
    /* background-color: brown; */
}

.cart-steps {
    /* background-color: aqua; */
    padding-left: 20px;
    padding-top: 20px;
}

.cart-address-add {
    width: 200px;
    height: 150px;
    /* background-color: yellowgreen; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    margin: 20px;
}

.cart-address-add-icon {
    width: 45px;
    height: 45px;
    /* background-color: lightcoral; */
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
