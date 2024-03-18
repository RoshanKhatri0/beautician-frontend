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
import PageNotFound from './pages/PageNotFound'
import ApplyBeautician from './pages/ApplyBeautician'
import NotificationPage from './pages/NotificationPage'

const MyRoute = () => {
  const {loading} = useSelector(state=>state.alerts)
  return (
    <>
        <Router>
          {loading ? ( <Spinner/> ) : (
            <Routes>
                    <Route path='' element={<Layout/>}>
                      <Route index element={<ProtectedRoutes> <HomePage/> </ProtectedRoutes>}/>
                      <Route path='/apply-beautician' element={<ProtectedRoutes> <ApplyBeautician/> </ProtectedRoutes>}/>
                      <Route path='/notification' element={<ProtectedRoutes> <NotificationPage/> </ProtectedRoutes>}/>
                    </Route>
                    <Route path='login' element={<PublicRoute><Login/></PublicRoute>} />
                    <Route path='register' element={<PublicRoute><Register/></PublicRoute>} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
          )
          }
              
          </Router>
        
    </>
  )
}

export default MyRoute