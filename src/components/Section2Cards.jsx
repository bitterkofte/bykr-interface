const Section2Cards = ({ title, iconBadge }) => {
  return (
    <div className="min-h-[205px] max-w-[373px] flex flex-col gap-[10px] items-center md:items-start text-center md:text-left">
      <img className="h-16 w-fit" src={iconBadge} alt="" />
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-lg">
        Sit bibendum donec dolor fames neque vulputate non sit aliquam.
        Consequat turpis natoque leo, massa.
      </p>
    </div>
  );
};
export default Section2Cards;
