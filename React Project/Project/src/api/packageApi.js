import { apiRequest } from "./apiClient";
import { GET_PACKAGES_CUSTOMERS, GET_ALL_PACKAGES, DISABLE_PACKAGE, ADD_PACKAGE, UPDATE_PACKAGE } from "./api";


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

export async function addPackage(formData){
  return apiRequest(`${ADD_PACKAGE}`,{
    method:"POST",
     headers: {
            "Content-Type": "application/json",
        },
        body: formData,
  })
}