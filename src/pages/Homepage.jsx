import React, { useEffect, useRef } from "react";
import "../index.css";
import Homevideo from "../assets/Homecustom.mp4";
import Shape_4_ from "../assets/Shape_4_.svg";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Fqa from "../components/Fqa";
import Contact_Us from "../components/ContactUs";
import Development from "../components/Development";
import Process from "../components/Process";
import Services from "../components/Services";
import Contact from "../assets/contact.svg";

gsap.registerPlugin(TextPlugin);

function Homepage() {
  const textRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden", "overflow-y-auto");
    return () => {
      document.body.classList.remove("overflow-x-hidden", "overflow-y-auto");
    };
  }, []);

  useEffect(() => {
    const texts = ["Growth through", "Growth through", "Growth through"];
    const tl = gsap.timeline({ repeat: -1 });

    texts.forEach((fullText) => {
      tl.to(textRef.current, {
        duration: fullText.length * 0.1,
        text: fullText + "|",
        ease: "power1.inOut",
      });
      tl.to({}, { duration: 0.8 });
      tl.to(textRef.current, {
        duration: 0.5,
        text: fullText + " ",
        repeat: 2,
        yoyo: true,
        ease: "power1.inOut",
      });
      for (let i = fullText.length; i >= 0; i--) {
        tl.to(textRef.current, {
          duration: 0.05,
          text: fullText.substring(0, i) + "|",
          ease: "power1.inOut",
        });
      }
    });

    return () => tl.kill();
  }, []);

  return (
    <main className="relative w-full h-full">
      <div className="relative w-full h-[700px] md:h-[750px] pt-[120px] overflow-hidden">
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

        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left px-4 sm:px-10 md:px-[35px] lg:px-[40px] 2xl:px-[336px] xl:px-[160px]">
          <h1 className="text-3xl md:text-[73px]  font-semibold font-Raleway text-white leading-tight ">
            Accelerating
          </h1>

          <h2
            ref={textRef}
            className="text-blue-500 text-3xl md:text-[73px]  font-semibold font-Raleway h-[45px] md:h-[60px]"
          />

          <h1 className="text-3xl md:text-[73px]   text-white mt-2 font-semibold font-Raleway">
            Innovation
          </h1>

          <p className="text-gray-300 text-base md:text-lg lg:text-[20px] mt-6 max-w-2xl leading-relaxed">
            Leveraging cutting-edge technologies and creative solutions to drive
            business success. By embracing new ideas and innovative strategies,
            businesses can enhance efficiency, improve operations, and stay
            ahead of the competition.
          </p>
        </div>

        <div className="absolute bottom-[-80px] 2xl:bottom-[-200px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
          <img src={Shape_4_} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div>
        <Services />
      </div>
      <div className="bg-[#F7F7F7] py-10">
        <Development />
      </div>
      <div
  className="bg-cover bg-center bg-no-repeat py-20 
             before:absolute before:inset-0 before:bg-gradient-to-r 
             before:from-[#5D3DAF]/90 before:to-[#5598F7]/90 before:z-0 relative"
  style={{ backgroundImage: `url(${Contact})` }}
>
  <Contact_Us showBorder={false} />
</div>
      <div>
        <Process />
      </div>
      <div>
        <Fqa />
      </div>
    </main>
  );
}

export default Homepage;
