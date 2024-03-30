import React, { Fragment, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API } from '../../config'
import { useSelector } from 'react-redux'


const BookingPage = () => {
  const { user } = useSelector((state) => state.user)
  const params = useParams()
  const [beaucticians, setBeauticians] = useState([])
  const [selectedDateTime, setSelectedDateTime] = useState(dayjs())
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')


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

  const handleDateTimeAccept = (newDateTime) => {
    const formattedDate = newDateTime.format('DD-MM-YY')
    const formattedTime = newDateTime.format('HH:mm')
    setDate(formattedDate)
    setTime(formattedTime)
    setSelectedDateTime(newDateTime)
  }

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
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" className="form-control" id="name" value={user ? user.name : ''} placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter location" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remark">Remark:</label>
                    <textarea className="form-control" id="remark" rows="3" placeholder="Enter remark"></textarea>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={[
                    'StaticDateTimePicker',
                  ]}>
                    <StaticDateTimePicker 
                    value={selectedDateTime}
                    onAccept={handleDateTimeAccept}
                    slotProps={{ textField: { variant: 'outlined' } }}
                    orientation="landscape"/>
                  </DemoContainer>
                </LocalizationProvider>
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