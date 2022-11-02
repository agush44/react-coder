import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';

function Router() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:cat' element={<ItemListContainer/>}/>
            <Route path='/:cat/:panID' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
