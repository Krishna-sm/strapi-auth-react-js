import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer/>
  <RouterProvider router={router} />
  </StrictMode>,
)
