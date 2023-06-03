const mongoose = require('mongoose');

const subaccountSchema = new mongoose.Schema({
    subaccount_id:{
        type:String,
        required: true,

    },
  business_name: {
    type: String,
    required: true,
  },
  account_name: {
    type: String,
    required: true,
  },
  bank_code: {
    type: String,
    required: true,
  },
  account_number: {
    type: String,
    required: true,
  },
  split_value: {
    type: Number,
    required: true,
  },
  split_type: {
    type: String,
    required: true,
  },
});

const Subaccount = mongoose.model('Subaccount', subaccountSchema);

module.exports = Subaccount;