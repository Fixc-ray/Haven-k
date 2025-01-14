import React from "react";
import Bedroom1 from "../Images/Bedroom1.jpeg"; // Add your images here
import Bedroom2 from "../Images/2Bedroom.jpeg";
import Bedsitter from "../Images/Bedsitter.jpeg";

const Rooms = () => {
  const handleCardClick = (roomId) => {
    window.alert("not yet implemented");
  };

  const rooms = [
    {
      id: 1,
      image: Bedroom1,
      title: "1 Bedroom",
      description: "Spacious and comfortable living room for relaxation.",
    },
    {
      id: 2,
      image: Bedroom2,
      title: "2 Bedroom",
      description: "A cozy bedroom with modern decor and comfort.",
    },
    {
      id: 3,
      image: Bedsitter,
      title: "Single Room",
      description: "A fully equipped kitchen to cook and enjoy meals.",
    },
  ];

  return (
    <div className="bg-gray-600">
      <h1 className="text-3xl font-bold text-center text-white p-4">WHAT WE OFFER</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(room.id)}
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white p-4">
              <div className="text-center">
                <h2 className="text-xl font-bold">{room.title}</h2>
                <p className="mt-2">{room.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
