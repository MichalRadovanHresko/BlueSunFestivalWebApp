import EditAccIcon from "../icons/EditAccIcon";
import HeartIcon from "../icons/HeartIcon";
import LanguageIcon from "../icons/LanguageIcon";
import LogOutIcon from "../icons/LogOutIcon";
import QuestionIcon from "../icons/QuestionIcon";
import ShowMeIcon from "../icons/ShowMeIcon";

const ChooseIcon = ({ opt }) => {
  if (opt === "Edit Account") return <EditAccIcon />;
  else if (opt === "My Friends") return <ShowMeIcon />;
  else if (opt === "Language") return <LanguageIcon />;
  else if (opt === "Saved") return <HeartIcon />;
  else if (opt === "Log Out") return <LogOutIcon />;
  else return <QuestionIcon />;
};

export default ChooseIcon;
