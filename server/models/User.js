const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// User model
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
