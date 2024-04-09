import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import toast from 'react-hot-toast';
import axios from 'axios';
import { API } from '../../config';

const UpdateProfile = () => {
  const { user } = useSelector(state => state.user);
  const [beautician, setBeautician] = useState(null);
  const params = useParams();

  // get B details
  const getBeauticianInfo = async () => {
    try {
      const res = await axios.post(
        `${API}/getBeauticianInfo`,
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (res.data.success) {
        setBeautician(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBeauticianInfo();
  }, []);

  useEffect(() => {
    if (beautician) {
      setFormData({
        beautician_name: beautician.beautician_name || '',
        email: beautician.contact_info ? beautician.contact_info.email || '' : '',
        phoneNumber: beautician.contact_info ? beautician.contact_info.phoneNumber || '' : '',
        instragram: beautician.socials ? beautician.socials.instragram || '' : '',
        facebook: beautician.socials ? beautician.socials.facebook || '' : '',
        tiktok: beautician.socials ? beautician.socials.tiktok || '' : '',
        beautician_bio: beautician.beautician_bio || '',
        experience: beautician.experience || '',
        pricing: beautician.pricing || '',
        services_offered: beautician.services_offered || '',
        working_hours: beautician.working_hours || '',
        certifications: beautician.certifications || '',
      });
    }
  }, [beautician]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Personal Details
    beautician_name: '',
    email: '',
    phoneNumber: '',
    instragram: '',
    facebook: '',
    tiktok: '',

    // Professional Details
    beautician_bio: '',
    experience: '',
    pricing: '',
    services_offered: '',
    working_hours: '',
    certifications: '',
  });

  const handleChange = name => event => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(showLoading());

    try {
      const res = await axios.post(
        `${API}/b_updateprofile/${params.id}`,
        {
            beautician_name: formData.beautician_name,
            beautician_bio: formData.beautician_bio,
            experience: formData.experience,
            pricing: formData.pricing,
            services_offered: formData.services_offered,
            working_hours: formData.working_hours,
            certifications: formData.certifications,
            contact_info: { 
              email: formData.email,
              phoneNumber: formData.phoneNumber
            },
            socials: { 
              facebook: formData.facebook,
              instragram: formData.instragram,
              tiktok: formData.tiktok
            },
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      dispatch(hideLoading());

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/viewbprofile');
        // Reset form fields
        setFormData({
          // Personal Details
          beautician_name: '',
          email: '',
          phoneNumber: '',
          instragram: '',
          facebook: '',
          tiktok: '',

          // Professional Details
          beautician_bio: '',
          experience: '',
          pricing: '',
          services_offered: '',
          working_hours: '',
          certifications: '',
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      dispatch(hideLoading());
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {user && (
        <div className="container p-3 mb-3">
          <h1>Form to Update Your Profile</h1>
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
                  value={formData.beautician_name}
                  onChange={handleChange('beautician_name')}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
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
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange('phoneNumber')}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="instragram" className="form-label">
                  Instagram
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="instragram"
                  name="instragram"
                  value={formData.instragram}
                  onChange={handleChange('instragram')}
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
                  onChange={handleChange('facebook')}
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
                  onChange={handleChange('tiktok')}
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
                  value={formData.beautician_bio}
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
                  value={formData.experience}
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
                  value={formData.pricing}
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
                  value={formData.services_offered}
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
                  value={formData.working_hours}
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
                  value={formData.certifications}
                  onChange={handleChange('certifications')}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateProfile;
