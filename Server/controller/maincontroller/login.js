var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
    console.log('inside login');
    res.send('login');




});

module.exports = router;