import { NavLink } from "react-router-dom";
import QueueIcon from "../icons/QueueIcon";
import LocationIcon from "../icons/LocationIcon";
import Discover from "../../assets/icons/discoverIcon.svg";
const FriendButton = () => {
  const styling =
    "absolute bottom-[7%] bg-[white] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-[50%] h-[30px] w-[30px] p-[15px] z-10 m-[2px]";

  return (
    <>
      <NavLink to="/">
        <div className={`${styling} left-[4%]`}>
          <LocationIcon />
        </div>
      </NavLink>
      <div
        className={`absolute bottom-[7%] left-[35%] bg-[white] flex flex-col justify-center items-center rounded-[30px] w-[130px] h-[110px]`}
      >
        <div className="rounded-[50%] bg-[#0199D7] p-[15px]">
          <img src={Discover} alt="Discover" height={20} width={25} />
        </div>
        <p className="m-[0px] text-[#22428F] text-[16px]">Discover</p>
      </div>
      <NavLink to="/crowd/density">
        <div className={`${styling} right-[4%]`}>
          <QueueIcon />
        </div>
      </NavLink>
    </>
  );
};

export default FriendButton;
