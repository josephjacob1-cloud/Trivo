
import React, { useEffect } from "react";

export default function HotelInput({
    destinations,
    selectedDestinationIds,
    hotel,
    setHotel
}) {

    // Get selected destination objects
    const selectedDestinations = destinations.filter(destination =>
        selectedDestinationIds.some(
            id => Number(id) === Number(destination.id)
        )
    );

    // Synchronize hotel entries with selected destinations
    useEffect(() => {
        setHotel(prev => {
            const selectedIds = selectedDestinationIds.map(Number);

            // Keep hotels belonging to selected destinations
            let updatedHotels = prev.filter(item =>
                selectedIds.includes(Number(item.destination_id))
            );

            // Add one empty hotel for destinations without an entry
            selectedIds.forEach(id => {
                const exists = updatedHotels.some(
                    item => Number(item.destination_id) === id
                );

                if (!exists) {
                    updatedHotels.push({
                        destination_id: id,
                        name: "",
                        checkIn: "",
                        category: "",
                        checkOut: "",
                        roomType: ""
                    });
                }
            });

            return updatedHotels;
        });
    }, [selectedDestinationIds, setHotel]);

    // Update hotel field
    const updateHotel = (index, field, value) => {
        setHotel(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, [field]: value }
                    : item
            )
        );
    };

    // Add another hotel for a destination
    const addHotel = (destinationId) => {
        setHotel(prev => [
            ...prev,
            {
                destination_id: Number(destinationId),
                name: "",
                checkIn: "",
                category: "",
                checkOut: "",
                roomType: ""
            }
        ]);
    };

    // Remove a hotel
    const removeHotel = (index) => {
        setHotel(prev =>
            prev.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="mt-3">

            <h6 className="mb-3">Hotel Details</h6>

            <div
                style={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    paddingRight: "10px"
                }}
            >

                {selectedDestinations.map(destination => {

                    const destinationHotels = hotel
                        .map((item, index) => ({ ...item, index }))
                        .filter(
                            item =>
                                Number(item.destination_id) ===
                                Number(destination.id)
                        );

                    return (
                        <div
                            className="border rounded p-3 mb-3"
                            key={destination.id}
                        >

                            {/* Destination heading */}
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="mb-0">
                                    {destination.name}
                                </h6>

                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() =>
                                        addHotel(destination.id)
                                    }
                                >
                                    + Add Hotel
                                </button>
                            </div>

                            {destinationHotels.map(item => (

                                <div
                                    className="border rounded p-2 mb-2"
                                    key={item.index}
                                >

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <small className="fw-semibold">
                                            Hotel {destinationHotels.indexOf(item) + 1}
                                        </small>

                                        {destinationHotels.length > 1 && (
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-danger py-0"
                                                onClick={() =>
                                                    removeHotel(item.index)
                                                }
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    <div className="row g-2">

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Hotel Name"
                                                value={item.name}
                                                onChange={e =>
                                                    updateHotel(
                                                        item.index,
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Category (e.g. 4 Star)"
                                                value={item.category}
                                                onChange={e =>
                                                    updateHotel(
                                                        item.index,
                                                        "category",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Room Type"
                                                value={item.roomType}
                                                onChange={e =>
                                                    updateHotel(
                                                        item.index,
                                                        "roomType",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Check-in"
                                                value={item.checkIn}
                                                onChange={e =>
                                                    updateHotel(
                                                        item.index,
                                                        "checkIn",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                placeholder="Check-out"
                                                value={item.checkOut}
                                                onChange={e =>
                                                    updateHotel(
                                                        item.index,
                                                        "checkOut",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    );
                })}

                {selectedDestinations.length === 0 && (
                    <p className="text-muted small">
                        Please select at least one destination to add hotel details.
                    </p>
                )}

            </div>
        </div>
    );
}
