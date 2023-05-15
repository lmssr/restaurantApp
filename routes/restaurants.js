const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Route pour récupérer tous les restaurants
router.get('/', restaurantController.getAllRestaurants);

// Route pour récupérer un restaurant par son ID
router.get('/:id', restaurantController.getRestaurantById);

// Route pour créer un nouveau restaurant
router.post('/restaurants', restaurantController.createRestaurant);

// Route pour mettre à jour un restaurant
router.put('/:id', restaurantController.updateRestaurant);

// Route pour supprimer un restaurant
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;