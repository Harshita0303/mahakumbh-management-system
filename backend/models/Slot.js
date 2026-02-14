const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  ghat: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  capacity: { type: Number, required: true },
  booked: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Slot', slotSchema);
