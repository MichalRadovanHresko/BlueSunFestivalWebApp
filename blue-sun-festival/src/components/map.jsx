import { useEffect } from "react";
import L from "leaflet";

const Map = () => {
  useEffect(() => {
    const map = L.map("map", {
      attributionControl: false,
      zoomControl: false,
    }).setView([56, 10], 6);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      },
    ).addTo(map);
    return () => {
      map.remove();
    };
  }, []);
  return <div id="map" className="h-[700px] w-full"></div>;
};

export default Map;
