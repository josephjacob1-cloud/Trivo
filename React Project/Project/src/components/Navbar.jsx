import { useContext } from "react"
import UserContext from "./UserContext"
import Logo from "../assets/logo-noBG.png"
import LogoBG from "../assets/logo.png"
import '../css/style.css'

export default function Navbar() {
    const user = useContext(UserContext)
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

                    
                    <div className="collapse navbar-collapse" id="trivoNavbarMenu">
                        <ul className="navbar-nav ms-auto fw-medium gap-2">
                            <li className="nav-item">
                                <a className="nav-link activ" aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Packages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Consultant</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >My Bookings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >
                                    {
                                        !user.isLogin ? 'Login' :'LogOut'
                                    }
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div> 
       
    </>)
}