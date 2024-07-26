import React, { useContext, useEffect, useState } from 'react'

export const Profile = () => {
  const [userData, setUserData] = useState(null)
  const { user } = useContext(AuthContext)
  
  useEffect( () => {
    const fetchUserData = async () => {
        try {
            const response = await fetch('/api/user',{
                headers: {
                    'Authorization': `Bearer ${getToken()}`,
                },
            })
            const data = await response.json()
            setUserData(data)
        } catch (error) {
            console.error('Failed to fetch the user data', error)
        }
    }

    if(user){
        fetchUserData()
    }
  }, [user])

  if(!userData) return <div>Loading..</div>

  return (
    <>
     <div>Profile</div>
     <p>Email: {userData.email}</p>   
    </>
    
  )
}
