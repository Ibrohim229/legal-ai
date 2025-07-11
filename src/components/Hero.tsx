import { BsArrowRight } from "react-icons/bs";
import HeroImage from "/HeroImage.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-10 gap-10 font-manrope mt-10">
      <div className="flex flex-col gap-7">
        <div className="bg-gray-300 rounded-xl py-2 flex justify-center items-center gap-2 max-w-[440px]">
          <p className="text-xs">
            <span className="font-bold">Introducing:</span> Automated Conclusion
            and Research with planning mode
          </p>
          <BsArrowRight />
        </div>
        <h1 className="text-6xl ">
          Empower your legal team with tools that{" "}
          <span className="font-playfair">think</span>,{" "}
          <span className="font-playfair">plan</span> and{" "}
          <span className="font-playfair">solve</span>
        </h1>
        <p className="text-sm text-gray-700 w-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nam
          itaque non temporibus eligendi molestias beatae similique
          reprehenderit. Obcaecati laboriosam est quod modi possimus, saepe
          nostrum ea voluptas alias iusto.
        </p>
        <button className=" py-2 bg-black text-sm rounded-lg w-40 text-white">
          Request Demo
        </button>
      </div>
      <img src={HeroImage} alt="" className="w-[520px]" />
    </div>
  );
};

export default Hero;
