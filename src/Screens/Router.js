import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../Components/Cart/Cart';
import { CartProvider } from  '../Context/CartContext';

function Router() {
  return (
    <BrowserRouter>
        <NavBar/>
        <CartProvider>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:cat' element={<ItemListContainer/>}/>
              <Route path='/:cat/:panID' element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>} />
          </Routes>
      </CartProvider>  
    </BrowserRouter>
  )
}

export default Router;
