// MealDetailsPage.js (Updated to include Add to Cart and Links)
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const MealDetailsPage = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      setMeal(response.data.meals[0]);
    };
    fetchMealDetails();
  }, [idMeal]);

  if (!meal) return <p>Loading meal details...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{meal.strMeal}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full md:w-1/2 rounded" />
        <div>
          
          <h3 className="text-lg font-semibold mb-4">
            Cuisine: <Link to={`/cuisine/${meal.strArea}`} className="text-blue-500 underline">{meal.strArea}</Link>
          </h3>
          <p className="mb-4">{meal.strInstructions}</p>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">Watch Video</a>
          <button
            onClick={() => addToCart(meal)}
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 ml-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetailsPage;



