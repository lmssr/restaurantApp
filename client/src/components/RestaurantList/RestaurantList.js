import React, { useEffect, useState } from 'react';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les restaurants depuis l'API
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3000/restaurants');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des restaurants:', error);
      }
    };

    // Appeler la fonction pour récupérer les restaurants au chargement du composant
    fetchRestaurants();
  }, []);

  const handleEditRestaurant = (restaurantId) => {
    // Logique pour ouvrir le formulaire de modification pour le restaurant avec l'ID donné
    console.log('Éditer restaurant avec ID :', restaurantId);
  };

  const handleDeleteRestaurant = async (restaurantId) => {
    try {
      // Appeler l'API pour supprimer le restaurant avec l'ID donné
      await fetch(`http://localhost:3000/restaurants/${restaurantId}`, {
        method: 'DELETE',
      });
      // Mettre à jour la liste des restaurants après suppression
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== restaurantId));
    } catch (error) {
      console.error('Erreur lors de la suppression du restaurant:', error);
    }
  };

  return (
    <div className="restaurant-list">
      <h2 className="restaurant-list-title">Liste des restaurants</h2>
      {restaurants.map((restaurant) => (
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
