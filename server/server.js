require('dotenv').config()
const express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),

	app = express(),
	port = process.env.PORT

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../static')))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(function(req, res, next) {
  return res.status(404).render('404.hbs', {url: req.url});
});

app.listen(port, () => {
	console.log(`PORT: ${port}`)
})
