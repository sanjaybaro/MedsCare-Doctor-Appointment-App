import React from "react";
import ServiceList from "../Components/Services/ServiceList";

const Services = () => {
  return (
    <>
      <div className="xl:w-[470px] mx-auto">
        <h2 className="heading text-center">Our Medical services</h2>
        <p className="text_para text-center">
          World-class care for everyone, Our health System offers
          unmatched,expert health care
        </p>
      </div>
      <ServiceList />
    </>
  );
};

export default Services;
