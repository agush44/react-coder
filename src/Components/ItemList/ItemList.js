import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { useParams } from "react-router-dom";
// import panesAPI from '../../APIrest/panesAPI';
import './ItemList.scss';   
import Loader from '../Loader';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemList = () => {
    // const [ filter, setFilter ] = useState('');
    const [producto, setProducto] = useState(<Loader/>);
    const [loading, isLoading] = useState(true);
    const { cat } = useParams();

    // const getData = () => {
    //     let items = panesAPI;
    //     return new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             resolve((items))
    //             isLoading(true)
    //         }, 2000);
    //     })
    //   }
  
    //   useEffect(()=>{

    //     async function fetchedItems(){
    //         const items = await getData();
    //         setProducto(items);
    //     }
    //     fetchedItems();
    //   }, [cat]);

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = cat ? query(collection(db, 'items'), where("categoria", "==", cat)) : collection(db, 'items'); 

        getDocs(itemsCollection).then((snapshot) => {
            setProducto(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
            isLoading(false);
        })
    }, [cat])


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
                
                {loading ? <Loader/>
                            : producto
                                // .filter(f => f.nombre.includes(filter))
                                // .filter((panes) => panes.categoria === cat)
                                .map((panes, i) => (
                                    <Item 
                                        key={i}
                                        id={panes.id}
                                        nombre = {panes.nombre}
                                        img = {panes.img}
                                        precio = {panes.precio}
                                        categoria = {panes.categoria}
                                    />
                            ))
                }
        </div>
    </div>
  )
}

export default ItemList;
