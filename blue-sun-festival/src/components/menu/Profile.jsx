import defaultUser from "../../assets/user/defaultUser.png";
import SettingIcon from "../icons/settingIcon";

const Profile = () => {
  return (
    <div className="relative flex flex-col p-[22px] bg-[#C5E3EE] rounded-[75px] m-auto w-[108px] h-[108px] mb-[12%] mb-3pct">
      <img
        src={defaultUser}
        alt="default-user-profile-icon"
        className="mb-[10px]"
      />
      <p className="text-[20px] text-[#22428F] whitespace-nowrap">Ida Jensen</p>{" "}
      <div className="absolute top-[-1%] right-[-65%] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex flex-row items-center bg-[white] rounded-[50%] h-[30px] w-[30px] p-[15px]">
        <SettingIcon />
      </div>
    </div>
  );
};

export default Profile;
