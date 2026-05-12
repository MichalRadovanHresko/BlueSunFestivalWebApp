import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Artister from "../pages/Artister.jsx";
import Program from "../pages/Program.jsx";
import Menu from "../pages/Menu.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artister" element={<Artister />} />
        <Route path="/program" element={<Program />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
