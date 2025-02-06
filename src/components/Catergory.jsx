import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ categories }) => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category) =>(
            <div key={category.strCategory} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Link to={`/category/${category.strCategory}`}>
              <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-[#008000]">{category.strCategory}</h3>
              </div>
            </Link>
          </div>
          ))}
          
        </div>
    
  );
};

export default Category;


