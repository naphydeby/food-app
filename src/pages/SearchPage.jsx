
import React, { useState } from 'react';
import { searchMeals } from '../services/api';
import MealList from '../components/MealList';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    const searchedMeals = await searchMeals(query);
    setMeals(searchedMeals);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Search Meals</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for meals..."
          className="border border-gray-300 rounded-l px-4 py-2 w-2/3"
        />
        <button
          onClick={handleSearch}
          className="bg-[#008000] text-white px-4 py-2 rounded-r shadow hover:bg-[#008000]"
        >
          Search
        </button>
      </div>
      {meals.length > 0 ? <MealList meals={meals} /> : <p>No meals found.</p>}
    </div>
  );
};

export default SearchPage;

