import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';

function Router() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/categoria/:cat' element={<ItemListContainer/>}></Route>
            <Route path='/:cat/:panID' element={<ItemDetailContainer/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
