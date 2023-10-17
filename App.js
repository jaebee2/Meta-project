// App.js
import React, { useState } from 'react';
import BookingForm from 'BookingForm';

const App = () => {
  const [bookings, setBookings] = useState([]);

  const handleBookTable = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div>
      <h1>Little Lemon Restaurant</h1>
      {/* Your existing content */}
      <BookingForm onBookTable={handleBookTable} />
      <h2>Bookings:</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.name} - {booking.date} - {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
