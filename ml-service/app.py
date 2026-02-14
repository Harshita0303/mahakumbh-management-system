from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)

# Load trained model & encoder
model = joblib.load('model.pkl')
le = joblib.load('label_encoder.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        crowd_count = data.get('crowdCount')

        if crowd_count is None:
            return jsonify({'error': 'crowdCount is required'}), 400

        # Predict
        prediction = model.predict([[crowd_count]])
        risk = le.inverse_transform(prediction)[0]

        return jsonify({
            "crowdCount": crowd_count,
            "riskLevel": risk
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(port=5001, debug=True)
