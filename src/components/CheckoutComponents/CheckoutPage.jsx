import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../features/cart/cartSlice'

export const CheckoutPage = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const navigate = useNavigate()

  const getTotalPrice = () => {
    return Object.values(cartItems)
      .reduce(
        (total, item) => total + item.quantity * item.data.sellingPrice,
        0
      )
      .toFixed(2)
  }

  const saveOrderToLocal = (order) => {
    // Retrieve existing orders from localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
  
    // Add the new order to the array of orders
    orders.push(order);
  
    // Save the updated orders back to localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
  }
  

  const handleSubmit = () => {
    const order = {
      items: Object.values(cartItems).map((item) => ({
        idDrink: item.data.idDrink,
        strDrink: item.data.strDrink,
        strDrinkThumb: item.data.strDrinkThumb,
        priceToMake: item.data.priceToMake,
        quantity: item.quantity,
        sellingPrice: item.data.sellingPrice,
        totalPrice: item.quantity * item.data.sellingPrice,
      })),
      total: getTotalPrice(),
      createdAt: new Date(),
    }

    saveOrderToLocal(order);
    dispatch(clearCart());
    navigate('/confirmation', { state: { ...order } });
  }

  return (
    <div className='mx-auto orderBox'>

      <div className='max-w-5xl px-5 mx-auto my-10gap-4'>
        <div className=' px-6 '>
          <h2 className='title text-2xl font-semibold mb-4'>Review Your Order</h2>
         
          <div className='divide-y divide-gray-200 orderContent'>
            
            {Object.values(cartItems).map((item) => (
              <div
                key={item.data.idDrink}
                className='flex justify-between items-center py-4'
              >
                <div className='flex items-center'>
                  <img
                    src={item.data.strDrinkThumb}
                    alt={item.data.strDrink}
                    className='h-20 w-20 object-cover rounded-md mr-4'
                  />
                  <div>
                    <div className='font-medium'>
                      {item.data.strDrink}
                    </div>
                    <div className='text-sm'>
                      Quantity: {item.quantity}
                    </div>
                  </div>
                </div>
                <div className='text-lg font-medium '>
                  ${(item.quantity * item.data.sellingPrice).toFixed(2)}
                </div>
              </div>
            ))}
             <div className='text-right font-bold mt-4 pt-3'>
            Total: ${getTotalPrice()}
          </div><br></br>
          <button
          onClick={handleSubmit}
          type='submit'
          className='orderBtn text-center mx-auto'
        >
          Place Order
        </button>
         
        
          </div>
        </div>
       
        <div>
      
      </div>
      
       
      </div>
      
    </div>
  )
}
