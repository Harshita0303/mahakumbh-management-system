const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  ghat: { type: String, required: true },
  date: { type: Date, required: true },
  crowdDensity: { type: Number, required: true },
  riskLevel: { type: String, required: true } // Low, Medium, High
}, { timestamps: true });

module.exports = mongoose.model('Prediction', predictionSchema);
