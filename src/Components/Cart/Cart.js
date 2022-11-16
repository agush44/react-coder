import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Cart/Cart.scss'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const { cart, addToCart, removeItem, clear } = useContext(CartContext)
  const [total, setTotal] = useState(0);

  const sendOrder = () =>{
    const order = {
      buyer: { name: "Agustina", phone: 111, email: "dfds@gmail.com"},
      item: cart,
      total: total,
    }

    const db = getFirestore();

    const ordersCollection = collection(db, "ordersCollection");
    order.item.length !== 0 ?
    addDoc(ordersCollection, order).then(({ id }) => 
      toast.success('Orden enviada!')
      )
      : toast.error("No hay productos en el carrito")
  }

  useEffect(()=>{
    const total = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    
    setTotal(total);
    console.log(cart)

  }, [cart, total])

  return (
    <div className="carrito">
      <div><Toaster/></div>
      <div><Toaster/></div>
      <Container fluid="md">
        <Row>
          <Col className="titulo">Nombre</Col>
          <Col className="titulo">Cantidad</Col>
          <Col className="titulo">Precio</Col>
          <Col></Col>
        </Row>
      </Container>
      {cart.map((item, i) => 
        <Container fluid="md" key= {i}>
          <Row>
            <Col className="prod">{item.nombre}</Col>
            <Col className="prod">{item.cantidad}</Col>
            <Col className="prod">${item.precio}</Col>
            <Col><DeleteIcon onClick={() => removeItem(item)} className="trash"/></Col>
          </Row>
        </Container>
      )}
      <Container fluid="md">
            <div className="total">Total: ${total}</div>
            <Button className="btn-cart" onClick={()=>{sendOrder()}}>Enviar orden</Button>
        </Container>
    </div>
  )
}

export default Cart
