const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
//express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Diego'
    });

});
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Diego'
    });

});
app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});