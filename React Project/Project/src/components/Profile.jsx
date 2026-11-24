
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUserProfile, updateUserProfile, changeUserPassword } from "../api/authAPI";

export default function Profile() {

    const token = localStorage.getItem("access_token");
    const id = localStorage.getItem("userID");

    const [isEditing, setIsEditing] = useState(false);
    const [originalProfile, setOriginalProfile] = useState(null);
    const [profile, setProfile] = useState(null);
    const [profileMessage, setProfileMessage] = useState("");
    const [passwordData, setPasswordData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: ""
    });

    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Redirect if user is not logged in
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Get user details
    const getUserDetails = async () => {
        try {
            const data = await getUserProfile(id);
            console.log("User Profile:", data);
            setProfile(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserDetails();
    }, []);
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;

        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleChangePassword = async () => {

        setPasswordMessage("");
        setPasswordError("");

        if (!passwordData.current_password ||
            !passwordData.new_password ||
            !passwordData.confirm_password) {
            setPasswordError("Please fill in all fields.");
            return;
        }

        // if (passwordData.new_password.length < 8) {
        //     setPasswordError("New password must contain at least 8 characters.");
        //     return;
        // }

        if (passwordData.new_password !== passwordData.confirm_password) {
            setPasswordError("New password and confirm password do not match.");
            return;
        }

        try {
            // API call will be connected here
            const data = await changeUserPassword(id, {
                oldPassword: passwordData.current_password,
                password: passwordData.new_password
            });
            console.log(data)
            setPasswordData({
                current_password: "",
                new_password: "",
                confirm_password: ""
            });

            setPasswordMessage("Password changed successfully.", data);

        } catch (error) {
            setPasswordError(error.message || "Unable to change password.");
        }
    };

    // Handle input changes
    const handleProfileChange = (e) => {
        const { name, value } = e.target;

        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Enable edit mode
    const handleEdit = () => {
        setOriginalProfile({ ...profile });
        setIsEditing(true);
        setProfileMessage("");
    };

    // Cancel editing
    const handleCancel = () => {
        setProfile(originalProfile);
        setOriginalProfile(null);
        setIsEditing(false);
        setProfileMessage("");
    };

    // Save profile
    const handleSaveProfile = async () => {
        try {
            // Connect your update profile API here
            const data =  await updateUserProfile(id,profile);

            setIsEditing(false);
            setOriginalProfile(null);
            setProfileMessage("Profile updated successfully.", data);

        } catch (error) {
            setProfileMessage(error.message || "Unable to update profile.");
        }
    };

    if (!profile) {
        return <div className="p-3">Loading profile...</div>;
    }

    const fields = [
        // { label: "User ID", name: "id", readOnly: true },
        { label: "Full Name", name: "name" },
        { label: "Email Address", name: "email", type: "email" },
        { label: "Phone Number", name: "phone", type: "tel" },
        { label: "Date of Birth", name: "dob", type: "date" },
        { label: "Passport Number", name: "passport" }
    ];

    return (
        <>
            <h3 className="mb-4">Personal Details</h3>

            <div className="card shadow-sm border-0 mb-4">

                <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Personal Information</h5>

                    {!isEditing && (
                        <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={handleEdit}
                        >
                            <i className="bi bi-pencil-square me-2"></i>
                            Edit Profile
                        </button>
                    )}
                </div>

                <div className="card-body p-4">
                    <div className="row g-3">

                        {fields.map(field => (
                            <div className="col-md-6" key={field.name}>
                                <label className="form-label">
                                    {field.label}
                                </label>

                                <input
                                    type={field.type || "text"}
                                    className={`form-control ${!isEditing || field.readOnly
                                        ? "bg-light"
                                        : ""
                                        }`}
                                    name={field.name}
                                    value={profile[field.name] || ""}
                                    readOnly={!isEditing || field.readOnly}
                                    onChange={handleProfileChange}
                                />
                            </div>
                        ))}

                        <div className="col-12">
                            <label className="form-label">Address</label>

                            <textarea
                                className={`form-control ${!isEditing ? "bg-light" : ""
                                    }`}
                                name="address"
                                rows="3"
                                value={profile.address || ""}
                                readOnly={!isEditing}
                                onChange={handleProfileChange}
                            />
                        </div>

                    </div>

                    {isEditing && (
                        <div className="d-flex justify-content-end gap-2 mt-4">

                            <button
                                className="btn btn-light border px-4"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-primary px-4"
                                onClick={handleSaveProfile}
                            >
                                <i className="bi bi-check-lg me-2"></i>
                                Save Changes
                            </button>

                        </div>
                    )}

                    {profileMessage && (
                        <p className="mt-3 mb-0 text-success">
                            {profileMessage}
                        </p>
                    )}

                </div>
            </div>

<div className="card shadow-sm border-0 mb-4">

    <div className="card-header bg-white py-3">
        <h5 className="mb-0">Change Password</h5>
    </div>

    <div className="card-body p-4">

        <div className="row g-3">

            <div className="col-md-6">
                <label className="form-label">Current Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="current_password"
                    value={passwordData.current_password}
                    onChange={handlePasswordChange}
                    placeholder="Enter current password"
                />
            </div>

            <div className="col-md-6">
                <label className="form-label">New Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="new_password"
                    value={passwordData.new_password}
                    onChange={handlePasswordChange}
                    placeholder="Enter new password"
                />
            </div>

            <div className="col-md-6">
                <label className="form-label">Confirm New Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="confirm_password"
                    value={passwordData.confirm_password}
                    onChange={handlePasswordChange}
                    placeholder="Confirm new password"
                />
            </div>

        </div>

        {passwordError && (
            <p className="text-danger mt-3 mb-0">
                {passwordError}
            </p>
        )}

        {passwordMessage && (
            <p className="text-success mt-3 mb-0">
                {passwordMessage}
            </p>
        )}

        <div className="d-flex justify-content-end mt-4">
            <button
                className="btn btn-primary px-4"
                onClick={handleChangePassword}
            >
                Update Password
            </button>
        </div>

    </div>
</div>

        </>
    );
}
