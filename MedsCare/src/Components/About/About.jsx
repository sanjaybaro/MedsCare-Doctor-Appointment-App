import React from "react";
import aboutImg from "../../assets/Images/about.png";
import aboutCardImg from "../../assets/Images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* =====about img===== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* -----------about content---------- */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the Nations best</h2>
            <p className="tetx_para ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              facere nam commodi magni amet cupiditate iusto soluta, deserunt
              consequuntur, rem vero debitis vel quisquam qui.
            </p>
            <p className="text_para mt-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              incidunt dolorem molestias nisi necessitatibus culpa. Quisquam
              cupiditate consectetur blanditiis accusantium omnis doloribus ut
              neque possimus.
            </p>
            <Link to="\">
              <button className="btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
