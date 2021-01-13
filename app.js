const express = require('express')
const pug = require('pug')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/')
const db = mongoose.connection

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