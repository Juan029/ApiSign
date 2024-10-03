const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Servidor Local Activo');
});


module.exports = app;