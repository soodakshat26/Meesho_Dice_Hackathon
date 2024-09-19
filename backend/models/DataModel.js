const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  productId: { type: String, required: true },
  salesVolume: { type: Number, required: true },
  revenue: { type: Number, required: true },
  discountRate: { type: Number, required: true },
  // Add other fields as needed
});

const DataModel = mongoose.model('Data', DataSchema);

module.exports = DataModel;
