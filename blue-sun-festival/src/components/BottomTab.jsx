import { NavLink } from "react-router-dom";

const BottomTab = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="394"
      height="90"
      viewBox="0 0 394 90"
      fill="none"
      className="fixed bottom-[0px] left-1/2 z-10 h-[90px] w-[394px] -translate-x-1/2"
    >
      <path
        d="M394 90H0V13H19.5L111.5 4L203 9.5L250 4L355.5 7L394 0V90Z"
        fill="#FFACCE"
      />
      <foreignObject x="0" y="0" width="394" height="90">
        <nav
          xmlns="http://www.w3.org/1999/xhtml"
          className="flex pt-[10%] justify-around text-[#22428F]"
        >
          <NavLink to="/" className="no-underline">
            Home
          </NavLink>
          <NavLink to="/schedule" className="no-underline">
            Schedule
          </NavLink>
          <NavLink to="/location" className="no-underline">
            Location
          </NavLink>
          <NavLink to="/artists" className="no-underline">
            Artists
          </NavLink>
          <NavLink to="/menu" className="no-underline">
            Menu
          </NavLink>
        </nav>
      </foreignObject>
    </svg>
  );
};

export default BottomTab;
