import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import Profile from './Profile'
import { API } from '../config';

const ProfileList = () => {
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
    <section className='profilesec p-3' id='profile'>
      <div className="container">
        <h1 className='mb-4 text-center'>Our Beauticians</h1>
        <div className="container-fluid my-3">
          <div className="row row-cols-1 row-cols-md-4 g-4">
        {beaucticians && beaucticians.map(beauctician =>(
        <Fragment key={beauctician._id}>
          <Profile beauctician={beauctician}/>
        </Fragment>
        ))}
        
        </div>
        </div>
        
      </div>
    </section>  
  )
}

export default ProfileList