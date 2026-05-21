import { NavLink } from "react-router-dom";
import QueueIcon from "../../icons/QueueIcon";
import LocationIcon from "../../icons/LocationIcon";
import DiscoverButton from "./DiscoverButton";
const FriendButton = () => {
  const sideBtn =
    "bg-[white] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-[50%] h-[30px] w-[30px] p-[15px] m-[2px] z-10";

  return (
    <div className="absolute bottom-[7%] w-full flex justify-around items-end z-10">
      <NavLink to="/location">
        <div className={sideBtn}>
          <LocationIcon />
        </div>
      </NavLink>
      <NavLink to="/friends/discover" className="no-underline">
        <DiscoverButton />
      </NavLink>
      <NavLink to="/crowd/density">
        <div className={sideBtn}>
          <QueueIcon />
        </div>
      </NavLink>
    </div>
  );
};

export default FriendButton;
