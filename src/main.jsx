import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Register } from './pages/Register/Register'
import App from './App'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'
import { Users } from './pages/Users/Users'
import { Profile } from './pages/Profile/Profile'
//import { AuthProvider } from 'contexs/AuthContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "profile",
        element: <Profile />,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
