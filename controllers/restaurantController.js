const restaurants = require('../data');
const Restaurant = require('../models/restaurant');

// Récupérer tous les restaurants
const getAllRestaurants = (req, res) => {
  res.json(restaurants);
};

// Récupérer un restaurant par son ID
const getRestaurantById = (req, res) => {
  const { id } = req.params;
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ message: 'Restaurant not found' });
  }
};

// Créer un nouveau restaurant
const createRestaurant = (req, res) => {
    const { name, city, website, cuisine, service, handicapAccessible } = req.body;
    const id = restaurants.length + 1;
    const newRestaurant = new Restaurant(id, name, city, website, cuisine, service, handicapAccessible);
    restaurants.push(newRestaurant);
  
    res.status(201).json(newRestaurant);
  };

// Mettre à jour un restaurant
const updateRestaurant = (req, res) => {
  const { id } = req.params;
  const { name, city, website, cuisine, service, handicapAccessible } = req.body;
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (restaurant) {
    restaurant.name = name || restaurant.name;
    restaurant.city = city || restaurant.city;
    restaurant.website = website || restaurant.website;
    restaurant.cuisine = cuisine || restaurant.cuisine;
    restaurant.service = service || restaurant.service;
    restaurant.handicapAccessible = handicapAccessible || restaurant.handicapAccessible;

    res.json(restaurant);
  } else {
    res.status(404).json({ message: 'Restaurant not found' });
  }
};

// Supprimer un restaurant
const deleteRestaurant = (req, res) => {
  const { id } = req.params;
  const index = restaurants.findIndex(r => r.id === parseInt(id));

  if (index !== -1) {
    const deletedRestaurant = restaurants.splice(index, 1);
    res.json(deletedRestaurant[0]);
  } else {
    res.status(404).json({ message: 'Restaurant not found' });
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
};
