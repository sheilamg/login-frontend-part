import React, { useContext, useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password}),
      })
      const data = await response.json()
      if(data.token){
        login(data.token)
      }
    } catch (error) {
      console.error('Login Failed', error)
    }
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" required />
    </form>
    </>
  )
}
