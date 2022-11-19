import Card from 'react-bootstrap/Card';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ nombre, img, stock, precio, id }) => {
  const { addToCart, stockDeProducto } = useContext(CartContext);
  const nuevoStock= stockDeProducto(id);

  const agregarProd = (cantidad) => {
    const prodAAgregar = {
      id, 
      img,
      nombre, 
      stock,
      precio,
      cantidad
    }
    if(cantidad > 0){
      addToCart(prodAAgregar, cantidad)
      console.log(prodAAgregar)
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
            <ItemCount stock={nuevoStock !== undefined ? nuevoStock : stock} initial={1} agregarProd={agregarProd}/>
          </Card.Body>
      </Card>
  )
};

export default ItemDetail;
    