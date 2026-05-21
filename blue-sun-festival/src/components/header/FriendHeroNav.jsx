import BackButton from "../editAccount/BackButton";

const FriendHeroNav = () => {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="flex flex-row gap-[15px]">
        <BackButton />
        <p className="text-[20px] text-[#22428F]">Account</p>
      </div>
      <h2 className="text-[24px] text-[#22428F] px-[12px] py-[5px] rounded-[10px] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
        REQUESTS
      </h2>
    </div>
  );
};

export default FriendHeroNav;
