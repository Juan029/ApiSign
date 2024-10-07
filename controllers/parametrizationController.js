const centers = require('../models/centersParametrizationR355.js');

const createParametrization = async (req, res) => {
    try {
        // Crear una nueva parametrización con todos los campos 
        const newParametrization = new centers({
            centerID: req.body.centerID,
            numberSelectedEntryRnec: req.body.numberSelectedEntryRnec,
            numberSelectedInSession: req.body.numberSelectedInSession,
            alternativeMethod: req.body.alternativeMethod,
            OutRnecPercentage: req.body.OutRnecPercentage,
            OutRnecTime: req.body.OutRnecTime,
            practicesToValidate: req.body.practicesToValidate,
            classChoiceType: req.body.classChoiceType,
            userToValidate: req.body.userToValidate,
            enableInstructor: req.body.enableInstructor,
            sendNotification: req.body.sendNotification,
            enableValidationToStart: req.body.enableValidationToStart,
            enableValidationToClose: req.body.enableValidationToClose,
            excludeCategories: req.body.excludeCategories,
            lastConfigDate: req.body.lastConfigDate
        });

        // aqui la guardamos en nuestra DATABASE
        await newParametrization.save();

        // SE LOGRÓ?
        res.status(201).json({
            centerMessage: `The centerParametrization has been created successfully`
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createParametrization
};
