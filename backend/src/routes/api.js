const express = require('express');
const cors = require('cors');
const moviesController = require('../controllers/movies');
const { asyncErrorDecorator } = require('../utils/error');

const router = express.Router();

// get  by id
router.get('/search', cors(), asyncErrorDecorator(moviesController.search));

module.exports = router;
