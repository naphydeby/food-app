// CuisinePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMeals } from '../services/api'; // Reuse searchMeals or create a specific function

const CuisinePage = () => {
  const { cuisine } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCuisineMeals = async () => {
      setLoading(true);
      const cuisineMeals = await searchMeals(cuisine); // Assuming searchMeals works for this
      setMeals(cuisineMeals);
      setLoading(false);
    };
    fetchCuisineMeals();
  }, [cuisine]);

  if (loading) return <p>Loading...</p>;
  if (meals.length === 0) return <p>No meals found for {cuisine}.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">{cuisine} Cuisine</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link to={`/meal/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisinePage;
