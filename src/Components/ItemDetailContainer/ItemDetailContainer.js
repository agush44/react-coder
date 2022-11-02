import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import panesAPI from '../../APIrest/panesAPI';

function ItemDetailContainer(){
    const {panID} = useParams();
    const [producto, setProducto] = useState([]);

    const getData = () => {
      let items = panesAPI;
      return new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve((items))
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
    }, []);

    return (
      <div className="ItemDetailContainer">
        {producto
        .map((panes) => (
          <ItemDetail 
            key={panes.id}
            nombre={panes.nombre}
            img={panes.img}
            precio={panes.precio}
            categoria={panes.categoria}
        />   
        ))}
      </div>
    );
  };
export default ItemDetailContainer;