const pool = require('../db'); // Import the pool from db.js
const Slider = require('../models/Slider'); // Import the Slider model
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const getSliderImages = (req, res) => {
  const query = 'SELECT image FROM slider';
  pool.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch images from database' });
    }
    const images = results.map(row => row.image.trim());
    res.json(images);
  });
};

const addSlider = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }

  const imagePath = `/uploads/${req.file.filename}`;
  Slider.add(imagePath, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding slider', error: err });
    }
    return res.status(201).json({ message: 'Slider added successfully', data: result });
  });
};

module.exports = {
  getSliderImages,
  addSlider,
  upload,
};
