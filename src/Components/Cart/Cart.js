import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Cart/Cart.scss'

function Cart() {
  const { cart, addToCart, removeItem, clear } = useContext(CartContext)
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const total = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    
    setTotal(total);
    console.log(cart)

  }, [cart, total])

  return (
    <div className="carrito">
      <Container fluid="md">
        <Row>
          <Col className="titulo">Nombre</Col>
          <Col className="titulo">Cantidad</Col>
          <Col className="titulo">Precio</Col>
          <Col className="titulo">Total: ${total}</Col>
        </Row>
      </Container>
      {cart.map((item, i) => 
        <Container fluid="md" key= {i}>
          <Row>
            <Col className="prod">{item.nombre}</Col>
            <Col className="prod">{item.cantidad}</Col>
            <Col className="prod">${item.precio}</Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </div>
  )
}

export default Cart
