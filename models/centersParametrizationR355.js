const mongoose = require('mongoose');
const {centersParametrizationR355} = require('../connection.js')
const { Schema } = mongoose;



const centerDB = new mongoose.Schema({
    centerID:{    
        type: Schema.Types.ObjectId, require:true
    },

    numberSelectedEntryRnec:{
        type: String,
    },

    numberSelectedInSession: {    
        type: String,
    },

    alternativeMethod: {   
         type: String,    
         enum: { values: ["Si", "No"] },
    },

    OutRnecPercentage: {    
        type: String,
    },

    OutRnecTime: {    
        type: String,       
    },

    practicesToValidate: {
            type: Number,   
    },

    classChoiceType: {    
        type: String,        
        enum: { values: ["order", "random"] },
    },

    userToValidate: {    
        type: String,        
        enum: { values: ["apprentice", "instructor", "both"] },
    },

    enableInstructor: {    
        type: String,    
    },

    practicesToValidate: {    
        type: String,            
    },

    sendNotification: {    
        type: String,            
    },

    enableValidationToStart: {    
        type: String,            
    },

    enableValidationToClose: {   
         type: String,            
        },

    excludeCategories: {    
        type: String,           
     },

    lastConfigDate: {    
        type: Date,
    }
});

const centers = centersParametrizationR355.model('centers', centerDB);

module.exports = centers;



