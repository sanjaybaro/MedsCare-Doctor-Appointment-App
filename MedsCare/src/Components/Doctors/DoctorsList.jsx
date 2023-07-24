import { useState, useEffect } from "react";
import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await fetch("http://localhost:8080/doctors");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };
  //   fetchdata();
  useEffect(() => {
    fetchdata();
  }, []);

  console.log(data);
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {data.map((doctor) => (
        <DoctorsCard key={doctor.id} {...doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;
