const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');

// GET all directors
router.get('/', directorController.getAllDirectors);

// POST a new director
router.post('/', directorController.upload.single('image'), directorController.addDirector);

module.exports = router;
