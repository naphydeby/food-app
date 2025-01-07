
import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

// Fetch categories
export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}categories.php`);
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Fetch areas (regions)
export const getAreas = async () => {
  try {
    const response = await axios.get(`${BASE_URL}list.php?a=list`);
    return response.data.meals.map((meal) => meal.strArea);
  } catch (error) {
    console.error("Error fetching areas:", error);
    return [];
  }
};

// Fetch random meals
export const getRandomMeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}random.php`);
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching random meals:", error);
    return [];
  }
};

// Fetch meals by category
export const getCategoryMeals = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error(`Error fetching meals for category ${category}:`, error);
    return [];
  }
};



// Search meals by query
export const searchMeals = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}search.php?s=${query}`);
    return response.data.meals || [];
  } catch (error) {
    console.error("Error searching meals:", error);
    return [];
  }
};


