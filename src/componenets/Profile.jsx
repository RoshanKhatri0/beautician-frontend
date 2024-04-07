import React from 'react'
import { IMG_URL } from '../config';
import { Link, useNavigate } from 'react-router-dom';

const Profile = ({ beauctician}) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="pcard">
          <div className="mail">
          <i className="fa-regular fa-envelope fa-2xl"></i>
          </div>
          <div className="profile-pic">
            <img src={`${IMG_URL}/${beauctician.beautician_profilepic}`} alt="Profile Pic" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">{beauctician.beautician_name}</span>
              <span className="about-me">{beauctician.beautician_bio}</span>
              <span className='text-end text-white'><i className="fa-solid fa-arrow-right fa-xl text-end"  onClick={()=> navigate(`/profile/${beauctician._id}`)}></i></span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <Link to="#"><i className="fa-brands fa-facebook fa-xl"></i></Link>
                <Link to="#"><i className="fa-brands fa-instagram fa-xl"></i></Link>
                <Link to="#"><i className="fa-brands fa-tiktok fa-xl"></i></Link>
              </div>
              <Link to={`/book-appointment/${beauctician._id}`} className="button">Book Now</Link>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Profile