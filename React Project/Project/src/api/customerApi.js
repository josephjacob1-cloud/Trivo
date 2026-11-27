import { apiRequest } from "./apiClient";
import { BOOK_PACKAGE,GET_CUSTOMER_BOOKINGS, SUBMIT_CONTACT  } from "./api";


export async function bookPackage(params) {
  return apiRequest(BOOK_PACKAGE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
}

export async function getCustomerBooking(params) {
     return apiRequest(GET_CUSTOMER_BOOKINGS)
}

export async function submitContact(params) {
  return apiRequest(SUBMIT_CONTACT,{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
  
}