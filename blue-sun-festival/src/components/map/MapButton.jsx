import Circle from "../icons/Circle";
import QueueIcon from "../icons/QueueIcon";
import ShowMeIcon from "../icons/ShowMeIcon";

const MapButton = () => {
  const styling = "absolute bottom-[1%] z-10 m-[2px]";
  return (
    <>
      <div className={`${styling} left-[2%]`}>
        <Circle>
          <ShowMeIcon />
        </Circle>
      </div>
      <div className={`${styling} right-[2%]`}>
        <Circle>
          <QueueIcon />
        </Circle>
      </div>
    </>
  );
};

export default MapButton;
