
import {logoutUser} from "../utils/authUtils"
const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

export async function apiRequest(endpoint, options = {}) {
    console.log("API CALL:", endpoint);
    // const logoutUser = () => {
    //     localStorage.removeItem("access_token");
    //     localStorage.removeItem("token_type");
    //     localStorage.removeItem("name");
    //     localStorage.removeItem("role");
    //     localStorage.removeItem("userID");
    //     window.location.href = "/login";
    // };
    try {
        const isFormData = options.body instanceof FormData;

        const headers = {
            ...options.headers,
        };

        if (isFormData) {
            // Browser sets multipart boundary automatically
            delete headers["Content-Type"];
        } else if (options.body && !headers["Content-Type"]) {
            headers["Content-Type"] = "application/json";
        }
        const token = localStorage.getItem("access_token");
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });

        const data = response.status === 204
            ? null
            : await response.json();
        if (response.status === 401) {
            logoutUser();

            throw new Error("Session expired. Please login again.");
        }

        console.log(endpoint, "::", data);

        if (!response.ok) {
            console.error("API Error Details:", data);

            let errorMessage = "Something went wrong";

            if (Array.isArray(data.detail)) {
                errorMessage = data.detail
                    .map(err => `${err.loc?.join(".")}: ${err.msg}`)
                    .join(", ");
            } else if (typeof data.detail === "string") {
                errorMessage = data.detail;
            }

            throw new Error(errorMessage);
        }

        return data;

    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
}