import React from 'react';

const SearchResult = ({ searchResult }) => {
  return (
    <div>
      <h2>Résultats de la recherche</h2>
      {searchResult.length === 0 ? (
        <p>Aucun restaurant trouvé.</p>
      ) : (
        <ul>
          {searchResult.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <p>Ville : {restaurant.city}</p>
              <p>Site Web : <a href={restaurant.website}>{restaurant.website}</a></p>
              <p>Type de cuisine : {restaurant.cuisine}</p>
              <p>Sert sur place : {restaurant.service ? 'Oui' : 'Non'}</p>
              <p>Accessible aux personnes handicapées : {restaurant.handicapAccessible ? 'Oui' : 'Non'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
