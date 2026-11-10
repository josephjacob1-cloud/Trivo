
const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

export async function apiRequest(endpoint, options = {}) {
    console.log("API CALL:", endpoint);

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

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });

        if (response.status === 204) {
            return null;
        }

        const data = await response.json();

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