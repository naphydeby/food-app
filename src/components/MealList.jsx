
import React from 'react';
import { Link } from 'react-router-dom';

const MealList = ({ meals }) => {
  // Ensure meals is always an array (even if it's null or undefined)
  const safeMeals = Array.isArray(meals) ? meals : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {safeMeals.map((meal) =>(
             <div key={meal.idMeal} className="bg-white mt-4 shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
             <Link to={`/meal/${meal.idMeal}`}>
               <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover" />
               <div className="p-4">
                 <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
               </div>
             </Link>
           </div>     
                ))}
    </div>
  );
};

export default MealList;


