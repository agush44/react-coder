import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../Context/CartContext"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Cart/Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import InputOrder from "../InputOrder/InputOrder";
import Swal from 'sweetalert2';

function Cart() {
  const { cart, removeItem, order } = useContext(CartContext)
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(true);

  useEffect(()=>{
    const total = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    setTotal(total);
  }, [cart, total])

  function Alert(){
    if(order === false){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        showConfirmButton: false,
        text: 'No hay productos en el carrito',
        footer: '<a href="/">Volver al inicio</a>'
      })
    }
  }


  return (
    <>
    {cart.length !== 0 ? 
      showCart ? (
        <>
          <div className="carrito">
            <Container fluid="md">
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
              </Container>
            )}
              <Container fluid="md">
                  <div className="total">Total: ${total}</div>
                  <Button className="btn-cart" onClick={()=>{
                    setShowCart(false);
              }}>Enviar orden</Button>
              </Container>
          </div>
        </>
      ) : <InputOrder total={total} setShowCart={setShowCart}/>
    : Alert()
    }
    </>
  )
}

export default Cart
