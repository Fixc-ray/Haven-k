import React, { useState, useEffect } from "react";
import Front1 from "../Images/Front1.jpeg";
import LivingRoom from "../Images/LivingRoom.jpeg";

const HomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [availableRooms, setAvailableRooms] = useState(5);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [unitType, setUnitType] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkoutDate, setCheckoutDate] = useState(""); // New state for checkout date
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const unitPrices = {
    "2-bedroom": 5000,
    "1-bedroom": 3500,
    bedsitter: 2000,
  };

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

  useEffect(() => {
    if (unitType && numberOfDays > 0) {
      setTotalCost(unitPrices[unitType] * numberOfDays);
    } else {
      setTotalCost(0);
    }

    // Calculate the checkout date whenever check-in date or number of days changes
    if (checkInDate && numberOfDays > 0) {
      const checkIn = new Date(checkInDate);
      checkIn.setDate(checkIn.getDate() + numberOfDays); // Add the number of days to check-in date
      const checkout = checkIn.toISOString().split("T")[0]; // Format the checkout date (YYYY-MM-DD)
      setCheckoutDate(checkout);
    } else {
      setCheckoutDate(""); // Reset if no check-in date or number of days
    }
  }, [unitType, numberOfDays, checkInDate]);

  const handleBooking = () => {
    if (!checkInDate || !checkInTime || !unitType || numberOfDays <= 0) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setIsModalOpen(true);
  };

  const confirmBooking = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please provide a valid phone number.");
      return;
    }
    setError("");
    alert(
      `Booking confirmed! Details:
      Check-in Date: ${checkInDate}
      Check-in Time: ${checkInTime}
      Expected Checkout Date: ${checkoutDate}
      Unit Type: ${unitType}
      Number of Days: ${numberOfDays}
      Total Cost: KES ${totalCost}
      Phone Number: ${phoneNumber}`
    );
    setAvailableRooms(availableRooms - 1);
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setCheckInDate("");
    setCheckInTime("");
    setUnitType("");
    setNumberOfDays(0);
    setPhoneNumber("");
    setCheckoutDate(""); // Reset checkout date
  };

  return (
    <div>
      <div className="relative w-full h-[75vh] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${images[currentImageIndex].src})`,
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
        <h1 className="absolute md:top-8 w-full text-center text-xl md:text-4xl font-bold text-white font-Mouse">
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
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-white font-medium transition">
            {images[currentImageIndex].buttonText}
          </button>
        </div>
        </div>
      </div>

      <div className="relative mt-10 flex flex-col items-center px-4">
        {availableRooms > 0 ? (
          <>
            <div className="flex flex-wrap items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4 flex-col md:flex-row">
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold text-white mb-2">
                  Check-In Date
                </h2>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="px-4 py-2 border rounded-lg w-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold text-white mb-2">
                  Check-In Time
                </h2>
                <input
                  type="time"
                  value={checkInTime}
                  onChange={(e) => setCheckInTime(e.target.value)}
                  className="px-4 py-2 border rounded-lg w-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold text-white mb-2">Unit Type</h2>
                <select
                  value={unitType}
                  onChange={(e) => setUnitType(e.target.value)}
                  className="px-4 py-2 border rounded-lg w-full"
                >
                  <option value="">Select Unit</option>
                  <option value="2-bedroom">2-Bedroom (KES 5,000/night)</option>
                  <option value="1-bedroom">1-Bedroom (KES 3,500/night)</option>
                  <option value="bedsitter">Bedsitter (KES 2,000/night)</option>
                </select>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold text-white mb-2">
                  Number of Days
                </h2>
                <input
                  type="number"
                  min="1"
                  value={numberOfDays}
                  onChange={(e) => setNumberOfDays(Number(e.target.value))}
                  className="px-4 py-2 border rounded-lg w-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold text-white mb-2">
                  Total Cost
                </h2>
                <div className="text-white font-medium">
                  KES {totalCost || 0}
                </div>
              </div>
              {checkoutDate && (
                <div className="flex flex-col items-center">
                  <h2 className="text-lg font-bold text-white mb-2">
                    Checkout Date
                  </h2>
                  <div className="text-white font-medium">{checkoutDate}</div>
                </div>
              )}
            </div>

            <button
              onClick={handleBooking}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg text-white font-medium transition"
            >
              Book Room (Rooms Available: {availableRooms})
            </button>
          </>
        ) : (
          <div className="w-full md:w-3/4 p-4 bg-red-500 text-white text-center rounded-lg shadow-lg">
            Fully Booked
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
            <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>
            <p className="mb-2">Check-In Date: {checkInDate}</p>
            <p className="mb-2">Check-In Time: {checkInTime}</p>
            <p className="mb-2">Expected Checkout Date: {checkoutDate}</p>
            <p className="mb-2">Unit Type: {unitType}</p>
            <p className="mb-2">Number of Days: {numberOfDays}</p>
            <p className="mb-4">Total Cost: KES {totalCost}</p>

            <label className="block text-sm font-medium mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="px-4 py-2 border rounded-lg w-full mb-4"
              placeholder="Enter your phone number"
            />

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSection;
