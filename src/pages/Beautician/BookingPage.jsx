import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { API } from '../../config';
import { useSelector } from 'react-redux';

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams()
  const [beaucticians, setBeauticians] = useState([])
  //login user data
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
      <div className="container-fluid">
        <h1 className='text-center'>Book Beauticians</h1>
        {beaucticians &&
        <Fragment>
          <h2>You are bookining your appointment for {beaucticians.beautician_name}</h2>
          <div className="row p-3">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label for="name">Your Name:</label>
                  <input type="text" className="form-control" id="name" value={user.name} placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label for="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="phone">Phone Number:</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
                </div>
                <div className="form-group">
                  <label for="location">Location:</label>
                  <input type="text" className="form-control" id="location" placeholder="Enter location" />
                </div>
                <div className="form-group">
                  <label for="remark">Remark:</label>
                  <textarea className="form-control" id="remark" rows="3" placeholder="Enter remark"></textarea>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="datetime">Select Date and Time:</label>
                <input type="datetime-local" className="form-control" id="datetime" />
              </div>
              <div className="form-group">
                <label htmlFor="services">Select Service:</label>
                <select className="form-control" id="services">
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  <option value="service3">Service 3</option>
                </select>
              </div>
            </div>
            <div className="col-md-12 text-center p-3">
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>

          </div>
        </Fragment>
          

        }

      </div>

    </>


  )
}

export default BookingPage