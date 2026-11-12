export const BASE_URL ="http://127.0.0.1:8000/";

export const BASE_JSON_URL = "http://localhost:3000"


// USER

export const LOGIN_URL=`/auth/login`
export const SIGNUP_URL=`/auth/signup`

// PACKAGES

//CUSTOMER VIEW
export const GET_PACKAGES_CUSTOMERS=`/customer/viewCustomerPackagesDetail`;

//Admin view show all
export const GET_ALL_PACKAGES=`/packages/getPackages`;

export const DISABLE_PACKAGE=`/packages/disablePackage`;
export const ADD_PACKAGE = `/packages/addPackage`;
export const UPDATE_PACKAGE = `/packages/updatePackage`;




// CONSULTANT



// AGENT

// DESTINATION

export const DESTINATION_CATEGORY = `/destination/viewDestinationCategories`;     //"http://localhost:3000/destinationCategories" //"destination/viewDestinationCategories"
export const ADD_DESTINATION = `/destination/addDestination`;
export const GET_DESTINATION = `/destination/getDestination`;
export const DISABLE_DESTINATION = `/destination/disableDestination`;
export const UPDATE_DESTINATION = `/destination/updateDestination`;


export const GET_DESTINATION_IMAGES_ID = `/destination/viewDestinationImages`;
export const ADD_DESTINATION_IMAGES = `/destination/addDestinationImage`;
export const UPDATE_DESTINATION_IMAGES= `/destination/updateDestinationImage`;
export const DELETE_DESTINATION_IMAGES = `/destination/deleteDestinationImage`;