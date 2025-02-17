import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import GlobalRoutes from './routes/globalRoutes'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import LogInPage from './pages/auth/LogInPage'
import SignUpPage from './pages/auth/SignUpPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import ProfileRoute from './routes/ProfileRoute'
import SettingsPage from './pages/SettingsPage'

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "",
      element: <GlobalRoutes/>,
      children: [
        {
          path: "",
          element: <HomePage/>
        },
        {
          path: '/cart',
          element: <CartPage/>
        },
        {
          path: '/about',
          element: <AboutPage/>
        },
        {
          path: '/contact',
          element: <AboutPage/>
        },
        {
          path: '/login',
          element: <LogInPage/>
        },
        {
          path: '/signup',
          element: <SignUpPage/>
        }
      ]
    },




    {
      path: '/profileroutes',
      element: <ProfileRoute/>,
      children:[
        {
          path: '',
          element: <ProfilePage/>
        },
        {
          path: '/profileroutes/settings',
          element: <SettingsPage/>
        }
      ]
    }
  ])

  
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App