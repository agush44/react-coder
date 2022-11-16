import Card from 'react-bootstrap/Card';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import Cart from '../Cart/Cart';

const ItemDetail = ({ nombre, img, stock, precio, id }) => {
  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0)

  const agregarProd = (cantidad) => {
    const prodAAgregar = {
      id, 
      nombre, 
      stock,
      precio,
      cantidad
    }
    if(cantidad > 0){
      addToCart(prodAAgregar, cantidad)
      console.log(prodAAgregar)
      console.log(cantidad) 
    }
  }

  return (
       <Card style={{ width: '25rem' }} className="pan-card">
          <Card.Img variant="top" src={img} className='panes'/>
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>${precio}</Card.Text>
            <ItemCount stock={stock} initial={cantidad} agregarProd={agregarProd}/>
            {cantidad}
          </Card.Body>
      </Card>
  )
};

export default ItemDetail;
    