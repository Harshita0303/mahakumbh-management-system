import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    slots: 0,
    bookings: 0,
    predictions: 0
  });

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchStats();
    loadAlerts();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await api.get('/admin/stats');
      setStats(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadAlerts = () => {
    setAlerts([
      { level: 'High', message: 'Overcrowding detected at Ram Ghat' },
      { level: 'Medium', message: 'Moderate crowd near Har Ki Pauri' },
      { level: 'Low', message: 'Normal conditions at Triveni Ghat' }
    ]);
  };

  const getAlertColor = (level) => {
    if (level === 'High') return '#dc2626';
    if (level === 'Medium') return '#f59e0b';
    return '#16a34a';
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Admin Monitoring Dashboard</h1>
        <p style={{ color: '#475569' }}>
          Real-time monitoring & crowd safety control panel
        </p>

        {/* STATS */}
        <div className="admin-grid">
          <div className="stat-card blue">
            <h2>{stats.slots}</h2>
            <p>Total Snan Slots</p>
          </div>

          <div className="stat-card green">
            <h2>{stats.bookings}</h2>
            <p>Total Bookings</p>
          </div>

          <div className="stat-card purple">
            <h2>{stats.predictions}</h2>
            <p>AI Predictions</p>
          </div>
        </div>

        {/* CROWD STATUS */}
        <div className="card">
          <h2>Crowd Risk Overview</h2>

          <div className="risk-summary">
            <span className="risk low">Low Risk Zones</span>
            <span className="risk medium">Medium Risk Zones</span>
            <span className="risk high">High Risk Zones</span>
          </div>
        </div>

        {/* ALERTS */}
        <div className="card">
          <h2>Live Safety Alerts</h2>

          {alerts.map((a, i) => (
            <div
              key={i}
              className="alert-item"
              style={{ borderLeft: `6px solid ${getAlertColor(a.level)}` }}
            >
              <b>{a.level} Risk:</b> {a.message}
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="card">
          <h2>Administrative Actions</h2>

          <ul>
            <li>🚨 Block overcrowded routes</li>
            <li>🛑 Temporarily close ghats</li>
            <li>📢 Issue public safety announcements</li>
            <li>📊 Monitor live analytics</li>
          </ul>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;
