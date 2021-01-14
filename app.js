const express = require('express') //web framework
const pug = require('pug') //templating framework
const mongoose = require('mongoose') //database framework
const helmet = require('helmet') //security framework
const schemas = require('./schemas') //own made schemas
const bcrypt = require('bcrypt') //bcrypt hashing

const app = express()

var logger = function(req, res, next) {
	var time = new Date();
	console.log(`[${time.toLocaleString()}] ${req.method} ${req.path}`)
	next()
}

app.set('view engine', 'pug')
app.use(logger)
app.use(express.static('static'))
app.use(helmet())

//connect to mongodb
// const connection = mongoose.createConnection('mongodb://localhost:27017/website', options={useNewUrlParser: true,useUnifiedTopology: true});

//add user to db
// var hash = bcrypt.hashSync("password",8);
// console.log(hash)
// console.log(bcrypt.compareSync("password",hash))
// var testuser = new schemas.user({username: "insecureUser",email: "iusebadpw@awful.com", hash: hash})
// testuser.save()

//read users from db
// const user = connection.model('users')
// var query = user.find({}, function(err,person) {
// 	console.log(person)
// })


app.get('/', function(req,res) {
	res.render('test')
})


app.listen(5000)