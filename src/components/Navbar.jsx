import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/images/naphydeby.png'

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/"><img className='w-12 h-12' src={logo} alt="" /></Link>
        <div className="flex gap-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/search" className="text-white">Search</Link>
          <Link to="/cart" className="text-white">Cart ({cart.length})</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




