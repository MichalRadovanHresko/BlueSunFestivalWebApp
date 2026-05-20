import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import IntroductionPopUp from "./PopUpLayout";
import QueueIcon from "../../icons/QueueIcon";
import LocationIcon from "../../icons/LocationIcon";
import FindMyFriendsIcon from "../../icons/FindMyFriends";
import NewFriendIcon from "../../icons/NewFriendIcon";

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
      <IntroductionPopUp onClose={() => setOpen(false)}>
        <h2 className="text-[#FFF] text-center mb-[7%]">YOUR FESTIVAL LIVE!</h2>
        <div className="flex flex-row">
          <LocationIcon />
          <button
            onClick={() => setOpen(false)}
            className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[7px]"
          >
            Explore facilities & stages
          </button>
        </div>
        <div className="flex flex-row">
          <QueueIcon />
          <button
            onClick={() => setOpen(false)}
            className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[7px]"
          >
            Avoid crowded areas
          </button>
        </div>
        <div className="flex flex-row">
          <FindMyFriendsIcon />
          <button
            onClick={() => setOpen(false)}
            className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[7px]"
          >
            Discover new people & social hotspots
          </button>
        </div>
        <div className="flex flex-row">
          <NewFriendIcon />
          <button
            onClick={() => setOpen(false)}
            className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px] mb-[7px]"
          >
            Find your friends
          </button>
        </div>
      </IntroductionPopUp>
    </Popup>
  );
};

export default Introduction;
