import { Route, Routes } from "react-router-dom";
import Home from "../pages/homeSection/Home.jsx";
import Artists from "../pages/artistSection/Artists.jsx";
import Schedule from "../pages/scheduleSection/Schedule.jsx";
import Account from "../pages/accountSection/Account.jsx";
import Location from "../pages/locationSection/Location.jsx";
import EditAccount from "../pages/accountSection/EditAccount.jsx";
import Friends from "../pages/locationSection/Friends.jsx";
import CrowdDensity from "../pages/locationSection/CrowdDensity.jsx";
import Discover from "../pages/locationSection/Discover.jsx";
import LoginSign from "../pages/logInSignUpSection/LoginSign.jsx";
import FriendsList from "../pages/accountSection/FriendsList.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginSign />} />
        <Route path="/location" element={<Location />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/crowd/density" element={<CrowdDensity />} />
        <Route path="/friends/discover" element={<Discover />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/edit" element={<EditAccount />} />
        <Route path="/account/friends" element={<FriendsList />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
