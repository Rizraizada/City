// routes/sliderRoutes.js
const express = require('express');
const router = express.Router();
const { getSliderImages, addSlider, upload } = require('../controllers/sliderController');

router.get('/sliders', getSliderImages);

router.post('/sliders', upload.single('image'), addSlider);

module.exports = router;
