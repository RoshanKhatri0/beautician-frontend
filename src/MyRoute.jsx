import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './componenets/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import Spinner from './componenets/Spinner'

const MyRoute = () => {
  const {loading} = useSelector(state=>state.alerts)
  return (
    <>
        <Router>
          {loading ? ( <Spinner/> ) : (
            <Routes>
                    <Route path='' element={<Layout/>}>
                      <Route index element={<HomePage/>}/>
                    </Route>
                    <Route path='login' element={<Login/>} />
                    <Route path='register' element={<Register/>} />

                </Routes>
          )
          }
              
          </Router>
        
    </>
  )
}

export default MyRoute