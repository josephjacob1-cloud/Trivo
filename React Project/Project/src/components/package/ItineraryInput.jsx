
import React from "react";

export default function ItineraryInput({ days, items, setItems }) {

    const updateItem = (index, field, value) => {
        setItems(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, [field]: value }
                    : item
            )
        );
    };

    return (
        <div className="mt-3">

            <h6 className="mb-3">Package Itinerary</h6>

            <div
                style={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    paddingRight: "10px"
                }}
            >

                {Array.from(
                    { length: Math.max(0, Number(days) || 0) },
                    (_, index) => {
                        const item = items[index] || {
                            day: index + 1,
                            title: "",
                            description: ""
                        };

                        return (
                            <div
                                className="card mb-3 p-3"
                                key={index}
                            >

                                <h6 className="mb-3">
                                    Day {index + 1}
                                </h6>

                                {/* Day Title */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Day Title
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Enter Day ${index + 1} title`}
                                        value={item.title}
                                        onChange={(e) =>
                                            updateItem(
                                                index,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                {/* Day Description */}
                                <div className="mb-2">
                                    <label className="form-label">
                                        Description
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder={`Enter Day ${index + 1} description`}
                                        value={item.description}
                                        onChange={(e) =>
                                            updateItem(
                                                index,
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                            </div>
                        );
                    }
                )}

            </div>
        </div>
    );
}
