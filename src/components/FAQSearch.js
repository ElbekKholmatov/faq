import React, { useState } from 'react';
import './FAQSearch.css';

const FAQSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="faq-search">
      <input
        type="text"
        placeholder="Search for questions or keywords..."
        value={searchQuery}
        onChange={handleSearch}
        className="faq-search-input"
      />
      <div className="faq-search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
};

export default FAQSearch;