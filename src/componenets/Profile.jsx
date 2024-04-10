import React from 'react'
import { IMG_URL } from '../config';
import { Link} from 'react-router-dom';

const Profile = ({ beauctician}) => {
  return (
    <>
    <div className="col">
      <div className="container">
        <div className="pcard">
          <div className="mail">
          <a href={`mailto:${beauctician.contact_info.email}`}>
          <i className="fa-regular fa-envelope fa-2xl"></i>
          </a>
          </div>
          <div className="profile-pic">
            <img src={`${IMG_URL}/${beauctician.beautician_profilepic}`} alt="Profile Pic" />
          </div>
          <div className="bottom">
            <div className="content">
              <span className="name">{beauctician.beautician_name}</span>
              <span className="about-me">{beauctician.beautician_bio}</span>
              <span className='text-end'><Link to={`/viewbeautician/${beauctician._id}`}><i className="fa-solid fa-arrow-right fa-xl"></i></Link></span>
            </div>
            <div className="bottom-bottom">
              <div className="social-links-container">
                <a href={beauctician.socials.facebook} target='_blank'><i className="fa-brands fa-facebook fa-xl"></i></a>
                <a href={beauctician.socials.instragram} target='_blank'><i className="fa-brands fa-instagram fa-xl"></i></a>
                <a href={beauctician.socials.tiktok} target='_blank'><i className="fa-brands fa-tiktok fa-xl"></i></a>
              </div>
              <Link to={`/book-appointment/${beauctician._id}`} className="button">Book Now</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
      

    </>
  )
}

export default Profile