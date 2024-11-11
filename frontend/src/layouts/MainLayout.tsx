import React, { useEffect, useState } from "react"
import { useAuthContext } from "../context/Auth.context"
import { useLocation, useNavigate } from "react-router-dom"

const MainLayout = ({children}:{children:React.ReactNode})=>{

    const {user} = useAuthContext()
    const [loading,setLaoding] = useState(true)

    const navigate = useNavigate()
    const location = useLocation()

 useEffect(()=>{
    if(!user.email){
        navigate("/login")
        return
    }else{
        setLaoding(false)
    }
 },[user,location])

 if(loading){
    return <div>loading.,..</div>
 }
    return <>
        {children}
    </>
}

export default MainLayout