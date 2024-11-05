import {Outlet, useNavigate} from 'react-router-dom'
import AuthUser from '../pageauth/AuthUser'
import { useEffect } from 'react'
const LayoutDocente = () => {
  const {getRol} = AuthUser()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(getRol()!="docente"){
      navigate("/")
    }
  },[getRol, navigate])

  return (
    <>
    <Outlet></Outlet>
    </>
  )
}

export default LayoutDocente