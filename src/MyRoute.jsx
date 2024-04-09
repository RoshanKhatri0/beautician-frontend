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
import Users from './pages/admin/Users'
import Beautician from './pages/admin/Beautician'
import UpdateProfile from './pages/Beautician/UpdateProfile'
import BookingPage from './pages/Beautician/BookingPage'
import BeauticianAppointments from './pages/Beautician/BeauticianAppointments'
import Appointments from './pages/Appointments'
import Services from './componenets/Services'
import ProfileList from './componenets/ProfileList'
import AboutUs from './pages/AboutUs'
import ViewProfile from './pages/Beautician/ViewProfile'
import UpdatePicture from './pages/Beautician/UpdatePicture'

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
                      <Route path='/profile/:id' element={<ProtectedRoutes> <UpdateProfile/> </ProtectedRoutes>}/>
                      <Route path='/updatepic/:id' element={<ProtectedRoutes> <UpdatePicture/> </ProtectedRoutes>}/>
                      <Route path='/viewbprofile' element={<ProtectedRoutes> <ViewProfile/> </ProtectedRoutes>}/>
                      <Route path='/book-appointment/:beauticianId' element={<ProtectedRoutes> <BookingPage/> </ProtectedRoutes>}/>
                      <Route path='/users' element={<ProtectedRoutes> <Users/> </ProtectedRoutes>}/>
                      <Route path='/beauticians' element={<ProtectedRoutes> <Beautician/> </ProtectedRoutes>}/>
                      <Route path='/notification' element={<ProtectedRoutes> <NotificationPage/> </ProtectedRoutes>}/>
                      <Route path='/appointments' element={<ProtectedRoutes> <Appointments/> </ProtectedRoutes>}/>
                      <Route path='/beautician-appointments' element={<ProtectedRoutes> <BeauticianAppointments/> </ProtectedRoutes>}/>
                      <Route path='/services' element={<ProtectedRoutes> <Services/> </ProtectedRoutes>}/>
                      <Route path='/profile' element={<ProtectedRoutes> <ProfileList/> </ProtectedRoutes>}/>
                      <Route path='/about' element={<ProtectedRoutes> <AboutUs/> </ProtectedRoutes>}/>
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