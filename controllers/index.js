const router = require('express').Router()
const fs = require('fs')

module.exports = router;

router.get('/', function (req, res) {
    res.send('Hello World!');
});

router.get('/cart/:name', function (req, res) {
    // Implementation here
});

