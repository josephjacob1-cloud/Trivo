
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getPackageById } from "../../api/packageApi";
import { bookPackage } from "../../api/customerApi";
import { BASE_URL } from "../../api/api";


export default function Booking() {    
    const { id } = useParams();
    const navigate = useNavigate();

    const [pack, setPack] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    const [bookingData, setBookingData] = useState({
        travel_date: "",
        number_of_adults: 1,
        number_of_children: 0,
        id:id
    });

    // Load package details
    useEffect(() => {
        const loadPackage = async () => {
            try {
                setLoading(true);
                const data = await getPackageById(id);
                setPack(data);
            } catch (err) {
                console.error(err);
                setError("Unable to load package details.");
            } finally {
                setLoading(false);
            }
        };

        loadPackage();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBookingData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            package_id: Number(id),
            travel_date: bookingData.travel_date,
            number_of_adults: Number(bookingData.number_of_adults),
            number_of_children: Number(bookingData.number_of_children)
        };

        console.log("Booking Data:", data);

        // Booking API integration will be added next.
        try{
            const request = await bookPackage(data);
            console.log("Ticket Booked");
            navigate('/customer/mybooking')
        }catch(error){
            console.log(error)
        }
    };

    if (loading) {
        return <div className="container my-5">Loading package details...</div>;
    }

    if (error || !pack) {
        return (
            <div className="container my-5">
                <div className="alert alert-danger">
                    {error || "Package not found."}
                </div>
            </div>
        );
    }

    const image = pack.coverImage || pack.cover_image;
    const handleBooking = async()=>{
        try{
            const data = await bookPackage(travel_date)
            console.log("Ticket Booked")
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="container my-5">

            <h3 className="mb-4">Complete Your Booking</h3>

            <div className="row g-4">

                {/* PACKAGE INFORMATION */}
                <div className="col-md-5">

                    <div className="card shadow-sm border-0 h-100">

                        {image && (
                            <img
                                src={`${BASE_URL}${image}`}
                                className="card-img-top"
                                alt={pack.name}
                                style={{
                                    height: "250px",
                                    objectFit: "cover"
                                }}
                            />
                        )}

                        <div className="card-body">

                            <h4 className="fw-bold">{pack.name}</h4>

                            <p className="text-muted mb-2">
                                {pack.category}
                            </p>

                            <div className="d-flex justify-content-between mb-3">
                                <span>
                                    <i className="bi bi-calendar3 me-2"></i>
                                    {pack.days} Days
                                </span>

                                <div className="fw-bold text-success">
                                    {pack.price?.currency} {pack.price?.offer}

                                    {pack.price?.original && (
                                        <span className="text-muted text-decoration-line-through ms-2">
                                            {pack.price.currency} {pack.price.original}
                                        </span>
                                    )}

                                    {pack.price?.discount > 0 && (
                                        <span className="badge bg-success ms-2">
                                            {pack.price.discount}% OFF
                                        </span>
                                    )}
                                </div>
                            </div>

                            <hr />

                            <h6>About this Package</h6>

                            <p className="text-muted">
                                {pack.description}
                            </p>

                        </div>
                    </div>

                </div>

                {/* BOOKING FORM */}
                <div className="col-md-7">

                    <div className="card shadow-sm border-0">

                        <div className="card-header bg-info text-white py-3">
                            <h5 className="mb-0">Travel Details</h5>
                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Travel Date
                                    </label>

                                    <input
                                        type="date"
                                        name="travel_date"
                                        className="form-control"
                                        min={new Date().toISOString().split("T")[0]}
                                        value={bookingData.travel_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Number of Adults
                                    </label>

                                    <input
                                        type="number"
                                        name="number_of_adults"
                                        className="form-control"
                                        min="1"
                                        value={bookingData.number_of_adults}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Number of Children
                                    </label>

                                    <input
                                        type="number"
                                        name="number_of_children"
                                        className="form-control"
                                        min="0"
                                        value={bookingData.number_of_children}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="d-flex justify-content-between">

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => navigate(-1)}
                                    >
                                        Back
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-info text-white fw-bold"                                       
                                    >
                                        Confirm
                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
