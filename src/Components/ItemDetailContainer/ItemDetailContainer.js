import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import panesAPI from '../../APIrest/panesAPI';
import Loader from "../Loader";

function ItemDetailContainer(){
    const {panID} = useParams();
    const [producto, setProducto] = useState(<Loader/>);
    const [loading, isLoading] = useState(true)

    const getData = () => {
      let items = panesAPI;
      return new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve((items))
              isLoading(false)
          }, 1000);
      })
    }

    useEffect(()=>{
      async function fetchedItems(){
          const items = await getData();
          const panes = items.filter((pan) => pan.id === Number(panID));
          setProducto(panes);
      }
      fetchedItems();
    }, [panID]);

    return (
      <div className="ItemDetailContainer">
        {loading ? producto : 
        producto
        .map((panes) => (
          <ItemDetail 
            key={panes.id}
            nombre={panes.nombre}
            img={panes.img}
            precio={panes.precio}
            categoria={panes.categoria}
            stock={panes.stock}
        />   
        ))}
      </div>
    );
  };
export default ItemDetailContainer;