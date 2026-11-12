
import React, { useState } from 'react';
import '../../css/style.css'

export default function ArrayInput({
    label,
    items = [],
    setItems,
    placeholder = "Enter an item..."
}) {

    const [input, setInput] = useState("");

    // Add new item
    const handleAdd = () => {
        const value = input.trim();

        if (!value) return;

        // Avoid duplicate items
        const exists = items.some(
            item => item.toLowerCase() === value.toLowerCase()
        );

        if (exists) {
            alert("This item already exists");
            return;
        }

        setItems(prev => [...prev, value]);
        setInput("");
    };

    // Remove item
    const handleRemove = (index) => {
        setItems(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="mb-3">

            <label className="form-label fw-bold">
                {label}
            </label>

            {/* Input and Add button */}
            <div className="input-group mb-2">

                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleAdd();
                        }
                    }}
                />

                <button
                    type="button"
                    className="btn btn-primary bgTeal"
                    onClick={handleAdd}
                    disabled={!input.trim()}
                >
                    <i className="bi bi-plus-lg me-1"></i>
                    Add
                </button>

            </div>

            {/* Display added items */}
            <div className="d-flex flex-wrap gap-2">

                {items.map((item, index) => (

                    <span
                        key={`${item}-${index}`}
                        className="badge bg-light text-dark border p-2 d-flex align-items-center"
                    >
                        {item}

                        <button
                            type="button"
                            className="btn-close ms-2 "
                            style={{ fontSize: "9px" }}
                            onClick={() => handleRemove(index)}
                            aria-label={`Remove ${item}`}
                        />

                    </span>

                ))}

            </div>

            <small className="text-muted">
                {items.length} item(s) added
            </small>

        </div>
    );
}
