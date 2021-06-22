import axios from 'axios';

export default class PetService {

    constructor (){}

    async getOneSinglePet (id){
        try {
            const pet = await axios.get(`http://localhost:8000/api/pets/${id}`);
            console.log(pet)
            return pet.data.petData;
        } catch (err) {
            return err;
        }
    };
    
    async getAllPets() {
        try {
            const petsList = await axios.get(`http://localhost:8000/api/pets`);
            console.log(petsList)
            return petsList.data.pets;
        } catch (err) {
            return err;  
        }
}
    async createPet(pet) {
        try {
            const newPet = await axios.post(`http://localhost:8000/api/pets/new`, pet);
            console.log(newPet)
            return newPet.data.pet;
        } catch (err) {
            return err;   
        }
    }

    async updatePet(id, pet){
        try {
            const updatePet = await axios.put(`http://localhost:8000/api/pets/update/${id}`, pet);
            return updatePet.data.pet;
        } catch (err) {
            return err;
        }
    }

    async deletePet (id){
        try {
            const deletedPet = await axios.delete(`http://localhost:8000/api/pets/delete/${id}`);
            return deletedPet.data.petDeleted;
        } catch (err) {
            return err;
            
        }
    }
}