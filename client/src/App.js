import React, { useState, useEffect } from 'react';
import './App.css';
import RestaurantForm from './components/RestaurantForm/RestaurantForm';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch/RestaurantSearch';
import SearchResult from './components/SearchResult';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('http://localhost:3000/restaurants');
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des restaurants:', error);
    }
  };

  const addRestaurant = async (newRestaurant) => {
    try {
      const response = await fetch('http://localhost:3000/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
      });
      const createdRestaurant = await response.json();
      setRestaurants((prevRestaurants) => [...prevRestaurants, createdRestaurant]);
      setSearchResult([]); // Réinitialise la liste des résultats de recherche
    } catch (error) {
      console.error('Erreur lors de l\'ajout du restaurant:', error);
    }
  };
  
  

  const searchRestaurant = (searchValue) => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      for (const key in restaurant) {
        if (typeof restaurant[key] === 'string' && restaurant[key].toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    setSearchResult(filteredRestaurants);
  };
  
  return (
    <div className="App">
      <h1>Restaurant Finder</h1>
      <RestaurantSearch onSearch={searchRestaurant} />
      {searchResult.length === 0 ? (
        <RestaurantList restaurants={restaurants} />
      ) : (
        <SearchResult searchResult={searchResult} />
      )}
      <RestaurantForm addRestaurant={addRestaurant} restaurants={restaurants} />
    </div>
  );
};

export default App;
