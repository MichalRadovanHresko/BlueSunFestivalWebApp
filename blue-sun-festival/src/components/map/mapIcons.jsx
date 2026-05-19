import { renderToString } from "react-dom/server";
import L from "leaflet";
import MarkerIcon from "../icons/MarkerIcon";
import MyLocationIcon from "../icons/MyLocationIcon";

export const createLocationIcon = ({ name }) =>
  L.divIcon({
    className: "",
    html: renderToString(
      <div className="flex flex-col items-center">
        <MyLocationIcon />
        <span className="text-[16px] text-[#22428F] font-[400] [text-shadow:#FFF]">
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
