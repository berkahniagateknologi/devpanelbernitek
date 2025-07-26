const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Server start
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// ✅ Izinkan CORS dari frontend kamu
app.use(cors({
  origin: 'http://dev.panel.bernitek.com', // ganti dengan frontend kamu
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);