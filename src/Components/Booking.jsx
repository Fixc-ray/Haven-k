import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingComponent = () => {
  const [availableRooms, setAvailableRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`https://haven-backenf.onrender.com/rooms`);
        console.log(response.data); // Debug log to inspect the response
        setAvailableRooms(response.data.rooms || response.data); // Adjust for response format
      } catch (err) {
        console.error(err);
      }
    };
    
    
    fetchRooms();
  }, []);

  const handleBooking = async () => {
    if (!checkInDate || !checkoutDate || !selectedRoom || !phoneNumber || !userName || !userEmail) {
      setError("Please fill in all fields.");
      return;
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkoutDate);

    if (checkIn >= checkOut) {
      setError("Checkout date must be after check-in date.");
      return;
    }

    setError("");

    try {
      const response = await axios.post(`https://haven-backenf.onrender.com/book-room`, {
        user_name: userName,
        user_email: userEmail,
        phone_number: phoneNumber,
        room_id: selectedRoom,
        start_date: checkInDate,
        end_date: checkoutDate,
      });
      alert(response.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">Book a Room</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200 focus:outline-none"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200 focus:outline-none"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <select
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200 focus:outline-none"
            onChange={(e) => setSelectedRoom(e.target.value)}
          >
            <option value="">Select a Room</option>
            {availableRooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.room_type} - Room {room.room_number} (ksh{room.price_per_night}/night)
              </option>
            ))}
          </select>                                                    

          <input
            type="date"
            placeholder="Check-in Date"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200 focus:outline-none"
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <input
            type="date"
            placeholder="Checkout Date"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200 focus:outline-none"
            onChange={(e) => setCheckoutDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-200 focus:outline-none"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            onClick={handleBooking}
            className="w-full px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg focus:ring focus:ring-blue-300 focus:outline-none transition"
          >
            Book Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
