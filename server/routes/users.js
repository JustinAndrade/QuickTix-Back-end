const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to users' })
})

module.exports = router