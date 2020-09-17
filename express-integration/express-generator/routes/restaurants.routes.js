const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant.model');

router.get('/', (req, res) => res.render('restaurants/all-restaurants'))

router.get('/new', (req, res) => res.render('restaurants/new-restaurant'))
router.post('/new', (req, res, next) => {

    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newRestaurant = {
        name: req.body.name,
        description: req.body.description,
        location
    }

    Restaurant.create(newRestaurant)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})



module.exports = router