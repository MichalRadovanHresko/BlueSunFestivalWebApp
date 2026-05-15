import EditAccIcon from "../icons/EditAccIcon";
import HeartIcon from "../icons/HeartIcon";
import LanguageIcon from "../icons/LanguageIcon";
import LogOutIcon from "../icons/LogOutIcon";
import QuestionIcon from "../icons/QuestionIcon";
import ShowMeIcon from "../icons/ShowMeIcon";

const ChooseIcon = ({ opt }) => {
  const renderSvg = (IconComponent) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
    >
      <g filter="url(#filter0_d_486_1099)">
        <circle
          cx="34"
          cy="34"
          r="30"
          fill="#ffffff"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
      </g>

      <IconComponent />
    </svg>
  );

  if (opt === "Edit Account") {
    return renderSvg(EditAccIcon);
  } else if (opt === "My Friends") {
    return renderSvg(ShowMeIcon);
  } else if (opt === "Language") {
    return renderSvg(LanguageIcon);
  } else if (opt === "Saved") {
    return renderSvg(HeartIcon);
  } else if (opt === "Log Out") {
    return renderSvg(LogOutIcon);
  } else {
    return renderSvg(QuestionIcon);
  }
};

export default ChooseIcon;
