const Slot = require('../models/Slot');
const Booking = require('../models/Booking');
const Prediction = require('../models/Prediction');

const getDashboardStats = async (req, res) => {
  try {
    const totalSlots = await Slot.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const highRiskPredictions = await Prediction.countDocuments({ riskLevel: 'High' });

    res.json({ totalSlots, totalBookings, highRiskPredictions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getDashboardStats };
