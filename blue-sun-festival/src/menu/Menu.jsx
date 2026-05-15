import MenuBackground from "./MenuBackground";
import MenuTickIcon from "./MenuTickIcon";

const Menu = () => {
  const option = ["Edit Account", "My Friends", "Language", "Saved", "Log Out"];
  const showOptions = option.map((opt) => (
    <li
      key={opt}
      className="pb-[9%] flex flex-row justify-between text-[white]"
    >
      {opt}
      <MenuTickIcon />
    </li>
  ));
  return (
    <MenuBackground>
      <ul className="list-none">{showOptions}</ul>
    </MenuBackground>
  );
};

export default Menu;
