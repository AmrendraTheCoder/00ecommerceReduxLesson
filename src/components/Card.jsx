import React from 'react'
import { useSelector } from 'react-redux'
import { getItemSelector } from '../redux/slice/CartSlice'

function Cart() {
  const items = useSelector( getItemSelector )
  const total = items.reduce((a,b) => a + b.price, 0)
  console.log(items)
  return (
    <div className='alert alert-success'>
      <h3 className='text-center fixed'> 
      Total Items: {items.length} (Rs. {total})/-
      </h3>
    </div>
  )
}

export default Cart