import { NavLink } from "react-router-dom";
import QueueIcon from "../icons/QueueIcon";
import LocationIcon from "../icons/LocationIcon";
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
      <NavLink to="/crowd/density">
        <div className={`${styling} right-[4%]`}>
          <QueueIcon />
        </div>
      </NavLink>
    </>
  );
};

export default FriendButton;
