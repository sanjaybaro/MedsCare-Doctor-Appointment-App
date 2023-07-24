import React from "react";
import {useState} from "react"

const Contact = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    mobileNo: "",
    pdesc: "",
   
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };


  return (
    <div className="container">
      <div className="xl-w-[470px] mx-auto">
        <h2 className="heading text-center">Our Great Doctors</h2>
        <p className="text_para text-center">
          World-class care for everyone. Our health System offers
          unmathced,expert health care.
        </p>
        <p className="text_para text-center text-irisBlueColor">Talk with Us</p>
        <div className="container xl-w-[470px] mx-auto border-[#243c5a] ">
          <form onSubmit={handleSubmit}>
            {/* First Name */}
            <label>
              First Name{" "}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </label>
            {/* Last Name */}
            <label>
              Last Name{" "}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </label>
            {/* Email */}
            <label>
              Email{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </label>
            {/* Age */}
            <label>
              Age{" "}
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
              />
            </label>
            {/* Mobile number */}
            <label>
              Mobile Number{" "}
              <input
                type="number"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Mobile Number"
              />
            </label>
             {/* Problem Desc */}
             <label>
              Problem Description{" "}
              <input
                type="text"
                name="pdesc"
                value={formData.pdesc}
                onChange={handleChange}
                placeholder="Write Here"
              />
            </label>
            <button
              className="text-primaryColor"
              onClick={() =>
                alert("Thanks for choosing us we will contact you shortly!")
              }
            >
              <input type="submit" value="Book Appointment" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
