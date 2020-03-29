const express = require('express');
const productsController = require('./routes/products');

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('App running on port %s', port);
});


app.use('/products', productsController);