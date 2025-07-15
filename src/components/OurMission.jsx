import React, { useEffect } from "react";
import Icon1 from "../assets/Group 196.svg";
import Icon2 from "../assets/Group 198.svg";
import Icon3 from "../assets/Group 197.svg";
import BgImage from "../assets/bg-h4-2 1.svg";
import CardBg from "../assets/Group 199.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="bg-cover bg-no-repeat py-16 px-4 text-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h2
        className="text-3xl md:text-[42px] font-extrabold mb-4"
        data-aos="fade-up"
      >
        Our <span className="text-indigo-600">Mission</span>
      </h2>
      <p
        className="max-w-3xl mx-auto text-gray-600 mb-12 text-base md:text-[16px]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our mission is to help businesses harness the power of technology to
        achieve their goals. We work closely with our clients to understand
        their needs and provide tailored IT solutions that drive productivity,
        improve operations, and create lasting value.
      </p>

      <div className="flex flex-col md:flex-row justify-center  items-start">
        {/* Card 1 */}
        <div
          className="bg-white rounded-2xl p-6 w-full md:w-[380px] text-left"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            minHeight: "360px",
            boxShadow:
              "-4px -4px 8px rgba(0,0,0,0.05), -4px 4px 8px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src={Icon1}
            alt="Custom Software Icon"
            className="w-[100px] mt-10"
          />
          <h3 className="text-[22px] font-bold mt-2">
            Custom Software Development
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Tailored software solutions designed to meet your unique business
            requirements.
          </p>
        </div>

        <div
          className="relative w-full md:w-[380px] text-left overflow-hidden mt-[-65px] rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ height: "500px" }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-3xl"
            style={{
              backgroundImage: `url(${CardBg})`,
              zIndex: 0,
            }}
          ></div>

          {/* Content Layer */}
          <div className="relative text-white h-full flex flex-col items-start justify-center z-10 px-8">
            <img
              src={Icon3}
              alt="Cloud Services Icon"
              className="w-[100px] object-contain "
            />
            <h3 className="text-[22px] font-bold mt-4 mb-2 text-start">
              Cloud Services
            </h3>
            <p className="text-sm text-start">
              Scalable cloud infrastructure, hosting, and management to ensure
              your business operates seamlessly and securely.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-2xl p-6 w-full md:w-[380px] text-left"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            minHeight: "360px",
            boxShadow:
              "4px -4px 8px rgba(0,0,0,0.05), 4px 4px 8px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src={Icon2}
            alt="Custom Software Icon"
            className="w-[100px] mt-10"
          />
          <h3 className="text-[22px] font-bold mt-2">
            Cybersecurity Solutions
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Protecting your digital assets with state-of-the-art security
            technologies to safeguard against evolving cyber threats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
