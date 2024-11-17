import BasketIcon from "../assets/icons/basket.svg";

const Section3Cards = ({ image, title }) => {
  return (
    <div className="max-w-[394px] bg-[#0F172A] shadow-2xl shadow-[#ffffff40] rounded-[10px] border-[1px] border-[#0F172A] overflow-hidden">
      <img src={image} alt="img" />
      <div className="p-8 flex flex-col gap-4">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-lg">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </p>
        <button className="h-14 flex gap-2 justify-center items-center w-full text-xl font-medium border-2 border-white rounded-lg hover:drop-shadow-shine active:drop-shadow-shiner transition-all duration-200">
          <img src={BasketIcon} alt="" />
          <span className="px-4">Buy Now</span>
        </button>
      </div>
    </div>
  );
};
export default Section3Cards;
