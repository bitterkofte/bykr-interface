const ReviewCard = ({logo, name, text, avatar, username, userTitle}) => {
  return (
    <div className="min-w-[384px] h-[430px] p-8 flex flex-col gap-4 bg-white rounded-[20px] drop-shadow-lg ">
      <div className="py-4 flex gap-[3px] items-center">
        <img src={logo} alt="" />
        <span className="text-2xl font-bold text-gray-600">{ name }</span>
      </div>
      <p className="text-2xl/9">{ text }</p>
      <div className="pt-4 flex gap-4 items-center">
        <img src={avatar} alt="" />
        <div className="flex flex-col">
          <p className="text-lg">{ username }</p>
          <p className="text-base text-gray-600">{ userTitle }</p>
        </div>
      </div>
    </div>
  )
}
export default ReviewCard