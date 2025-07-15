import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import fqa from "../assets/fqa.png";
const faqs = [
  {
    title: "What are the advantages of your service?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title:
      "Are there any fees or commissions in addition to the monthly subscription?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "You really don't charge per user? Why not?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "What happens when I go over my monthly active limit?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "Can your service help me understand how to work with my product?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "Which third-party application do you integrate with?",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
  {
    title: "I have another question!",
    content:
      "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing...",
  },
];

const Fqa = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div className="relative font-inter antialiased bg-[#F7F7F7] min-h-screen flex flex-col justify-center overflow-hidden py-24 px-4">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between">
          {/* LEFT SIDE: Title and description */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-[30px] md:text-[40px] font-extrabold text-slate-900 mb-4 font-Raleway"
              data-aos="fade-up"
            >
              Frequently{" "}
              <span
                style={{
                  display: "inline-table",
                  background: "linear-gradient(to right, #5D3DAF, #5598F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  whiteSpace: "nowrap",
                }}
              >
                Asked Questions
              </span>
            </h1>
            <p className="text-slate-600" data-aos="fade-up">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's <br /> standard
              dummy text.
            </p>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="flex-shrink-0 mt-6 md:mt-0 " data-aos="fade-up">
            <img src={fqa} alt="FQA" className="w-[200px] h-auto md:mr-2" />
          </div>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = expandedIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-md shadow transition duration-300"
              >
                <div
                  className={`flex flex-col transition-all duration-300 ease-in-out ${
                    isOpen ? "items-start pt-4" : "justify-center h-[100px]"
                  } px-4`}
                >
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] md:text-[24px] ">{faq.title}</span>
                    <svg
                      className="fill-indigo-500 shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          isOpen ? "!rotate-180" : ""
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          isOpen ? "!rotate-180" : ""
                        }`}
                      />
                    </svg>
                  </button>

                  {/* Show content only if open */}
                  <div
                    className={`text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "mt-2 opacity-100" : "opacity-0 h-0"
                    }`}
                  >
                    <p className=" md:text-[16px] text-[10px] pb-4">{faq.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fqa;
