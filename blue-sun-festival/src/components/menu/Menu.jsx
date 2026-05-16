import MenuBackground from "./MenuBackground";
import MenuTickIcon from "../icons/MenuTickIcon";
import ChooseIcon from "./ChooseIcon";
import Profile from "./Profile";

const Menu = () => {
  const option = ["Edit Account", "My Friends", "Language", "Saved", "Log Out"];
  const showOptions = option.map((opt) => (
    <li
      key={opt}
      className="flex flex-row items-center justify-between pb-[9%] text-[white]"
    >
      <div className="flex flex-row items-center shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] gap-[40px] bg-[white] rounded-[50%] h-[30px] w-[30px] p-[15px] whitespace-nowrap">
        <ChooseIcon opt={opt} />
        <span className="whitespace-nowrap">{opt}</span>
      </div>
      <MenuTickIcon />
    </li>
  ));

  return (
    <>
      <Profile />
      <MenuBackground>
        <ul className="list-none">{showOptions}</ul>
      </MenuBackground>
    </>
  );
};

export default Menu;
