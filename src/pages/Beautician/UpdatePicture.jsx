import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../../redux/features/alertSlice'
import toast from 'react-hot-toast'
import axios from 'axios'
import {API} from '../../config'
import {useParams} from 'react-router-dom'

const UpdatePicture = () => {
  const {user} = useSelector(state => state.user)
  const params = useParams()
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    beautician_profilepic: null,
  });

 
  const handleFileChange = event =>{
    setFormData({...formData, beautician_profilepic:event.target.files[0]})
  }
  const handleSubmit = async e => {
    e.preventDefault();
      dispatch(showLoading());
      
      const formDataToSend = new FormData();
      formDataToSend.append('beautician_profilepic', formData.beautician_profilepic)
      formDataToSend.append('userId', user._id);

      const res = await axios.post(`${API}/b_updatepic/${params.id}`, formDataToSend,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          
        }
      })
      
      dispatch(hideLoading());
  
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/viewbprofile');
        
      } else {
        toast.error(res.data.message);
      }
  };
  return (
    <>
      {
        user && (
          <div className="container p-3 mb-3">
        <h1>Form to Update Your Profile Picture</h1>
        <form onSubmit={handleSubmit}>

          {/* File Inputs */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="profilePic" className="form-label">
                Profile Picture <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                className="form-control"
                id="profilePic"
                name="profilePic"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
            </div>
          </div>
          {/* <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="gallery" className="form-label">
                Gallery
              </label>
              <input
                type="file"
                className="form-control"
                id="gallery"
                name="gallery"
                onChange={handleFileChange}
                accept="image/*"
                multiple
              />
            </div>
          </div> */}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
        )
      }
    </>

  )
}

export default UpdatePicture