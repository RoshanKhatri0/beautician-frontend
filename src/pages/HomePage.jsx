import React, {useEffect} from 'react'
import Profile from '../componenets/Profile'
import Cover from '../componenets/Cover'
import axios from 'axios'
import { API } from '../config';


const HomePage = () => {
  //login user data
  const getUserData= async()=>{
    try{
      const res = await axios.post(`${API}/getUserData`,{},{
        headers:{
          Authorization : "Bearer " + localStorage.getItem('token'),
        },
      })
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getUserData()
  },[])
  return (
    <>
      
        <Cover/>

      <Profile />
    </>
  )
}

export default HomePage