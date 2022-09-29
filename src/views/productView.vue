<script>
    import{ mapStores} from "pinia";
    import { shopItem } from "../stores/products";

    export default{
        data(){
            return{current:{}};
        },

        computed:{
            ...mapStores(shopItem),
        },

        mounted(){
            this.productsStore.loadProducts();
            this.current = this.productsStore.productG(
                this.$route.params.productId
            );
        }
    }
</script>

<template>
    <section class="view__section">
        <div class="view__content">
            <figure class="view__fig">
                <img :src=this.current.image alt ="preview" class="view__img">
            </figure>
            <div class="view__info">
                <p class="r">{{$route.params.productId}}</p>
                <p class="information">{{this.current.description}}</p>
                <p class="title">Title</p>
                <p class="information">{{this.current.type}}</p>
                <p class="title">Price</p>
                <p class="information">{{this.current.price}}</p>
                <p class="title">Units available</p>
                <p class="information">{{this.current.isDiscounted}}</p>
                <button class="buy">Buy</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    
</style>