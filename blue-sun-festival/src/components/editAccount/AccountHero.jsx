import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import editIcon from "../../assets/icons/editIcon.png";
import BackButton from "./BackButton";

const EditAccountHero = () => {
  const [openImagePopup, setOpenImagePopup] = useState(false);

  return (
    <section className="relative px-[7%]">
      <div className="flex flex-row gap-[15px] items-center text-[#22428F]">
        <BackButton />
        <p className="text-[20px]">ACCOUNT</p>
      </div>
      <div className="flex flex-col items-center text-[#22428F]">
        <img
          src={editIcon}
          alt="profile-image"
          className="h-[150px] w-[150px] mb-[10px] cursor-pointer"
          onClick={() => setOpenImagePopup(true)}
        />

        <p className="text-[20px] font-[600] mt-[0px] font-['Poppins']">
          IDA JENSEN
        </p>
      </div>

      <Popup
        open={openImagePopup}
        modal
        onClose={() => setOpenImagePopup(false)}
        overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
        contentStyle={{
          background: "white",
          border: "none",
          padding: "20px",
          width: "80%",
          height: "70%",
          borderRadius: "10px",
        }}
      >
        <div></div>
      </Popup>
    </section>
  );
};

export default EditAccountHero;
