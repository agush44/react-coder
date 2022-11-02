import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
// import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    return (
        <div className='itemListContainer'>
            <ItemList/>     
        </div>
    )      
}

export default ItemListContainer;
