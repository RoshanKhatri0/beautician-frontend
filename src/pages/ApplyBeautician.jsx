import React, { useState } from 'react';

const ApplyBeautician = () => {
  const [formData, setFormData] = useState({
    // Personal Details
    name: '',
    email: '',
    phoneNumber: '',
    instagram: '',
    facebook: '',
    tiktok: '',

    // Professional Details
    bio: '',
    experience: '',
    pricing: '',
    servicesOffered: '',
    workingHours: '',
    certification: '',
    profilePic: null,
    gallery: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'profilePic') {
      // If profilePic, store the first selected file
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else if (name === 'gallery') {
      // If gallery, store an array of all selected files
      const fileList = Array.from(files);
      setFormData({
        ...formData,
        [name]: fileList,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset form fields
    setFormData({
      // Personal Details
      name: '',
      email: '',
      phoneNumber: '',
      instagram: '',
      facebook: '',
      tiktok: '',

      // Professional Details
      bio: '',
      experience: '',
      pricing: '',
      servicesOffered: '',
      workingHours: '',
      certification: '',
      profilePic: null,
      gallery: [],
    });
    // Reset file input fields
    document.getElementById('profilePic').value = '';
    document.getElementById('gallery').value = '';
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
              value={formData.name}
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
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
              value={formData.bio}
              onChange={handleChange}
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
              value={formData.experience}
              onChange={handleChange}
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
              value={formData.pricing}
              onChange={handleChange}
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
              value={formData.servicesOffered}
              onChange={handleChange}
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
              value={formData.workingHours}
              onChange={handleChange}
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
              value={formData.certification}
              onChange={handleChange}
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
        <div className="row mb-3">
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
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyBeautician;
