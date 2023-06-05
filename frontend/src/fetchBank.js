// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function BankList() {
//   const [banks, setBanks] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4400/api/banks')
//       .then(response => {
//         console.log(response.data);
//         setBanks(response.data.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>List of Banks</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Code</th>
//             <th>Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {banks.map(bank => (
//             <tr key={bank.id}>
//               <td>{bank.name}</td>
//               <td>{bank.swift}</td>
//               <td>{bank.type}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BankList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BankList() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4400/api/banks')
      .then(response => {
        console.log(response.data);
        setBanks(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ margin: '0 20px' }}>
      <h1>List of Banks</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Code</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Type</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Country</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Currency</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Routing Number</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>SWIFT Code</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Website</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {banks.map(bank => (
            <tr key={bank.id}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.id}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.name}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.acct_length}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.is_rtgs}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.country_id}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.created_at}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.updated_at}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.swift}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.active}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{bank.is_mobilemoney}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BankList;