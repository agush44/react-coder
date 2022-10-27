import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import panesAPI from '../../APIrest/panesAPI';
import { getProductById } from "../../APIrest/panesAPI";

function ItemDetailContainer(){
    const {panID} = useParams();
    const [producto, setProducto] = useState([]);
    const [id, setId] = useState({});

    const getData = () => {
      setTimeout(() => {
        const items = panesAPI;
        setProducto(items);
      }, 1000);
    };
  
     useEffect(() => {
      getData();
      setId(getProductById(panID));
     },[])


    return (
      <div className="ItemDetailContainer">
      {panID}
        {panID}
        {producto
        .filter(pan => pan.id.includes(id))
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