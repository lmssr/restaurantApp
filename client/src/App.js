import React, { useState } from 'react';
import RestaurantForm from './components/RestaurantForm';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import SearchResult from './components/SearchResult';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addRestaurant = (restaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, restaurant]);
  };

  const searchRestaurants = (searchValue) => {
    const filteredRestaurants = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        restaurant.city.toLowerCase().includes(searchValue.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(filteredRestaurants);
  };

  return (
    <div>
      <RestaurantSearch onSearch={searchRestaurants} />
      {searchResults.length > 0 ? (
        <SearchResult restaurants={searchResults} />
      ) : (
        <RestaurantList restaurants={restaurants} />
      )}
      <RestaurantForm addRestaurant={addRestaurant} />
    </div>
  );
};

export default App;
