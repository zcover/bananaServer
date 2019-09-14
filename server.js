'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3001;


// app.gets
app.get('/', (request, response) => {
    response.redirect('index.html')
});


app.get('/home', (req, res) => {
    res.send('Hello There!');
})

app.use('*', (req, res) => {
    res.status(404).send('Sorry, that route does not exist')
})









app.listen(PORT, () => console.log(`up on port: ${PORT}`))