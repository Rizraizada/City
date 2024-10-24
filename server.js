const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const next = require('next');
const path = require('path');
const db = require('./Backend/db');
const sliderRoutes = require('./Backend/routes/sliderRoutes');
const awardRoutes = require('./Backend/routes/awardRoutes');
const activitiesRoutes = require('./Backend/routes/activitiesRoutes');
const newsRoutes = require('./Backend/routes/newsRoutes');
const galleryRoutes = require('./Backend/routes/galleryRoutes');
const directorRoutes = require("./Backend/routes/directorRoutes");


dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Express app setup
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(cors());
server.use('/uploads', express.static(path.join(__dirname, 'Backend', 'uploads')));

// API routes
server.use('/api/slider', sliderRoutes);
server.use('/api/award', awardRoutes);
server.use('/api/activities', activitiesRoutes);
server.use('/api/news', newsRoutes);
server.use('/api/gallery', galleryRoutes);
server.use('/api/director', directorRoutes);

// Test MySQL connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  } else {
    console.log('Connected to MySQL database');
    connection.query('SELECT 1 + 1 AS solution', (err, results) => {
      if (err) {
        console.error('Error running test query:', err.message);
      } else {
        console.log('Test query result:', results[0].solution);
      }
    });
    connection.release();
  }
});

app.prepare().then(() => {
  server.all('*', (req, res) => handle(req, res));

  server.listen(PORT, () => {
    console.log(`Server running in ${dev ? 'development' : 'production'} mode on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error starting server:', err.stack);
  process.exit(1);
});
