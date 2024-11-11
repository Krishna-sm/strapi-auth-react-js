import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/Auth.context'
const App = ()=>{
    return <AuthContextProvider>
    <Navbar/>
      <Outlet/>
    </AuthContextProvider>
}

export default App