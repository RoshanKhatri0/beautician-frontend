import React, { useState, useEffect } from 'react';
import '../../css/ViewProfile.css';
import axios from 'axios';
import { API, IMG_URL } from '../../config';
import { Link, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'

const ViewProfile = () => {
  const {user} = useSelector(state => state.user)
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

  return (
    <>
      {beautician && (
        <div className="container-fluid p-0 background d-flex justify-content-around align-items-center">
          <div className="card w-75 vcard d-flex justify-content-center align-items-center position-relative">
            <img
              src={`${IMG_URL}/${beautician.beautician_profilepic}`}
              height={150}
              width={150}
              className="rounded-circle position-absolute top-0 start-50 translate-middle border border-dark"
              alt="..."
            />
            <div className="card-body vcard-body d-flex flex-column align-items-center">
              <h2 className="card-title text-center">
                <strong>Name: </strong>
                {beautician.beautician_name}
              </h2>
              <p className="card-text text-center">
                <strong>Bio: </strong>
                {beautician.beautician_bio}
              </p>
              <div className="row w-100">
                <div className="col-md-6">
                  <p className="text-center">
                    <strong>Experience: </strong>
                    {beautician.experience}
                  </p>
                  <p className="text-center">
                    <strong>Services: </strong>
                    {beautician.services_offered}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-center">
                    <strong>Pricing: </strong>
                    {beautician.pricing}
                  </p>
                  <p className="text-center">
                    <strong>Working Hours: </strong>
                    {beautician.working_hours}
                  </p>
                </div>
              </div>
              <Link to={`/profile/${user?._id}`}>
              <button className="btn-53 mt-3 ">
                <div className="original">Update</div>
                <div className="letters">
                  <span>U</span>
                  <span>P</span>
                  <span>D</span>
                  <span>A</span>
                  <span>T</span>
                  <span>E</span>
                </div>
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProfile;
