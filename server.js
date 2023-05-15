const express = require('express');
const app = express();
const PORT = 3000;

const restaurantController = require('./controllers/restaurantController');

app.use(express.json());

// Récupérer tous les restaurants
app.get('/restaurants', restaurantController.getAllRestaurants);

// Récupérer un restaurant par son ID
app.get('/restaurants/:id', restaurantController.getRestaurantById);

// Créer un nouveau restaurant
app.post('/restaurants', restaurantController.createRestaurant);

// Mettre à jour un restaurant
app.put('/restaurants/:id', restaurantController.updateRestaurant);

// Supprimer un restaurant
app.delete('/restaurants/:id', restaurantController.deleteRestaurant);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
