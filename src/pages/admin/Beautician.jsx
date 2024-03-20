import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../config'

const Beautician = () => {
  const [beauticians, setBeauticians] = useState([])

  useEffect(() => {
    const getBeauticians = async () => {
      try {
        const res = await axios.get(`${API}/getAllBeauticians`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (res.data.success) {
          setBeauticians(res.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getBeauticians()
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'beautician_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "Pending" ? 
            <button className='btn btn-success'>Approve</button> :
            <button className='btn btn-danger'>Reject</button>
          }
        </div>
      )
    }
  ]

  return (
    <>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {beauticians.map((beauticians, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render ? column.render(beauticians[column.dataIndex], beauticians) : beauticians[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Beautician
