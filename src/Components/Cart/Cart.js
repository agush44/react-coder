import { useContext, useState, useEffect } from "react"
import CartContext from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cart() {
  const { cart, addToCart, removeItem, clear } = useContext(CartContext)
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    
    const total = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    
    setTotal(total);

  }, [cart, total])

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>Nombre</Col>
          <Col>Cantidad</Col>
          <Col>Precio</Col>
          <Col>Total</Col>
        </Row>
      </Container>
      {cart.map((item) => 
        <Container fluid="md">
          <Row>
            <Col>{item.nombre}</Col>
            <ItemCount stock={item.stock} />
            <Col>${item.precio}</Col>
          </Row>
        </Container>
      )}
    </div>
  )
}

export default Cart
