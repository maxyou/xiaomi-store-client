<template>
<div>
    <!-- <h1>{{ msg }}</h1> -->
    <div class="sort-bar-header">
        <span class="sort-bar-header-a">sort:</span>
        <span><a class="sort-bar-header-a" href="#">default</a></span>
        <span><a  class="sort-bar-header-a" href="#"  @click="sortPriceUp=!sortPriceUp">price</a></span>
        <svg class="icon" v-if="sortPriceUp" aria-hidden="true">
                    <use xlink:href="#mi-icon-icon_down"></use>
                    </svg>
        <svg class="icon" v-else aria-hidden="true">
                    <use xlink:href="#mi-icon-i_top"></use>
                    </svg>
    </div>

    <div>
        <div class="sort-bar-left">
            <h4>price:</h4>

            <ul class="sort-bar-left-ul">
                <li class="sort-bar-left-li" v-for="item in sortPriceLevel" :key="item.id" @click="currentPriceFilter = item"><a href="#">{{item.start}}-{{item.end}}</a></li>

                <!-- <li>0.00-100.00</li>
                <li>100.00-500.00</li>
                <li>500.00-1000.00</li>
                <li>1000.00-8000.00</li> -->
            </ul>

        </div>
        <div class="goods-list">
            <div class="flex-container">
                <div class="flex-items" v-for="item in filterAndSortGoodsList()" :key="item.id">
                    <!-- <div><img :src="getSrc(item.productImg)" alt=""></div> -->
                    <!-- <div><img :src="require('@/assets/goods/' + item.productImg)" alt=""></div> -->
                    <div><img :src="serverBaseUrl + '/static/' + item.productImg" alt=""></div>

                    <div class="flex-items-spec">{{item.productName}}</div>
                    <div class="flex-items-spec flex-items-spec-price">${{item.productPrice}}</div>
                    <div class="flex-items-spec flex-items-spec-add">
                        <el-button class="flex-items-spec-add-button" @click="addToCart(item)">add to cart</el-button>
                        <!-- <el-button @click="stateLogin?addToCart(item):open()">add to cart</el-button> -->
                        <!-- <el-button @click="open">open</el-button> -->
                    </div>
                </div>
            </div>
            <el-dialog title="Notice" :visible.sync="centerDialogVisible" width="400px" center>
                <span>Have add to cart!</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">go on goods list</el-button>
                    <el-button type="primary" @click="centerDialogVisible=false;gotoCart()">goto cart</el-button>
                </span>
            </el-dialog>
        </div>
    </div>

</div>
</template>

<script>
import {
    mapGetters, mapMutations, mapActions
} from 'vuex'

export default {
    name: 'GoodsList',
    mounted() {
        this.getGoodsList()
    },
    // props: [
    //     'stateLogin',
    //     'cartList'
    // ],
    computed: {
        ...mapGetters({
            userLogin: 'getUserLogin',
            serverBaseUrl:'getServerBaseUrl'
        })
    },
    data() {
        return {
            centerDialogVisible: false,
            currentPriceFilter: {
                start: 0.00,
                end: 10000.00
            },
            sortPriceLevel: [
                // {start:0, end:'all'},
                {
                    start: 0.00,
                    end: 100.00
                },
                {
                    start: 100.00,
                    end: 500.00
                },
                {
                    start: 500.00,
                    end: 1000.00
                },
                {
                    start: 1000.00,
                    end: 8000.00
                },
            ],
            sortPriceUp: true,
            goodsdata: [],
            msg: 'this is goods list page'
        }
    },
    methods: {
        ...mapActions([
            'addToCartList'
        ]),
        gotoCart() {
            this.$router.push({
                path: '/cart'
            })
        },
        open() {
            this.$alert('please login', 'Notice', {
                confirmButtonText: 'OK',
                callback: action => {
                    // this.$message({
                    //     type: 'info',
                    //     message: `action: ${ action }`
                    // });
                }
            });
        },
        addToCart(item) {
            if (!this.userLogin) {
                this.open()
                console.log('!stateLogin, open alert')
                return
            }
            // this.$emit('update:cartList', this.cartList.concat(item))
            // this.$emit('cartChange')
            this.addToCartList(item)
            console.log('addToCart')
            this.centerDialogVisible = true
        },
        getSrc(name) {
            var images = require.context('@/assets/goods/', false, /\.jpg$/)
            return images('./' + name)
        },
        getGoodsList() {
            this.$http.get("/goods/list", {
                params: {
                    page: 0,
                    pageSize: 8,
                    orderFlag: true,
                    priceLevel: '4'
                }
            }).then((res) => {
                this.goodsdata = res.data
                console.log(JSON.stringify(res.data))
            })
        },
        filterAndSortGoodsList() {
            //filter
            var a = this.goodsdata.filter(
                item =>
                item.productPrice >= this.currentPriceFilter.start &&
                item.productPrice <= this.currentPriceFilter.end
            )
            // console.log(a)
            //sort
            a.sort((a, b) =>
                this.sortPriceUp ?
                a.productPrice - b.productPrice :
                b.productPrice - a.productPrice
            )
            return a;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sort-bar-header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: white;
}
 .sort-bar-header-a{
     margin: 10px;
     text-decoration: none;
 }
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.sort-bar-left {
    float: left;
    width: 15%;
    height: 500px;
    /* background-color: rgb(200, 255, 0); */
}

.sort-bar-left-ul {
    /* background-color: rgb(100, 155, 200); */
    -webkit-padding-start: 0%;
}

.sort-bar-left-li {
    list-style: none;
    margin: 10px;
}

.sort-bar-left-li a:link {
    text-decoration: none;
}

.sort-bar-left-li a:hover {
    background-color: rgb(200, 155, 0);
}

.goods-list {
    float: left;
    width: 85%;
    /* background-color: aquamarine; */
}

.flex-container {
    margin-left: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.flex-items {
    width: 250px;
    height: 370px;
    /* flex: 1; */
    margin: 10px;
    background-color: white;
}
.flex-items:hover {
    border: 1px solid red;

}
.flex-items-spec{
    margin: 5px;
    /* background-color: blueviolet; */
    display: flex;
}
.flex-items-spec-price{
    color: red;
}
.flex-items-spec-add{
    justify-content: center;
}

.flex-items-spec-add-button {
    width: 100%;
    border: 2px solid red;
}

.flex-items img {
    width: 250px;
    height: 250px;
}
</style>
