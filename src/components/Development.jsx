import React from "react";
import Image1 from "../assets/Group 150.svg";
import Image2 from "../assets/Group 144.svg";
import Image3 from "../assets/Group 143.svg";
import Image4 from "../assets/Group 142.svg";
import Image5 from "../assets/Group 141.svg";
import Image6 from "../assets/Group 140.svg";
import Image7 from "../assets/Group 139.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Development = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const items = [
    {
      img: Image2,
      title: (
        <>
          In-Depth Discovery <br /> & Analysis
        </>
      ),
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      img: Image5,
      title: (
        <>
          User-Centered <br /> Design
        </>
      ),
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      img: Image7,
      title: (
        <>
          Agile Development <br /> Methodology
        </>
      ),
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      img: Image4,
      title: (
        <>
          Collaborative & Transparent <br /> Communication
        </>
      ),
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      img: Image6,
      title: (
        <>
          Quality Assurance <br /> & Testing
        </>
      ),
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      img: Image3,
      title: (
        <>
          Launch & <br /> Ongoing Support
        </>
      ),
      desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header and Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-10 mb-12">
        <div className="max-w-xl" data-aos="zoom-in-down">
          <h2 className="text-[26px] md:text-[56px] font-Raleway font-extrabold text-gray-900 mb-2 leading-tight">
            Our Design and <br /> Develop
            <span className="text-blue-600"> Approach</span>
          </h2>
          <p className="text-[16px] text-gray-500">
            At PlaceIT, we follow a streamlined, customer-focused approach to
            design and development that ensures every project is executed with
            precision and innovation. Here’s how we approach each project.
          </p>
        </div>
        <div className="flex-shrink-0 w-full max-w-md " data-aos="zoom-in-down">
          <img src={Image1} alt="Development Illustration" className="w-full" />
        </div>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(({ img, title, desc }, idx) => (
          <div
            key={idx}
            className="flex border border-blue-300 rounded-lg p-6 gap-4 hover:shadow-md transition-shadow bg-white"
            data-aos="fade-up"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md">
              <img src={img} alt="Icon" className="" />
            </div>
            <div>
              <h3 className="font-Raleway font-extrabold text-gray-900 text-[20px] leading-snug">
                {title}
              </h3>
              <p className="font-Raleway font-medium text-gray-500 text-sm mt-1 text-[16px]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
