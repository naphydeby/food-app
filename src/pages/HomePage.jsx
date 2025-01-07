import React, { useEffect, useState } from 'react';
import { getCategories, getAreas,  getRandomMeals } from '../services/api';
import MealList from '../components/MealList'
import Category from '../components/Catergory';
import Banner from '../components/Banner';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await getCategories();
      const areasData = await getAreas();
      setCategories(categoriesData);
      setAreas(areasData);
      const mealPromises = Array(8).fill(null).map(() => getRandomMeals());
      const fetchedMeals = (await Promise.all(mealPromises)).flat();
      setRandomMeals(fetchedMeals);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await getCategories(); // Fetch categories
      setCategories(categoriesData || []);

      // Optionally fetch random meals as well
      const fetchedMeals = await getRandomMeals();
      setRandomMeals(fetchedMeals || []);
    };

    fetchData();
  }, []);

  return (
    
    <div className="container mx-auto p-6">
      <Banner/>
      <div>
      <h1 className="text-2xl font-bold mt-6 text-center">Latest Meals</h1>
        <MealList meals={randomMeals} />
      </div>
      <h1 className="text-2xl font-bold mt-12 text-center">Explore Meals</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <Category categories={categories}/>
      
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cuisines</h2>
        <div className="flex flex-wrap gap-4">
          {areas.map((area) => (
            <button
              key={area}
              className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600"
            >
              {area}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;





