import React from "react";
import DoctorsList from "../../Components/Doctors/DoctorsList";

const Doctors = () => {
  return (
    <section>
      <div className="container">
        <div className="xl-w-[470px] mx-auto">
          <h2 className="heading text-center">Our Great Doctors</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health System offers
            unmathced,expert health care.
          </p>
          <DoctorsList/>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
