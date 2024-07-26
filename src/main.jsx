import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import App from './App'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'
import { AuthProvider } from 'contexs/AuthContext'

const rooter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider rooter={rooter} />
    </AuthProvider>
  </React.StrictMode>,
)
