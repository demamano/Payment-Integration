const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require("cors");
const paymentRoutes = require("./routes/payment");
const subaccounts = require("./routes/account");
const verify = require("./routes/verify");
const bankRouter = require('./routes/banks');


// initialize app
const app = express();

// enviroment variables
dotenv.config();

// middlewares 
app.use(express.json());
app.use(cors());
app.use('/api',bankRouter);
app.use("/api/payment",paymentRoutes);
app.use('/api/subaccounts', subaccounts);
// connect to mongodb
// mongo_pa  == 0BN29tn3KMFoJBT2
mongoose.connect(process.env.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// app listening
const port = process.env.PORT || 4400;
app.listen(port,()=>console.log(`listening on port ${port}..`));


