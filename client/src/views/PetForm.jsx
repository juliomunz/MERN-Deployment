import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { useParams, useHistory } from 'react-router-dom';
import PetService from '../services/services.pet'


const PetForm = () => {
    const { id } = useParams();
    const history = useHistory();
    const petService = new PetService;
    const initialState = {
        "name":'',
        "type": '',
        "description": '',
        "skill1": '',
        "skill2": '',
        "skill3": ''
    }
    const [pet, setPet] = useState(initialState)
    const [error, setError] = useState('')


    const getASinglePetFromService = async () => {
        try {
            const singlePet = await petService.getOneSinglePet(id);
            setPet(singlePet);
        } catch (err) {
            return err;
        }
    }

    const createPet = async (e) =>{
        e.preventDefault();
        await petService.createPet(pet);
        history.push('/');
    }
    const updatePet = async (e) =>{
        e.preventDefault();
        await petService.updatePet(id,pet);
        history.push('/');

    }
    const handleCommit = (e)=>{
        id ? updatePet(e) : createPet(e);
        
    }

    const handleChangeInput = (e)=>{
        if(e.target.name==='name'){
            (e.target.value.length >0 && e.target.value.length <2) ? setError('* El nombre debe tener por lo menos 2 caracteres') : setError('')
        }else if (e.target.name==='type'){}
        setPet({...pet, [e.target.name]: e.target.value});
    }

    useEffect(()=>{
        if (id){
            getASinglePetFromService();
        }else{
            setPet(initialState);
        }
    },[])

    return (
        <div className="container">
            <Navigation />
            <div className="row justify-content-md-left">
                <h4>Pet Shelter</h4>
            </div>
            <div className="row justify-content-md-left">
                <h6>Know a pet needing a home?</h6>
            </div>
        <div className="card mt-1">
            <div className="card-body">
                <h3 className="text-center">{id ? 'Edit' : 'Create'}</h3>
                <Form.Label onSubmit={(e) => handleCommit(e)}>
                    <div>
                        <label name="title">Pet Name:</label>
                        <div>
                            <input type="text" className="form-control" name="name" id="name" value={pet.name} onChange={(e) => handleChangeInput(e)} />
                            <span>{error}</span>
                        </div>
                    </div>
                    <div>
                        <label name="type">Pet Type:</label>
                    <div>
                        <input type="text" className="form-control" name="type" id="type" value={pet.type} onChange={(e) => handleChangeInput(e)} />
                        <span>{error}</span>
                    </div>
                    </div>
                    <div>
                        <label name="description">Pet Description:</label>
                        <div>
                            <input type="text" className="form-control" name="description" id="description" value={pet.description} onChange={(e) => handleChangeInput(e)} />
                            <span>{error}</span>
                        </div>
                    </div>
                    <div>
                        <label name="skill">Skill 1:</label>
                        <div>
                            <input type="text" className="form-control" name="skill1" id="skill1" value={pet.skill1} onChange={(e) => handleChangeInput(e)} />
                            <span>{error}</span>
                        </div>
                    </div>
                    <div>
                        <label name="skill">Skill 2:</label>
                        <div>
                            <input type="text" className="form-control" name="skill2" id="skill2" value={pet.skill2} onChange={(e) => handleChangeInput(e)} />
                            <span>{error}</span>
                        </div>
                    </div>
                    <div>
                        <label name="skill">Skill 3:</label>
                        <div>
                            <input type="text" className="form-control" name="skill3" id="skill3" value={pet.skill3} onChange={(e) => handleChangeInput(e)} />
                            <span>{error}</span>
                        </div>
                    </div>
                    <div>
                        <div className="col text-center">
                            <Button variant="primary" type="submit">
                            {id ? 'Edit Pet' : 'Add Pet'}
                            </Button>
                        </div>
                    </div>
                </Form.Label>
            </div>
        </div>
    </div>
    )
}

export default PetForm