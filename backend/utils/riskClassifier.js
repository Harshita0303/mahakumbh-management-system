const riskClassifier = (crowdDensity) => {
  if (crowdDensity < 50) return 'Low';
  if (crowdDensity < 200) return 'Medium';
  return 'High';
};

module.exports = riskClassifier;
