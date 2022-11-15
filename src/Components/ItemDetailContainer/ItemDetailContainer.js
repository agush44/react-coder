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
      const itemsCollection = query(collection(db, 'items'), where("id", "==", panID));
      
      getDocs(itemsCollection).then((snapshot) => {
        setProducto(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
              isLoading(false);
              console.log(producto)
      })
  }, [panID])

    return (
      <div className="ItemDetailContainer">
        {loading ? <Loader/> 
        : <ItemDetail 
            {...producto}
        />   
        }
      </div>
    );
  };
export default ItemDetailContainer;