import React from "react";
import rightImage from "../assets/Group 322.svg";
import Decentralization from "../assets/Group 323.svg";
import Security from "../assets/Group 324.svg";
import Immutability from "../assets/Group 325.svg";
import Transparency from "../assets/Group 326.svg";

export default function BlockchainInfo() {
  return (
    <div className="bg-[#F9FAFB] py-16 px-4 md:px-8 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-[42px] font-bold font-raleway mb-4 text-gray-800">
            What is <span className="text-blue-600">Blockchain?</span>
          </h1>
          <p className="text-[16px] text-gray-600 font-raleway leading-relaxed">
            Blockchain is a distributed digital ledger technology that ensures secure, transparent, and tamper-proof
            record-keeping without the need for a central authority. It enables peer-to-peer transactions across a
            decentralized network, making it the ideal solution for industries where trust, security, and
            accountability are paramount.
          </p>
        </div>

        {/* Content layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Decentralization */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-start gap-4">
              <img src={Decentralization} alt="Decentralization" className="w-15 h-15" />
              <div>
                <h3 className="text-lg font-bold font-raleway mb-1">Decentralization</h3>
                <p className="text-gray-500 text-sm font-raleway">
                  Blockchain operates on a distributed network, eliminating the need for a central authority.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-start gap-4">
              <img src={Security} alt="Security" className="w-15 h-15" />
              <div>
                <h3 className="text-lg font-bold font-raleway mb-1">Security</h3>
                <p className="text-gray-500 text-sm font-raleway">
                  Data is encrypted and stored in blocks, making it nearly impossible to alter or hack.
                </p>
              </div>
            </div>

            {/* Immutability */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-start gap-4">
              <img src={Immutability} alt="Immutability" className="w-15 h-15" />
              <div>
                <h3 className="text-lg font-bold font-raleway mb-1">Immutability</h3>
                <p className="text-gray-500 text-sm font-raleway">
                  Once data is added to the blockchain, it cannot be altered or deleted, ensuring the integrity of the records.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-start gap-4">
              <img src={Transparency} alt="Transparency" className="w-15 h-15" />
              <div>
                <h3 className="text-lg font-bold font-raleway mb-1">Transparency</h3>
                <p className="text-gray-500 text-sm font-raleway">
                  All participants in the blockchain network can access the same data, ensuring transparency and traceability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
        <div className="relative md:pl-8">
  <img
    src={rightImage}
    alt="Blockchain illustration"
    className="w-full max-w-[600px] md:translate-x-24 md:-mr-24 pointer-events-none select-none"
  />
</div>
        </div>
      </div>
    </div>
  );
}
