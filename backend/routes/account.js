const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { business_name, account_name, bank_code, account_number, split_value, split_type } = req.body;

    const response = await axios.post(
      'https://api.chapa.co/v1/subaccount',
      {
        business_name,
        account_name,
        bank_code,
        account_number,
        split_value,
        split_type,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json(response.data);
    console.log(response.data);
    // res.status.json("successfully created");
    // res.status(200).json({ subaccountId: response.data.id });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating subaccount' });
  }
});

module.exports = router;