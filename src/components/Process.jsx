import React from "react";
import Image1 from "../assets/Group 169.svg";
import Icon1 from "../assets/Group 151.svg";
import Icon2 from "../assets/Group 152.svg";
import Icon3 from "../assets/Group 153.svg";
import Icon4 from "../assets/Group 154.svg";

const Process = () => {
  return (
    <section className="bg-white px-4 py-12 md:py-20 lg:py-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose <span className="text-blue-600">Our Process?</span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-5 max-w-7xl mx-auto">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={Image1}
            alt="Team working process"
            className="w-[95%] h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Text and Icons */}
        <div className="w-full lg:w-1/2 flex flex-col gap-15">
          {/* Block 1 */}
          <div className="flex items-start gap-4">
            <img
              src={Icon1}
              alt="Transparency Icon"
              className="w-16 h-16 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-[24px] font-semibold font-Raleway text-gray-800">
                Transparency
              </h3>
              <p className="text-sm md:text-[16px] font-regular font-Raleway text-gray-600">
                You’ll always know where your project stands.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex items-start gap-4">
            <img
              src={Icon2}
              alt="Collaboration Icon"
              className="w-16 h-16 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-[24px] font-semibold font-Raleway text-gray-800">
                Collaboration
              </h3>
              <p className="text-sm md:text-[16px] font-regular font-Raleway text-gray-600">
                We believe in working together to achieve the best outcomes.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex items-start gap-4">
            <img
              src={Icon3}
              alt="Flexibility Icon"
              className="w-16 h-16 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-[24px] font-semibold font-Raleway text-gray-800">
                Flexibility
              </h3>
              <p className="text-sm md:text-[16px] font-regular font-Raleway text-gray-600">
                We adapt to your needs, ensuring that our solutions evolve as
                your business does.
              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex items-start gap-4">
            <img
              src={Icon4}
              alt="Customer Success Icon"
              className="w-16 h-16 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-[24px] font-semibold font-Raleway text-gray-800">
                Customer Success
              </h3>
              <p className="text-sm md:text-[16px] font-regular font-Raleway text-gray-600">
                We’re not happy until you’re fully satisfied with the results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
