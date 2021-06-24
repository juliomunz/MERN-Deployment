import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react';
import PetService from '../services/services.pet'
import {Link, useHistory, useParams } from 'react-router-dom';
import Navigation from './Navigation';

const PetDetail = () => {
    const [petList, setPetList] = useState([]);
    const { id } = useParams();
    const petService = new PetService;
    const [pet, setPet] = useState('');
    const history = useHistory();

    const getASinglePetFromService = async () => {
        try {
            const singlePet = await petService.getOneSinglePet(id);
            setPet(singlePet);
        } catch (err) {
            return err;
        }
    }

    const getAllPetsFromService = async ()=>{
        try {
            const List = await petService.getAllPets();
            setPetList(List);
        } catch (err) {
            return err;
        }

    }

    const deletePet = async (id)=>{
        try{
            await petService.deletePet(id)
            getAllPetsFromService();
        }
        catch(err){
            return err;
        } finally {
            history.push('/')
        }
    }

    useEffect(() => {
        getASinglePetFromService();
    }, [])

    const addLike = async () => {
        try {
            const updatedLikes = await petService.updatePet(id, { ...pet, likes: pet.likes + 1 })
            setPet({ ...pet, likes: updatedLikes.likes })
        } catch (err) {
            return err;
        }
    }
    
    return (
    <div className="wrapper">
        <div className="nav-bar">
            <Navigation/>
        </div>
        <div class="card">
            <h3>Pet Shelter</h3>
            <h3>Details About: {pet.name}</h3>
            <div className="btn">
                <Button variant="danger" onClick={() => deletePet(pet._id)}>Adoptar {pet.name}</Button>
            </div>    
        </div>
        <div className="container-body">
            <h5>Pet Name:  {pet.name}</h5> 
            <h5>Pet Type:  {pet.type}</h5>
            <h5>Description: {pet.description}</h5>
            <h5>Skills: {pet.skill1} </h5>
            <h5> {pet.skill2} </h5>
            <h5> {pet.skill3} </h5>
            <div className="btn">
                <Button variant="success" onClick={addLike}>Like {pet.name} </Button> like(s): {pet.likes}
            </div>
        </div>
    </div>
    )
}

export default PetDetail