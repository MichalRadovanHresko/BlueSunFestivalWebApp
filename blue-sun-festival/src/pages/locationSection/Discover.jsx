import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
import BackButtonIcon from "../../components/icons/BackButtonIcon";
import DiscoverMap from "./maps/DiscoverMap";
import DiscoverPopUp from "../../components/map/DiscoverPopUp";

const Discover = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-center gap-[15px] items-center">
        <NavLink
          to="/friends"
          className="flex items-center justify-center bg-[white] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-[50%] h-[30px] w-[30px] p-[15px] no-underline"
        >
          <BackButtonIcon />
        </NavLink>
        <h2 className="text-[#22428F] text-[24px]">DISCOVER FRIENDS</h2>
        <DiscoverPopUp />
      </div>
      <DiscoverMap />
    </>
  );
};

export default Discover;
