import L from "leaflet";
import { createMarkerIcon } from "../mapIcons";

export const createLayerFromMarkers = (markers, onMarkerClick, type = "default") => {
  const layerMarkers = markers.map((markerData) => {
    const { position } = markerData;
    const marker = L.marker(position, { icon: createMarkerIcon(type) });

    if (onMarkerClick) {
      marker.on("click", () => onMarkerClick(markerData));
    }

    return marker;
  });

  return L.layerGroup(layerMarkers);
};
