import React from 'react'

function ApmntShowData({formData}) {
  return (
    <div className='text-primaryColor'>
    <h1>Patient Data</h1>

      <h3 >First Name: {formData.firstName}</h3>

      <h3>Last Name: {formData.lastName}</h3>

      <h3>Email: {formData.email}</h3>

      <h3>Password: {formData.age}</h3>

      <h3>Phone: {formData.mobileNo}</h3>

      <h3>Country: {formData.country}</h3>

      <h3>Birth Date: {formData.birthDate}</h3>
  
      <h3>{/* Married then "Yes" else "No" */}
      Marriage Status: {formData.marriageStatus ? "Yes" : "No"}</h3>
      <h3>Image URL: {formData.avatar}</h3>
      <h3>Gender: {formData.gender}</h3>
      <h3>Appintmetn Date: {formData.appointdate}</h3>
      <h3>Problem Description: {formData.pdesc}</h3>
      <h3>Prefered Slot: {formData.pslot}</h3>
    </div>
  )
}

export default ApmntShowData