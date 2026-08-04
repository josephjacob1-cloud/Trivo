import axios from "axios"
const CONSULTANT_PATH = 'http://localhost:3000/consultant'
const ASSIGNTOUR_PATH = 'http://localhost:3000/assignTours'
const APPROVAL_PATH = 'http://localhost:3000/approvals'
const ENQUIREY_PATH = 'http://localhost:3000/enquiry'
const SUPPORT_PATH = 'http://localhost:3000/support'
const BOOKING_PATH = 'http://localhost:3000/booking'
const PACKAGES_PATH = 'http://localhost:3000/packages'

export const getConsultant= ()=>{
    return axios.get(CONSULTANT_PATH)
}