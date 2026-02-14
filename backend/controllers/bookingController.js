const Booking = require('../models/Booking');
const Slot = require('../models/Slot');

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('slotId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const { slotId, name, mobile } = req.body;

    // 1️⃣ Validate input
    if (!slotId || !name || !mobile) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 2️⃣ Find slot
    const slot = await Slot.findById(slotId);
    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }

    // 3️⃣ Capacity check
    if (slot.booked >= slot.capacity) {
      return res.status(400).json({ message: 'Slot is full' });
    }

    // 4️⃣ Generate booking ID
    const bookingId = "BK" + Math.floor(100000 + Math.random() * 900000);

    // 5️⃣ Save booking
    const booking = await Booking.create({
      slotId,
      name,
      mobile,
      bookingId
    });

    // 6️⃣ Update slot count
    slot.booked += 1;
    await slot.save();

    // 7️⃣ Respond
    res.status(201).json({
      message: 'Booking successful',
      bookingId
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getBookings, createBooking };
