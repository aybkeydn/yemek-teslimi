import React, { useState } from 'react';
import { BiCart, BiMinus, BiPlus } from "react-icons/bi";
import { useCart } from "../../context/CartContext";

const FoodSingleCard = ({ food }) => {
    const { addToCart, removeFromCart, cartItems } = useCart();

    const itemInCart = cartItems.find(item => item._id === food._id);

    const quantity = itemInCart ? itemInCart.quantity : 0;


    const handleAddToCart = () => {
        addToCart(food);
    }

    const handleRemoveFromCart = () => {
        removeFromCart(food._id);
    }

  return (
    <div className='border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl m-4 bg-yellow-100 relative'>
    <img className='object-cover w-full h-56 lg:h-72' src={food.image} alt={food.name} />
    <div className='p-4 flex flex-col justify-between'>
        <h2 className='text-lg lg:text-xl font-bold text-gray-800 text-center'>{food.name}</h2>
        <div className='flex justify-between items-center mt-4 bg-yellow-200 p-2 rounded-b-lg'>
            <span className='text-lg font-semibold text-gray-700'>${(food.priceInCents / 100).toFixed(2)}</span>
            <button onClick={handleAddToCart} className='flex items-center justify-center bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded'>
                <BiPlus className='text-xl mr-1' />
                <span>Ekle</span>
            </button>
        </div>
    </div>
</div>

  )
}

export default FoodSingleCard