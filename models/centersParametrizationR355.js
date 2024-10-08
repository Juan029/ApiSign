const mongoose = require('mongoose');
const {centersParametrizationR355} = require('../connection.js');
const { Schema } = mongoose;

const centerDB = new Schema({
    centerID: {    
        type: Schema.Types.ObjectId, 
        required: true
    },
    numberSelectedEntryRnec: {
        type: String,
        required: false
    },
    numberSelectedInSession: {    
        type: String,
        required: false
    },
    alternativeMethod: {   
        type: String,    
        enum: ["Si", "No"],
        required: false
    },
    OutRnecPercentage: {    
        type: String,
        required: false
    },
    OutRnecTime: {    
        type: String,
        required: false       
    },
    classChoiceType: {    
        type: String,        
        enum: ["order", "random"],
        required: false
    },
    userToValidate: {    
        type: String,        
        enum: ["apprentice", "instructor", "both"],
        required: false
    },
    enableInstructor: {    
        type: String,
        required: false    
    },
    practicesToValidate: {    
        type: Number,
        required: false            
    },
    sendNotification: {    
        type: String,
        required: false            
    },
    enableValidationToStart: {    
        type: String,
        required: false            
    },
    enableValidationToClose: {   
        type: String,
        required: false            
    },
    excludeCategories: {    
        type: String,
        required: false           
    },
    lastConfigDate: {    
        type: Date,
        required: true
    }
});

const centers = centersParametrizationR355.model('centers', centerDB);

module.exports = centers;