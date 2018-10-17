var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../user/user');

// CREATES A NEW USER
router.get('/', function (req, res) {
    res.send({test: 'passed'});
});

module.exports = router;