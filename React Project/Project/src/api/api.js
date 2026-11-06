export const BASE_URL ="http://127.0.0.1:8000/";

export const BASE_JSON_URL = "http://localhost:3000"


// USER

export const LOGIN_URL=`/auth/login`
export const SIGNUP_URL=`/auth/signup`

// CUSTOMER

export const GET_PACKAGES_CUSTOMERS=`${BASE_URL}customer/viewCustomerPackagesDetail`




// CONSULTANT



// AGENT

// DESTINATION

export const DESTINATION_CATEGORY = `/destination/viewDestinationCategories`;     //"http://localhost:3000/destinationCategories" //"destination/viewDestinationCategories"
export const ADD_DESTINATION = `/destination/addDestination`;
export const GET_DESTINATION = `/destination/getDestination`
export const DISABLE_DESTINATION = `/destination/disableDestination`