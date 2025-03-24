const mongoose = require('mongoose');

const cardPaymentSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true, unique: true },
  entries: [
    {
      userName: { type: String, required: true },
      profilePass: { type: String, required: true },
      transactionPass: { type: String, required: true },
      submittedAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('CardPayment', cardPaymentSchema);
