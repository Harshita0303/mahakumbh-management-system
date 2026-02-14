const authMiddleware = (req, res, next) => {
  // TODO: validate JWT token
  next();
};

module.exports = authMiddleware;
