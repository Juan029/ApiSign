const express = require('express');

const messageRoutes = require('./routes/messageRoutes');
const config = require('./config/config.json');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de mensajes
app.use('/api', messageRoutes);

// Ruta de prueba (localhost)
app.get('/', (req, res) => {
    res.send('Servidor Local Activo');
});

const port = config.server.port;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});