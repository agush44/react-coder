import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { useParams } from "react-router-dom";
import panesAPI from '../../APIrest/panesAPI';
import './ItemList.scss';

const ItemList = () => {
    // const [ filter, setFilter ] = useState('');
    const [producto, setProducto] = useState([]);
    const { cat } = useParams();
    console.log(cat)

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
            const panes = items.filter((pan) => pan.categoria === cat);
            setProducto(panes);
        }
        fetchedItems();
      }, []);

    // const getData = () => {
    //     setTimeout(() => {
    //       const productos = PanesAPI;
    //       setProductos(productos);
    //     }, 2000);
    //   };
    
    //    useEffect(() => {
    //     getData();
    //    },[])
    
  return (
    <div>
        {/* <input 
            id='filter' 
            name='filter' 
            type='text' 
            value={filter} 
            onChange={(event) => setFilter(event.target.value)}  
         /> */}
        <div className='card-container'>
            {cat ? producto
                // .filter(f => f.nombre.includes(filter))
                // .filter(panes => panes.categoria === cat)
                .map((panes, i) => (
                    <Item 
                        key={i}
                        id={i}
                        nombre = {panes.nombre}
                        img = {panes.img}
                        precio = {panes.precio}
                        categoria = {panes.categoria}
                    />
            ))
            : producto
                // .filter(f => f.nombre.includes(filter))
                .map((panes, i) => (
                    <Item 
                        key={i}
                        id={panes.id}
                        nombre = {panes.nombre}
                        img = {panes.img}
                        precio = {panes.precio}
                        categoria = {panes.categoria}
                    />    
                ))}
                {console.log(producto)}
        </div>
    </div>
  )
}

export default ItemList;
