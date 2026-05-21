import MenuBackground from "./MenuBackground";
import MenuTickIcon from "../icons/MenuTickIcon";
import ChooseIcon from "./ChooseIcon";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Profile />
      <MenuBackground>
        <ul className="list-none">
          <NavLink to="/account/edit" className="no-underline ">
            <li
              key={"Edit Account"}
              className="flex flex-row items-center justify-between pb-[9%] text-[white]"
            >
              <div className="flex flex-row items-center shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] gap-[40px] bg-[white] rounded-[50%] h-[30px] w-[30px] p-[15px] whitespace-nowrap">
                <ChooseIcon opt={"Edit Account"} />
                <span className="whitespace-nowrap">Edit Account</span>
              </div>
              <MenuTickIcon />
            </li>
          </NavLink>
          <NavLink to="/account/friends" className="no-underline">
            <li
              key={"My Friends"}
              className="flex flex-row items-center justify-between pb-[9%] text-[white]"
            >
              <div className="flex flex-row items-center shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] gap-[40px] bg-[white] rounded-[50%] h-[30px] w-[30px] p-[15px] whitespace-nowrap">
                <ChooseIcon opt={"My Friends"} />
                <span className="whitespace-nowrap">My Friends</span>
              </div>
              <MenuTickIcon />
            </li>
          </NavLink>
          <li
            key={"Language"}
            className="flex flex-row items-center justify-between pb-[9%] text-[white]"
          >
            <div className="flex flex-row items-center shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] gap-[40px] bg-[white] rounded-[50%] h-[30px] w-[30px] p-[15px] whitespace-nowrap">
              <ChooseIcon opt={"Language"} />
              <span className="whitespace-nowrap">Language</span>
            </div>
            <MenuTickIcon />
          </li>
          <li
            key={"Saved"}
            className="flex flex-row items-center justify-between pb-[9%] text-[white]"
          >
            <div className="flex flex-row items-center shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] gap-[40px] bg-[white] rounded-[50%] h-[30px] w-[30px] p-[15px] whitespace-nowrap">
              <ChooseIcon opt={"Saved"} />
              <span className="whitespace-nowrap">Saved</span>
            </div>
            <MenuTickIcon />
          </li>
          <NavLink to="/" className="no-underline">
            <li
              key={"Log Out"}
              className="flex flex-row items-center justify-between pb-[9%] text-[white]"
            >
              <div className="flex flex-row items-center shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] gap-[40px] bg-[white] rounded-[50%] h-[30px] w-[30px] p-[15px] whitespace-nowrap">
                <ChooseIcon opt={"Log Out"} />
                <span className="whitespace-nowrap">Log Out</span>
              </div>
              <MenuTickIcon />
            </li>
          </NavLink>
        </ul>
      </MenuBackground>
    </>
  );
};

export default Menu;
