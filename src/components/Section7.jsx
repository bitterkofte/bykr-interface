import map from "../assets/map.svg";

const Section7 = () => {
  return (
    <div className="min-h-[717px] px-[196px] py-[42px] bg-amber-900 relative overflow-hidden">
      <div className="mt-14 h-full w-full absolute top-0 left-0 text-center flex items-center justify-center flex-col text-white z-20 drop-shadow-lg">
        <p className="mb-2 md:mb-0 text-5xl md:text-8xl md:leading-[105px] font-extrabold">
          11,658,467
        </p>
        <p className="text-[32px] md:text-[56px] md:leading-[61px] font-extrabold">
          Shoes Collected
        </p>
      </div>
      <img
        className="min-w-[999px] -ml-36 mt-10 md:m-0 md:w-auto md:h-full items-center justify-center "
        src={map}
        alt=""
      />
    </div>
  );
};
export default Section7;
