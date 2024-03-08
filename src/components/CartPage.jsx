import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { CartPageItemCard } from './CartPageItemCard'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export const CartPage = () => {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items)

  const getTotalPrice = () => {
    return Object.values(cartItems)
      .reduce(
        (total, item) => total + item.quantity * item.data.sellingPrice,
        0
      )
      .toFixed(2)
  }

  if (Object.keys(cartItems).length === 0) {
    return (
      <div className='mt-5'>
        <h2 className='subTitle text-center pt-5 mt-5'>Your cart is empty...</h2>
      </div>
    )
  }

  return (
    <div>
      <div className='pt-5'>
        <div className='max-w-5xl mx-auto px-5'>
        </div>
        <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
          <div className='rounded-lg md:w-2/3'>
            <div>
              {Object.values(cartItems).map((item, idx) => {
                return <CartPageItemCard key={idx} item={item} />
              })}
            </div>
          </div>
          <div className='mt-6 h-full rounded-lg border cartCard p-6 shadow-md md:mt-0 md:w-1/3'>
            <div className='flex justify-between'>
              <p className='text-lg font-bold'>Total</p>
              <div className=''>
                <p className='mb-1 text-lg font-bold'>${getTotalPrice()}</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className='checkoutBtn mt-6 w-full rounded-md py-1.5 font-medium'
            >
              Check out
            </button>
         
          </div>
        </div>
      </div>
    </div>
  )
}
