import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './authProvider/AuthProvider.jsx'
import './index.css'
import router from './router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import 'react-tooltip/dist/react-tooltip.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
