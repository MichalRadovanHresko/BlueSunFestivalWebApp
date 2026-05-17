import BackButtonIcon from "../icons/BackButtonIcon";
import { NavLink } from "react-router-dom";

const BackButton = () => {
  return (
    <NavLink
      to="/account"
      className="flex items-center justify-center bg-[white] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-[50%] h-[30px] w-[30px] p-[15px] no-underline"
      aria-label="Back to account"
    >
      <BackButtonIcon />
    </NavLink>
  );
};

export default BackButton;
