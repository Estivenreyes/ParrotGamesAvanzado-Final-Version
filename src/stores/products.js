import { defineStore } from "pinia";
import { db } from "../firebase";
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";

export const shopItem = defineStore("products", {
    state: () => ({
        products: [],
        single: [],
        id: null,
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

        async product() {
            const docRef = doc(db, "productos", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                //console.log("Document data:", docSnap.data());
                const items = {
                    id: docSnap.id,
                    title: docSnap.data().title,
                    price: docSnap.data().price,
                    type: docSnap.data().type,
                    image: docSnap.data().image,
                };
                this.single = items;
                //console.log(this.single)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        },

        async clarify() {
            const querySnapshot = await getDocs(collection(db, "product"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());

                const items = {
                    id: doc.id,
                    title: doc.data().title,
                    price: doc.data().price,
                    type: doc.data().type,
                    image: doc.data().image,
                };

                this.products.push(items);
            });
        },
        async show() {
            this.list = [];
            this.products = [];
            this.aclarando();

            console.log(this.products);

            let value;
            let ob;

            let teemp = [];

            for (let i = 0; i < localStorage.length; i++) {
                valor = localStorage.getItem(localStorage.key(i));
                ob = JSON.parse(value);

                this.products.push(ob);
            }

            for (let i = 0; i < teemp.length; i++) {
                this.productos = teemp[i];
                this.list.push(this.productos);
            }
        },
    },
});

// {
//     id: 1,
//     title: "Persona",
//     price: 27.0,
//     Units: false,
//     type: "JRPG",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: false,
//     image: "/src/assets/img/carPersona.png",
// },
// {
//     id: 2,
//     title: "God of war",
//     price: 80.0,
//     Units: false,
//     type: "Action",
//     isRecomended: true,
//     isBestSeller: true,
//     isDiscounted: false,
//     image: "/src/assets/img/carGodofwar.png",
// },
// {
//     id: 3,
//     title: "Elden Ring",
//     price: 80.0,
//     Units: false,
//     type: "OpenWorld",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: true,
//     image: "/src/assets/img/carEldennRing.png",
// },
// {
//     id: 4,
//     title: "Friday Night Funkin",
//     price: 15.0,
//     Units: false,
//     type: "Rhythm",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: false,
//     image: "/src/assets/img/carFnF.png",
// },
// {
//     id: 5,
//     title: "Omori",
//     price: 27.0,
//     Units: false,
//     type: "JRPG",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: false,
//     image: "/src/assets/img/carOmori.png",
// },
// {
//     id: 6,
//     title: "Celeste",
//     price: 18.0,
//     Units: false,
//     type: "platform",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: false,
//     image: "/src/assets/img/carCeleste.png",
// },
// {
//     id: 7,
//     title: "Hollow Night",
//     price: 20.0,
//     Units: false,
//     type: "Adventure",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: false,
//     image: "/src/assets/img/carHollow.png",
// },
// {
//     id: 8,
//     title: "Genshin Impact",
//     price: 0,
//     Units: false,
//     type: "JRPG",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: false,
//     image: "/src/assets/img/carGenshin.png",
// },
// {
//     id: 9,
//     title: "Tower of fantasy",
//     price: 0,
//     Units: false,
//     type: "JRPG",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: false,
//     image: "/src/assets/img/carTower.png",
// },
// {
//     id: 10,
//     title: "Gris",
//     price: 15.0,
//     Units: false,
//     type: "platform",
//     isRecomended: true,
//     isBestSeller: false,
//     isDiscounted: false,
//     image: "/src/assets/img/carGris.png",
// },
