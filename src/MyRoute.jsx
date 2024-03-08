import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './componenets/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import Spinner from './componenets/Spinner'
import ProtectedRoutes from './componenets/ProtectedRoutes'
import PublicRoute from './componenets/PublicRoute'

const MyRoute = () => {
  const {loading} = useSelector(state=>state.alerts)
  return (
    <>
        <Router>
          {loading ? ( <Spinner/> ) : (
            <Routes>
                    <Route path='' element={<Layout/>}>
                      <Route index element={
                      <ProtectedRoutes> 
                        <HomePage/>
                      </ProtectedRoutes>
                      }/>
                    </Route>
                    <Route path='login' element={<PublicRoute><Login/></PublicRoute>} />
                    <Route path='register' element={<PublicRoute><Register/></PublicRoute>} />

                </Routes>
          )
          }
              
          </Router>
        
    </>
  )
}

export default MyRoute