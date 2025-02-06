import React, { useEffect, useState } from 'react';
import { getLatestMeals } from '../services/api';  
import MealList from '../components/MealList';

const LatestPage = () => {
  const [latestMeals, setLatestMeals] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchLatestMeals = async () => {
      try {
        setLoading(true);
        const mealsData = await getLatestMeals(); 
        setLatestMeals(mealsData);
        setLoading(false); 
      } catch (err) {
        setError('Failed to fetch latest meals');
        setLoading(false);
      }
    };
    fetchLatestMeals();
  }, []);

  if (loading) {
    return <p className="text-center p-6">Loading latest meals...</p>; 
  }

  if (error) {
    return <p className="text-center p-6 text-red-500">{error}</p>; 
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center ">Latest Meals</h1>
      <MealList meals={latestMeals} /> 
    </div>
  );
};

export default LatestPage;
