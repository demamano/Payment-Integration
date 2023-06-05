const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/banks", (req, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.chapa.co/v1/banks",
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
      },
      timeout: 5000,
    };
    request(options, async function (error, response) {
      if (error) throw new Error(error);
      // console.log(JSON.parse(response.body));
      const bankDetails = JSON.parse(response.body);
      res.json(bankDetails);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
