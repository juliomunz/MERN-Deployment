const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No puede crear una mascota sin nombre'],
        maxLength: [15, 'No debe excer los 15 caracteres'],
        unique: [true, 'ya existe un registro con el mismo nombre']
    },
    type: {
        type: String,
        required: [true, 'No se puede crear una mascota sin tipo'],
        maxLength: [10, 'No debe excer los 10 caracteres']
    },
    description: {
        type: String,
        required: [true, 'No puede crear una mascota sin descripcion'],
        maxLength: [30, 'No debe excer los 30 caracteres']
    },    
    skill1: {
        type: String,
        maxLength: [30, 'No debe excer los 30 caracteres']
    },  
    skill2: {
        type: String,
        maxLength: [30, 'No debe excer los 30 caracteres']
    },  
    skill3: {
        type: String,
        maxLength: [30, 'No debe excer los 30 caracteres']
    },  

    likes: {
        type: Number,
        default: 0
    },
},
{timestamps: true}
);

const Pet = mongoose.model('Pet', PetSchema);
PetSchema.plugin(uniqueValidator,{ message: 'Esta mascota con nombre {VALUE} ya existe.' });


module.exports = Pet;