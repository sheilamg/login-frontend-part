import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Edit } from '../Edit/Edit'

export const Profile = () => {
  const [data, setData] = useState([])
  const [load, setLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [deletedUser, setDeletedUser] = useState(null)
  
  const fecthData = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:3002/users/')
      const data = await res.json()

      setData(data)
      
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
    
  }

  //patch
  const patchData = async (updateData) => {
    if(!selectedUser) return;
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:3002/users/${selectedUser.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })

      if(response.ok){
        const updateUser = await res.json()
        setData(prevData => prevData.map(item => item.id === updateUser.id ? updateUser : item))
        setSelectedUser(updateUser)
      }else{
        console.log('Error patching data', res.statusText)
      }
      
    } catch (error) {
        console.log('Error patching data from error',error)
    } finally {
        setLoading(false)
    }
    
  }

  const deleteUser = async (userToDelete) =>{
    setLoading(true)
    try {
      await fetch(`http://localhost:3002/users/${userToDelete.id}`, {method: 'DELETE'})
    } catch (error) {
      console.log("it seems like you are not be able to eliminate this user..", error)
    } finally{
      setLoading(false)
    }

  }

  //useEffect(() => {
  //  fecthData()
  //}, [])

  return (
    <div>
        <NavLink to="/">
        <button className='home-button'>Go to Home</button>
        </NavLink>
       
    
     <div>Profile</div>

     
     
     <button onClick={fecthData}>Click me to get the data</button>
     {load && <p>Loading...</p> }
     {data.length > 0 && data.map((value, index) =>
       <div key={index}> 
       <p>Name: {value.name}</p>
       <p>Email: {value.email}</p>
       <button onClick={() => setSelectedUser(value)}>Edit me!</button>
       {selectedUser && <Edit user={selectedUser} patchData={patchData} load={load}/>}
       <button onClick={() => deleteUser(value)}>Delete me! D:</button>
       </div>
     )}    
    </div>
    
  )
}
