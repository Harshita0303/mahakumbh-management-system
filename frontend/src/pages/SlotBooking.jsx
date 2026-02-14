import { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SlotBooking = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    try {
      const res = await api.get('/slots');
      setSlots(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!selectedSlot) {
      setMessage('❌ Please select a slot');
      return;
    }

    try {
      const res = await api.post('/bookings', {
        slotId: selectedSlot._id,
        name,
        mobile
      });

      setMessage(`✅ Booking successful! Booking ID: ${res.data.bookingId}`);
      setName('');
      setMobile('');
      setSelectedSlot(null);
      fetchSlots();
    } catch (err) {
      setMessage('❌ Slot booking failed. Try again.');
    }
  };

  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <div style={{
        padding: '60px',
        background: 'linear-gradient(135deg, #060403ff, #ea580c)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1>🛕 Snan Slot Booking</h1>
        <p>Book your holy dip slot safely and avoid overcrowding</p>
      </div>

      <div className="container">

        {/* AVAILABLE SLOTS */}
        <div className="card">
          <h2>Available Slots</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {slots.map(slot => (
              <div
                key={slot._id}
                onClick={() => setSelectedSlot(slot)}
                style={{
                  border: selectedSlot?._id === slot._id
                    ? '2px solid #080604ff'
                    : '1px solid #e5e7eb',
                  padding: '20px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  background: '#fff7ed'
                }}
              >
                <h3>{slot.ghat}</h3>
                <p><b>Date:</b> {new Date(slot.date).toDateString()}</p>
                <p><b>Time:</b> {slot.time}</p>
                <p><b>Capacity:</b> {slot.capacity}</p>
                <p><b>Booked:</b> {slot.booked}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BOOKING FORM */}
        <div className="card" style={{ backgroundColor: '#fef3c7' }}>
          <h2>Book Selected Slot</h2>

          {selectedSlot && (
            <p>
              <b>Selected:</b> {selectedSlot.ghat} | {selectedSlot.time}
            </p>
          )}

          <form onSubmit={handleBooking} style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label>Mobile Number</label>
              <input
                type="text"
                value={mobile}
                required
                onChange={(e) => setMobile(e.target.value)}
                style={inputStyle}
              />
            </div>

            <button style={buttonStyle}>
              Confirm Booking
            </button>
          </form>

          {message && (
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
              {message}
            </p>
          )}
        </div>

        {/* INFO */}
        <div className="card">
          <h2>Why Slot Booking?</h2>
          <ul>
            <li>🚦 Prevent overcrowding at ghats</li>
            <li>🕊️ Ensure peaceful snan experience</li>
            <li>📊 AI-assisted crowd control</li>
            <li>🛡️ Improve public safety</li>
          </ul>
        </div>

      </div>

      <Footer />
    </>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  marginTop: '5px'
};

const buttonStyle = {
  padding: '12px 20px',
  backgroundColor: '#040302ff',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default SlotBooking;
