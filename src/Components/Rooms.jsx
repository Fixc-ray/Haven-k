import React from "react";
import Bedroom1 from "../Images/Bedroom1.jpeg";
import Bedroom2 from "../Images/2Bedroom.jpeg";
import Bedsitter from "../Images/Bedsitter.jpeg";
import About from "../Images/About.jpeg";
import Kitchen from "../Images/Kithchen.jpeg";

const Rooms = () => {
  const handleCardClick = (roomId) => {
    window.alert("Not yet implemented");
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
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${About})`, // Correctly format the background image
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative">
          <h1 className="text-3xl font-bold text-center text-white p-4">
            WHAT WE OFFER
          </h1>
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
      </div>

      <div className="flex flex-col md:flex-row items-center bg-blue-200 text-white p-6 pt-10 rounded-lg shadow-md">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={Kitchen}
            alt="Placeholder"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 md:pl-20 text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-bold font-Mate mb-4">
            The Luxury Experience You'll Remember
          </h2>
          <p className="text-base md:text-lg">
            Our apartments are designed to make your stay as comfortable and
            enjoyable as possible. You'll have access to secure and spacious
            parking, 24/7 surveillance for your peace of mind, and beautifully
            designed interiors featuring open kitchens and elegant furnishings.
            For relaxation and entertainment, head up to the rooftop pergola and
            barbecue area, where you can unwind and enjoy stunning views. Plus,
            our prime location puts you just a short drive from Kisumu
            International Airport and all the city's main attractions!
          </p>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row items-center bg-cover bg-center text-white p-6 pt-10 rounded-lg shadow-md"
        style={{ backgroundImage: `url(${About})`}}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-20">
          <h2 className="text-3xl md:text-5xl font-bold font-Mate mb-4">
            Explore Our Location
          </h2>
          <p className="text-lg">
            Our luxury apartments are conveniently located just minutes away
            from Kisumu International Airport. Whether you're here for business
            or leisure, you'll have easy access to key attractions, restaurants,
            and shopping areas.
          </p>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=your_map_link_here"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
