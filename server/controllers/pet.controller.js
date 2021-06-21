const Pet = require('../models/pet.model');

module.exports.findAllPets = (req, res) => {
    Pet.find()
    .then(allPets => res.json({pets: allPets}))
    .catch(err => res.json({pets: null}));
}

module.exports.createNewPet = (req, res) => {

    //console.log('llegue aqui',req.body);
    Pet.create(req.body)
    .then(newPet => res.send({pet: newPet}))
    .catch(err => res.send({errors: err}));
}

module.exports.getPetByID = (req, res) => {
    Pet.findById(req.params.id)
    .then(singlePet => res.json({petData: singlePet}))
    .catch(error => res.json({petData: null}));
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatePet => res.json({ pet: updatePet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingPet = (req, res) => {
    Pet.findByIdAndDelete({ _id: req.params.id })
        .then(deletePet => res.json({ petDeleted: deletePet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};