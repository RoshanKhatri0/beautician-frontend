import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../../config'
import toast from 'react-hot-toast'

const BeauticianAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const getAppointments = async() =>{
        try {
            const res = await axios.get(`${API}/beautician-appointments`,
            {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem('token'),
                }
              }
            )
            if(res.data.success){
                setAppointments(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getAppointments()
    },[])

    const handleStatus =async(record,status)=>{
      try {
        const res = await axios.post (`${API}/update-status`,
        {
          appointmentId: record._id, status
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
          }
        }
        )
        if(res.data.success){
          toast.success(res.data.message)
          getAppointments()
        }
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
      }
    }

    const columns = [
        {
            title:'ID',
            dataIndex:'_id'
        },
        // {
        //     title:'Name',
        //     dataIndex:'beautician_name',
        //     render:(text,record) =>(
        //         <span>
        //             {record.beautician_name}
        //         </span>
        //     )
        // },
        {
            title:'Date and Time',
            dataIndex:'date time',
            render:(text,record) =>(
                <span>
                    {record.date} {record.time}
                </span>
            )
        },
        {
            title:'Status',
            dataIndex:'status',
        },
        {
          title: 'Actions',
          dataIndex: 'actions',
          render: (text, record) => (
            <div className="d-flex">
              {record.status === "pending" &&(
                <div className="d-flex">
                <button className='btn btn-success' onClick={()=> handleStatus(record, 'approved')}>Approve</button>
                <button className='btn btn-danger mx-2' onClick={()=> handleStatus(record, 'reject')}>Reject</button>
                </div>
              )}
            </div>
          )
        }

    ]
  return (
    <>
        <div className="container-fluid p-3">
    <h1 className='text-center'>Appointments List</h1>
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render ? column.render(appointment[column.dataIndex], appointment) : appointment[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default BeauticianAppointments