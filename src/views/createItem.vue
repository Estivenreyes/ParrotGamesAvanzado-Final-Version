<script>
    import{ mapStores} from "pinia";
    import { shopItem } from "../stores/products";
    // import { storage } from "../firebaseconf"

    // const ref = storage.ref();

    export default{
        components: {
        },
        information(){
            return{
                // image: [],
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

            // clickImage(e){
            //     this.imgUrl = e.target.files[0];
            //     console.log(this.imgUrl)
            // },

            // uploadImage(){
            //     const refImg = ref.child("products/"+this.imgUrl.name)
            //     const metadata = {contetType: 'img/jpeg'};
            //     refImg.put(this.imgUrl, metadata)
            //     .then(e => console.log(e))
            // }
        }
    }
</script>
<template>
    <div class="container">
        <section class="create">
        <div class="create__item">
            <form @submit.prevent="uploadImage" id="form" class="create__content">
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
                <div class="create__btn">
                    <button type="submit" class="create__upload" @click="(e)=> createNewProduct()">Public</button>
                </div>
            </form>
        </div>
    </section>
    </div>
</template>

<style lang="scss">
    $blue: #1569DB;
    $gray: #2E2E2E;
    $nav: #232323;

    body {
        background-color: $nav;
    }

    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 150px;
    }

    .create{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-family: satoshi;
        border-radius: 25px;
        font-size: 1.2em;
        width: 50%;
        padding: 50px;
        color: white;
        background-color: #434343;
        justify-content: center;
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
        padding: 15px 0px;
        outline: none;
        border: none;
        border-radius: 5px;
        font-size: 1em;
        font-weight: bold;
        font-family: Poppins;
        cursor: pointer;
    }

    .create__photos{
        display: flex;
        padding-top: 50px;
        padding-block-end: 20px;
    }

    .create__photo{
        display: flex;
        justify-content: center;
    }
    .create__btn{
        display: flex;
        justify-content: center;
        padding: 10px;
    }

</style>