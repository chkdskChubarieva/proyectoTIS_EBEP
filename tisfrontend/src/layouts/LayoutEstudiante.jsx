import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Outlet, useNavigate} from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'
import Sidebar from '../components/grupo-empresa/sidebar'
const LayoutEstudiante = () => {
  const {getRol} = AuthUser()
  const navigate = useNavigate()

  useEffect(() => {
    if(getRol()!="estudiante"){
      navigate("/")
    }
  },[])
  
  return (
    <>
    <Header/>
      <Navbar/>
      <section className='conteiner-GE'>
        <div className="content-container">
            <Sidebar />
            <Outlet/>
        </div>
      </section>
    </>
  )
}

export default LayoutEstudiante