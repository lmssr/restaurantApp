import React, { useState } from 'react';

const RestaurantSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="restaurant-search">
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default RestaurantSearch;
