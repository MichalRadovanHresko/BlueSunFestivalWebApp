import QueueIcon from "../icons/QueueIcon";
import ShowMeIcon from "../icons/ShowMeIcon";

const MapButton = () => {
  const styling =
    "absolute bottom-[1%] bg-[white] rounded-[50%] h-[30px] w-[30px] p-[15px] z-10 m-[2px]";
  return (
    <>
      <div className={`${styling} left-[2%]`}>
        <ShowMeIcon />
      </div>
      <div className={`${styling} right-[2%]`}>
        <QueueIcon />
      </div>
    </>
  );
};

export default MapButton;
