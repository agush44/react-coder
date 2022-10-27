// import './Home.scss';
// // import panesAPI from '../../APIrest/panesAPI';
// // import Cards from '../../Components/Home/Card/Card';
// import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';
// // import { useEffect, useState } from 'react'

// function Home() {
// //   const [ filter, setFilter ] = useState('');
// //   const [productos, setProductos] = useState([]);

// //   const getData = () => {
// //     setTimeout(() => {
// //       const productos = panesAPI;
// //       setProductos(productos);
// //     }, 1000);
// //   };

// //    useEffect(() => {
// //     getData();
// //    },[])

//   return (
//     <div className="principal_container">
//       <ItemListContainer/>
//       {/* <ItemList/> */}
//       {/* <h1 className='title'>Productos</h1>
//       <input 
//         id='filter' 
//         name='filter' 
//         type='text' 
//         value={filter} 
//         onChange={(event) => setFilter(event.target.value)}  
//       />
//       <div className='card-container'>
//         {productos.filter(f => f.nombre.includes(filter)).map((panes, i) => (
//           <Cards 
//             key={i}
//             nombre = {panes.nombre}
//             img = {panes.img}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default Home;