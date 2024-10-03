const express = require('express');
const connectDB = require('./connection.js');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

// conectar db
connectDB();

app.use(express.json());

// aqui enviamos los messages
app.use('/api', messageRoutes);

// primer ruta de prueba (localh)
app.get('/', (req, res) => {
    res.send('Servidor Local Activo');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
