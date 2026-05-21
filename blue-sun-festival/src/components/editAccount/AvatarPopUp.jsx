import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import variant1 from "../../assets/editAccountIcons/icon1.png";
import variant2 from "../../assets/editAccountIcons/icon2.png";
import variant3 from "../../assets/editAccountIcons/icon3.png";
import variant4 from "../../assets/editAccountIcons/icon4.png";
import variant5 from "../../assets/editAccountIcons/icon5.png";
import variant6 from "../../assets/editAccountIcons/icon6.png";
import variant7 from "../../assets/editAccountIcons/icon7.png";
import variant8 from "../../assets/editAccountIcons/icon8.png";
import variant9 from "../../assets/editAccountIcons/icon9.png";
import variant10 from "../../assets/editAccountIcons/icon10.png";
import variant11 from "../../assets/editAccountIcons/icon11.png";
import variant12 from "../../assets/editAccountIcons/icon12.png";

const AVATARS = [
  variant1,
  variant2,
  variant3,
  variant4,
  variant5,
  variant6,
  variant7,
  variant8,
  variant9,
  variant10,
  variant11,
  variant12,
];

const SAVE_BUTTON_CLASS =
  "bg-[#C5E3EE] text-[#22428F] text-[16px] px-[11%] py-[3%] rounded-[20px] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-none";

const AvatarPopUp = ({ open, onClose }) => {
  const [selected, setSelected] = useState(
    () => localStorage.getItem("userAvatar") || null,
  );

  const handleSave = () => {
    if (selected) localStorage.setItem("userAvatar", selected);
    onClose();
  };

  return (
    <Popup
      open={open}
      modal
      onClose={onClose}
      overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
      contentStyle={{
        background: "white",
        padding: "0",
        width: "95%",
        height: "97%",
        borderRadius: "20px",
      }}
    >
      <div className="flex flex-col p-[10px]">
        <h2 className="text-center text-[#0199D7]">CHOOSE YOUR AVATAR</h2>
        <div className="flex flex-row justify-center gap-[20px] flex-wrap">
          {AVATARS.map((avatar, i) => (
            <div
              key={i}
              onClick={() => setSelected(avatar)}
              className={`h-[80px] w-[80px] p-[10px] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-[50%] flex justify-center items-center cursor-pointer ${
                selected === avatar ? "ring-[3px] ring-[#0199D7]" : ""
              }`}
            >
              <img
                src={avatar}
                alt={`profile-pic-${i + 1}`}
                height={60}
                width={60}
              />
            </div>
          ))}
          <button
            onClick={handleSave}
            className={`${SAVE_BUTTON_CLASS} cursor-pointer hover:opacity-80`}
          >
            Save Changes
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default AvatarPopUp;
