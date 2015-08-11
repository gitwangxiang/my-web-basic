'use strict';

var express = require('express');
var router = express.Router();
var Controller = require('../controllers/home');

var controller = new Controller();

router.get('/', controller.index);

module.exports = router;
