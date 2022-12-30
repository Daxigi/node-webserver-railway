const express = require('express')
const app = express()
require('dotenv').config();

const port = process.env.PORT;
var hbs = require('hbs');

//handlebars
app.set('viwe engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//servir contenido estatico
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home.hbs', {
    nombre: 'Maximiliano Gimenez',
    titulo: 'curso de node :)'
  })
})




app.get('/generic', function(req, res){
  res.render('generic.hbs', {
    nombre: 'Maximiliano Gimenez',
    titulo: 'curso de node :)'
  })
})

app.get('/elements', function (req, res){
  res.render('elements.hbs', {
    nombre: 'Maximiliano Gimenez',
    titulo: 'curso de node :)'
  })
})

app.get('*', function (req, res) {
  res.send('error 404 :(');
})

app.listen(port, () =>{
    console.log(`example app listening at http://localhost:${port}`);
})