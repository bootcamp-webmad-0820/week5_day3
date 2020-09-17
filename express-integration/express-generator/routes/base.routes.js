const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/parks-map', (req, res) => res.render('parks-map'))

module.exports = router