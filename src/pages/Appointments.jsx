import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../config'

const Appointments = () => {
    const [appointments, setAppointments] = useState([])
    const getAppointments = async() =>{
        try {
            const res = await axios.get(`${API}/user-appointments`,
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

    ]

  return (
    <>
    <div className="container-fluid h-100">
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

export default Appointments