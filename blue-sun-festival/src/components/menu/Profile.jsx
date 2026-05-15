import defaultUser from "../../assets/defaultUser.png";

const Profile = () => {
  return (
    <div className="flex flex-col p-[22px] bg-[#C5E3EE] rounded-[75px] m-auto w-[108px] h-[108px] mb-[12%]">
      <img
        src={defaultUser}
        alt="default-user-profile-icon"
        className="mb-[10px]"
      />
      <p className="text-[20px] text-[#22428F] whitespace-nowrap">Ida Jensen</p>
    </div>
  );
};

export default Profile;
