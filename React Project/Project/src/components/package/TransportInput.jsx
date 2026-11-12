
import React from "react";

export default function TransportInput({ transport, setTransport }) {

    const addTransport = () => {
        setTransport(prev => [
            ...prev,
            {
                drop: false,
                type: "",
                pickup: false,
                airportTransfer: false
            }
        ]);
    };

    const updateTransport = (index, field, value) => {
        setTransport(prev =>
            prev.map((item, i) =>
                i === index
                    ? { ...item, [field]: value }
                    : item
            )
        );
    };

    const removeTransport = (index) => {
        setTransport(prev =>
            prev.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="mt-3">

            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">Transport Details</h6>

                <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                    onClick={addTransport}
                >
                    + Add Transport
                </button>
            </div>

            <div
                style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    paddingRight: "10px"
                }}
            >

                {transport.map((item, index) => (

                    <div
                        className="border rounded p-3 mb-2"
                        key={index}
                    >

                        <div className="d-flex justify-content-between align-items-center mb-2">

                            <small className="fw-semibold">
                                Transport {index + 1}
                            </small>

                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger py-0"
                                onClick={() => removeTransport(index)}
                            >
                                Remove
                            </button>

                        </div>

                        <input
                            type="text"
                            className="form-control form-control-sm mb-3"
                            placeholder="Transport Type (e.g. Luxury Tourist Coach)"
                            value={item.type}
                            onChange={e =>
                                updateTransport(index, "type", e.target.value)
                            }
                        />

                        <div className="d-flex flex-wrap gap-4">

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`pickup-${index}`}
                                    checked={item.pickup}
                                    onChange={e =>
                                        updateTransport(
                                            index,
                                            "pickup",
                                            e.target.checked
                                        )
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`pickup-${index}`}
                                >
                                    Pickup
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`drop-${index}`}
                                    checked={item.drop}
                                    onChange={e =>
                                        updateTransport(
                                            index,
                                            "drop",
                                            e.target.checked
                                        )
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`drop-${index}`}
                                >
                                    Drop
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`airport-${index}`}
                                    checked={item.airportTransfer}
                                    onChange={e =>
                                        updateTransport(
                                            index,
                                            "airportTransfer",
                                            e.target.checked
                                        )
                                    }
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`airport-${index}`}
                                >
                                    Airport Transfer
                                </label>
                            </div>

                        </div>

                    </div>

                ))}

                {transport.length === 0 && (
                    <p className="text-muted small">
                        No transport added. Click Add Transport to begin.
                    </p>
                )}

            </div>

        </div>
    );
}
