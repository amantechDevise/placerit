import React from "react";
import TeamImage from "../assets/Group 190.svg";
import ArrowIcon from "../assets/hero-arrow-1 2.svg";
import LogoIcon from "../assets/Group 171.svg";

const ITprofessionals = () => {
  return (
    <section className="relative bg-white px-4 py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Arrow in top-right corner */}
      <img
        src={ArrowIcon}
        alt="Decorative Arrow"
        className="absolute top-4 right-4 md:right-[20.5rem]  2xl:right-75 w-20 sm:w-16 md:w-30 lg:w-[12rem] xl:w-55 h-auto animate-[bounce_3s_infinite]"
      />

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Image & Logo */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src={TeamImage}
              alt="Team of professionals"
              className="rounded-lg shadow-lg w-full h-auto object-cover "
            />
          </div>

          {/* Logo icon overlapping bottom-left */}
          <img
            src={LogoIcon}
            alt="Company Icon"
            className="absolute md:-bottom-8 -bottom-4  md:-left-15 -left-4 w-40 sm:w-[10rem] md:w-45 lg:w-55 h-auto z-20 animate-[spin_6s_linear_infinite]"
            style={{ transformOrigin: "center center" }}
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[43px] font-extrabold text-gray-900 mb-4 font-raleway">
            Who <span className="text-blue-600">We Are</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-raleway">
            At PlacerIT, we are a passionate team of tech experts, developers,
            strategists, and designers dedicated to solving complex challenges
            with simple and effective IT solutions. Our commitment to excellence
            and customer satisfaction has made us a trusted partner to businesses
            of all sizes, across various industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ITprofessionals;
