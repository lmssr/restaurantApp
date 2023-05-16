import React, { useEffect, useState } from 'react';
import './RestaurantList.css';

const RestaurantList = ({ restaurants }) => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    // Tri de la liste des restaurants par ordre alphabétique
    const sortedRestaurants = [...restaurants].sort((a, b) => {
      const nameA = a.name ? a.name.toLowerCase() : '';
      const nameB = b.name ? b.name.toLowerCase() : '';
      return nameA.localeCompare(nameB);
    });
    setRestaurantList(sortedRestaurants);
  }, [restaurants]);

  const handleEditRestaurant = (restaurantId) => {
    console.log('Éditer restaurant avec ID :', restaurantId);
  };

  const handleDeleteRestaurant = async (restaurantId) => {
    try {
      await fetch(`http://localhost:3000/restaurants/${restaurantId}`, {
        method: 'DELETE',
      });
      setRestaurantList(restaurantList.filter((restaurant) => restaurant.id !== restaurantId));
    } catch (error) {
      console.error('Erreur lors de la suppression du restaurant:', error);
    }
  };

  return (
    <div className="restaurant-list">
      <h2 className="restaurant-list-title">Liste des restaurants</h2>
      {restaurantList.map((restaurant) => (
        <div className="restaurant-card" key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>Ville : {restaurant.city}</p>
          <p>Site Web : <a href={restaurant.website}>{restaurant.website}</a></p>
          <p>Type de cuisine : {restaurant.cuisine}</p>
          <p>Sert sur place : {restaurant.service ? 'Oui' : 'Non'}</p>
          <p>Accessible aux personnes handicapées : {restaurant.handicapAccessible ? 'Oui' : 'Non'}</p>
          <button onClick={() => handleEditRestaurant(restaurant.id)}>Modifier</button>
          <button onClick={() => handleDeleteRestaurant(restaurant.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
