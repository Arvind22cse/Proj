import React, { useState } from 'react';
import './Calu.css';

const Calu = () => {
  const today = new Date();
  const currentDate = {
    month: today.getMonth(),
    year: today.getFullYear(),
  };

  const [currentMonth, setCurrentMonth] = useState(currentDate.month);
  const [currentYear, setCurrentYear] = useState(currentDate.year);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookings, setBookings] = useState({}); // To store bookings
  const [name, setName] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Function to generate days for the calendar
  const generateCalendar = (month, year) => {
    const firstDay = (new Date(year, month)).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    const calendarDays = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {  // Calendar has a max of 6 rows
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < (firstDay === 0 ? 6 : firstDay - 1)) {
          week.push(null);
        } else if (day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      calendarDays.push(week);
    }

    return calendarDays;
  };

  // Handle month change, limiting to the current and next month
  const changeMonth = (offset) => {
    let newMonth = currentMonth + offset;
    let newYear = currentYear;

    if (newMonth < currentDate.month && newYear === currentDate.year) {
      return; // Prevent going before the current month
    } else if (newMonth > currentDate.month + 1 && newYear === currentDate.year) {
      return; // Prevent going beyond next month
    }

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Handle date selection
  const selectDate = (day) => {
    setSelectedDate(`${day}-${currentMonth + 1}-${currentYear}`);
  };

  // Handle form submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }

    const newBookings = { ...bookings };

    if (!newBookings[selectedDate]) {
      newBookings[selectedDate] = [];
    }

    newBookings[selectedDate].push({ name, timeSlot, status: 'registered' }); // Example default status: 'registered'
    setBookings(newBookings);
    setName('');
    setTimeSlot('');
  };

  // Function to determine the status of the date (registered, free, or waiting)
  const getStatus = (day) => {
    const dateKey = `${day}-${currentMonth + 1}-${currentYear}`;
    if (bookings[dateKey]) {
      return bookings[dateKey][0].status; // Returning first status found for simplicity
    }
    return 'free'; // Default status
  };

  // Render booked slots
  const renderBookings = () => {
    const slots = [];

    for (const [date, bookingsList] of Object.entries(bookings)) {
      bookingsList.forEach(booking => {
        slots.push(
          <li key={`${date}-${booking.timeSlot}`}>
            {date} - {booking.name} - {booking.timeSlot} ({booking.status})
          </li>
        );
      });
    }

    return slots;
  };

  return (
    <div className="container">
      {/* Calendar Section */}
      <div className="calendar-section">
        <div className="month">
          <button className="prev" onClick={() => changeMonth(-1)}>&#10094;</button>
          <span className="month-title">{monthNames[currentMonth]} {currentYear}</span>
          <button className="next" onClick={() => changeMonth(1)}>&#10095;</button>
        </div>

        <table className="calendar">
          <thead>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
          <tbody>
            {generateCalendar(currentMonth, currentYear).map((week, i) => (
              <tr key={i}>
                {week.map((day, j) => {
                  const status = day ? getStatus(day) : null;
                  return (
                    <td key={j} onClick={() => day && selectDate(day)}
                      className={day && `${day}-${currentMonth + 1}-${currentYear}` === selectedDate ? 'selected' : ''}>
                      {day || ''}
                      {/* Adding colored dot for status */}
                      {/* {day && (
                        <div className={`status-dot ${status}`}></div>
                      )} */}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Section */}
      <div className="booking-section">
        <h3>Book Seminar Hall</h3>
        
          <button type="submit" className='but'>Book Now</button>
        

       
       
      </div>
    </div>
  );
};

export default Calu;
