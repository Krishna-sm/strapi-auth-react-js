import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'',
                Component:Dashboard
            },
            {
                path:'login',
                Component:LoginPage
            },{
                path:'register',
                Component:RegisterPage
            }
        ]
    }
])