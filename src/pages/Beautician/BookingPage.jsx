import React, { Fragment, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from '../../redux/features/alertSlice'
import toast from 'react-hot-toast';

const BookingPage = () => {
    const { user } = useSelector((state) => state.user)
    const params = useParams()
    const [beaucticians, setBeauticians] = useState([])
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs())
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [isDateTimeSelected, setIsDateTimeSelected] = useState(false) // State to track if date and time are selected
    const dispatch = useDispatch()
    const [appdata, setappData] = useState({
        phoneNumber: '',
        location: '',
        service: '',
        remark: '',
    })
    const { phoneNumber, location, service, remark } = appdata

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
        setIsDateTimeSelected(true)
    }
    const handleChange = name => event => {
        setappData({
            ...appdata,
            [name]: event.target.value,
        });
    };

    // Booking
    const handleBooking = async () => {
        try {
            dispatch(showLoading())
            const res = await axios.post(`${API}/book-appointment`,
                {
                    beauticianId: params.beauticianId,
                    userId: user._id,
                    beauticianInfo: beaucticians,
                    userInfo: user,
                    date: date,
                    time: time,
                    ...appdata
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token'),
                    }
                }
            )
            dispatch(hideLoading())
            if (res.data.success) {
                toast.success(res.data.message)
            }
        } catch (error) {
            dispatch(hideLoading())
            console.log(error)
            toast.error("Failed to book appointment. Please try again later.")
        }
    }

    return (
        <>
            <div className="container-fluid">
                <h1 className='text-center'>Book Beauticians</h1>
                {beaucticians &&
                    <Fragment>
                        <h2>You are booking your appointment for {beaucticians.beautician_name}</h2>
                        <div className="row p-3">
                            <div className="col-md-6">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number: <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter phone number" name='phoneNumber' value={phoneNumber} onChange={handleChange('phoneNumber')} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location">Location: <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="location" placeholder="Enter location" name='location' value={location} onChange={handleChange('location')} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="services">Select Service: <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="service" placeholder="Enter service" name='service' value={service} onChange={handleChange('service')} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="remark">Remark: </label>
                                        <textarea className="form-control" id="remark" rows="3" placeholder="Enter remark" name='remark' value={remark} onChange={handleChange('remark')} required></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="remark">Select Date Time: <span className="text-danger">*</span></label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={[
                                        'DateTimePicker',
                                    ]}>
                                        <DateTimePicker
                                            value={selectedDateTime}
                                            onAccept={handleDateTimeAccept}
                                            slotProps={{ textField: { variant: 'outlined' } }}
                                            orientation="landscape" />
                                    </DemoContainer>
                                </LocalizationProvider>
                                <br/>
                                <div class="alert alert-danger" role="alert">
                                    Select and check Date and Time Before Submitting
                                </div>
                            </div>
                            <div className="col-md-12 text-center p-3">
                                <button type="submit" className="btn btn-primary btn-lg" onClick={handleBooking} disabled={!isDateTimeSelected}>Book Now</button>
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
        </>
    )
}

export default BookingPage
