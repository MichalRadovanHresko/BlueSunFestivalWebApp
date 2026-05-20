import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import IntroductionPopUp from "./PopUpLayout";

const DiscoverPopUp = () => {
  const [open, setOpen] = useState(true);

  return (
    <Popup
      open={open}
      modal
      onClose={() => setOpen(false)}
      overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
      contentStyle={{
        background: "transparent",
        border: "none",
        padding: 0,
        width: "85%",
        maxWidth: "430px",
      }}
    >
      <IntroductionPopUp onClose={() => setOpen(false)}>
        <h2 className="text-[#FFF] text-[22px] text-center mb-[25%] mt-[0px]">
          FIND YOUR FESTIVAL CROWD!
        </h2>
        <button
          onClick={() => setOpen(false)}
          className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[7px]"
        >
          <li className="ml-[5%]">Discover new people</li>
        </button>
        <button
          onClick={() => setOpen(false)}
          className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[7px]"
        >
          <li className="ml-[5%]">Join their live location</li>
        </button>

        <button
          onClick={() => setOpen(false)}
          className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[7px]"
        >
          <li className="ml-[5%]">Share a photo</li>
        </button>
      </IntroductionPopUp>
    </Popup>
  );
};

export default DiscoverPopUp;
