import { useEffect, useRef } from "react";
import { createLocationIcon, createToiletIcon } from "./mapIcons"; // OUR CUSTOM ICONS
import useGeolocation from "../../hooks/useGeolocation"; // OUR LIVE LOCATION
import L from "leaflet"; // METHOD FROM OUR MAP LIBRARY THAT I FOUND ON NPM

const Map = () => {
  const { position } = useGeolocation();
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // MAP SETTINGS
    // ----------------------------------------------
    const map = L.map("map", {
      attributionControl: false, // Turn off Watermark on right bottom
      zoomControl: false, // Turn off Zoom Buttons + and -
    }).setView([56.492725, 10.031952], 6);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
      },
    ).addTo(map);
    mapRef.current = map; // this need explanation
    L.marker([50, 1], { icon: createToiletIcon() }).addTo(map);
    return () => {
      map.remove();
    };
  }, []);
  //  ----------------------------------------------

  // MARKER SECTION (IT SHOWS YOUR LOCATION)
  // ----------------------------------------------
  // Add marker when position updates
  useEffect(() => {
    if (position && mapRef.current) {
      const { lat, lng } = position;

      const locationIcon = createLocationIcon();

      // REMOVES OLD MARKER (if exist)
      if (markerRef.current) {
        mapRef.current.removeLayer(markerRef.current);
      }

      // ADD MARKER TO THE CURRENT POSITION
      markerRef.current = L.marker([lat, lng], { icon: locationIcon }).addTo(
        mapRef.current,
      );

      // CENTER MAP ON OUR LOCATION
      mapRef.current.setView([lat, lng], 18);
    }
  }, [position]);
  // ----------------------------------------------

  // RETURN SECTION
  // ----------------------------------------------
  // HERE WE RETURN MAP WITH OUR CUSTOM STYLING
  return (
    <div className="relative w-full h-[700px]">
      <div id="map" className="h-full w-full"></div>
    </div>
  );
  //  ----------------------------------------------
};

export default Map;
