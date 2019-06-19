const router = require('express').Router()
const fs = require('fs')

module.exports = router;

router.get('/', function (req, res) {
    res.send('Hello World!');
});

router.get('/cart/:name', function (req, res) {
    var ledgerName = req.params.name;
    var normalizedPath = require("path").join(__dirname, "../data/" + ledgerName + ".json");
    fs.readFile(normalizedPath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));
    });

    res.send('Ledger: ' + ledgerName)
});

