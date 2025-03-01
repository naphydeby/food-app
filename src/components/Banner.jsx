import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import foodImg from '../assets/images/foodbanner2.jpeg'

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
    <div className="bg-cover h-[80vh] text-[#008000] flex flex-col justify-center items-center" style={{backgroundImage:`url(${foodImg})`}}>
      <div data-aos="fade-down">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          Welcome to Naphydeby's Kitchen
        </h1>
        {/* to include image */}
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <p className="text-lg md:text-2xl mb-6">
          Your Favourite Meals, Just a Tip Away.
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="500">
        <button className="bg-white text-[#008000] hover:bg-gray-100 py-3 px-8 rounded-full font-semibold text-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
