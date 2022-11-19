import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../Context/CartContext"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Cart/Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import InputOrder from "../InputOrder/InputOrder";

function Cart() {
  const { cart, removeItem } = useContext(CartContext)
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(true);
  
  useEffect(()=>{
    const total = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    setTotal(total);
  }, [cart, total])

  return (
    <>
    {showCart ? (
      <>
        <div className="carrito">
          <Container fluid="md">
            {/* <Row>
              <Col className="titulo">Nombre</Col>
              <Col className="titulo">Cantidad</Col>
              <Col className="titulo">Precio</Col>
              <Col></Col>
            </Row> */}
          </Container>
          {cart.map((item, i) => 
            <Container fluid="md" key= {i}>
               <Card className="cards">
                  <img className='img' src={item.img} alt={item.nombre}></img>
                  <p className="titulo">{item.nombre}</p>
                  <div className='cant-precio'>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: ${item.precio}</p>
                  </div>
                  <DeleteIcon onClick={() => removeItem(item)} className="trash"/>
               </Card>
              {/* <Row>
                <Col className="prod">{item.nombre}</Col>
                <Col className="prod">{item.cantidad}</Col>
                <Col className="prod">${item.precio}</Col>
                <Col><DeleteIcon onClick={() => removeItem(item)} className="trash"/></Col>
              </Row> */}
            </Container>
          )}
            <Container fluid="md">
                <div className="total">Total: ${total}</div>
                <Button className="btn-cart" onClick={()=>{
                  setShowCart(false)
            }}>Enviar orden</Button>
            </Container>
        </div>
      </>
    ) : <InputOrder total={total} setShowCart={setShowCart}/>}
    </>
  )
}

export default Cart
