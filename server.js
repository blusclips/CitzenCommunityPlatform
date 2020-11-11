/** @format */
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express(); // create express app
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// add middleware
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/auth', (req, res) => {
	if (req.body) {
		const { username, password } = req.body;
		if (
			username === process.env.ADMIN_USERNAME &&
			password === process.env.ADMIN_PASSWORD
		) {
			res.send({ status: 202 });
		} else {
			res.status(404);
		}
	}
});

// start express server on port 5000
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
