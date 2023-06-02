const router = require("express").Router();
const request = require("request");
const { v4: uuidv4 } = require("uuid");
const mongoose = require('mongoose');
const Payment = require('./../models/paymentHistory');
// const Customer = require('./../models/customer');
const { json } = require("express");
const tx_ref = uuidv4();
console.log(tx_ref);
router.post("/initialize/orders", async (req, res) => {
  try {
    const {
      key,
      amount,
      currency,
      email,
      first_name,
      last_name,
      phone_number,
      callback_url,
      return_url,
    } = req.body;
    
    const options = {
      method: "POST",
      url: "https://api.chapa.co/v1/transaction/initialize",
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key,
        amount,
        currency,
        email,
        first_name,
        last_name,
        phone_number,
        tx_ref,
        callback_url,
        //   return_url,
        "customization[title]": "Payment for my favourite merchant",
        "customization[description]": "I love online payments.",
        "subaccounts[id]": "1c98dafb-a0dc-4d1b-a08d-dc3bfe996b9c",
      }),
    };
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      const data = JSON.parse(body).data;
      res.json({ checkoutUrl: data.checkout_url });
    });
  } catch (error) {
    console.log(error);
  }
});
// 
// payment verify

router.get("/verify", async (req, res) => {
  try {
    var request = require("request");
    var options = {
      method: "GET",
      url: `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      //   https://checkout.chapa.co/checkout/test-payment-receipt/APAqop5avZGC5
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
      },
    };
    request(options, async function (error, response)  {
      if (error) throw new Error(error);
      console.log(response.body);
      // res.json(JSON.parse.body);
      // const paymentDetails = res.json(JSON.parse.body);
      const paymentDetails = JSON.parse(response.body);
      const payment = new Payment(paymentDetails.data);
      await payment.save();

      res.json(paymentDetails);
    
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
