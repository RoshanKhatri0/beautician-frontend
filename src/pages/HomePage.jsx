import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import Profile from '../componenets/Profile'
import { API } from '../config';


const HomePage = () => {
  const [beaucticians, setBeauticians] = useState([])
  const getBeauticianData= async()=>{
    try{
      const res = await axios.get(`${API}/getAllBeautician`,{
        headers:{
          Authorization : "Bearer " + localStorage.getItem('token'),
        },
      })
      if(res.data.success){
        setBeauticians(res.data.data)
      }
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getBeauticianData()
  },[])
  return (
    <>
    {beaucticians && beaucticians.map(beauctician =>(
      <Fragment key={beauctician._id}>
        <Profile beauctician={beauctician}/>
      </Fragment>
      
      
    ))}
    </>
  )
}

export default HomePage