/** @format */
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const PersonModel = require('./models/person');
const FeedbackModel = require('./models/feedback');
const MessageModel = require('./models/message');

const app = express(); // create express app
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// add middleware
app.use(express.static(path.join(__dirname, 'build')));

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9wxtz.mongodb.net/Citzen?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			keepAlive: true,
		}
	)
	.then(() => {
		console.log('Database connected successfully.');
	})
	.catch(console.error);

app.post('/auth', async (req, res) => {
	if (req.body) {
		const { username, password } = req.body;
		if (
			username === process.env.ADMIN_USERNAME &&
			password === process.env.ADMIN_PASSWORD
		) {
			res.cookie('authCokie', 'admin', {
				maxAge: 900000,
				httpOnly: true,
			});
			res.send({ admin: true });
		} else {
			const user = await PersonModel.findOne({ username, password });
			if (user) {
				res.send(user);
			} else {
				res.status(404).send('Not found');
			}
		}
	}
});

app.post('/person', async (req, res) => {
	const newPerson = new PersonModel(req.body);
	await newPerson.save();
	res.send(newPerson);
});

app.get('/person', async (req, res) => {
	const persons = await PersonModel.find();
	res.send(persons);
});

app.post('/feedback', async (req, res) => {
	const newFeedback = new FeedbackModel(req.body);
	await newFeedback.save();
	res.send(newFeedback);
});

app.get('/feedback/:id', async (req, res) => {
	const { id } = req.params;
	const feedback = await FeedbackModel.find({ workerId: id });
	res.send(feedback);
});

app.get('/official', async (req, res) => {
	const feedback = await FeedbackModel.find();
	res.send(feedback);
});

app.post('/message', async (req, res) => {
	const message = new MessageModel(req.body);
	message.save();
	res.send(true);
});

app.get('/messages/:id', async (req, res) => {
	const { id } = req.params;
	const messages = await MessageModel.find({ workerId: id });
	res.send(messages);
});

app.get('/admin', (req, res) => {
	if (!req.cookies || !req.cookies.authCokie) {
		res.redirect('/');
	}
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/worker/:id', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/official/:id', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start express server on port 5000
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
