import React from "react";
import Image1 from "../assets/Group 595.svg";
import Image2 from "../assets/Group 597.svg";
import Image3 from "../assets/Group 596.svg";
import Image4 from "../assets/Group 602.svg";
import Image5 from "../assets/Group 601.svg";
import Image6 from "../assets/Group 600.svg";
import bgImage from "../assets/GroupImage.svg";
import Setting from "../assets/image 1.svg";

const services = [
  {
    title: (
      <>
        Software
        <br />
        Consultancy
      </>
    ),
    image: Image1,
    message: "We offer everything from planning to building a first product implementation through complex, multi-product IT transformation. We offer you technological advice that is pragmatic as well as futuristic that gives your business a strong advantage."
  },
  {
    title: (
      <>
        Website
        <br />
        Development
      </>
    ),
    image: Image2,
    message: "Looking to launch your own business website? If yes, our expert team of web developers and designers will surely provide you with a website of your dreams. Our designing and development is done on the basis of our client requirement, and we ensure that our out of the box website will surely impress your customers."
  },
  {
    title: (
      <>
        QA
        <br />
        Testing
      </>
    ),
    image: Image3,
    message: "Is your business finding it difficult to flourish in the online world? Well, it is no surprise because if proper digital marketing is not done then your website will not be able to gain the desired notice from the audience. Hence, opt for our result oriented digital marketing strategies to give your business a boost."
  },
  {
    title: (
      <>
        Digital
        <br />
        Marketing
      </>
    ),
    image: Image4,
    message: "Is your business finding it difficult to flourish in the online world? Well, it is no surprise because if proper digital marketing is not done then your website will not be able to gain the desired notice from the audience. Hence, opt for our result oriented digital marketing strategies to give your business a boost."
  },
  {
    title: (
      <>
        Blockchain
        <br />
        Development
      </>
    ),
    image: Image5,
    message: "Capitalize on Blockchain technology to achieve complete transparency and automation in varied business processes. Our Blockchain solutions are tailored to help businesses combat operational and strategic risks."
  },
  {
    title: (
      <>
        UI/UX
        <br />
        Design
      </>
    ),
    image: Image6,
    message: "Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to Techdevise's UI and UX services. Our design team is a small design studio with best experts in the field that will help you build an engaging product easily and quickly."
  },
];


const Services = () => {
  return (
    <div className="relative w-full py-16 px-4 flex flex-col items-center justify-center bg-white overflow-hidden">
      <img
        src={bgImage}
        alt="Background"
        className="absolute top-10 left-10 w-[150px] md:w-[350px] h-auto object-contain z-0"
      />

      <div className="absolute top-12 right-6 z-10">
        <img
          src={Setting}
          alt="Settings"
          className="w-22 h-22 mr-[145px] animate-bounce"
        />
      </div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-[40px] font-extrabold text-black font-Raleway">
          <span className="text-purple-700 font-bold">Services</span> we offer
          for you
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-[1220px] px-4">
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="flip-card group">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img
                      src={service.image}
                      alt="Service"
                      className="w-full h-full object-cover rounded-xl opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                      <p className="text-white text-[28px] font-bold text-center font-Raleway drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                        {service.title}
                      </p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="p-6 flex items-center justify-center h-full">
                      <p className="text-white text-sm text-center font-Raleway leading-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                        {service.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          background: transparent;
          width: 100%;
          height: 380px;
          perspective: 1000px; /* 3D perspective */
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        /* On hover flip */
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .flip-card-front {
          background: linear-gradient(to bottom, #6b21a8, #1e3a8a);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .flip-card-back {
          background: linear-gradient(135deg, #281165, #1f5196);
          transform: rotateY(180deg);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};


export default Services;