const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No puede crear una mascota sin nombre']
    },
    type: {
        type: String,
        required: [true, 'No se puede crear una mascota sin tipo']
    },
    description: {
        type: String,
        required: [true, 'No puede crear una mascota sin descripcion']
    },    
    skill1: {
        type: String,
    },  
    skill2: {
        type: String,
    },  
    skill3: {
        type: String,
    },  

    likes: {
        type: Number,
        default: 0
    },
},
{timestamps: true}
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;