import React, { Children } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import GlobalRoutes from './routes/GlobalRoutes'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import LogInPage from './pages/auth/LogInPage'
import SignUpPage from './pages/auth/SignUpPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import CategoryPage from './pages/CategoryPage'
import PrivateRoute from './routes/PrivateRoute'
import CheckOutPage from './pages/CheckOutPage'
import DetailsPage from './pages/DetailsPage'

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
          path: "/category",
          element: <CategoryPage />
        },
        {
          path: '/cart',
          element: <CartPage/>,
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
          path: '/signup',
          element: <SignUpPage/>
        },
        {
          path: '/login',
          element: <LogInPage/>
        },
        {
          path: 'privateroute',
          element: <PrivateRoute/>,
          Children: [
            {
              path: 'profile',
              element: <ProfilePage/>
            }
          ]
        },
      ]
    },

    {
      path: "/checkout",
      element: <CheckOutPage/>,
    },
    {
      path: '/productDetails',
      element: <DetailsPage/>
    }
    

    


  ])

  
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App