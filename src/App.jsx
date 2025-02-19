import React, { Children } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import GlobalRoutes from './routes/GlobalRoutes'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import LogInPage from './pages/auth/LogInPage'
import SignUpPage from './pages/auth/SignUpPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import PrivateRoute from './routes/PrivateRoute'

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
      path: 'privateroute',
      element: <PrivateRoute/>,
      Children: [
        {
          path: '',
          element: <ProfilePage/>
        }
      ]
    },


  ])

  
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App