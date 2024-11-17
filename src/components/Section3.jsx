import Section3Cards from "./Section3Cards";
import Image1 from "../assets/card-pic1.png";
import Image2 from "../assets/card-pic2.png";
import Image3 from "../assets/card-pic3.png";
import Blocks from "../assets/rounded-blocks.svg";

const Section3 = () => {
  return (
    <div className="p-4 py-12 md:p-20 bg-[#0F172A] text-white relative">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 mb-20">
        <h1 className="text-[32px] md:text-[56px] font-extrabold">
          The best of the best
        </h1>
        <button className="h-16 px-12 py-5 border-2 rounded-lg border-white text-2xl/6 font-bold hover:scale-110 hover:shadow-lg transition-all">
          Sign up now
        </button>
      </div>
      <div className="relative z-20">
        <div className="flex justify-between flex-col md:flex-row gap-8 md:gap-0">
          <Section3Cards image={Image1} title={"Title"} />
          <Section3Cards image={Image2} title={"Title"} />
          <Section3Cards image={Image3} title={"Title"} />
        </div>
      </div>
      <img
        className="absolute bottom-0 left-0 w-full px-11 pb-[40px] z-10"
        src={Blocks}
        alt=""
      />
    </div>
  );
};
export default Section3;
