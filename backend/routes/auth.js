const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Sukses hosting GitHub dari /auth' });
});

module.exports = router;
