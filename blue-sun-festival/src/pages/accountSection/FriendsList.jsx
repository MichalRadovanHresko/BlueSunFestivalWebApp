import AddFriendButton from "../../components/friends/AddFriendButton";
import FriendsCard from "../../components/friends/FriendsCard";
import FriendHeader from "../../components/header/FriendHeader";
import FriendHeroNav from "../../components/header/FriendHeroNav";

const FriendsList = () => {
  return (
    <>
      <FriendHeader />
      <FriendHeroNav />
      <AddFriendButton />
      <div className="mb-[25%]">
        <FriendsCard name={"Nina Rasmusen"} />
        <FriendsCard name={"Jenny Halland"} />
        <FriendsCard name={"Michal Jensen"} />
        <FriendsCard name={"Ann Flores"} />
        <FriendsCard name={"Russel"} />
        <FriendsCard name={"John Cobra"} />
      </div>
    </>
  );
};

export default FriendsList;
