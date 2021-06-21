const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pets/:id', PetController.getPetByID);
    app.post('/api/pets/new', PetController.createNewPet);
    app.put("/api/pets/update/:id", PetController.updateExistingPet);
    app.delete("/api/pets/delete/:id", PetController.deleteExistingPet);   
}