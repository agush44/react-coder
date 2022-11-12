import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = (props) => {
  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0)

  return (
    <CartContext.Provider value = {false}>
       <Card style={{ width: '25rem' }} className="pan-card">
        <Card.Img variant="top" src={props.img} className='panes'/>
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>${props.precio}</Card.Text>
          <ItemCount stock={props.stock} initial={0} />
          <Button onClick={() => addToCart({})} variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card>
    </CartContext.Provider>
   
  )
};

export default ItemDetail;
    