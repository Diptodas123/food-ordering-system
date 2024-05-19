import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const CartQuantityToggle = () => {
  return (
    <div>
      <button className='cart-quantity-toggle-button'><RemoveIcon /></button>
      <span>1</span>
      <button className='cart-quantity-toggle-button'><AddIcon /></button>
    </div>
  )
}

export default CartQuantityToggle