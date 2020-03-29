const express = require('express');
var Product = require('../../model/products');

var router = express.Router();

router.get('/all', (req, res) => {
	res.json(['iPhone10', 'iPad Mini']);
});

router.get('/add', (req, res) => {
	res.json([]);
});

router.get('/update', (req, res) => {
	res.json([]);
});

module.exports = router;