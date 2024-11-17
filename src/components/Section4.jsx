import Video from "../assets/video.svg";
import CheckedListItem from "./CheckedListItem";

const Section4 = () => {
  return (
    <div className="p-4 md:px-20 md:py-40 lg:h-[816px]">
      <div className="flex flex-col md:flex-row justify-between bg-white rounded-[30px] px-4 py-8 md:pl-20 md:py-28 relative shadow-xl shadow-neutral-300">
        <div className="flex flex-col items-center md:items-baseline gap-6">
          <h1 className="text-[56px] font-extrabold">Why join us</h1>
          <ul className="list-none">
            <CheckedListItem
              text={"Est et in pharetra magna adipiscing ornare aliquam."}
            />
            <CheckedListItem
              text={"Tellus arcu sed consequat ac velit ut eu blandit."}
            />
            <CheckedListItem
              text={"Ullamcorper ornare in et egestas dolor orci."}
            />
          </ul>
          <button className="z-20 w-fit text-xl font-medium px-8 py-4 leading-6 text-amber-900 border-amber-900 border-2 rounded-lg hover:scale-110 hover:shadow-lg transition-all">
            Sign up now
          </button>
        </div>
        <div className="relative ?w-[480px] md:w-[713px] flex items-center">
          <img
            className="md:absolute scale-110 -mt-5 md:mt-6 md:ml-10 drop-shadow-xl "
            src={Video}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Section4;
