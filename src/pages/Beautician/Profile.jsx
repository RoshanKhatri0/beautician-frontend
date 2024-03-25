import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {API} from '../../config'
import {useParams} from 'react-router-dom'

const Profile = () => {
  const {user} = useSelector(state => state.user)
  const [beautician, setBeautician] = useState(null)
  const params = useParams()

  // get B details
  const getBeauticianInfo = async() =>{
    try {
      const res = await axios.post(`${API}/getBeauticianInfo`,{userId: params.id},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(res.data.success){
        setBeautician(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getBeauticianInfo()
  },[])
  return (
    <div>Profile</div>
  )
}

export default Profile