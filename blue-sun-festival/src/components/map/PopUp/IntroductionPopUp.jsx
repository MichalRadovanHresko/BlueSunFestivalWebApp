import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import IntroductionPopUp from "./PopUpLayout";
import queue from "../../../assets/icons/queue.png";
import friends from "../../../assets/icons/findMyFriends.png";

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    style={{ display: "block" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.08999 5.1187C9.19217 3.04729 12.0229 1.88302 14.9742 1.87601C17.9255 1.869 20.7617 3.0198 22.8737 5.0812H22.8762L22.9162 5.1187C27.3475 9.47745 27.3562 16.4787 22.9687 20.7937L15.88 27.7662C15.6462 27.9964 15.3312 28.1254 15.0031 28.1254C14.675 28.1254 14.3601 27.9964 14.1262 27.7662L7.03749 20.7937C5.99677 19.7762 5.16985 18.5611 4.60529 17.2196C4.04073 15.8781 3.74991 14.4373 3.74991 12.9818C3.74991 11.5264 4.04073 10.0856 4.60529 8.74409C5.16985 7.40259 5.99677 6.18742 7.03749 5.16995L7.08999 5.1187ZM15 8.12495C14.5075 8.12495 14.0199 8.22195 13.5649 8.4104C13.11 8.59886 12.6966 8.87508 12.3483 9.2233C12.0001 9.57152 11.7239 9.98492 11.5354 10.4399C11.347 10.8949 11.25 11.3825 11.25 11.8749C11.25 12.3674 11.347 12.855 11.5354 13.31C11.7239 13.765 12.0001 14.1784 12.3483 14.5266C12.6966 14.8748 13.11 15.151 13.5649 15.3395C14.0199 15.528 14.5075 15.6249 15 15.6249C15.9945 15.6249 16.9484 15.2299 17.6516 14.5266C18.3549 13.8233 18.75 12.8695 18.75 11.8749C18.75 10.8804 18.3549 9.92656 17.6516 9.2233C16.9484 8.52004 15.9945 8.12495 15 8.12495Z"
      fill="#22428F"
    />
  </svg>
);

const NewFriendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    style={{ display: "block" }}
  >
    <path
      d="M6.83595 2.46094C6.83595 2.08237 6.94821 1.71231 7.15853 1.39754C7.36885 1.08278 7.66778 0.837446 8.01753 0.692575C8.36728 0.547704 8.75214 0.5098 9.12343 0.583654C9.49472 0.657509 9.83577 0.839805 10.1035 1.10749C10.3711 1.37518 10.5534 1.71623 10.6273 2.08752C10.7012 2.45881 10.6632 2.84367 10.5184 3.19342C10.3735 3.54317 10.1282 3.8421 9.81341 4.05242C9.49864 4.26274 9.12858 4.375 8.75001 4.375C8.24237 4.375 7.75552 4.17334 7.39657 3.81438C7.03761 3.45543 6.83595 2.96858 6.83595 2.46094ZM14.726 9.62363L11.6327 6.1168C11.4531 5.91313 11.2322 5.75001 10.9847 5.63827C10.7372 5.52654 10.4687 5.46875 10.1972 5.46875H7.30284C7.03128 5.46875 6.76283 5.52654 6.51532 5.63827C6.26782 5.75001 6.04691 5.91313 5.8673 6.1168L2.77404 9.62363C2.57318 9.82915 2.46127 10.1055 2.4625 10.3928C2.46374 10.6802 2.57801 10.9555 2.78063 11.1593C2.98324 11.3631 3.25791 11.4789 3.54526 11.4818C3.83262 11.4847 4.10956 11.3744 4.31622 11.1747L6.084 9.75488L4.73732 14.8736C4.62015 15.1367 4.61143 15.4353 4.71305 15.7047C4.81466 15.9741 5.01842 16.1926 5.2801 16.3127C5.54178 16.4328 5.84027 16.4449 6.11082 16.3464C6.38136 16.2478 6.60212 16.0465 6.72521 15.7862L8.75001 12.3047L10.7721 15.791C10.8952 16.0513 11.1159 16.2526 11.3865 16.3511C11.657 16.4497 11.9555 16.4376 12.2172 16.3175C12.4789 16.1973 12.6826 15.9789 12.7842 15.7095C12.8859 15.4401 12.8771 15.1414 12.76 14.8784L11.416 9.75488L13.1865 11.1747C13.3932 11.3744 13.6701 11.4847 13.9575 11.4818C14.2448 11.4789 14.5195 11.3631 14.7221 11.1593C14.9247 10.9555 15.039 10.6802 15.0403 10.3928C15.0415 10.1055 14.9296 9.82915 14.7287 9.62363H14.726Z"
      fill="#22428F"
    />
  </svg>
);

const Introduction = () => {
  const [open, setOpen] = useState(true);

  const iconStyle = {
    display: "inline-flex",
    width: "40px",
    height: "40px",
    minWidth: "40px",
    maxHeight: "40px",
    flexShrink: 0,
    overflow: "visible",
    backgroundColor: "white",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "8px",
  };

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
        <h2 className="text-[#FFF] text-center mb-[7%] mt-[0px]">
          YOUR FESTIVAL LIVE!
        </h2>
        <div
          className="flex flex-row items-center"
          style={{ marginBottom: "7px" }}
        >
          <div style={iconStyle}>
            <LocationIcon />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px]"
          >
            Explore facilities & stages
          </button>
        </div>
        <div
          className="flex flex-row items-center"
          style={{ marginBottom: "7px" }}
        >
          <div style={iconStyle}>
            <img
              src={queue}
              width="24"
              height="24"
              alt="queue"
              style={{ display: "block" }}
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px]"
          >
            Avoid crowded areas
          </button>
        </div>
        <div
          className="flex flex-row items-center"
          style={{ marginBottom: "7px" }}
        >
          <div style={iconStyle}>
            <img
              src={friends}
              width="24"
              height="24"
              alt="friends"
              style={{ display: "block" }}
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-[#22428F] text-[16px] w-full bg-[#C5E3EE] px-[5%] py-[3%] rounded-[10px] border-[0px]"
          >
            Discover new people & social hotspots
          </button>
        </div>
        <div className="flex flex-row items-center">
          <div style={iconStyle}>
            <NewFriendIcon />
          </div>
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
