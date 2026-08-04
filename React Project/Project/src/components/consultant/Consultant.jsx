import { NavLink, Outlet } from "react-router-dom"
import '../../css/style.css'
import { useContext } from "react"
import UserContext from "../UserContext"
export default function Consultant() {
    const useData = useContext(UserContext)

    return (<>
        <div>
            <div className="subNav">
                <NavLink to={''} end><span>View Consultant</span></NavLink>
                <NavLink to={'tours'}><span>Assign Tour</span></NavLink>
                <NavLink to={'reports'}><span>Reports</span></NavLink>
                {
                    useData.consultants !== null ?
                    <NavLink to={'addnew'}><span >Edit New Consultant</span></NavLink> :
                    <NavLink to={'addnew'}><span onClick={(e) => useData.setConsultants(null)}>Add New Consultant</span></NavLink>
                }

                {/* <NavLink to={'addnew'}><span onClick={(e) => useData.setConsultants(null)}>
                    {
                        useData.consultants !== null ? 'Edit New Consultant' : 'Add New Consultant'
                    }

                </span></NavLink> */}
            </div>
            <Outlet />
        </div>
    </>)
}