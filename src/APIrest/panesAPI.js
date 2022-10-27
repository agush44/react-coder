const panesAPI = [
    {
        id: 1,
        nombre: "Pan de campo",
        precio: 650,
        stock: 20,
        img: "../img/pan-de-campo2.jpeg",
        categoria: "Pan de campo"
    },
    {
        id: 2,
        nombre: "Pan de campo con nuez",
        precio: 700,
        stock: 20,
        img: "../img/pan-de-campo2.jpeg",
        categoria: "Pan de campo"
    },
    {
        id: 3,
        nombre: "Pan lactal",
        precio: 700,
        stock: 25,
        img: "../img/pan-lactal.jpeg",
        categoria: "Pan lactal"
    },
    {
        id: 4,
        nombre: "Focaccia con cebolla morada y cherry",
        precio: 750,
        stock: 20,
        img: "../img/focaccia.jpeg",
        categoria: "Focaccia"
    },
    {
        id: 5,
        nombre: "Focaccia con queso gouda y cebolla morada",
        precio: 750,
        stock: 20,
        img: "../img/focaccia.jpeg",
        categoria: "Focaccia"
    },
    {
        id: 6,
        nombre: "Pan de campo y focaccia para picada",
        precio: 750,
        stock: 30,
        img: "../img/focaccia.jpeg",
        categoria: "Focaccia, Pan de campo"
    }
]

export const getProductById = (id) =>{
    return panesAPI[id];
  }

export default panesAPI;
