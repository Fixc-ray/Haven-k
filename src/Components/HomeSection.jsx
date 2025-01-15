import React, { useState, useEffect } from "react";
import Front1 from "../Images/Front1.jpeg";
import LivingRoom from "../Images/LivingRoom.jpeg";
import BookingComponent from "./Booking";

const HomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: Front1,
      title: "Enjoy Your Dream Vacation",
      description: "Peaceful retreat, Escape to tranquility",
      buttonText: "Find Our Services",
    },
    {
      src: LivingRoom,
      title: "With A Luxurious Stay In Kisumu",
      description: "Peaceful haven, Calm and quiet atmosphere",
      buttonText: "Find Our Services",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="relative w-full h-[75vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${images[currentImageIndex].src})`,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-45"></div>
        <h1 className="absolute  w-full text-center text-xl md:text-4xl font-bold text-white font-Mouse">
          HAVEN
        </h1>

        <nav className="absolute top-10 w-full bg-black bg-opacity-30 text-white px-4 md:px-8 flex items-center justify-center z-20">
          <ul className="flex space-x-4 text-sm md:text-base font-medium">
            <li>
              <a href="#home" className="hover:underline">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div className="relative z-10 flex flex-col justify-center items-start h-full text-white text-left px-4 md:px-20">
          <div className="animate-slide-in-left">
            <h1 className="text-3xl md:text-5xl font-bold font-Mate mb-4">
              {images[currentImageIndex].title}
            </h1>
            <p className="text-base md:text-xl mb-6">
              {images[currentImageIndex].description}
            </p>
            <button className="px-6 py-3 bg-yellow-500 hover:bg-Yellow-600 rounded-lg shadow-lg text-white font-medium transition">
              {images[currentImageIndex].buttonText}
            </button>
          </div>
        </div>
      </div>
      
      <BookingComponent />

      <div className="bg-blue-500 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">What Our Guests Are Saying</h2>

        <div className="flex items-start mb-6">
          {/* User Avatar */}
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />

          {/* Review Content */}
          <div>
            <p className="font-semibold text-lg">John Doe</p>
            <p className="text-gray-200">
              "This was an incredible stay! The apartments were clean, modern,
              and very comfortable. The location was perfect and made it easy to
              explore Kisumu. Highly recommend!"
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          {/* User Avatar */}
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />

          {/* Review Content */}
          <div>
            <p className="font-semibold text-lg">Jane Smith</p>
            <p className="text-gray-200">
              "The perfect getaway! The rooftop pergola had amazing views, and I
              felt very secure with the 24/7 surveillance. Would definitely stay
              again!"
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          {/* User Avatar */}
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />

          {/* Review Content */}
          <div>
            <p className="font-semibold text-lg">Mark Robinson</p>
            <p className="text-gray-200">
              "An amazing experience overall! The staff were friendly, and the
              amenities were top-notch. The apartment had everything I needed
              for a comfortable stay."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
