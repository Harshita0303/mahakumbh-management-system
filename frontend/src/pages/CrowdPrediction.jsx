import { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CrowdPrediction = () => {
  const [crowdCount, setCrowdCount] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getRiskColor = (risk) => {
    if (risk === 'High') return '#fee2e2';
    if (risk === 'Medium') return '#fff7ed';
    return '#ecfdf5';
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setError('');
    setPrediction(null);

    if (!crowdCount || crowdCount <= 0) {
      setError('Please enter a valid crowd count');
      return;
    }

    try {
      setLoading(true);

      // 🔥 POST request to Node backend
      const res = await api.post('/predictions', {
        crowdCount: Number(crowdCount)
      });

      setPrediction(res.data);
    } catch (err) {
      console.error(err);
      setError('Prediction failed. ML service not reachable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <div
        style={{
          padding: '60px',
          background: 'linear-gradient(135deg, #020617, #ea580c)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <h1>🚨 Crowd Risk Prediction</h1>
        <p>AI-powered stampede risk analysis using real-time crowd density</p>
      </div>

      <div className="container">

        {/* INPUT FORM */}
        <div className="card" style={{ backgroundColor: '#f8fafc' }}>
          <h2>Enter Crowd Details</h2>

          <form onSubmit={handlePredict}>
            <div style={{ marginBottom: '15px' }}>
              <label>Crowd Count</label>
              <input
                type="number"
                value={crowdCount}
                onChange={(e) => setCrowdCount(e.target.value)}
                placeholder="Enter estimated number of people"
                style={inputStyle}
              />
            </div>

            <button style={buttonStyle}>
              Predict Risk
            </button>
          </form>

          {error && (
            <p style={{ color: '#dc2626', marginTop: '10px' }}>
              {error}
            </p>
          )}
        </div>

        {/* LOADING */}
        {loading && (
          <p style={{ textAlign: 'center', marginTop: '30px' }}>
            🔍 Analyzing crowd data...
          </p>
        )}

        {/* RESULT */}
        {prediction && (
          <div
            className="card"
            style={{
              marginTop: '30px',
              backgroundColor: getRiskColor(prediction.riskLevel)
            }}
          >
            <h2>Prediction Result</h2>

            <p>
              <b>Crowd Count:</b> {crowdCount}
            </p>

            <p>
              <b>Risk Level:</b>{' '}
              <span style={{ fontWeight: 'bold' }}>
                {prediction.riskLevel}
              </span>
            </p>
          </div>
        )}

        {/* SAFETY INFO */}
        <div className="card" style={{ marginTop: '40px', background: '#fefce8' }}>
          <h2>Safety Advisory</h2>
          <ul>
            <li>🟢 Low Risk – Normal movement allowed</li>
            <li>🟠 Medium Risk – Controlled entry recommended</li>
            <li>🔴 High Risk – Avoid entry & follow admin instructions</li>
          </ul>
        </div>

      </div>

      <Footer />
    </>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #cbd5f5',
  marginTop: '5px'
};

const buttonStyle = {
  padding: '12px 25px',
  backgroundColor: '#020617',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px'
};

export default CrowdPrediction;
