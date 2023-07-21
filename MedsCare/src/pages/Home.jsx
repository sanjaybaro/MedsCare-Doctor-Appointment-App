import React from "react";
import { Link } from "react-router-dom";
import heroImg01 from "../assets/Images/hero-img01.png";
import heroImg02 from "../assets/Images/hero-img02.png";
import heroImg03 from "../assets/Images/hero-img03.png";
import icon01 from "../assets/Images/icon01.png";
import icon02 from "../assets/Images/icon02.png";
import icon03 from "../assets/Images/icon03.png";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";

const Home = () => {
  return (
    <>
      {/* ------------hero section----------- */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex  lg:flex-row-gap-[90px] justify-between ">
              {/* --------hero content of page-------- */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]">
                    We Will Help You To Understand & Solve The Problem.
                  </h1>
                  <p className="text_para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur tempora sequi illo, numquam assumenda
                    reprehenderit nihil corporis ab, nobis architecto
                    exercitationem minima voluptatibus voluptates blanditiis.
                    Optio quisquam veritatis dolores debitis!
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
                {/* ----------Hero counter-------- */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      80+
                    </h2>
                    <span className="w=[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Country Covergare</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      892+
                    </h2>
                    <span className="w=[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Client Satisfaction</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      60+
                    </h2>
                    <span className="w=[100px] h-2 bg-cyan-400 rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Expert Consultant</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      367+
                    </h2>
                    <span className="w=[100px] h-2 bg-fuchsia-500 rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Winning Awards</p>
                  </div>
                </div>
              </div>
              {/* --------hero content of page-------- */}
              <div className="flex gap-[30px] justify-end ">
                <div>
                  <img className="w-full" src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                  <img src={heroImg03} alt="" className="w-full " />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --------hero section end--------- */}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center ">
                Providing the best medical services
              </h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health System offers
                unmatched,expert health care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Docotor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health System offers
                    unmatched,expert health care.From the lab to clinic.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health System offers
                    unmatched,expert health care.From the lab to clinic.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health System offers
                    unmatched,expert health care.From the lab to clinic.
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---------About section start--------- */}
        {/* ---------About section end--------- */}
        <About />
        {/* ---------services section-------- */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Medical services</h2>
              <p className="text_para text-center">
                World-class care for everyone, Our health System offers
                unmatched,expert health care
              </p>
            </div>
            <ServiceList/>
          </div>
        </section>
        {/* -----------services section end---------- */}

      </>
    </>
  );
};

export default Home;
