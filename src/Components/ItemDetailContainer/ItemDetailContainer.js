import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
// import panesAPI from '../../APIrest/panesAPI';
import Loader from "../Loader";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


function ItemDetailContainer(){
    const {panID} = useParams();
    const [producto, setProducto] = useState([]);
    const [loading, isLoading] = useState(true)

    // const getData = () => {
    //   let items = panesAPI;
    //   return new Promise((resolve, reject)=>{
    //       setTimeout(()=>{
    //           resolve((items))
    //           isLoading(false)
    //       }, 1000);
    //   })
    // }

    // useEffect(()=>{
    //   async function fetchedItems(){
    //       const items = await getData();
    //       const panes = items.find((pan) => pan.id === parseInt(panID));
    //       setProducto(panes);
    //   }
    //   fetchedItems();
    // }, [panID]);

    useEffect(()=>{
      const db = getFirestore()
      const itemsCollection = query(collection(db, 'items'), where("id", "==", parseInt(panID)));
      
      getDocs(itemsCollection).then((snapshot) => {
        setProducto(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
              isLoading(false);
      })
  }, [panID])

  console.log(producto)

    return (
      <div className="ItemDetailContainer">
        {loading ? <Loader/> 
        : producto.map((pan, i) =>(
          <ItemDetail 
            key={i}
            id={pan.id}
            nombre = {pan.nombre}
            img = {pan.img}
            precio = {pan.precio}
            categoria = {pan.categoria}
            stock = {pan.stock}
            // {...producto}
        />   
        )) 
        }
      </div>
    );
  };
export default ItemDetailContainer;
