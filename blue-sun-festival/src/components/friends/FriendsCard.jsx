import avatar from "../../assets/editAccountIcons/icon1.png";
import BlueLocationIcon from "../../components/icons/BlueLocationIcon";
import FindMeIcon from "../../components/icons/FindMeIcon";

const FriendsCard = ({ name }) => {
  return (
    <div className="h-[90px] w-[380px] flex flex-row justify-around mx-[3%] mb-[24px] bg-[#C5E3EE] rounded-[20px] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] items-center">
      <img
        src={avatar}
        alt="avatar"
        height={60}
        width={60}
        className="p-[15px]"
      />
      <p className="text-[#22428F]">{name}</p>
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-center">
          <button className="w-[95px] border-none rounded-[10px] px-[8px] py-[5px] flex items-center justify-center shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
            Spotlight
            <BlueLocationIcon />
          </button>
        </div>
        <div>
          <button className="w-[95px] border-none rounded-[10px] px-[8px] py-[5px] flex items-center justify-center shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
            Find Me
            <FindMeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
