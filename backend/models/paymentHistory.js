const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    tx_ref : String,
    first_name: String,
    last_name: String,
    email: String,
    reference: String,
    amount: Number,
    currency: String,
    status: String,
    // customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Payment', paymentSchema);