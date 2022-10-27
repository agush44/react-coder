import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import panesAPI from '../../APIrest/panesAPI';

function ItemDetailContainer(){
    const {panID} = useParams();
    const [producto, setProducto] = useState([]);

    const getData = () => {
      setTimeout(() => {
        const items = panesAPI;
        setProducto(items);
      }, 1000);
    };
  
     useEffect(() => {
      getData();
     },[])


    return (
      <div className="ItemDetailContainer">
        {producto
        // ESTO DA ERROR!
        .filter(pan => pan.id.includes(panID))
        .map((producto) => (
          <ItemDetail 
            nombre={producto.nombre}
            img={producto.img}
            precio={producto.precio}
            id={producto.id}
            categoria={producto.categoria}
        />   
        ))}
      </div>
    );
  };
export default ItemDetailContainer;