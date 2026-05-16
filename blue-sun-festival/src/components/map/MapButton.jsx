import QueueIcon from "../icons/QueueIcon";
import ShowMeIcon from "../icons/ShowMeIcon";

const MapButton = () => {
  const styling =
    "absolute bottom-[7%] bg-[white] shadow-lg shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-[50%] h-[30px] w-[30px] p-[15px] z-10 m-[2px]";
  return (
    <>
      <div className={`${styling} left-[4%]`}>
        <ShowMeIcon />
      </div>
      <div className={`${styling} right-[4%]`}>
        <QueueIcon />
      </div>
    </>
  );
};

export default MapButton;
