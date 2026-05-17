import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import IntroductionPopUp from "./IntroductionPopUp";

const Introduction = () => {
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
      <IntroductionPopUp>
        <h2 className="text-[#FFF] text-center mb-[7%]">YOUR FESTIVAL LIVE!</h2>

        <button
          onClick={() => setOpen(false)}
          className="text-[#22428F] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[10px]"
        >
          Explore facilities & stages
        </button>
        <button
          onClick={() => setOpen(false)}
          className="text-[#22428F] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[10px]"
        >
          Avoid crowded areas
        </button>
        <button
          onClick={() => setOpen(false)}
          className="text-[#22428F] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[10px]"
        >
          Discover new people & social hotspots
        </button>
        <button
          onClick={() => setOpen(false)}
          className="text-[#22428F] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[10px]"
        >
          Find your friends
        </button>
      </IntroductionPopUp>
    </Popup>
  );
};

export default Introduction;
