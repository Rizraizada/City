const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// GET all gallery images
router.get('/', galleryController.getGallery);

// POST a new gallery image
router.post('/', galleryController.upload.single('image'), galleryController.addGalleryImage);

module.exports = router;
