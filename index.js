var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Requete de l'ACCEUil
app.get('/', function(request, response) {
  response.render('Accueil');
});
app.get('/accueil', function(request, response) {
  response.render('Accueil');
});

//Requette des Pramettres
app.get('/parametre', function(request, response) {
  response.render('parametre');
});

//Requette du Login
app.get('/login', function(request, response) {
  response.render('login');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


