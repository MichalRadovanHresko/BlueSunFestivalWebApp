import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Artists from "../pages/Artists.jsx";
import Schedule from "../pages/Schedule.jsx";
import Menu from "../pages/Menu.jsx";
import Location from "../pages/Location.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
