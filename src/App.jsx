
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MealDetailsPage from './pages/MealDetailsPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import CartProvider from './context/CartContext';
import CategoryPage from './pages/CategoryPage';
import CuisinePage from './pages/CuisinePage';
const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/meal/:idMeal" element={<MealDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/cuisine/:cuisine" element={<SearchPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;









