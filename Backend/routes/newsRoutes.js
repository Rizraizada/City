const express = require('express');
const router = express.Router();
const { getNews, addNews, upload } = require('../controllers/newsController');

router.get('/news', getNews);

router.post('/news', upload.single('image'), addNews);

module.exports = router;
