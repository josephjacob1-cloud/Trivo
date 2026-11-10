import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom';
import { getDestinationImageById, addDestinationImage, updateDestinationImage } from '../../api/destinationImageApi';
import '../../css/style.css';
import { BASE_URL } from '../../api/api';

export default function DestinationImages() {
    const destination = useContext(UserContext).destination;
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [order, setOrder] = useState(0);
    const [isPrimary, setIsPrimary] = useState(false);
    const [collection, setCollection] = useState([])
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [mode, setMode] = useState("");
    const [imageID, setImageID] = useState(0)
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const loadDestinationImages = async () => {

        console.log("dest id " + destination.id)
        try {
            const data = await getDestinationImageById(destination.id);
            setCollection(data)


            const maxOrder = collection.length > 0
                ? Math.max(...collection.map(item => Number(item.display_order)))
                : 0;
            setOrder(maxOrder + 1)
            console.log(order)
        } catch (error) {
            console.log(error)
        }
    }
    const getDataToEdit = (prop) => {
        setMode("edit")
        setImageID(prop.id)
        setName(prop.alt_text);
        setIsPrimary(prop.is_primary);
        setOrder(prop.display_order);

    }
    const handleAddImage = async () => {
        if (!image) {
            alert("Please select an image");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("alt_text", name);
            formData.append("is_primary", isPrimary)
            formData.append("destination_id", destination.id);
            formData.append("display_order", order);
            formData.append("image", image);
            if (mode == "edit") {
                const data = await updateDestinationImage(imageID,formData);
                console.log(data)
            }else{
                const data = await addDestinationImage(formData);
                console.log(data)
            }
            setMode("")
            

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        loadDestinationImages();

    }, []);
    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '1200px' }}>
                <div className="card-body">
                    <p className='h3 card-title text-center mb-4'>Image Management</p>
                    <div>
                        <h3>Add New Image</h3>
                        <div className='mb-3'>
                            <label htmlFor="">Upload Image :</label><br />
                            <input type="file" className='form-control' accept="image/jpeg,image/png,image/webp" onChange={handleImageChange} />
                            {preview && (
                                <div className="mt-3">
                                    <img
                                        src={preview}
                                        alt="Image Preview"
                                        className="imagePreview"
                                    />
                                </div>
                            )}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="">Image Name :</label><br />
                            <input type="text" className='form-control' placeholder='Enter Image Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="">Display Order :</label><br />
                            <input type="text" className='form-control' placeholder='Display Order' value={order} onChange={(e) => setOrder(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="">Primary :&nbsp;&nbsp;</label>
                            <input type="radio" name='primary' value="true" checked={isPrimary === true} onChange={() => setIsPrimary(true)} />Yes &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" name='primary' value="false" checked={isPrimary === false} onChange={() => setIsPrimary(false)} />No
                        </div>
                        <div>
                            <button className='btn btn-primary bgTeal' onClick={(e) => handleAddImage()} >Add</button>
                        </div>
                    </div>
                    <div>
                        <h3>{destination.name}</h3>

                        <div className="destinationGrid">

                            {
                                collection.map((prop) =>
                                    <div key={prop.id} >

                                        <DImageContainer data={prop} edit={getDataToEdit}></DImageContainer>
                                    </div>
                                )
                            }
                        </div>
                        <button className='btn btn-primary bgTeal' >Add Image</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function DImageContainer({ data, edit }) {
    return (<>
        <div className='destinationImageContainer'>

            <img src={`${BASE_URL}${data.image_url}`} alt={data.alt_text} className='destinationImage' />
            <h5>{data.alt_text}</h5>
            <p>Display Order:  {data.display_order}
                <span className={data.is_primary ? "text-info" : ""} style={{ visibility: data.is_primary ? "visible" : "hidden", fontSize: '12px' }}>
                    Primary
                </span>
            </p>

            {/* Action buttons */}
            <div className="imageActions">
                <span onClick={(e) => edit(data)}>
                    Edit <i className="bi bi-pencil-square text-info"></i>
                </span>

                <span>
                    Delete <i className="bi bi-trash3-fill text-danger"></i>
                </span>
            </div>

        </div>

    </>)
}