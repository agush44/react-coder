import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { useParams } from "react-router-dom";
import PanesAPI from '../../APIrest/panesAPI';
import './ItemList.scss';

const ItemList = () => {
    // const [ filter, setFilter ] = useState('');
    const [productos, setProductos] = useState([]);
    const { cat } = useParams();

    const getData = () => {
        setTimeout(() => {
          const productos = PanesAPI;
          setProductos(productos);
        }, 2000);
      };
    
       useEffect(() => {
        getData();
       },[])
    
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
            {cat ? productos
                // .filter(f => f.nombre.includes(filter))
                .filter(f => f.categoria === cat)
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
            : productos
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
        </div>
    </div>
  )
}

export default ItemList;
