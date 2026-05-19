import { renderToString } from "react-dom/server";
import L from "leaflet";
import MarkerIcon from "../icons/MarkerIcon";
import MyLocationIcon from "../icons/MyLocationIcon";

export const createLocationIcon = ({ name = "ME" } = {}) =>
  L.divIcon({
    className: "",
    html: renderToString(
      <div className="flex flex-col items-center">
        <MyLocationIcon />
        <span className="text-[16px] text-[#22428F] font-[900] [text-shadow:#FFF]">
          {name}
        </span>
      </div>,
    ),
    iconSize: [40, 58],
    iconAnchor: [20, 52],
  });

export const createMarkerIcon = () =>
  L.divIcon({
    className: "",
    html: renderToString(<MarkerIcon />),
    iconSize: [26, 35],
    iconAnchor: [13, 35],
  });

export const createAvatarIcon = (avatarPath, name = "") =>
  L.divIcon({
    className: "",
    html: renderToString(
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="90"
          viewBox="0 0 81 90"
          fill="none"
        >
          <path
            d="M52.5063 78.0568C52.5063 78.0568 44.2063 85.1568 41.0063 89.5568C37.5064 85.0568 28.5064 78.0568 28.5064 78.0568C28.5064 78.0568 -0.493592 68.5568 0.00639157 42.0568C0.506375 15.5568 18.8393 -1.10156 42.0063 0.0567562C64.0977 1.16129 78.5064 18.0568 80.0064 42.0568C81.5064 66.0568 52.5063 78.0568 52.5063 78.0568Z"
            fill="#22428F"
          />
          <clipPath id="avatarClip">
            <circle cx="40.5" cy="38" r="24" />
          </clipPath>
          <image
            href={avatarPath}
            x="16.5"
            y="14"
            width="48"
            height="48"
            clipPath="url(#avatarClip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
        {name && (
          <span className="text-[17px] text-[#22428F] font-[800]">{name}</span>
        )}
      </div>,
    ),
    iconSize: [81, 90],
    iconAnchor: [40.5, 90],
  });
