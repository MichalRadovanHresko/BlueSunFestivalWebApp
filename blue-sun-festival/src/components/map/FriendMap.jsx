import L from "leaflet";
import festivalMap from "../../assets/map.png";
import { useEffect, useRef } from "react";
import { createLocationIcon } from "./mapIcons";

const FriendMap = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    const map = L.map("map-friends", {
      attributionControl: false,
      zoomControl: false,
      maxBoundsViscosity: 1.0,
    }).setView([56.121183, 10.160064], 17);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        minZoom: 17,
      },
    ).addTo(map);
    mapRef.current = map;

    const festivalBounds = L.latLngBounds(
      [56.119, 10.1565],
      [56.1242, 10.1637],
    );

    L.imageOverlay(festivalMap, festivalBounds, {}).addTo(map);
    map.setMaxBounds(festivalBounds);

    L.marker([56.1215, 10.161], {
      icon: createLocationIcon({ name: "NINA" }),
    }).addTo(map);
    L.marker([56.121, 10.159], {
      icon: createLocationIcon({ name: "ANN" }),
    }).addTo(map);
    L.marker([56.122, 10.15895], {
      icon: createLocationIcon({ name: "IVAN" }),
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[66vh]">
      <div id="map-friends" className="absolute z-0 h-full w-full"></div>
    </div>
  );
};

export default FriendMap;
