import React, { useState } from 'react';
import './RestaurantForm.css';

const RestaurantForm = ({ addRestaurant }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [service, setService] = useState('on-site');
  const [handicapAccessible, setHandicapAccessible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const restaurant = {
      name,
      city,
      website,
      cuisine,
      service,
      handicapAccessible,
    };
    addRestaurant(restaurant);
    setName('');
    setCity('');
    setWebsite('');
    setCuisine('');
    setService('on-site');
    setHandicapAccessible(false);
  };

  return (
    <div className="restaurant-form">
      <h2>Ajouter un restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Ville :</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label>Site Web :</label>
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <label>Type de cuisine :</label>
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          required
        />

        <label>Service :</label>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="on-site">Sur place</option>
          <option value="takeaway">À emporter</option>
        </select>

        <label>Accessible aux personnes handicapées :</label>
        <input
          type="checkbox"
          checked={handicapAccessible}
          onChange={(e) => setHandicapAccessible(e.target.checked)}
        />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default RestaurantForm;
