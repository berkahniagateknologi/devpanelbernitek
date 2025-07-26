const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Server start
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Allow CORS for dev.panel.bernitek.com
app.use(cors({
  origin: 'http://dev.panel.bernitek.com'
}));