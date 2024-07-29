import { NavLink } from 'react-router-dom'
import './App.css'


function App() {
 

  return (
    <>
      <NavLink to="profile">
        <button className='my-button'>Go to Profile</button>
      </NavLink>
      <NavLink to="users">
        <button className='my-button'>Go to Users</button>
      </NavLink>
      <NavLink to="login">
        <button className='my-button'>Go to Login</button>
      </NavLink>
    </>
  )
}

export default App
