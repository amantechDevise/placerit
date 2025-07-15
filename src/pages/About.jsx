import React, { useEffect, useRef } from "react";
import "../index.css";
import Homevideo from "../assets/Homecustom.mp4";
import Shape_4_ from "../assets/Shape_4_.svg";
import ITprofessionals from "../components/ITprofessionals";
import OurMission from "../components/OurMission";
import ChooseUs from "../components/ChooseUs";
import OurValues from "../components/OurValues";

function About() {
  return (
    <main className="relative w-full h-full">
      <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src={Homevideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-[#1B1140] opacity-[0.72]"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-[73px]  font-semibold font-Raleway text-white leading-tight ">
            About Us
          </h1>

         

          <p className="text-gray-300 text-base md:text-lg lg:text-[16px]  md:mb-44  mb-25 max-w-5xl leading-relaxed">
          Welcome to PlacerIT, a leading provider of innovative IT solutions. Founded with the vision to empower businesses and organizations through technology, we specialize in delivering cutting-edge solutions that drive growth, efficiency, and transformation.
          </p>
        </div>

        <div className="absolute bottom-[-80px] 2xl:bottom-[-200px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
          <img src={Shape_4_} alt="" className="w-full object-cover" />
        </div>
      </div>
     
      <div>
        <ITprofessionals/>
      </div>
      <div>
        <OurMission/>
      </div>
        <div>
        <ChooseUs/>
      </div>
       <div>
        <OurValues/>
      </div>
    </main>
  );
}

export default About;
