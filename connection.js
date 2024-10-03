const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://ApiUser:UserPassword@apisign.f49wf.mongodb.net/?retryWrites=true&w=majority&appName=ApiSign";

//  conectar a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a MongoDB exitosa');
    } catch (err) {
        console.error('Error conectando a MongoDB:', err);
        process.exit(1); // Acabar proceso si de pronto se encuentra que hay algun error
    }
};

module.exports = connectDB;
