import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { API, IMG_URL } from '../../config';
import { Link, useParams } from 'react-router-dom';

const ViewBeauticianP = () => {
    const params = useParams()
    const [beautician, setBeauticians] = useState(null)
    const getBeauticianData = async () => {
        try {
            const res = await axios.post(`${API}/getBeauticianById`, { beauticianId: params.beauticianId }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                },
            })
            if (res.data.success) {
                setBeauticians(res.data.data)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getBeauticianData()
    }, [])
  return (
    <>
        {beautician && (
        <div className="container-fluid p-0 background d-flex justify-content-around align-items-center">
          <div className="card w-75 vcard d-flex justify-content-center align-items-center">
            <div className='position-relative profile'>
                <img
              src={`${IMG_URL}/${beautician.beautician_profilepic}`}
              height={150}
              width={150}
              className="rounded-circle position-absolute top-0 start-50 translate-middle border border-dark"
              alt="..."
            />
            </div>
            
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
                  <p className="text-center">
                    <strong>Email: </strong>
                    {beautician.contact_info.email}
                  </p>
                  <p className="text-center">
                    <strong>Facebook: </strong>
                    {beautician.socials.facebook}
                  </p>
                  <p className="text-center">
                    <strong>Instagram: </strong>
                    {beautician.socials.instragram}
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
                  <p className="text-center">
                    <strong>PhoneNumber: </strong>
                    {beautician.contact_info.phoneNumber}
                  </p>
                  <p className="text-center">
                    <strong>Tiktok: </strong>
                    {beautician.socials.tiktok}
                  </p>
                </div>
              </div>
              <Link to={`/book-appointment/${beautician._id}`}>
              <button className="btn-53 mt-3 ">
                <div className="original">Book Now</div>
                <div className="letters">
                  <span>B</span>
                  <span>O</span>
                  <span>O</span>
                  <span>K</span>
                  <span>N</span>
                  <span>O</span>
                  <span>W</span>
                </div>
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ViewBeauticianP