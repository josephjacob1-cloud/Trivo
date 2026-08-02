import { useContext } from "react"
import UserContext from "./UserContext"
import Logo from "../assets/logo-noBG.png"
import LogoBG from "../assets/logo.png"
import '../css/style.css'
import { NavLink, replace, useNavigate } from "react-router-dom"

export default function Navbar() {
    const user = useContext(UserContext)
    const navigate = useNavigate()
    const onLogOut=()=>{
        user.setIsLogin(false);
        user.setUserName("Guest");
        //navigate('login')
    }
    return (<>

        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
                <div className="container-md">

                    <a className="navbar-brand d-flex align-items-center fw-bold fs-4" href="#home">
                        <img
                            src={LogoBG}
                            alt="Logo"
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-2 rounded-circle"
                        />
                        Trivo World
                    </a>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#trivoNavbarMenu"
                        aria-controls="trivoNavbarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="NavBar">
                        <NavLink to={''} end><span className="nav-link">Home</span></NavLink>
                        <NavLink to={'packages'}><span className="nav-link" >Packages</span></NavLink>
                        <NavLink to={'consultant'}><span className="nav-link" >Consultant</span></NavLink>                        
                        <NavLink to={'mybooking'}><span className="nav-link" >My Bookings</span></NavLink>
                        <NavLink to={'contact'}><span className="nav-link" >Contact</span></NavLink>
                        <NavLink to={'about'}><span className="nav-link" >About</span></NavLink>
                       <NavLink to={'login'}><span className="nav-link" onClick={(e)=>onLogOut()} style={{cursor:'pointer'}}>
                            {
                                !user.isLogin ? 'Login' : 'LogOut'
                            }
                        </span></NavLink>

                    </div>
                    <span>User: {user.userName}</span>
                    {/* <div className="collapse navbar-collapse" id="trivoNavbarMenu">
                        <ul className="navbar-nav ms-auto fw-medium gap-2">
                            <li className="nav-item">
                                <NavLink to={''}><span className="nav-link activ">Home</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'packages'}><span className="nav-link" >Packages</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'consultant'}><span className="nav-link" >Consultant</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'mybooking'}><span className="nav-link" >My Bookings</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'contact'}><span className="nav-link" >Contact</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'about'}><span className="nav-link" >About</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'login'}><span className="nav-link" >
                                    {
                                        !user.isLogin ? 'Login' :'LogOut'
                                    }
                                </span></NavLink>
                            </li>
                        </ul>
                    </div> */}

                </div>
            </nav>
        </div>

    </>)
}