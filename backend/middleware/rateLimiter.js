const rateLimiter = (req, res, next) => {
  // TODO: implement request rate limiting
  next();
};

module.exports = rateLimiter;
