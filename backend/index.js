const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const paymentRoutes = require("./routes/payment");
const subaccounts = require("./routes/account");

// initialize app
const app = express();

// enviroment variables
dotenv.config();

// middlewares 
app.use(express.json());
app.use(cors());
app.use("/api/payment",paymentRoutes);

app.use('/api/subaccounts', subaccounts);

// app listening
const port = process.env.PORT || 4400;
app.listen(port,()=>console.log(`listening on port ${port}..`));


