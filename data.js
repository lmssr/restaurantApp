const Restaurant = require('./models/Restaurant');

const restaurants = [
  new Restaurant(1, 'Restaurant 1', 'Ville 1', 'https://www.restaurant1.com', 'Cuisine 1', 'Sur place', true),
  new Restaurant(2, 'Restaurant 2', 'Ville 2', 'https://www.restaurant2.com', 'Cuisine 2', 'À emporter', false),
  new Restaurant(3, 'Restaurant 3', 'Ville 3', 'https://www.restaurant3.com', 'Cuisine 3', 'Sur place', true)
];

module.exports = restaurants;
