const mongoose = require('mongoose')

const {Schema} = mongoose;

const userSchema = new Schema({
	username:	{type: String},
	email:		{type: String},
	hash:		{type: String},
	joined:		{type: Date, default: Date.now}
})

const user = mongoose.model('users',userSchema)

module.exports.user = user;