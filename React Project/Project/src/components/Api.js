import axios from "axios"

export const BASE_URL = 'http://127.0.0.1:8000/'
export const BASE_JSON_URL = "http://localhost:3000"

export const PACKAGE_API = "/packages"
export const LOGIN_API = "/auth/login"
export const REGISTER_API = "/auth/register"
export const DESTINATION_CATEGORY = "http://localhost:3000/destinationCategories" //"destination/viewDestinationCategories"

// const CONSULTANT_PATH = 'http://localhost:3000/consultant'
const CONSULTANT_PATH = 'http://127.0.0.1:8000/auth/signup'

const ASSIGNTOUR_PATH = 'http://localhost:3000/assignTours'
const APPROVAL_PATH = 'http://localhost:3000/approvals'
const ENQUIREY_PATH = 'http://localhost:3000/enquiry'
const SUPPORT_PATH = 'http://localhost:3000/support'
const BOOKING_PATH = 'http://localhost:3000/booking'
const PACKAGES_PATH = 'http://localhost:3000/packages'

export const getConsultant= ()=>{
    return axios.get(CONSULTANT_PATH)
}