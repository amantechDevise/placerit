import Image1 from "../assets/Mask group.svg";

const OurValues = () => {
  return (
    <div className="flex flex-wrap items-center justify-between ">
      {/* Left Section - Image */}
      <div className="w-full lg:w-1/2 h-[900px]">
        <img src={Image1} alt="Team collaboration" className="w-full h-auto" />
      </div>

      {/* Right Section - Values */}
      <div className="w-full lg:w-1/2 md:pl-10 md:pr-80 px-4">
        <h2 className="text-[42px] font-extrabold text-Raleway text-blue-600 mb-6">Our Values</h2>

        <div className="space-y-8">
          {/* Integrity Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-1 border-gray-200">
            <h3 className="text-[18px] font-bold text-Raleway text-blue-600 mt-2">Integrity</h3>
            <p className="text-gray-700 text-[16px] mt-2">We believe in doing business the right way, with transparency, <br /> honesty, and accountability.</p>
          </div>

          {/* Collaboration Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-1 border-gray-200">
            <h3 className="text-[18px] font-bold text-Raleway text-blue-600 mt-2">Collaboration</h3>
            <p className="text-gray-700 text-[16px] mt-2">We work hand-in-hand with our clients to understand their <br /> needs and create customized solutions.</p>
          </div>

          {/* Innovation Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-1 border-gray-200">
            <h3 className="text-[18px] font-bold text-Raleway text-blue-600 mt-2">Innovation</h3>
            <p className="text-gray-700 text-[16px] mt-2">We embrace change and continually seek innovative solutions  to <br /> meet the evolving demands of our clients.</p>
          </div>

          {/* Excellence Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-1 border-gray-200">
            <h3 className="text-[18px] font-bold text-Raleway text-blue-600 mt-2">Excellence</h3>
            <p className="text-gray-700 text-[16px] mt-2">We are committed to delivering the highest standards of quality in <br /> everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
