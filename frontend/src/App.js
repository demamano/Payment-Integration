import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Account";
import Account from "./Account";
import Payment from "./paymentscreen";
import PaymentVerify from "./PaymentVerify";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/payment">Payment</Link>
          </li>
          <li>
            <Link to="/verification">Verification</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/verification" element={<PaymentVerify />} />
      </Routes>
    </>
  );
}

export default App;
