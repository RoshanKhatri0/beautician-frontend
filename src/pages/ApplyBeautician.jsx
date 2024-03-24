import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
import axios from 'axios'
import { API } from '../config'

const ApplyBeautician = () => {
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // Personal Details
    beautician_name: '',
    email: '',
    phoneNumber: '',
    instagram: '',
    facebook: '',
    tiktok: '',

    // Professional Details
    beautician_bio: '',
    experience: '',
    pricing: '',
    services_offered: '',
    working_hours: '',
    certifications: '',
    beautician_profilepic: null,
    gallery: [],
  });

  const handleChange = name => event => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   if (name === 'beautician_profilepic') {
  //     // If profilePic, store the first selected file
  //     setFormData({
  //       ...formData,
  //       [name]: files[0],
  //     });
  //   } else if (name === 'gallery') {
  //     // If gallery, store an array of all selected files
  //     const fileList = Array.from(files);
  //     setFormData({
  //       ...formData,
  //       [name]: fileList,
  //     });
  //   }
  // };
  const handleFileChange = event =>{
    setFormData({...formData, beautician_profilepic:event.target.files[0]})
  }
  const {beautician_name,beautician_bio,experience,gallery,pricing,services_offered,working_hours,certifications} = formData
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      
      // Create a FormData object to store all form data, including files
      const formDataToSend = new FormData();
      formDataToSend.append('beautician_name', beautician_name)
      formDataToSend.append('beautician_bio', beautician_bio)
      formDataToSend.append('experience', experience)
      formDataToSend.append('pricing', pricing)
      formDataToSend.append('services_offered', services_offered)
      formDataToSend.append('working_hours', working_hours)
      formDataToSend.append('certifications', certifications)
      formDataToSend.append('beautician_profilepic', formData.beautician_profilepic)
      formDataToSend.append('userId', user._id);

  
      // // Append userId separately
      // formDataToSend.append('userId', user._id);
  
      // Send the form data using axios
      const res = await axios.post(`${API}/apply-beautician`, formDataToSend,  {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      dispatch(hideLoading());
  
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/');
        // Reset form fields
        setFormData({
          // Personal Details
          beautician_name: '',
          email: '',
          phoneNumber: '',
          instagram: '',
          facebook: '',
          tiktok: '',

          // Professional Details
          beautician_bio: '',
          experience: '',
          pricing: '',
          services_offered: '',
          working_hours: '',
          certifications: '',
          beautician_profilepic: null,
          gallery: [],
        });
      } else {
        toast.error(res.data.message);
      }
  
      // Reset file input fields
      document.getElementById('profilePic').value = '';
      document.getElementById('gallery').value = '';
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  

  return (
    <div className="container">
      <h1>Form to be a Beautician</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <h2>Personal Details</h2>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={beautician_name}
              onChange={handleChange('beautician_name')}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange('email')}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number 
              {/* <span className="text-danger">*</span> */}
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              // required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="instagram" className="form-label">
              Instagram
            </label>
            <input
              type="text"
              className="form-control"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="facebook" className="form-label">
              Facebook
            </label>
            <input
              type="text"
              className="form-control"
              id="facebook"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="tiktok" className="form-label">
              TikTok
            </label>
            <input
              type="text"
              className="form-control"
              id="tiktok"
              name="tiktok"
              value={formData.tiktok}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Professional Details */}
        <h2>Professional Details</h2>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <textarea
              className="form-control"
              id="bio"
              name="bio"
              value={beautician_bio}
              onChange={handleChange('beautician_bio')}
            ></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="experience" className="form-label">
              Experience
            </label>
            <input
              type="text"
              className="form-control"
              id="experience"
              name="experience"
              value={experience}
              onChange={handleChange('experience')}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="pricing" className="form-label">
              Pricing
            </label>
            <input
              type="text"
              className="form-control"
              id="pricing"
              name="pricing"
              value={pricing}
              onChange={handleChange('pricing')}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="servicesOffered" className="form-label">
              Services Offered
            </label>
            <input
              type="text"
              className="form-control"
              id="servicesOffered"
              name="servicesOffered"
              value={services_offered}
              onChange={handleChange('services_offered')}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="workingHours" className="form-label">
              Working Hours
            </label>
            <input
              type="text"
              className="form-control"
              id="workingHours"
              name="workingHours"
              value={working_hours}
              onChange={handleChange('working_hours')}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="certification" className="form-label">
              Certification
            </label>
            <input
              type="text"
              className="form-control"
              id="certification"
              name="certification"
              value={certifications}
              onChange={handleChange('certifications')}
            />
          </div>
        </div>

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
  );
};

export default ApplyBeautician;
