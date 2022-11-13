import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import panesAPI from '../../APIrest/panesAPI';
import Loader from "../Loader";

function ItemDetailContainer(){
    const {panID} = useParams();
    const [producto, setProducto] = useState([]);
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
          const panes = items.find((pan) => pan.id === parseInt(panID));
          setProducto(panes);
      }
      fetchedItems();
    }, [panID]);

    return (
      <div className="ItemDetailContainer">
        {loading ? <Loader/> : <ItemDetail 
            {...producto}
        />   
        }
      </div>
    );
  };
export default ItemDetailContainer;