import React, { useState } from 'react'

export const Edit = ({user, patchData, load}) => {
 const [patchInput, setPatchInput] = useState({name: user.name, email: user.name})


  const handlePatchChange = (e) => {
    const { name, value } = e.target;
    setPatchInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    patchData(patchInput)
  }

  return (
    <>
    
     
    <form onSubmit={handleSubmit}>
      <h3>Editing User: {user.id}</h3>
      <input type="text" name="name" onChange={handlePatchChange} value={patchInput.name} placeholder={patchInput.name} required />
      <input type="email" name="email" onChange={handlePatchChange} value={patchInput.email} placeholder={patchInput.email} required />
      <button type='submit' disabled={load}>Edit data!</button>

    </form>
    
    </>
   
  )
}
