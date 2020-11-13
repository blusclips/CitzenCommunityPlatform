/** @format */

const mongoose = require('mongoose');

const { Schema } = mongoose;

let Feedback = null;

try {
	const FeedbackSchema = new Schema({
		workerId: String,
		name: String,
		size: String,
		feedback: [],
		created_on: {
			type: Date,
			default: Date.now(),
		},
	});
	Feedback = mongoose.model('Feedback_V01', FeedbackSchema);
} catch (e) {
	Feedback = mongoose.model('Feedback_V01');
}

module.exports = Feedback;
