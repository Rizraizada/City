// models/Slider.js
const pool = require('../db');

const Slider = {
  id: 'auto-increment',
  image: 'string',
};

Slider.getAll = (callback) => {
  const query = 'SELECT image FROM slider';
  pool.query(query, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

Slider.add = (imagePath, callback) => {
  const sql = 'INSERT INTO slider (image) VALUES (?)';
  pool.query(sql, [imagePath], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

module.exports = Slider;
