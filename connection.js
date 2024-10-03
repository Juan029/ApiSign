const mongoose = require('mongoose');
const configDB = require("./config/config.json");

let exampleDB = mongoose.createConnection(configDB.database.mongodb.uri, configDB.database.mongodb.options);

// Evento cuando la conexión se realiza con éxito
exampleDB.on('connected', () => {
    console.log(`✅ Connection to database established successfully! => ${configDB.database.mongodb.uri.match(/@([^/]+)/)[1]}`);
});

// Evento cuando hay un error en la conexión
exampleDB.on('error', (err) => {
    console.log('❌');
    console.error(`Database connection error: ${err}`);
});

// Evento cuando la conexión se cierra o se desconecta
exampleDB.on('disconnected', () => {
    console.log('ℹ️');
    console.log(`Could not establish connection to the database ${configDB.database.mongodb.uri.match(/@([^/]+)/)[1]}`);
});

module.exports = { exampleDB };