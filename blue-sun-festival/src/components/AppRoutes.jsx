import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Artists from "../pages/Artists.jsx";
import Schedule from "../pages/Schedule.jsx";
import Account from "../pages/Account.jsx";
import Location from "../pages/Location.jsx";
import EditAccount from "../pages/EditAccount.jsx";
import Friends from "../pages/Friends.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/edit" element={<EditAccount />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
