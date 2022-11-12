import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../Components/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:cat' element={<ItemListContainer/>}/>
            <Route path='/:cat/:panID' element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
