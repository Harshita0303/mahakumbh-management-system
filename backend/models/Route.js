const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  fromGhat: { type: String, required: true },
  toGhat: { type: String, required: true },
  distance: { type: Number, required: true }, // km
  estimatedTime: { type: Number, required: true } // minutes
}, { timestamps: true });

module.exports = mongoose.model('Route', routeSchema);
