import { useState } from "react";
import { Link } from "react-router-dom";
import ApmntShowData from "./ApmntShowData";

function AppointmenForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    mobileNo: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus: false,
    gender: "",
    appointdate: "",
    pdesc: "",
    bloodgroup: "",
    pslot: "",
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
    <section>
      <div className="container">
        <div className="xl-w-[470px] mx-auto">
          <h2 className="heading text-center">Make your Appointment</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health System offers
            unmathced,expert health care.
          </p>
          <h2 className="text_para text-center text-purpleColor ">
            Make yours appointment with best facility available
          </h2>
        </div>
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
            {/* Country Select Tage */}
            <label>
              Country{" "}
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Russia">Russia</option>
                <option value="Brazil">Brazil</option>
                <option value="China">China</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
              </select>
            </label>
            {/* Birth Date Selector */}
            <label>
              Birth Date{" "}
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </label>
            {/* Profile Pic Selector */}
            <label>
              Choose Image{" "}
              <input
                type="file"
                name="avatar"
                onChange={handleChange}
                value={formData.avatar}
              />
            </label>
            Select if Married
            {/* Married Status Selector */}
            <label>
              <input
                type="checkbox"
                name="marriageStatus"
                checked={formData.marriageStatus}
                onChange={handleChange}
              />
              Married Status{" "}
            </label>
            {/* App Date Selector */}
            <label>
              Appointment Date{" "}
              <input
                type="date"
                name="appointdate"
                value={formData.appointdate}
                onChange={handleChange}
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
            {/* Gender Selector */}
            Choose Gender
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
              />
              Other
            </label>
            {/* Blood Group */}
            <label>
              Blood Group{" "}
              <input
                type="text"
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                placeholder="Blood Group"
              />
            </label>
            {/* Country Select Tage */}
            <label>
              Timing Slot{" "}
              <select
                name="pslot"
                value={formData.pslot}
                onChange={handleChange}
              >
                <option value="">Select Slot</option>
                <option value="11 A.M Morning">11 A.M Morning</option>
                <option value="1 P.M Afternoon">1 P.M Afternoon</option>
                <option value="3 P.M Afternoon">1 P.M Afternoon</option>
                <option value="6 P.M Evening">6 P.M Evening</option>
              </select>
            </label>
            {/* Submit Button - input type submit */}
            <button
              className="text-primaryColor"
              onClick={() =>
                alert("Thaks for choosing us please see your details below")
              }
            >
              <input type="submit" value="Book Appointment" />
            </button>
          </form>
          {/* if form submitted then show ShowFormData component here */}{" "}
          {formSubmitted && <ApmntShowData formData={formData} />}
        </div>
      </div>
    </section>
  );
}

export default AppointmenForm;
