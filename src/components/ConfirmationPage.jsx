import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const ConfirmationPage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div
        className='text-center  border-l-4 border-green-500 text-green-700 p-4'
        role='alert'
      >
        <div className='thanks'>
        <h1 className='title'>Thank you!</h1>
        <p className='subTitle1'>Your order is now on it's way!</p>
        
        <button
          onClick={() => navigate('/')}
          className='inline-block mt-5 px-6 py-3 addToCart text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Go to Homepage
        </button>
        </div>
        
      </div>
   
      <img className="lemonGif mx-auto" style={{position: 'absolute', zindex: '-1'}}src={require('../lemon.GIF')}></img>
      
      </div>
  )
}
