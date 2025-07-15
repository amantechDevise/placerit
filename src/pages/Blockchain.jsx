import BlockchainBg from "../assets/Group 431.svg";
import Shape_4_ from "../assets/Shape_4_.svg";
import BlockchainInfo from "../components/BlockchainInfo";
import TechnologySolutions from "../components/TechnologySolutions";
function Blockchain() {
  return (
    <main className="relative w-full h-full">
      <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
        {/* Background Video */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src={BlockchainBg}
        />


      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
  <h1 className="text-3xl md:text-[73px] font-regular font-raleway text-white leading-tight md:mb-[100px] mb-0 ">
    Blockchain <span className="font-semibold ">Technology <br /> Solutions</span>
  </h1>
</div>


        <div className="absolute bottom-[-80px] 2xl:bottom-[-200px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
          <img src={Shape_4_} alt="" className="w-full object-cover" />
        </div>
      </div>
      <TechnologySolutions/>
      <div>
        <BlockchainInfo/>
      </div>
    </main>
  );
}

export default Blockchain;
