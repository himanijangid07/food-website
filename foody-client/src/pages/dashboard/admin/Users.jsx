import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUsers } from '@fortawesome/free-solid-svg-icons';

const Users = () => {
    const {refetch, data:users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:6003/users`)
            return response.json()
          },
    })
    console.log(users);
  return (
    <div className='text-black'>
      <div className='flex items-center justify-between m-4'>
        <h5>All Users</h5>
        <h5>Total Users: {users.length}</h5>
      </div>
      <div>
      <div className="overflow-x-auto">
  <table className="table md:w-[870px]">
    {/* head */}
    <thead className='bg-green text-white rounded-lg'>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
          users.map((user, index) => (
              <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td> {
                    user.role === 'admin' ? "Admin" : (
                      <button className="btn btn-ghost btn-xs btn-circle text-white bg-indigo-600">
                        <FontAwesomeIcon icon={faUsers}/>
                      </button>
                    )}
                  </td>
                  <td><button className="btn btn-ghost btn-xs" onClick={() => handleDelete(item)}>
            <FontAwesomeIcon icon={faTrash} className='text-red'/>
          </button></td>
              </tr>
          ))
      }
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default Users
