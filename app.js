const express = require('express')
const pug = require('pug')
const mongoose = require('mongoose')
const schemas = require('./schemas')

const app = express()

const connection = mongoose.createConnection('mongodb://localhost/website', options={useNewUrlParser: true,useUnifiedTopology: true})

// var testuser = new schemas.user({username: "screennoodle",email: "rohan8dewan@hotmail.com", hash: "test"})
// testuser.save()

const user = connection.model('users')
var query = user.find({}, function(err,person) {
	console.log(person)
})
console.log()

app.set('view engine', 'pug')

var logger = function(req, res, next) {
	var time = new Date();
	console.log(`[${time.toLocaleString()}] ${req.method} ${req.path}`)
	next()
}

app.use(logger)
app.use(express.static('static'))

app.get('/', function(req,res) {
	res.render('test')
})


app.listen(80)