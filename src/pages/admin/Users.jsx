import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../config'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${API}/getAllUsers`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (res.data.success) {
          setUsers(res.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getUsers()
  }, [])

  const handleDelete = (userId) => {
    console.log("Deleting user with ID:", userId)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      render: (text, record) => {
        let roleText = "";
        switch (record.role) {
          case 0:
            roleText = "User";
            break;
          case 1:
            roleText = "Admin";
            break;
          case 2:
            roleText = "Beautician";
            break;
          default:
            roleText = "Unknown";
            break;
        }
        return <span>{roleText}</span>;
      },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <button className='btn btn-danger' onClick={() => handleDelete(record.id)}>Delete</button>
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
          {users.map((user, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render ? column.render(user[column.dataIndex], user) : user[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users
