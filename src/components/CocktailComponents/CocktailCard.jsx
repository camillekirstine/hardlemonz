import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const CocktailCard = ({ cocktail }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    dispatch(addToCart(cocktail))
    toast.success('The cocktail was added to your cart!')
  }
  return (
    <div className='max-w-sm rounded overflow-hidden h-full shadow-lg cursor-pointer relative group'>
      <img
        
        className='w-full'
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <h3 className='cardTitle'>{cocktail.strDrink}</h3>
        <ul>
          <li>{cocktail.strIngredient1}</li>
          <li>{cocktail.strIngredient2}</li>
          <li>{cocktail.strIngredient3}</li>
        </ul>
        <p className='cardPrice pb-2'>Price: ${cocktail.sellingPrice}</p>
        <button
          className='addToCart font-bold py-1 px-4 rounded mb-2 w-full'
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        
      </div>
    </div>
  )
}

export default CocktailCard
