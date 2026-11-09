import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { DESTINATION_CATEGORY, ADD_DESTINATION } from '../../api/api';
import { getDestinationCategory, addDestination, updateDestination } from '../../api/destinationApi';
import UserContext from '../UserContext';
export default function DestinationCreate() {
    const [categories, setCategories] = useState([]);
    const [category_id, setSelectedCategory] = useState('');
    const [name, setNmae] = useState("");
    const [nickname, setNickName] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [description, setDescription] = useState("")

    const [message, setMessage] = useState("")
    const userData = useContext(UserContext);
    const navigate = useNavigate()
    const laodDestinationCategories = async () => {
        try {
            const data = await getDestinationCategory();
            setCategories(data);
            loadEditDestunationData()
        } catch (error) {
            setError(error.message);
        }

    }
    const handleAddDestination = async () => {
        const hasDContent = Object.keys(userData.destination).length > 0;
        if (hasDContent) {
            update_destination()
        }
        else {
            add_new_Destination()
        }

    }
    const update_destination = async () => {
        setMessage("");
        const fields = {};
        if (name.trim() !== userData.destination.name) {
            fields.name = name.trim();
        }
        if (nickname.trim() !== userData.destination.nickname) {
            fields.nickname = nickname.trim();
        }
        if (city.trim() !== userData.destination.city) {
            fields.city = city.trim();
        }
        if (country.trim() !== userData.destination.country) {
            fields.country = country.trim();
        }
        if (description.trim() !== userData.destination.description) {
            fields.description = description.trim();
        }
        if (category_id !== userData.destination.category_id) {
            fields.category_id = category_id;
        }
        if (Object.keys(fields).length === 0) {
            setMessage("No changes detected.");
            return;
        }
        try {
            const data = await updateDestination(userData.destination.id, fields)
            setMessage(`Destination ${data.name} has been updated`)
            resetForm();
        }
        catch (error) {
            setMessage(error)
        }



    }
    const add_new_Destination = async () => {
        setMessage("");
        console.log(category_id)
        const fields = [name, nickname, city, country, description];
        const hasEmptyField = fields.some(field => !field || field.trim() === "");
        if (hasEmptyField) {
            setMessage("Please fill the form. Input fields should not be empty.");
            return false
        }
        if (!category_id) {
            setMessage("Please select a category");
            return false
        }
        try {
            const params = { name, nickname, country, city, description, category_id, "active": true };
            const data = await addDestination(params)
            setMessage(`Destination ${data.name} has been added`);
            resetForm();
            
        }
        catch (error) {
            setMessage(error)
        }

    }

    const loadEditDestunationData = () => {
        const hasDContent = Object.keys(userData.destination).length > 0;
        console.log("mode " + hasDContent)
        if (hasDContent) {
            setNmae(userData.destination.name)
            setNickName(userData.destination.nickname)
            setCountry(userData.destination.country)
            setCity(userData.destination.city)
            setSelectedCategory(userData.destination.category_id)
            setDescription(userData.destination.description)
        }
    }
    useEffect(() => {
        laodDestinationCategories();
        return () => {
            console.log("exiting")
            // userData.setDestination([]);
            resetForm();
        };
    }, [])

    const resetForm = () => {
        userData.setDestination([]);
        setNmae("");
        setNickName("");
        setCountry("");
        setCity("");
        setSelectedCategory("");
        setDescription("");
        // setMessage("");
    };
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="card-body">
                    <p className='h3 card-title text-center mb-4'>{(Object.keys(userData.destination).length > 0) ? 'Update Destination' : 'Add Destination'}</p>
                    <div className='mb-3'>
                        <label htmlFor="">Destination Name :</label><br />
                        <input type="text" className='form-control' placeholder='Enter Destination Name' value={name} onChange={(e) => setNmae(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Nick Name / Second Name : </label><br />
                        <input type="text" className='form-control' placeholder='Example - South India Explorer ' value={nickname} onChange={(e) => setNickName(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Country : </label><br />
                        <input type="text" className='form-control' placeholder='Country Name : ' value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">City : </label><br />
                        <input type="text" className='form-control' placeholder='City Name' value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">category: </label><br />
                        {/* <input type="text" className='form-control' placeholder='Example - Monument / Wildlige / Adventure '  /> */}
                        <select value={category_id} className='form-control' onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="">--Select Category--</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                            }
                        </select>

                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Description: </label><br />
                        <textarea placeholder='Few words about the destination:' style={{ width: '100%' }} className='form-control' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className='text-end mb-3' style={{ display: 'flex', textAlign: 'right' }}>
                        <p style={{ width: '100%', textAlign: 'left' }}>{message}</p>
                        <button className='btn btn-primary bgTeal' onClick={(e) => handleAddDestination()}>{(Object.keys(userData.destination).length > 0) ? 'Update' : 'Add'}</button>
                        {/* <button className='btn btn-primary bgTeal' onClick={(e) => navigate('/packages/adddestination/destinationlist')}>Add</button>                         */}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
