const axios = require('axios');

const getPrediction = async (req, res) => {
  try {
    const { crowdCount } = req.body;

    if (!crowdCount) {
      return res.status(400).json({ error: 'crowdCount is required' });
    }

    // Call Flask ML service
    const response = await axios.post(
      'http://127.0.0.1:5001/predict',
      { crowdCount }
    );

    res.json(response.data);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'ML service not reachable' });
  }
};

module.exports = { getPrediction };
