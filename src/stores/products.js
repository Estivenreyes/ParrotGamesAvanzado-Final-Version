import { defineStore } from "pinia";
export const shopItem = defineStore("products", {
    state: () => ({
        products: [
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 30.0,
                Units: false,
                type: "Action",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 13.0,
                Units: false,
                type: "Rhythm",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: true,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
            {
                id: 1,
                title: "Persona",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carPersona.png",
            },
        ],

        localStorageProduct: [],
    }),

    getters: {
        getProducts: (state) => [...state.products],
    },

    actions: {
        newProduct(product) {
            this.localStorageProducts.push(product);
            this.products.push(product);
            localStorage.setItem("products", JSON.stringify(this.localStorageProducts));
        },

        loadProducts() {
            this.localStorageProducts = JSON.parse(localStorage.getItem("products"));
            this.products = this.products.concat([...this.localStorageProducts]);
        },

        filterlower() {
            this.product.sort((a, b) => {
                return a - b;
            });
        },
    },
});
