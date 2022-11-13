import './ItemCount.scss';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import toast, { Toaster } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';

function ItemCount({ stock, initial, agregarProd }) {
  const [ value, setValue ] = useState(initial);  

  function onAdd(){
      if(stock > value){
        setValue(value + 1)
      }else{
        setValue(value + 0)
        toast.error('Sin stock')
      }
  }

  function onSubstract(){
      if(value !== 0){
        setValue(value - 1)
      }else{
        setValue(value + 0)
      }
  }

  return (
    <div>
        <div><Toaster
        position="bottom-right"
        reverseOrder={false}
        /></div>
        <div className='itemCount'>
          <div className='container-btn'>
            <button className='btn-count' onClick={onSubstract}><RemoveIcon fontSize='small'/></button>
            <h4 className='value-count'>{value}</h4>
            <button className='btn-count' onClick={onAdd}><AddIcon fontSize='small'/></button>
            <Button onClick={() => agregarProd(value)} variant="primary">Agregar al carrito</Button>
          </div>
          <p className='item-title'>Unidades disponibles: {stock}</p>
        </div>
    </div>
  )
}

export default ItemCount
