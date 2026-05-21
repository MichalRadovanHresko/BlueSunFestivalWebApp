import HeartIcon from "../../../icons/HeartIcon";
import DrinkImg from "../../../../assets/markersImages/drinkMenu.png";

const InfoCard = ({ label, value }) => (
  <div className="flex flex-col gap-[6px]">
    <p className="m-0 text-[#00a4ea] text-[14px] font-semibold">{label}</p>
    <div className="h-[44px] rounded-[12px] bg-[#f4f4f4] text-[#22428f] font-semibold text-[16px] flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.12)]">
      {value}
    </div>
  </div>
);

const MarkerPopupContent = ({ marker }) => {
  if (!marker) return null;

  return (
    <div className="box-border w-full max-h-[380px] overflow-y-auto bg-[#d6dee2] rounded-tl-[50px] rounded-tr-[50px] pt-[20px] px-[16px] pb-[16px] shadow-[0_-10px_24px_rgba(0,0,0,0.16)] animate-slide-up">
      <div className="flex justify-between items-center gap-[10px] mb-[10px]">
        <h3 className="m-0 text-[#22428f] uppercase text-[28px] leading-none">
          {marker.title}
        </h3>
        <button
          className="w-[52px] h-[52px] border-none rounded-full bg-[#eef2f4] shadow-[0_3px_8px_rgba(0,0,0,0.18)] p-0 flex items-center justify-center"
          type="button"
          aria-label="Save location"
        >
          <HeartIcon />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-[12px] mb-[10px]">
        <InfoCard label="Time in line" value={marker.queueTime} />
        <InfoCard label="Preparation" value={marker.prepTime} />
      </div>

      <p className="mt-[2px] mb-[10px] text-[#22428f] text-[20px]">MENU</p>

      <div className="flex gap-[12px] mt-[10px]">
        <div className="flex-1 bg-white rounded-[12px] p-[10px] shadow-[0_6px_14px_rgba(0,0,0,0.08)] flex flex-col gap-[6px] items-center">
          <img src={DrinkImg} alt="img" width={250} height={178} />
        </div>
        <div className="flex-1 bg-white rounded-[12px] p-[10px] shadow-[0_6px_14px_rgba(0,0,0,0.08)] flex flex-col gap-[6px] items-center"></div>
      </div>
    </div>
  );
};

export default MarkerPopupContent;
