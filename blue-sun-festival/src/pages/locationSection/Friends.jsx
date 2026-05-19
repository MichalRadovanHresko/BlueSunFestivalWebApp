import Header from "../../components/header/Header";
import FriendListNav from "../../components/header/FriendListNav";
import FriendMap from "./maps/FriendMap";

const Friends = () => {
  return (
    <>
      <Header />
      <FriendListNav />
      <FriendMap />
    </>
  );
};

export default Friends;
