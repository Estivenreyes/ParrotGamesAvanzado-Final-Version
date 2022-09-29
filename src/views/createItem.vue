<script>
    import{ mapStores} from "pinia";
    import { shopItem } from "../stores/products";

    export default{
        components: {
        },
        information(){
            return{
                title: "",
                price: "",
                units: "",
                sort: "",
                description: "",
                imgUrl: "null",
            };
        },

        computed: {
            ...mapStores(shopItem),
        },
        
        methods: {
            createNewProduct(){
                const newProduct ={
                    title: this.title,
                    price: this.price,
                    units: this.units,
                    sort: this.sort,
                    description: this.description,
                    imgUrl: this.imgUrl
                };

                this.productsStore.newProduct(newProduct);

                this.title ='';
                this.price ='';
                this.units ='';
                this.sort ='';
                this.description ='';
            },

            readImage(e){
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);

                reader.addEventListener("load",()=>{this.imgUrl = reader.result});
            },
        }
    }
</script>
<template>
    <div></div>
    <section class="create">
        <div class="create__item">
            <form id="form" class="create__content">
                <label for="title" class="item__title">Title</label>
                <input type="text" id="title" class="create__input" v-model="title">

                <label for="price" class="item__price">Price</label>
                <input type="number" id="price" class="create__input2" v-model="price">

                <label for="units" class="item__price">Units available</label>
                <input type="number" id="units" class="create__input2" v-model="units">

                <label for="tags" class="item__title">sort</label>
                <select name="sort" id="tags" class="create__input" v-model="sort">
                    <option value="Action">Action</option>
                    <option value="JRPG">JRPG</option>
                    <option value="Rhythm">Rhythm</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Open world">Open world</option>
                    <option value="platform">Platform</option>
                </select>

                <label for="description" class="create__description">Description</label>
                <input type="text" cols="40" rows="5"  id="description" class="create__input" v-model="description">
                
                <div class="create__c2">
                    <figure class="create__photo">
                    <img class="create__photos" src="../assets/img/imgicon.png" alt="">
                    </figure>

                    <label for="img" class="create__img">Select your image</label>
                    <input type="file" id="img" class="create__images" multiple="multiple" @change="readImage">
                </div>

                <button type="submit" class="create__upload" @click="(e)=> createNewProduct()">Public</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
    $blue: #1569DB;
    $gray: #2E2E2E;
    $nav: #232323;

    body {
        background-color: $nav;
    }
    .create{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-family: satoshi;
        margin-left: 200px;
        font-size: 1.2em;
        width: 80%;
        height: 100%;
        padding: 160px;
        color: white;
        background-color: #434343;
        box-shadow: 0px 9px 20px 1px rgba(0, 0, 0, 0.25);
    }
    .create__item{
        display: flex;
        text-align: space-around;
    }

    .create__content{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .item__title{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px 0px;
    }

    .create__input{
        border-radius: 5px;
        padding: 10px 0px;
        outline: none;
        border: none;
    }

    .create__images{
        padding: 10px 0px
    }

    .create__upload{
        background-color:$blue;
        width: 50%;
        color: white;
        padding: 10px 0px;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

</style>