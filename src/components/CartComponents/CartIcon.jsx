import { useSelector } from 'react-redux'

export const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const totalItems = Object.keys(cartItems).length

  return (
  
      <span style={{background: '#075353'}}
      className='absolute top-0 right-0 inline-flex items-center justify-center px-1 text-sm font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full'>
        {totalItems}
      </span>
  
  )
}
