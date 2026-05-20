import { useState } from "react";
import editIcon from "../../assets/icons/editIcon.png";
import BackButton from "./BackButton";
import AvatarPopUp from "./AvatarPopUp";

const EditAccountHero = () => {
  const [openImagePopup, setOpenImagePopup] = useState(false);
  const [avatar, setAvatar] = useState(
    localStorage.getItem("userAvatar") || editIcon,
  );

  return (
    <section className="relative px-[7%]">
      <div className="flex flex-row gap-[15px] items-center text-[#22428F]">
        <BackButton />
        <p className="text-[20px]">ACCOUNT</p>
      </div>
      <div className="flex flex-col items-center text-[#22428F]">
        <img
          src={avatar}
          alt="profile-image"
          className="h-[150px] w-[150px] mb-[10px] cursor-pointer"
          onClick={() => setOpenImagePopup(true)}
        />

        <p className="text-[20px] font-[600] mt-[0px] font-['Poppins']">
          IDA JENSEN
        </p>
      </div>

      <AvatarPopUp
        open={openImagePopup}
        onClose={() => {
          setOpenImagePopup(false);
          setAvatar(localStorage.getItem("userAvatar") || editIcon);
        }}
      />
    </section>
  );
};

export default EditAccountHero;
