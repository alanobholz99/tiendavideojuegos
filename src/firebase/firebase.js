
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAShEAHSHmDO2wCOJPlIB90DBTwLFHzFRk",
  authDomain: "rect-3e557.firebaseapp.com",
  projectId: "rect-3e557",
  storageBucket: "rect-3e557.appspot.com",
  messagingSenderId: "1000521851513",
  appId: "1:1000521851513:web:a641ed463dcfaecf992aa8"
};


const app = initializeApp(firebaseConfig);

// consultar a la bdd
const bdd = getFirestore()

// nuestra idea es crear un crud
/* 
create
read
update
delete
*/

// crear productos

// se va a ejecutar en paralelo el json y la base de datos
// export const createProducts = async () => {
// const promise = await fetch("../../public/data/productos.json")
// const productos = await promise.json()
// }
// esa era una forma de hacerlo la otra es asi:


    const prods = [
        {
        
        "nombre": "Final Fantasy VII remake" ,
        "precio": 1500,
        "stock":  3,
        "img":  "https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/finalfantasy.jpg?alt=media&token=e6476927-5aa6-47e7-9cf9-00caab503d6a",
        "categoria":  "nuevos"
        },
        {
           
            "nombre": "Grid Leyends" ,
            "precio": 100,
            "stock":  31,
            "img":  "https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/gridleyend.jpg?alt=media&token=628a497d-488b-4c54-863b-e4a1cb7450f7",
        
            "categoria": "actuales"
        
        },
        {
           
            "nombre": "FIFA24" ,
            "precio": 10000,
            "stock":  17,
            "img":  "https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/fifga24.jpg?alt=media&token=91a4272e-070c-4ae7-be4d-9642fe935121",
        "categoria": "nuevos"
        },
        {
           
            "nombre": "Palword" ,
            "precio": 1500,
            "stock":  3,
            "img":"https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/palword.jpg?alt=media&token=014c1ff2-fe8a-4436-bc58-8accf7319373",
        "categoria": "nuevos"
        },
        {
            
            "nombre": "Mortal Kombat 1" ,
            "precio": 1500,
            "stock":  6,
            "img": "https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/mk1.jpg?alt=media&token=01162f32-eddd-4470-b1dc-768581c3c6fe",
        "categoria": "nuevos"
        },
        {
          
            "nombre": "UFC4" ,
            "precio": 1500,
            "stock":  4,
            "img":"https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/ufc4.jpg?alt=media&token=22713ea1-c838-4643-92ae-9df2cca4684e",
        "categoria": "actuales"
        },
        {
        
            "nombre": "The Division 2" ,
            "precio": 1500,
            "stock":  7,
            "img":"https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/theddv2.jpg?alt=media&token=24615c22-c7e5-467d-9993-340a4ea41eb6",
        "categoria": "actuales"
        },
        {
           
            "nombre": "Black Ops 3" ,
            "precio": 1500,
            "stock":  3,
            "img":"https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/blck3.jpg?alt=media&token=7cb31871-b3fa-4e4f-a52c-51dbcef52930",
        "categoria": "actuales"
        },
        {
          
            "nombre": "Remmant 2" ,
            "precio": 1500,
            "stock":  2,
            "img":"https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/remmant2.jpg?alt=media&token=e100c053-ce66-4b27-b484-6c316432a43e",
        "categoria": "nuevos"
        },
        {
            "nombre": "Ned for Speed Unbound " ,
            "precio": 1500,
            "stock":  3,
            "img":"https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/nfsun.jpg?alt=media&token=e5cf34b5-d0f2-4e36-9ae9-65674e5932b9",
            "categoria": "actuales"
        },
        {
         "nombre": " God of War Ragnarok" ,
            "precio": 1500,
            "stock":  9,
            "img":"https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/gdwr.jpg?alt=media&token=2058e11b-a8b3-4f33-b209-a2044496e2a4",
            "categoria": "nuevos"
        },
        {
            
            "nombre": "Sims 4" ,
            "precio": 1500,
            "stock":  6,
            "img":"https://firebasestorage.googleapis.com/v0/b/rect-3e557.appspot.com/o/sims4.jpg?alt=media&token=a508c01d-e9c5-4ac8-b5aa-736c63c782b8",
            "categoria": "actuales"
        }
        
        
        ]



/* lo que hago es consultar el array del json, lo recorre
y por cada uno de esos productos los guarda en firestore */
export const createProducts = async () => {
prods.forEach(async(prod) => {
    await addDoc(collection(bdd, "productos"), {

nombre: prod.nombre,
precio: prod.precio,
stock: prod.stock,
img: prod.img,
categoria: prod.categoria
    
    
    
    })
});
}


// actualizar producto
export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}



// eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}


export const getProducts = async () => {
const productos = await getDocs(collection(bdd, "productos"))
const items = productos.docs.map(prod => { return {
    ...prod.data(), id : prod.id}})

    return items
}
// consultar producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = {
        ...producto.data(), id : producto.id}
    return item
    }


    // create and read : orden de compra

    export const createOrdenCompra = async(cliente, precioTotal, carrito, fecha) => {
        const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
        
        }
        )
        return ordenCompra
    }

export const getOrdenCompra = async (id) => {
 const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id)) 
const item = {...ordenCompra.data(), id: ordenCompra.id}
return item        
}
