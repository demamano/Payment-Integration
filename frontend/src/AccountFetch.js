import React, { useEffect, useState } from 'react';
import axios from 'axios';
function AccountFetch() {
  const [subaccounts, setSubaccounts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4400/api/subaccounts')
      .then(response => {
        console.log(response.data);
        setSubaccounts(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ margin: '0 20px' }}>
      <h1>List of Subaccounts</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {subaccounts.map(subaccount => (
          <div key={subaccount._id} style={{ flex: '0 0 33.33%', maxWidth: '33.33%', padding: '10px' }}>
            <div style={{ border: '1px solid black', padding: '10px' }}>
              <p>Business Name: {subaccount.business_name}</p>
              <p>Account Name: {subaccount.account_name}</p>
              <p>Bank Code: {subaccount.bank_code}</p>
              <p>Account Number: {subaccount.account_number}</p>
              <p>Split Value: {subaccount.split_value}</p>
              <p>Split Type: {subaccount.split_type}</p>
              <p>Subaccount ID: {subaccount.subaccount_id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountFetch;