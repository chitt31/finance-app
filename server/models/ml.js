// Inside kpi.js, product.js, or transaction.js, or new route files specifically for ML operations

import express from "express";
import { RandomForestRegressor, IsolationForest } from 'scikit-learn';

const router = express.Router();

// Sample data
const data = require('../data/data');

// Preprocess data
const X = data.map(({ productIds, buyer }) => [productIds.length, buyer.length]);
const y = data.map(({ amount }) => amount);

// Train predictive model
const model = new RandomForestRegressor({ n_estimators: 100 });
model.fit(X, y);

// Train anomaly detection model
const isolationForest = new IsolationForest({ contamination: 0.05 });
isolationForest.fit(X);

// Predictive analysis route
router.post('/predict', (req, res) => {
  const { productIds, buyer } = req.body;
  const X_new = [[productIds.length, buyer.length]];
  const prediction = model.predict(X_new);
  res.json({ prediction });
});

// Anomaly detection route
router.post('/detectAnomaly', (req, res) => {
  const { productIds, buyer } = req.body;
  const X_new = [[productIds.length, buyer.length]];
  const outlier = isolationForest.predict(X_new)[0] === -1;
  res.json({ isAnomaly: outlier });
});

export default router;
