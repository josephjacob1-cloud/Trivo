import { apiRequest } from "./apiClient";
import { GET_DESTINATION_IMAGES_ID, ADD_DESTINATION_IMAGES, UPDATE_DESTINATION_IMAGES } from "./api";

export async function getDestinationImageById(id) {
    return apiRequest(`${GET_DESTINATION_IMAGES_ID}/${id}`);
}

export async function addDestinationImage(params) {
    console.log("FormData contents:");

    for (const [key, value] of params.entries()) {
        console.log(key, value);
    }
    return apiRequest(ADD_DESTINATION_IMAGES, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: params,
    });
}

export async function updateDestinationImage(id, params) {
     console.log("FormData contents:");

    for (const [key, value] of params.entries()) {
        console.log(key, value);
    }
    return apiRequest(`${UPDATE_DESTINATION_IMAGES}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: params,
    });
}