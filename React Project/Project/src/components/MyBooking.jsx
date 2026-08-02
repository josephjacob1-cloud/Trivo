import { NavLink, Outlet } from "react-router-dom";

export default function MyBooking(){
    return(<>
     <div>

            <div className="subNav">
                <NavLink to={''} end><span>Tour Bookings</span></NavLink>
                <NavLink to={'enquiry'}><span>Enquiry</span></NavLink>
                <NavLink to={'support'}><span>Support</span></NavLink>
                <NavLink to={'approvals'}><span>Approvals</span></NavLink>
            </div>
            <Outlet />
        </div>
    </>)
}