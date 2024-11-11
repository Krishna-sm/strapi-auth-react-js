import { Link } from "react-router-dom"
import { useAuthContext } from "../context/Auth.context"

const Navbar = ()=>{
const { user,logoutHandler} = useAuthContext()
    return <>

<header className="text-white body-font bg-[#201f1f]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Strapi Auth</span>
    </Link>
    {user.email?  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link to={'/'} className="mr-5 ">Home</Link>
      <p className="mr-5 ">{user.username}</p>
      <button  onClick={logoutHandler} className=" mx-2 inline-flex items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 transition-all duration-400 rounded text-base mt-4 md:mt-0">Logout
      </button>
    </nav>:
 <>
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
     <Link to={'/login'} className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 transition-all duration-400 rounded text-base mt-4 md:mt-0  ">Login
     
     </Link>
     <Link to={'/register'} className=" mx-2 inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 transition-all duration-400 rounded text-base mt-4 md:mt-0">Register
     </Link>
     </nav>
 </>
     }
  </div>
</header>
</>

}

export default Navbar