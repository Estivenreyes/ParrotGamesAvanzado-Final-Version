<script>
    import{
        mapStores
    } from "pinia";
    import{
        shopItem
    }from "../stores/products.js";
    export default{
        data(){
            return{
                out:[],
                sortby: 'default',
                gender: '',
                discount: null 
            };
        },
        name: 'App',

        computed: {
            ...mapStores(shopItem),

            items(){
                let filterItems= this.productsStore.getProducts;
                if(this.sortby =="lower"){
                    filterItems = filterItems.sort((a, b) => {
                
                        return a.price - b.price;});
                }
                if(this.sortby =="highest"){
                    filterItems = filterItems.sort((a, b) => {
                
                        return b.price - a.price;});
                }

                if (this.gender != "") {
                    filterItems = filterItems.filter(item => item.type == this.gender);
                }
                if (this.discount) {
                    console.log(filterItems)
                    filterItems = filterItems.filter(item => item.isDiscounted == true);
                }
                return filterItems;
            },
        },

        mounted(){
            this.out = this.items;
            this.productsStore.loadProducts();
        },
    }
</script>
<template>
    <section class="section__banner">
        <figure class="section--fig">
            <img class="figure--img" src="../assets/img/bannershop.png" alt="banner">
        </figure>
    </section>

    <section class="products">
        <div class="products__content">
            <h1 class="products__title">Participate in thematic forums of your favorite games.</h1>
            <div class="products__filter">
                <h2 class="products__subtitle">Find your product</h2>
                <input type="text" class="products__search" placeholder="Search">
                
                <div class="products__select">
                    <p class="products__text">Price</p>
                    <select name="filter" class="product__hl" id="lowertohighest" v-model="sortby">
                        <option value="highest">highest to lower</option>
                        <option value="lower">lower to highest</option>
                    </select>
                </div>

                <div class="products__select">
                    <p class="products__text">sort</p>
                    <select name="filter" class="product__hl" id="lowertohighest" v-model="gender">
                        <option value="">All</option>
                        <option value="Action">Action</option>
                        <option value="JRPG">JRPG</option>
                        <option value="Rhythm">Rhythm</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Open world">Open world</option>
                        <option value="platform">platform</option>
                    </select>
                    <div class="products__select">
                    <button class="product__button" v-on:click="discount = !discount">Discount</button>
                </div>
                </div>

               
            </div>
        </div>
        
    </section>

    <section class="products__cards" id="products">
        <div class="Card">
            <RouterLink v-for="product in items" :key="product.name" :to="`/productView/${product.name}`" class="yes">
                    <div class="Card__content">
                        <img :src='product.image' alt="preview" class="Card__img">
                        <h2 class="Card--h2">{{ product.name }}</h2>
                        <p class="Card--text">{{ product.price}}</p>
                        <p class="Card--text">{{ product.type}}</p>
                        <button class="Card--button">Buy</button>
                    </div>

                </RouterLink>
        </div>
    </section>
</template>

<style lang="scss">
    
    $blue: #1569DB;
    $blue2: #0045A4;
    $gray: #2E2E2E;
    $nav: #232323;
    
    body{
        background-color: $gray;
        font-family: satoshi;
        color: white;
    }

    .section__banner{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        padding-top: 250px;
    }

    .products{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .products__content{
       display: flex;
       flex-wrap: wrap;
       flex-direction: column;
       padding: 50px;
    }
    .products__title{
        text-align: center;
        font-size: 1.7em;
        padding: 50px;
    }

    .products__filter{
        align-content: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 50px 100px;
    }

    .products__subtitle{
        text-align: start;
        font-size: 1.7em;
        font-weight: bold;
        padding: 20px 0px;
    }

    .products__search{
        width: 100%;
        padding: 20px 30px;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }

    .products__select{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 1.5em;
        width: 15%;
        padding: 25px 10px;
    }

    .product__button{
        padding: 10px 45px;
        border-radius: 5px;
        color: white;
        background-color: $blue;
        cursor: pointer;
        border: none;
        outline: none;
    }

    .Card{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }
    .Card__content{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    .Card--button{
        color: white;
        background-color: $blue;
        padding: 10px 45px;
        border-radius: 5px;
        outline: none;
        border: none;
    }
    .Card--text{
        display: flex;
        width: 20%;
        font-size: 1.5em;
        color: white;
    }
    
</style>