import React, { useState, useEffect } from 'react';

function VerifyPayment() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/verify')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Payment Verification Data</h1>
      <p>Transaction ID: {data.data.transaction.id}</p>
      <p>Transaction Reference: {data.data.transaction.tx_ref}</p>
      <p>FLW Reference: {data.data.transaction.response}</p>
      {/* display other fields as needed */}
    </div>
  );
}

export default VerifyPayment;