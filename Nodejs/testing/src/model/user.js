const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = new Schema({
	email: {
		type: String
	},
	password: {
		type: String,
		min: 8
	},
	address: {
		type: String
	},
	city: {
		type: String
	},
	district: {
		type: String
	}
});

module.exports = mongoose.model('Users', User)