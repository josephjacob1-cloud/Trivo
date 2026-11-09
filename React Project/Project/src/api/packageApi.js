import { apiRequest } from "./apiClient";
import { GET_PACKAGES_CUSTOMERS, GET_ALL_PACKAGES, DISABLE_PACKAGE } from "./api";


export async function getPackages() {
  return apiRequest(GET_PACKAGES_CUSTOMERS);
}

//ADMIN VIEW
export async function getAllPackages() {
  return apiRequest(GET_ALL_PACKAGES);
}


export async function disablePackage(id) {
  return apiRequest(`${DISABLE_PACKAGE}/${id}`, {
    method: 'PATCH',
  })
}