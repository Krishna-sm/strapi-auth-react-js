import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface User{
    id:string
    username:string
    email:string
} 
interface AuthProps{

    registerUser:(username:string,email:string,password:string)=>void
    user:User
    logoutHandler:()=>void
    loginUser:(email:string,password:string)=>void


}

export const AuthContext= createContext<AuthProps>({
    user:{
        id:'',
        username:'',
        email:''
    },
    registerUser(){},
    logoutHandler(){},
    loginUser(){}
})

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}

export const  AuthContextProvider =({children}:{children:ReactNode})=>{

    const navigate = useNavigate()
    const [user,setUser] = useState<User>({
        id:'',
        username:'',
        email:''
    })


    const registerUser=async(username:string,email:string,password:string)=>{
                const response = await axios.post("http://localhost:1337/api/auth/local/register",{
                        username,
                        email,
                        password
                })

                const data = await response.data;
                localStorage.setItem("token",data.jwt)
                // console.log(":Register User---> ",data);
                setUser({
                    id:data.user.documentId,
                    username:data.user.username,
                    email:data.user.email
                })
                
    }



    
    const loginUser=async(email:string,password:string)=>{
        const response = await axios.post("http://localhost:1337/api/auth/local",{
                
            identifier: email,
                password
        })

        const data = await response.data;
        localStorage.setItem("token",data.jwt)
        // console.log(":Register User---> ",data);
        setUser({
            id:data.user.documentId,
            username:data.user.username,
            email:data.user.email
        })
        
}




    const logoutHandler =()=>{
        try {
            
            localStorage.removeItem("token");
            toast.success("logout Success")
            setUser({
                id:'',
                username:'',
                email:''
            })
            navigate("/login")
        } catch (error:any) {
            toast.error(error.message)
        }
    }

   const fetchUserDetails =async(token:string)=>{
            try {
                
                    const response =await axios.get("http://localhost:1337/api/users/me",{
                        headers:{
                            'Authorization':'Bearer '+token
                        }
                    })

                    const data= await response.data;
                    setUser({
                        id:data.documentId,
                        username:data.username,
                        email:data.email
                    })
                    

            } catch (error:any) {
                        toast.error(error.response.data.error.message)
            }
   } 

   useEffect(()=>{
    const token = localStorage.getItem("token") || '';
    if(token){
        fetchUserDetails(token);
    }
   },[])


    return <AuthContext.Provider value={{user,registerUser,logoutHandler,loginUser}}>
        {children}
    </AuthContext.Provider>
}