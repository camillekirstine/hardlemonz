import { useDispatch } from 'react-redux'
import {
  incrementQuantityAsync,
  decrementQuantityAsync,
  deleteFromCartAsync,
} from '../features/cart/cartSlice'
import { useState } from 'react'
import { ConfirmationDialog } from './ConfirmationDialog'

export const CartPageItemCard = ({ item }) => {
  const dispatch = useDispatch()
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleIncrement = (idDrink) => {
    dispatch(incrementQuantityAsync(idDrink))
  }

  const handleDecrement = () => {
    if (item.quantity === 1) {
      setShowConfirmation(true)
    } else {
      dispatch(decrementQuantityAsync(item.data.idDrink))
    }
  }

  const confirmDeletion = () => {
    dispatch(deleteFromCartAsync(item.data.idDrink))
    setShowConfirmation(false)
  }

  const cancelDeletion = () => {
    setShowConfirmation(false)
  }

  const getTotalItemPrice = () => {
    return (item.quantity * item.data.sellingPrice).toFixed(2)
  }

  return (
    <div className='cartCard justify-between mb-6 rounded-lg p-6 shadow-md sm:flex sm:justify-start relative'>
      <img
        className='rounded-md'
        src={item.data.strDrinkThumb}
        alt={item.data.strDrink}
        style={{ width: '100px' }}
      />
      <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
        <div className='mt-5 sm:mt-0'>
          <h2 className='text-lg font-bold text-gray-900'>
            {item.data.strDrink}
          </h2>
          <p className='mt-1 text-xs text-gray-700'>
            {item.data.strInstructions}
          </p>
        </div>
        <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
          <div className='flex justify-center'>
            <p className='text-sm'>${getTotalItemPrice()}</p>
          </div>
          <div className='flex items-center border-gray-100'>
            <button
              onClick={() => handleDecrement(item.data.idDrink)}
              className='cursor-pointer rounded-l py-1 px-3.5 duration-100'
            >
              -
            </button>
            <p className='px-3'>{item.quantity}</p>
            <button
              onClick={() => handleIncrement(item.data.idDrink)}
              className='cursor-pointer rounded-r  py-1 px-3 duration-100'
            >
              +
            </button>
          </div>
        </div>
        <div className='absolute top-1 right-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
            onClick={() => setShowConfirmation(true)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
      </div>
      {showConfirmation && (
        <ConfirmationDialog
          open={showConfirmation}
          onConfirm={confirmDeletion}
          onCancel={cancelDeletion}
          message={'Are you sure you want to delete the item from your cart?'}
        />
      )}
    </div>
  )
}
