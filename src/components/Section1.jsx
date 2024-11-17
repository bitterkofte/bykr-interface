import Sneaker from "../assets/sneaker-header.svg";
import WatchIcon from "../assets/icons/watch.svg";

const Section1 = () => {
  return (
    <div className="lg:min-h-[583px] p-4 py-12 md:p-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div className="max-w-[714px] flex flex-col gap-12">
        <h1 className="leading-[1.1] text-[56px] md:text-7xl font-bold">
          Collectible Sneakers
        </h1>
        <p className="text-lg font-normal">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex gap-4 items-center justify-center md:justify-start text-amber-900">
          <button className="h-14 text-xl font-medium px-8 py-4 leading-6 border-amber-900 border-2 rounded-lg hover:scale-110 hover:shadow-lg transition-all">
            Sign up now
          </button>
          <button className="h-14 flex items-center gap-2 px-2 py-3 text-base font-medium hover:scale-105 transition-all">
            <img src={WatchIcon} alt="watch" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      <img
        className="mt-10 md:mt-0 w-[120%] md:w-auto"
        src={Sneaker}
        alt="sneaker"
      />
    </div>
  );
};
export default Section1;
