
import { apiRequest } from "./apiClient";
import { DISABLE_DESTINATION, DESTINATION_CATEGORY, ADD_DESTINATION, GET_DESTINATION } from "./api";

export async function getDestinationCategory() {
  return apiRequest(DESTINATION_CATEGORY);
}

export async function getAllDestinations() {
  return apiRequest(GET_DESTINATION);
}

export async function getDestinationById(id) {
  return apiRequest(`/destination/${id}`);
}

export async function addDestination(destination) {
  return apiRequest(ADD_DESTINATION, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(destination),
  });
}


export async function deleteDestination(id){    
    return apiRequest(`${DISABLE_DESTINATION}/${id}`,{
        method:'PATCH',
    })
}