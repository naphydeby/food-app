import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryMeals } from '../services/api'; // Assuming you have an API call for this
import MealList from '../components/MealList';

const CategoryPage = () => {
  const { category } = useParams(); // Get category from URL params
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategoryMeals = async () => {
      setLoading(true);
      try {
        const mealsData = await getCategoryMeals(category); // Fetch meals based on category
        setMeals(mealsData || []); // Default to empty array if no data
      } catch (error) {
        console.error("Error fetching meals:", error);
        setMeals([]);
      }
      setLoading(false);
    };

    fetchCategoryMeals();
  }, [category]);

  if (loading) {
    return <p>Loading category...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">{category} </h1>
      <MealList meals={meals} /> {/* Pass the meals to MealList */}
    </div>
  );
};

export default CategoryPage;



