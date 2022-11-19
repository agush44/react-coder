import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import './InputOrder.scss'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import 'animate.css';

function InputOrder({ total, setShowCart }) {
    const { cart, clear } = useContext(CartContext);
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [className, setClassName] = useState("mail-hidden")
    const [mailConfirmacion, setMailConfirmacion] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        const order = {
          buyer: { 
            name: name, 
            phone: phone, 
            email: mail
        },
          item: cart,
          total: total,
        }
        
        if(mail !== mailConfirmacion){
            setClassName("mail")
        }else{
            setClassName("mail-hidden")
            const db = getFirestore();
            const ordersCollection = collection(db, "ordersCollection");
            addDoc(ordersCollection, order).then(({ id }) => 
                Swal.fire({
                    title: "Orden enviada!",
                    text: `Nro de orden ${id}`,
                    showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                    },
                })
            ).then(() => 
            navigate("/"),
            )
            clear()   
        }
    }   

  return (
    <div>
        <div className="global-container">
            <div className="card login-form">
                <div className='cancel'>
                    <button className='btn-cancel' onClick={()=>{
                            setShowCart(true);
                        }    
                    }>
                          <CloseIcon/>
                    </button>
                </div>
                <div className="card-body">
                    <h3 className="card-title text-center">Ingresa tus datos</h3>
                    <div className="card-text">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className='label'>Nombre y apellido</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputName" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label className='label'>Teléfono</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label className='label'>Email</label>
                                <input onChange={(e) => setMail(e.target.value)} type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="form-group">
                                <label className='label'>Confirmar Email</label>
                                <input onChange={(e) => setMailConfirmacion(e.target.value)} type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div className={className}>
                                <p>Los mails ingresados no coinciden</p>
                            </div>
                            <div className='btn-container'>
                                <button type='submit' className="btn btn-primary btn-block" >Enviar orden</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputOrder
