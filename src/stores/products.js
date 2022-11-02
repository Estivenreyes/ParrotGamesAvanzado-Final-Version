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
                id: 2,
                title: "God of war",
                price: 80.0,
                Units: false,
                type: "Action",
                isRecomended: true,
                isBestSeller: true,
                isDiscounted: false,
                image: "/src/assets/img/carGodofwar.png",
            },
            {
                id: 3,
                title: "Elden Ring",
                price: 80.0,
                Units: false,
                type: "OpenWorld",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: true,
                image: "/src/assets/img/carEldennRing.png",
            },
            {
                id: 4,
                title: "Friday Night Funkin",
                price: 15.0,
                Units: false,
                type: "Rhythm",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carFnF.png",
            },
            {
                id: 5,
                title: "Omori",
                price: 27.0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carOmori.png",
            },
            {
                id: 6,
                title: "Celeste",
                price: 18.0,
                Units: false,
                type: "platform",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carCeleste.png",
            },
            {
                id: 7,
                title: "Hollow Night",
                price: 20.0,
                Units: false,
                type: "Adventure",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carHollow.png",
            },
            {
                id: 8,
                title: "Genshin Impact",
                price: 0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carGenshin.png",
            },
            {
                id: 9,
                title: "Tower of fantasy",
                price: 0,
                Units: false,
                type: "JRPG",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carTower.png",
            },
            {
                id: 10,
                title: "Gris",
                price: 15.0,
                Units: false,
                type: "platform",
                isRecomended: true,
                isBestSeller: false,
                isDiscounted: false,
                image: "/src/assets/img/carGris.png",
            },
        ],
        id: null,
        localStorageProducts: [],

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

        productG(id) {
            const filteredProducts = this.products.filter((product) => id.toLowerCase() === product.name.toLowerCase());
            return filteredProducts
                ? {
                      ...filteredProducts[0],
                  }
                : null;
        },

        filterlower() {
            this.product.sort((a, b) => {
                return a - b;
            });
        },
    },
});
