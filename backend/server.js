const express = require('express');
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
