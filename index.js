const express = require('express');

const app = express();

const port = 3000;

app.get('', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/contacto', function(req, res) {
    res.send('Esta es la pagina de contacto');
});

app.get('/usuarios', function(req, res) {
    res.send([{name: 'John Doe'}])
});

app.get('/notas', function(req,res) {
    res.sendFile(__dirname + '/notas.txt');
});


app.listen(port, () => {
    console.log('app is running in port ' + port);
});

