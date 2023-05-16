import React, { useState } from 'react';
import './RestaurantSearch.css';

const RestaurantSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="restaurant-search">
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default RestaurantSearch;