import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Account";
import Account from "./Account";
import Payment from "./paymentscreen";
import PaymentVerify from "./PaymentVerify";
import BankList from "./fetchBank";
import AccountFetch from "./AccountFetch";
function App() {
  return (
    <>
       <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="block lg:hidden h-8 w-auto"
                src="/logo.svg"
                alt="Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Account
              </Link>
              <Link
                to="/payment"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Payment
              </Link>
              <Link
                to="/verification"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Verification
              </Link>
              <Link
                to="/banks"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Banks
              </Link>
              <Link
                to="/subaccounts"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                subaccount
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/verification" element={<PaymentVerify />} />
        <Route path="/banks" element={<BankList />} />
        <Route path="/subaccounts" element={<AccountFetch />} />



      </Routes>
    </>
  );
}

export default App;
