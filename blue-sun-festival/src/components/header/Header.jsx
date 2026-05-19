import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import TicketIcon from "../icons/TicketIcon";
import FavoriteIcon from "../icons/FavoriteIcon";

const Header = () => {
  return (
    <>
      <header className="flex justify-between mt-[5%] mt-3pct-md mx-[5%]">
        <a href="https://blaasol.dk/billet-2026/" target="_blank">
          <TicketIcon />
        </a>
        <NavLink to="/home">
          <img
            src={logo}
            alt="Blue Sun Festival logo"
            className="w-[150px] h-[49px]"
          />
        </NavLink>
        <FavoriteIcon />
      </header>
    </>
  );
};

export default Header;
