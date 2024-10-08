const centers = require('../models/centersParametrizationR355.js');

const createOrUpdateParametrization = async (req, res) => {
    try {
        const parametrizationData = req.body;

        // RRevisar si ya está ese CenterId
        if (!parametrizationData.centerID) {
            return res.status(400).json({
                success: false,
                error: 'centerID is required'
            });
        }

        // Agregar o actualizar lastConfigDate
        parametrizationData.lastConfigDate = new Date();

        // mirar si hay algun registro con ese centerid
        const existingCenter = await centers.findOne({ centerID: parametrizationData.centerID });

        let result;
        if (existingCenter) {
            // Actualizar registro existente
            result = await centers.findOneAndUpdate(
                { centerID: parametrizationData.centerID },
                { $set: parametrizationData },
                { new: true } // devolver el documento ya bien corregido
            );
        } else {
            // Crear nuevo registro
            const newCenter = new centers(parametrizationData);
            result = await newCenter.save();
        }

        res.status(200).json({
            success: true,
            message: existingCenter ? 'Parametrization actualizada correctamente' : 'Parametrization creada correctamentte',
            data: result
        });

    } catch (error) {
        console.error('Error en la ejecución parametrizacion:', error);
        res.status(400).json({
            success: false,
            error: error.message || 'Error n el proceso...'
        });
    }
};

module.exports = {
    createOrUpdateParametrization
};