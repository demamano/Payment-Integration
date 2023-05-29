import React, { useState } from 'react';
import axios from 'axios';

const CreateSubaccount = () => {
  const [formData, setFormData] = useState({
    business_name: 'Abebe Souq',
    account_name: 'Abebe Bikila',
    bank_code: '96e41186-29ba-4e30-b013-2ca36d7e7025',
    account_number: '1000298159126',
    split_value: 0.2,
    split_type: 'percentage',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4400/api/subaccounts/create', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Render form fields for each formData property */}
        {/* Implement handleChange and handleSubmit functions */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateSubaccount;