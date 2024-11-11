import { useAuthContext } from "../context/Auth.context"
import MainLayout from "../layouts/MainLayout"

const Dashboard =()=>{
    const {user,logoutHandler} = useAuthContext()
    return <MainLayout>
            
                    <div className="w-[60%] my-24 px-10 py-10 mx-auto bg-[--color1]">
                        <h1 className="text-center text-white text-3xl">{user.username}</h1>
                        <h1 className="text-center text-gray-300 text-2xl">{user.email}</h1>
                    
                                <div className="flex items-center justify-center py-2">
                                <button onClick={logoutHandler} className="px-4 py-3 bg-purple-500 rounded-md text-white outline-none border-none mx-auto text-center">Logout</button>
                                </div>
                    </div>
    </MainLayout>
}

export default Dashboard