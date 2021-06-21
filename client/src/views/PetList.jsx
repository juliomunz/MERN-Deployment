import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import PetService from '../services/services.pet';
import { Link } from 'react-router-dom';

const PetList = () => {
    const [petList, setPetList] = useState([]);
    const petService = new PetService;

    const getAllPetsFromService = async ()=>{
        try {
            const List = await petService.getAllPets();
            setPetList(List);
        } catch (err) {
            return err;
        }
    }

    useEffect(()=>{
        getAllPetsFromService();
    },[])

    return (
        <div className="container">
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home</h3>
                <Link className="nav-link" to ="/create">
                    add a pet to the shelter
                </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {petList.length > 0 && petList.map((item) => (
                            <tr key={item._id} value={item._id}>
                                <th>{item.name}</th>
                                <td>{item.type}</td>
                                <td>
                                    <div>
                                        <Link to={`/pets/${item._id}`}>
                                            details |
                                        </Link>
                                        <Link to={`/edit/${item._id}`}>
                                            | edit
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default PetList