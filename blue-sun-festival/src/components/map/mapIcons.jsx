import { FaLocationArrow } from "react-icons/fa";
import { FaToiletsPortable } from "react-icons/fa6";
import { renderToString } from "react-dom/server";
import L from "leaflet";

export const createToiletIcon = () =>
  L.divIcon({
    className: "",
    html: renderToString(<FaToiletsPortable size={24} />),
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

export const createLocationIcon = () =>
  L.divIcon({
    className: "",
    html: renderToString(<FaLocationArrow size={20} />),
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
