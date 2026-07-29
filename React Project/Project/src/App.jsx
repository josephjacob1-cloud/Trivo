import './css/style.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import { useState } from 'react'
import UserContext from "./components/UserContext"
import Home from './components/Home'
import Footer from './components/Footer'
import Packages from './components/Packages'
import Consultant from './components/Consultant'
import MyBooking from './components/MyBooking'
import Contact from './components/Contact'
import About from './components/About'


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [userName, setUserName] = useState("Guest")
  const [page, setPage] = useState("home")
  const userData = { isLogin, setIsLogin, userName, setUserName, page, setPage }
  return (
    <>
      <div>
        <UserContext.Provider value={userData}>
          <Navbar></Navbar>
          <Packages></Packages>
          <Home></Home>
          
          <About></About>
          <Contact></Contact>
          <MyBooking></MyBooking>
          <Consultant></Consultant>


          <Footer></Footer>
        </UserContext.Provider>

      </div>

    </>
  )
}

export default App
