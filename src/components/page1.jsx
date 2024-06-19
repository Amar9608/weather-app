// src/components/Page1.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Page1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const queryInput = params.get('input') || '';

  const [inputValue, setInputValue] = useState(queryInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/page1?input=${inputValue}`);
  };

  useEffect(() => {
    if (queryInput) {
      setInputValue(queryInput);
    }
  }, [queryInput]);

  return (
    <div className="container">
      <h1>Welcome to Amar Page 1</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter something"
        />
        <button type="submit">Update URL</button>
      </form>
      {inputValue && (
        <div className="info-box">
          <h2>You entered: {inputValue}</h2>
          <p>This input is reflected in the URL, which can be shared with others.</p>
        </div>
      )}
    </div>
  );
};

export default Page1;
