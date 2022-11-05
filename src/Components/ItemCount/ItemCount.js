import './ItemCount.scss';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ItemCount({ stock, initial }) {
  const [ value, setValue ] = useState(initial);  
  console.log(value)

  function onAdd(){
      (stock) > value ? setValue(value + 1) : setValue(value + 0);
  }

  function onSubstract(){
      value !== 0 ? setValue(value - 1) : setValue(value + 0);
  }

  return (
    <div>
        <div className='itemCount'>
          <h3 className='item-title'>Stock actual: {stock}</h3>
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
