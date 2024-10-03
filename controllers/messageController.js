const Message = require('../models/Message'); // Importar el modelo

const createMessage = async (req, res) => {
    try {
        const myMessage = req.body.message; // Obtener el mensaje del body

        // Guardar en la base de datos
        const newMessage = new Message({
            message: myMessage
        });
        await newMessage.save();

        // Retornar la respuesta formateada
        res.status(201).json({
            messageResult: `El mensaje que recibí es ${myMessage}`
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createMessage
};
