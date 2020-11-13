/** @format */

const mongoose = require('mongoose');

const { Schema } = mongoose;

let Person = null;

try {
	const PersonSchema = new Schema({
		username: String,
		password: String,
		role: String,
		created_on: {
			type: Date,
			default: Date.now(),
		},
	});
	Person = mongoose.model('Person_V01', PersonSchema);
} catch (e) {
	Person = mongoose.model('Person_V01');
}

module.exports = Person;
