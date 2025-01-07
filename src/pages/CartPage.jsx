import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="text-center p-6">Your cart is empty.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((meal) => (
          <li key={meal.idMeal} className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center gap-4">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded" />
              <div>
                <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                <p className="text-gray-500">{meal.strCategory}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(meal.idMeal)}
              className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
















