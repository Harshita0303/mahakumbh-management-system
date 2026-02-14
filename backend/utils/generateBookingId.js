const generateBookingId = () => {
  return 'BK' + Math.floor(Math.random() * 1000000);
};

module.exports = generateBookingId;
