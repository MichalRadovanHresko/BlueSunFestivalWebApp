import EditAccIcon from "../icons/EditAccIcon";
import HeartIcon from "../icons/HeartIcon";
import LanguageIcon from "../icons/LanguageIcon";
import LogOutIcon from "../icons/LogOutIcon";
import QuestionIcon from "../icons/QuestionIcon";
import FindMyFriendsIcon from "../icons/FindMyFriends";

const ChooseIcon = ({ opt }) => {
  const styling =
    "bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center";

  if (opt === "Edit Account") {
    return (
      <div className={`${styling}`}>
        <EditAccIcon />
      </div>
    );
  } else if (opt === "My Friends") {
    return (
      <div className={`${styling}`}>
        <FindMyFriendsIcon />
      </div>
    );
  } else if (opt === "Language") {
    return (
      <div className={`${styling}`}>
        <LanguageIcon />
      </div>
    );
  } else if (opt === "Saved") {
    return (
      <div className={`${styling}`}>
        <HeartIcon />
      </div>
    );
  } else if (opt === "Log Out") {
    return (
      <div className={`${styling}`}>
        <LogOutIcon />
      </div>
    );
  } else {
    return (
      <div className={`${styling}`}>
        <QuestionIcon />
      </div>
    );
  }
};

export default ChooseIcon;
