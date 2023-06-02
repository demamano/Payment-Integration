const router = require("express").Router();
const request = require("request");
const { v4: uuidv4 } = require("uuid");
const tx_ref = uuidv4();
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
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.json(JSON.parse.body);
      });
    } catch (error) {
      console.log(error);
    }
  });
  module.exports = router;