import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Group 95.svg";
import Blockchain from "../assets/Group 612.svg";
import Software from "../assets/Group 607.svg";
import Digital from "../assets/Group 609.svg";
import IT from "../assets/Group 615.svg";
import Quality from "../assets/Group 606.svg";
import Website from "../assets/Group 608.svg";
import UIUX from "../assets/Group 610.svg";
import image1 from "../assets/Mask group (1).svg";
import image2 from "../assets/Mask group (2).svg";
import image3 from "../assets/Mask group (3).svg";
import image4 from "../assets/Mask group (4).svg";
import image5 from "../assets/Mask group (5).svg";
import image6 from "../assets/Mask group (6).svg";
import image7 from "../assets/Mask group (7).svg";
import QuoteModal from "../components/QuoteModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const serviceImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === serviceImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3s interval

    return () => clearInterval(interval);
  }, []);

  // Scroll detect effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <style>{`
        @keyframes scaleUpDown {
          0%, 100% { transform: scale(1); }
          40% { transform: scale(1.1); }
        }
      `}</style>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-lg bg-black/60 shadow-md"
            : "bg-black shadow-none"
        }`}
        style={{ minHeight: "100px" }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-8 flex items-center justify-between min-h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center mt-2">
            <img src={logo} alt="logo" className="w-16" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-x-8 items-center text-white font-semibold text-lg">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition">
              About Us
            </Link>
      <div className="relative group">
  <button
    className="hover:text-blue-400 transition flex items-center gap-1"
    onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle on click
     onMouseEnter={() => setDropdownOpen(true)}
  >
    Services
    <svg
      className="w-3 h-3 mt-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

              {dropdownOpen && (
                <div className="absolute left-[-250px] mt-4 flex bg-white text-black rounded-lg shadow-xl p-4 w-[750px] z-50 transition-all duration-200 ease-in-out">
                  {/* Left slider */}
                  <div className="w-1/3">
                    <img
                      src={serviceImages[currentImageIndex]}
                      alt="Service Visual"
                      className="rounded-lg w-full h-60 object-cover transition-all duration-700"
                    />
                  </div>

                  {/* Right links */}
                  <div className="w-2/3 grid grid-cols-2 gap-4 px-6">
                    <Link
                      to="/blockchain"
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img
                        src={Blockchain}
                        alt="Blockchain"
                        className="w-8 h-8"
                      />
                      <p className="text-[14px]">Blockchain</p>
                    </Link>
                    <Link
                      to="/software-consultancy"
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img src={Software} alt="Software" className="w-8 h-8" />
                      <p className="text-[14px]">Software Consultancy</p>
                    </Link>
                    <Link
                      to="/digital-marketing"
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img src={Digital} alt="Digital" className="w-8 h-8" />
                      <p className="text-[14px]">Digital Marketing</p>
                    </Link>
                    <Link
                      to="/it-staffing"
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img src={IT} alt="IT Staffing" className="w-8 h-8" />
                      <p className="text-[14px]">IT Staffing</p>
                    </Link>
                    <Link
                      to="/quality-assurance"
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img
                        src={Quality}
                        alt="Quality Assurance"
                        className="w-8 h-8"
                      />
                      <p className="text-[14px]">Quality Assurance</p>
                    </Link>
                    <Link
                      to="/website-development"
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img src={Website} alt="Website" className="w-8 h-8" />
                      <p className="text-[14px]">Website Development</p>
                    </Link>
                    <Link
                      to="/ui-ux-design"
                      className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <img src={UIUX} alt="UI/UX" className="w-8 h-8" />
                      <p className="text-[14px]">UI/UX Design</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact-us" className="hover:text-blue-400 transition">
              Contact Us
            </Link>

            {/* Request A Quote Button inside nav */}
            <button
              onClick={() => setModalOpen(true)}
              style={{
                animation: "scaleUpDown 2s ease-in-out infinite",
                transformOrigin: "center",
              }}
              className="ml-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-5 rounded-md hover:opacity-90 transition"
            >
              Request A Quote
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="lg:hidden fixed top-0 left-0 w-3/4 max-w-xs h-full bg-gray-800 p-6 shadow-lg z-50 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="logo" className="w-16" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <Link
              to="/"
              className="block py-3 text-white font-semibold border-b border-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 text-white font-semibold border-b border-gray-600"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="py-3 border-b border-gray-600">
              <button
                className="w-full flex justify-between items-center text-white font-semibold"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {mobileDropdownOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-3">
                  <Link
                    to="/blockchain"
                    className="flex items-center gap-3 text-gray-300 py-2"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    <img src={Blockchain} alt="Blockchain" className="w-6 h-6" />
                    <span>Blockchain</span>
                  </Link>
                  <Link
                    to="/software-consultancy"
                    className="flex items-center gap-3 text-gray-300 py-2"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    <img src={Software} alt="Software" className="w-6 h-6" />
                    <span>Software Consultancy</span>
                  </Link>
                  <Link
                    to="/digital-marketing"
                    className="flex items-center gap-3 text-gray-300 py-2"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    <img src={Digital} alt="Digital" className="w-6 h-6" />
                    <span>Digital Marketing</span>
                  </Link>
                  <Link
                    to="/it-staffing"
                    className="flex items-center gap-3 text-gray-300 py-2"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    <img src={IT} alt="IT Staffing" className="w-6 h-6" />
                    <span>IT Staffing</span>
                  </Link>
                  <Link
                    to="/quality-assurance"
                    className="flex items-center gap-3 text-gray-300 py-2"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    <img src={Quality} alt="Quality" className="w-6 h-6" />
                    <span>Quality Assurance</span>
                  </Link>
                  <Link
                    to="/website-development"
                    className="flex items-center gap-3 text-gray-300 py-2"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    <img src={Website} alt="Website" className="w-6 h-6" />
                    <span>Website Development</span>
                  </Link>
                  <Link
                    to="/ui-ux-design"
                    className="flex items-center gap-3 text-gray-300 py-2"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    <img src={UIUX} alt="UI/UX" className="w-6 h-6" />
                    <span>UI/UX Design</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact-us"
              className="block py-3 text-white font-semibold border-b border-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                setModalOpen(true);
                setIsOpen(false);
              }}
              className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-md hover:opacity-90 transition"
            >
              Request A Quote
            </button>
          </nav>
        )}
      </header>
      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Navbar;