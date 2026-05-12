import { NavLink } from "react-router-dom";

const BottomTab = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/program">Program</NavLink>
      </li>
      <li>
        <NavLink to="/artister">Artister</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
    </ul>
  );
};

export default BottomTab;
