import { FaLocationArrow } from "react-icons/fa"; // Location icon
import { FaToiletsPortable } from "react-icons/fa6"; // Toilet icon
import { IoFastFoodSharp } from "react-icons/io5"; // Food icon
import { MdSpeaker } from "react-icons/md"; // Stage icon
import { renderToString } from "react-dom/server";
import L from "leaflet";

export const createLocationIcon = () =>
  L.divIcon({
    className: "",
    html: renderToString(<FaLocationArrow size={20} />),
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

export const createToiletIcon = () =>
  L.divIcon({
    className: "",
    html: renderToString(<FaToiletsPortable size={24} />),
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

export const createFoodLocation = () =>
  L.divIcon({
    className: "",
    html: renderToString(<IoFastFoodSharp size={20} />),
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

export const createStageIcon = () =>
  L.divIcon({
    className: "",
    html: renderToString(<MdSpeaker size={20} />),
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
