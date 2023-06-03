// import React, { useState, useEffect } from 'react';

// const PaymentTable = () => {
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4400/api/payment/data')
//       .then(res => res.json())
//       .then(data => setPayments(data));
//   }, []);
//   const date = new Date('2023-06-02T17:15:29.000Z');

// const formattedDate = date.toLocaleString('en-US', {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric'
// });

// console.log(formattedDate);


//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Transaction Reference</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           <th>Reference</th>
//           <th>Amount</th>
//           <th>Currency</th>
//           <th>Status</th>
//           <th>Created At</th>
//           <th>Updated At</th>
//         </tr>
//       </thead>
//       <tbody>
//         {payments.map(payment => (
//           <tr key={payment._id}>
//             <td>{payment.tx_ref}</td>
//             <td>{payment.first_name}</td>
//             <td>{payment.last_name}</td>
//             <td>{payment.email}</td>
//             <td>{payment.reference}</td>
//             <td>{payment.amount}</td>
//             <td>{payment.currency}</td>
//             <td>{payment.status}</td>
//             <td>{new Date(payment.created_at).toLocaleString()}</td>
//             <td>{new Date(payment.updated_at).toLocaleString()}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default PaymentTable;

import React, { useState, useEffect } from 'react';

const PaymentTable = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4400/api/payment/data')
      .then(res => res.json())
      .then(data => setPayments(data));
  }, []);

  return (
    <div className="mx-4">
      <table className="w-full overflow-x-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Tx Ref</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">First Name</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Last Name</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Email</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Reference</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Amount</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Currency</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Status</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Created At</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment._id}>
              <td className="px-4 py-2 border border-gray-400">{payment.tx_ref}</td>
              <td className="px-4 py-2 border border-gray-400">{payment.first_name}</td>
              <td className="px-4 py-2 border border-gray-400">{payment.last_name}</td>
              <td className="px-4 py-2 border border-gray-400">{payment.email}</td>
              <td className="px-4 py-2 border border-gray-400">{payment.reference}</td>
              <td className="px-4 py-2 border border-gray-400">{payment.amount}</td>
              <td className="px-4 py-2 border border-gray-400">{payment.currency}</td>
              <td className="px-4 py-2 border border-gray-400">{payment.status}</td>
              <td className="px-4 py-2 border border-gray-400">{new Date(payment.created_at).toLocaleString()}</td>
              <td className="px-4 py-2 border border-gray-400">{new Date(payment.updated_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
