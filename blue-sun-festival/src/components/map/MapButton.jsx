import QueueIcon from "../icons/QueueIcon";
import ShowMeIcon from "../icons/ShowMeIcon";

const MapButton = () => {
  const styling = "absolute bottom-[1%] z-10 m-[2px]";
  return (
    <>
      <div className={`${styling} left-[2%]`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
        >
          <g filter="url(#filter0_d_486_1099)">
            <circle
              cx="34"
              cy="34"
              r="30"
              fill="#ffffff"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>
          <ShowMeIcon />
        </svg>
      </div>
      <div className={`${styling} right-[2%]`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
        >
          <g filter="url(#filter0_d_486_1099)">
            <circle
              cx="34"
              cy="34"
              r="30"
              fill="#ffffff"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </g>
          <QueueIcon />
        </svg>
      </div>
    </>
  );
};

export default MapButton;
