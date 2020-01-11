const express = require('express');
const countries = require('./countries');

const app = express();

app.get('/', function(req, res) {
	const data = countries();
	res.json(data);
});

app.listen(8000);
console.log('You are listening to port 8000');