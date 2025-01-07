import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 50,     // Offset for animation trigger
      easing: 'ease-in-out', // Animation easing
      once: true,     // Run the animation only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 px-10 md:px-40 text-center relative">
      <div data-aos="fade-down">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Naphydeby's Kitchen
        </h1>
        {/* to include image */}
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <p className="text-lg md:text-2xl mb-6">
          Discover amazing content and services crafted just for you.
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="500">
        <button className="bg-white text-blue-500 hover:bg-gray-100 py-3 px-8 rounded-full font-semibold text-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
