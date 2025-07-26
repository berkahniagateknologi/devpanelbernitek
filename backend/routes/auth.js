const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Hello from /auth route!' });
});

module.exports = router;
