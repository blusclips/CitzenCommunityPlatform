/** @format */

const mongoose = require('mongoose');

const { Schema } = mongoose;

let Message = null;

try {
	const MessageSchema = new Schema({
		workerId: String,
		message: String,
		created_on: {
			type: Date,
			default: Date.now(),
		},
	});
	Message = mongoose.model('Message', MessageSchema);
} catch (e) {
	Message = mongoose.model('Message');
}

module.exports = Message;
