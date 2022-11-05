import './ItemCount.scss';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ItemCount({ stock, initial }) {
  const [ value, setValue ] = useState(initial);  
  const [ cantidad, setCantidad ] = useState(stock)

  function onAdd(){
      if(stock > value){
        setValue(value + 1)
        setCantidad(cantidad - 1)
      }else{
        setValue(value + 0)
      }
  }

  function onSubstract(){
      if(value !== 0){
        setValue(value - 1)
        setCantidad(cantidad + 1)
      }else{
        setValue(value + 0)
      }
  }

  return (
    <div>
        <div className='itemCount'>
          <h3 className='item-title'>Stock actual: {cantidad}</h3>
          <div className='container-btn'>
            <button className='btn-count' onClick={onSubstract}><RemoveIcon fontSize='small'/></button>
            <h4 className='value-count'>{value}</h4>
            <button className='btn-count' onClick={onAdd}><AddIcon fontSize='small'/></button>
          </div>
        </div> 
    </div>
  )
}

export default ItemCount
