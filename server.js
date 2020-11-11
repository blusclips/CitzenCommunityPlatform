/** @format */

const path = require('path');
const express = require('express');
const app = express(); // create express app

const PORT = process.env.PORT || 8080;

// add middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// start express server on port 5000
app.listen(PORT, () => {
	console.log('server started on port 5000');
});
