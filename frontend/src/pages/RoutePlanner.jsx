import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RoutePlanner = () => {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [showRoute, setShowRoute] = useState(false);

  const ghats = [
    'Ram Ghat',
    'Har Ki Pauri',
    'Kaal Bhairav Ghat',
    'Triveni Ghat'
  ];

  const handleRoute = () => {
    if (start && destination) {
      setShowRoute(true);
    } else {
      alert('Please select both start and destination');
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Route Planner</h1>
        <p style={{ textAlign: 'center', color: '#475569' }}>
          Plan your journey safely with crowd-aware navigation
        </p>

        {/* ROUTE FORM */}
        <div className="card" style={{ background: '#fff7ed' }}>
          <h2>Select Your Route</h2>

          <div className="route-form">
            <select value={start} onChange={(e) => setStart(e.target.value)}>
              <option value="">Select Starting Point</option>
              {ghats.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            <select value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="">Select Destination Ghat</option>
              {ghats.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            <button className="primary-btn" onClick={handleRoute}>
              Find Safe Route
            </button>
          </div>
        </div>

        {/* ROUTE DETAILS */}
        {showRoute && (
          <div className="card" style={{ background: '#f0fdf4' }}>
            <h2>Recommended Route</h2>

            <p><b>From:</b> {start}</p>
            <p><b>To:</b> {destination}</p>

            <p><b>Estimated Distance:</b> 2.5 km</p>
            <p><b>Estimated Time:</b> 25 minutes</p>

            <span className="risk-badge low">Low Crowd Risk</span>
          </div>
        )}

        {/* MAP */}
        <div className="card" style={{ background: '#fff7ed' }}>
          <h2>Navigation Map</h2>

          <iframe
            title="map"
            width="100%"
            height="350"
            style={{ borderRadius: '12px', border: 0 }}
            src="https://www.google.com/maps?q=Ujjain&output=embed"
            allowFullScreen
          />
        </div>

        {/* FACILITIES */}
        <div className="card" style={{ background: '#fff7ed' }}>
          <h2>Nearby Facilities</h2>
          <ul>
            <li>🚑 Medical Camp – 200m</li>
            <li>🚓 Police Help Desk – 300m</li>
            <li>🚻 Public Toilets – 150m</li>
            <li>🥤 Drinking Water – 100m</li>
          </ul>
        </div>

        {/* ALERTS */}
        <div className="card" style={{ background: '#fff7ed' }}>
          <h2>Live Safety Alerts</h2>
          <p>🟠 Moderate crowd near Ram Ghat between 7–8 AM</p>
          <p>🔴 Avoid Triveni Ghat after 9 AM</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RoutePlanner;
